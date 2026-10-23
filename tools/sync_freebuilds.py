"""Sync the "freebuilds" shelf with the PUBLIC repos in the OpenCode-Projects-AtlasRearden8 org.

What it does (safe to run any time; it only commits when something changed):
  * Appends a card to data/items.json -> "freebuilds" for every PUBLIC repo not already listed.
    Existing entries are never rewritten, so hand edits stay. Guides go after the last guide,
    apps/CLIs after the last app.
  * For a new repo with a top-level index.html it turns on GitHub Pages (free for public repos)
    and adds an "Open it" button once the Pages URL answers 200. Existing entries whose only link
    is the GitHub repo also get "Open it" added once their Pages site is live.
  * Re-renders the plain-HTML (no-JavaScript) copies between the freebuilds markers in
    free-builds/index.html (all cards) and index.html (first 3).
  * Commits as Dylan Asdale and pushes to main.

Run from anywhere:  python3 tools/sync_freebuilds.py [--dry-run] [--no-push]
Needs the GitHub CLI (gh), already signed in.
"""
import fcntl, html, json, os, re, subprocess, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ITEMS = ROOT / "data" / "items.json"
PAGES = [(ROOT / "free-builds" / "index.html", None), (ROOT / "index.html", 3)]
ORG = os.environ.get("FREEBUILDS_ORG", "OpenCode-Projects-AtlasRearden8")
LOCAL_LAB = Path("/workspace/opencode-lab")
IDENT = {"GIT_AUTHOR_NAME": "Dylan Asdale", "GIT_AUTHOR_EMAIL": "dylanasdale@users.noreply.github.com",
         "GIT_COMMITTER_NAME": "Dylan Asdale", "GIT_COMMITTER_EMAIL": "dylanasdale@users.noreply.github.com"}
GUIDE_TYPES = ("Guide", "Directory")
DRY = "--dry-run" in sys.argv
NO_PUSH = "--no-push" in sys.argv
e = lambda s: html.escape(s, quote=True)


def log(msg):
    print(time.strftime("%F %T"), "sync_freebuilds:", msg, flush=True)


def run(*cmd, check=True, env=None):
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True,
                       env={**os.environ, **(env or {})})
    if check and r.returncode:
        raise RuntimeError(f"{' '.join(cmd)} failed: {r.stderr.strip()}")
    return r.stdout


def gh_json(*args):
    return json.loads(run("gh", *args) or "null")


def status(url):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, method="GET"), timeout=20) as r:
            return r.status
    except Exception as ex:  # HTTPError has .code
        return getattr(ex, "code", 0)


def readme_text(name):
    p = LOCAL_LAB / name / "README.md"
    if p.is_file():
        return p.read_text(encoding="utf-8", errors="replace")
    try:
        return run("gh", "api", f"repos/{ORG}/{name}/readme", "-H", "Accept: application/vnd.github.raw")
    except RuntimeError:
        return ""


def plain(md):
    md = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", md)
    md = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", md)
    md = re.sub(r"[*_`]+", "", md)
    return re.sub(r"\s+", " ", md).strip()


def describe(name, readme, has_index):
    title = next((plain(l[2:]) for l in readme.splitlines() if l.startswith("# ")), None) \
        or name.replace("-", " ").title()
    para = ""
    for block in re.split(r"\n\s*\n", readme):
        b = block.strip()
        if not b or b.startswith(("#", "!", "<", "|", "-", "*", "`", ">", "[")):
            continue
        p = plain(b)
        if "Asdale Dynamics" in p or re.match(r"(Made|Built|Written|Published|Maintained|Part of|Requires|Install|Run|Note)\b", p):
            continue  # skip the publisher/attribution blurb
        para = p; break
    sub = re.split(r"(?<=[.!?])\s", para, maxsplit=1)[0] if para else ""
    if len(sub) > 220:
        sub = sub[:217].rsplit(" ", 1)[0] + "…"
    t, text = title.lower(), (title + " " + para).lower()
    guide_words = r"\b(handbook|manual|guide|book|course|tutorial|kit)\b"
    if re.search(guide_words, t):
        kind = "Guide"
    elif re.search(r"command-line|command line|\bcli\b", text) or name.endswith("-cli"):
        kind = "CLI"
    elif "directory" in text and has_index:
        kind = "Directory"
    elif has_index or re.search(r"\b(app|tool|planner|tracker|maker|calculator|logger)\b", text):
        kind = "App"
    elif re.search(guide_words, text):
        kind = "Guide"
    else:
        kind = "App"
    return title, sub, kind


def pages_url(name):
    return f"https://{ORG.lower()}.github.io/{name}/"


def ensure_pages(name):
    """Turn on Pages (main, root) for a public repo with a top-level index.html. Returns True if Pages is on."""
    info = gh_json("api", f"repos/{ORG}/{name}", "--jq", "{has_pages, visibility}")
    if info["visibility"] != "public":
        return False
    if info["has_pages"]:
        return True
    if DRY:
        return False
    r = subprocess.run(["gh", "api", "-X", "POST", f"repos/{ORG}/{name}/pages",
                        "-f", "source[branch]=main", "-f", "source[path]=/"], capture_output=True, text=True)
    if r.returncode:
        log(f"could not enable Pages for {name}: {r.stderr.strip()[:200]}")
        return False
    log(f"enabled GitHub Pages for {name}")
    return True


def wait_live(url, minutes=6):
    for _ in range(minutes * 4):
        if status(url) == 200:
            return True
        time.sleep(15)
    return False


def write_freebuilds(items):
    """Rewrite only the "freebuilds" list in items.json, leaving the hand formatting of other lists alone."""
    src = ITEMS.read_text(encoding="utf-8")
    body = json.dumps(items, indent=2, ensure_ascii=False).replace("\n", "\n  ")
    m = re.search(r'"freebuilds"\s*:\s*', src)
    if m:
        _, end = json.JSONDecoder().raw_decode(src, m.end())
        new = src[:m.end()] + body + src[end:]
    else:  # add the list just before "links"
        m = re.search(r'\n  "links"\s*:', src)
        new = src[:m.start()] + '\n  "freebuilds": ' + body + "," + src[m.start():]
    json.loads(new)  # must still be valid
    ITEMS.write_text(new, encoding="utf-8")


def card_html(it):
    out = [f'<li class="item no-img" id="{e(it["id"])}"><div class="item-text">']
    if it.get("tag"):
        out.append(f'<p class="tag{" free" if it.get("free") else ""}">{e(it["tag"])}</p>')
    out.append(f'<h3 class="item-title">{e(it["title"])}</h3>')
    if it.get("subtitle"):
        out.append(f'<p class="sub">{e(it["subtitle"])}</p>')
    if it.get("meta"):
        out.append(f'<p class="meta">{e(it["meta"])}</p>')
    if it.get("links"):
        out.append('<div class="actions">')
        for l in it["links"]:
            ext = ' rel="noopener"' if l["href"].startswith("http") else ""
            out.append(f'<a class="btn{" primary" if l.get("primary") else ""}" href="{e(l["href"])}"{ext}>{e(l["label"])}</a>')
        out.append("</div>")
    out.append("</div></li>")
    return "".join(out)


def render_fallbacks(items):
    changed = []
    for path, limit in PAGES:
        if not path.is_file():
            continue
        src = path.read_text(encoding="utf-8")
        cards = "\n".join(card_html(i) for i in (items[:limit] if limit else items))
        new = re.sub(r"(<!-- freebuilds:start -->\n?).*?(<!-- freebuilds:end -->)",
                     lambda m: m.group(1) + cards + "\n" + m.group(2), src, flags=re.S)
        if new != src:
            changed.append(path)
            if not DRY:
                path.write_text(new, encoding="utf-8")
    return changed


def main():
    lock = open("/tmp/sync_freebuilds.lock", "w")
    fcntl.flock(lock, fcntl.LOCK_EX)
    if run("git", "config", "user.email").strip() != IDENT["GIT_AUTHOR_EMAIL"]:
        sys.exit("git user.email in the hub repo is not dylanasdale@users.noreply.github.com; stopping.")
    if not DRY and not NO_PUSH:
        run("git", "pull", "-q", "--rebase", "--autostash", "origin", "main", env=IDENT)

    repos = gh_json("repo", "list", ORG, "--limit", "500", "--json", "name,visibility,url,createdAt")
    repos = sorted((r for r in repos if r["visibility"] == "PUBLIC"), key=lambda r: r["createdAt"])
    data = json.loads(ITEMS.read_text(encoding="utf-8"))
    items = data.setdefault("freebuilds", [])
    known = {i["id"] for i in items}
    added, upgraded = [], []

    for r in repos:
        name = r["name"]
        if name in known:
            continue
        root = gh_json("api", f"repos/{ORG}/{name}/contents/", "--jq", "[.[].name]") or []
        has_index = "index.html" in root
        title, sub, kind = describe(name, readme_text(name), has_index)
        it = {"id": name, "tag": "Free", "free": True, "title": title}
        if sub:
            it["subtitle"] = sub
        it["meta"] = f"{kind} · Free · Built with OpenCode"
        links = [{"label": "View on GitHub", "href": r["url"], "primary": True}]
        if has_index and ensure_pages(name) and wait_live(pages_url(name)):
            links = [{"label": "Open it", "href": pages_url(name), "primary": True},
                     {"label": "View on GitHub", "href": r["url"]}]
        it["links"] = links
        is_guide = kind in GUIDE_TYPES
        pos = len(items)
        if is_guide:
            gi = [n for n, x in enumerate(items) if x.get("meta", "").split(" ·")[0] in GUIDE_TYPES]
            pos = gi[-1] + 1 if gi else 0
        items.insert(pos, it)
        added.append(name)

    public = {r["name"]: r["url"] for r in repos}
    for it in items:  # add "Open it" to GitHub-only cards once their Pages site is live
        links = it.get("links", [])
        if it["id"] in public and len(links) == 1 and links[0]["href"] == public[it["id"]] and it["id"] not in added:
            info = gh_json("api", f"repos/{ORG}/{it['id']}", "--jq", "{has_pages}")
            if info["has_pages"] and status(pages_url(it["id"])) == 200:
                it["links"] = [{"label": "Open it", "href": pages_url(it["id"]), "primary": True},
                               {"label": "View on GitHub", "href": links[0]["href"]}]
                upgraded.append(it["id"])

    if added or upgraded:
        log(f"added {added or 'none'}; Open-it links added {upgraded or 'none'}")
        if not DRY:
            write_freebuilds(items)
    changed = render_fallbacks(items)
    if DRY:
        log(f"dry run: would add {added}, upgrade {upgraded}, rewrite {[str(p.relative_to(ROOT)) for p in changed]}")
        return
    if not (added or upgraded or changed):
        log("nothing to change"); return
    paths = ["data/items.json"] + [str(p.relative_to(ROOT)) for p, _ in PAGES]
    run("git", "add", "--", *paths)
    if not run("git", "diff", "--cached", "--name-only").strip():
        log("nothing staged"); return
    msg = "Free Builds: add " + ", ".join(added) if added else "Free Builds: refresh cards"
    run("git", "commit", "-q", "-m", msg, "--", *paths, env=IDENT)
    if NO_PUSH:
        log("committed (not pushed)"); return
    for _ in range(3):
        if subprocess.run(["git", "push", "-q", "origin", "main"], cwd=ROOT).returncode == 0:
            log("pushed"); return
        run("git", "pull", "-q", "--rebase", "--autostash", "origin", "main", env=IDENT)
    raise RuntimeError("push failed three times")


if __name__ == "__main__":
    try:
        main()
    except Exception as ex:
        log(f"ERROR {ex}"); sys.exit(1)
