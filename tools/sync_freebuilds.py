"""Sync the small-projects lists on /projects/ with the PUBLIC repos of the AI-coding orgs:

  * OpenCode Small Projects  <- github.com/OpenCode-Projects-AtlasRearden8  (items.json "freebuilds")
  * Kilo Small Projects      <- github.com/Kilo-Projects-AtlasRearden8      (items.json "kilobuilds")

What it does for each org (safe to run any time; it only commits when something changed):
  * Appends a card to its list in data/items.json for every PUBLIC repo not already listed.
    Existing entries are never rewritten, so hand edits stay. Guides go after the last guide,
    apps/CLIs after the last app.
  * For a new repo with a top-level index.html it turns on GitHub Pages (free for public repos)
    and adds an "Open it" button once the Pages URL answers 200. Existing entries whose only link
    is the GitHub repo also get "Open it" added once their Pages site is live.
  * Re-renders the plain-HTML (no-JavaScript) index between the <marker>:start/<marker>:end comments
    inside that org's card in projects/index.html, plus that card's "Show all N projects" count.
  * Commits as Dylan Asdale and pushes to main.

Run from anywhere:  python3 tools/sync_freebuilds.py [--org opencode|kilo|all] [--dry-run] [--no-push] [--no-wait]
  --org      which org to sync (default: all; FREEBUILDS_ORG=<GitHub org name> also selects one)
  --no-wait  turn Pages on for new repos but do not wait for them to go live (for big first imports);
             a later run adds their "Open it" buttons
Needs the GitHub CLI (gh), signed in. Also run every 6 hours by .github/workflows/sync-projects.yml.
"""
import html, json, os, re, subprocess, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ITEMS = ROOT / "data" / "items.json"
PAGES = [ROOT / "projects" / "index.html"]
LOCAL_LAB = Path("/workspace/opencode-lab")
IDENT = {"GIT_AUTHOR_NAME": "Dylan Asdale", "GIT_AUTHOR_EMAIL": "dylanasdale@users.noreply.github.com",
         "GIT_COMMITTER_NAME": "Dylan Asdale", "GIT_COMMITTER_EMAIL": "dylanasdale@users.noreply.github.com"}
GUIDE_TYPES = ("Guide", "Directory")
SOURCES = {
    "opencode": {"org": "OpenCode-Projects-AtlasRearden8", "list": "freebuilds", "card": "opencode-small-projects",
                 "built": "Built with OpenCode", "name": "OpenCode Small Projects"},
    "kilo": {"org": "Kilo-Projects-AtlasRearden8", "list": "kilobuilds", "card": "kilo-small-projects",
             "built": "Built with Kilo Code", "name": "Kilo Small Projects"},
}
DRY = "--dry-run" in sys.argv
NO_PUSH = "--no-push" in sys.argv
NO_WAIT = "--no-wait" in sys.argv
e = lambda s: html.escape(s, quote=True)


def log(msg):
    print(time.strftime("%F %T"), "sync_freebuilds:", msg, flush=True)


def run(*cmd, check=True, env=None):
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, encoding="utf-8",
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


def readme_text(org, name):
    p = LOCAL_LAB / name / "README.md"
    if org == SOURCES["opencode"]["org"] and p.is_file():
        return p.read_text(encoding="utf-8", errors="replace")
    try:
        return run("gh", "api", f"repos/{org}/{name}/readme", "-H", "Accept: application/vnd.github.raw")
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


def pages_url(org, name):
    return f"https://{org.lower()}.github.io/{name}/"


def ensure_pages(org, name):
    """Turn on Pages (main, root) for a public repo with a top-level index.html. Returns True if Pages is on."""
    info = gh_json("api", f"repos/{org}/{name}", "--jq", "{has_pages, visibility}")
    if info["visibility"] != "public":
        return False
    if info["has_pages"]:
        return True
    if DRY:
        return False
    r = subprocess.run(["gh", "api", "-X", "POST", f"repos/{org}/{name}/pages",
                        "-f", "source[branch]=main", "-f", "source[path]=/"], capture_output=True, text=True)
    if r.returncode:
        log(f"could not enable Pages for {org}/{name}: {r.stderr.strip()[:200]}")
        return False
    log(f"enabled GitHub Pages for {org}/{name}")
    return True


def wait_live(url, minutes=6):
    for _ in range(minutes * 4):
        if status(url) == 200:
            return True
        time.sleep(15)
    return False


def write_list(key, items):
    """Rewrite only one list in items.json, leaving the hand formatting of other lists alone."""
    src = ITEMS.read_text(encoding="utf-8")
    body = json.dumps(items, indent=2, ensure_ascii=False).replace("\n", "\n  ")
    m = re.search(rf'"{key}"\s*:\s*', src)
    if m:
        _, end = json.JSONDecoder().raw_decode(src, m.end())
        new = src[:m.end()] + body + src[end:]
    else:  # add the list just before "links"
        m = re.search(r'\n  "links"\s*:', src)
        new = src[:m.start()] + f'\n  "{key}": ' + body + "," + src[m.start():]
    json.loads(new)  # must still be valid
    ITEMS.write_text(new, encoding="utf-8", newline="\n")


def row_html(it):
    """One compact line in a small-projects index (mirrors subList() in assets/site.js)."""
    links = it.get("links") or []
    main = next((l for l in links if l.get("primary")), links[0] if links else None)
    title = e(it["title"])
    if main:
        ext = ' rel="noopener"' if main["href"].startswith("http") else ""
        title = f'<a href="{e(main["href"])}"{ext}>{title}</a>'
    kind = it.get("meta", "").split(" ·")[0]
    return f"<li>{title}" + (f'<span class="meta">{e(kind)}</span>' if kind else "") + "</li>"


def render_fallbacks(src_cfg, items):
    """Refresh the no-JS list and the "Show all N projects" count inside this org's card only."""
    key, card = src_cfg["list"], src_cfg["card"]
    changed = []
    for path in PAGES:
        if not path.is_file():
            continue
        src = path.read_text(encoding="utf-8")
        rows = "\n".join(row_html(i) for i in items)
        new = re.sub(rf"(<!-- {key}:start -->\n?).*?(<!-- {key}:end -->)",
                     lambda m: m.group(1) + rows + "\n" + m.group(2), src, flags=re.S)
        new = re.sub(rf'(id="{card}".*?Show all )\d+( projects)', rf"\g<1>{len(items)}\g<2>", new, count=1, flags=re.S)
        if new != src:
            changed.append(path)
            if not DRY:
                path.write_text(new, encoding="utf-8", newline="\n")
    return changed


def sync(src_cfg):
    """Sync one org. Returns (added, upgraded, changed_pages)."""
    org, key = src_cfg["org"], src_cfg["list"]
    repos = gh_json("repo", "list", org, "--limit", "1000", "--json", "name,visibility,url,createdAt")
    repos = sorted((r for r in repos if r["visibility"] == "PUBLIC"), key=lambda r: r["createdAt"])
    data = json.loads(ITEMS.read_text(encoding="utf-8"))
    items = data.setdefault(key, [])
    known = {i["id"] for i in items}
    added, upgraded = [], []

    for r in repos:
        name = r["name"]
        if name in known:
            continue
        root = gh_json("api", f"repos/{org}/{name}/contents/", "--jq", "[.[].name]") or []
        has_index = "index.html" in root
        title, sub, kind = describe(name, readme_text(org, name), has_index)
        it = {"id": name, "tag": "Free", "free": True, "title": title}
        if sub:
            it["subtitle"] = sub
        it["meta"] = f"{kind} · Free · {src_cfg['built']}"
        links = [{"label": "View on GitHub", "href": r["url"], "primary": True}]
        if has_index and ensure_pages(org, name) and not NO_WAIT and wait_live(pages_url(org, name)):
            links = [{"label": "Open it", "href": pages_url(org, name), "primary": True},
                     {"label": "View on GitHub", "href": r["url"]}]
        it["links"] = links
        pos = len(items)
        if kind in GUIDE_TYPES:
            gi = [n for n, x in enumerate(items) if x.get("meta", "").split(" ·")[0] in GUIDE_TYPES]
            pos = gi[-1] + 1 if gi else 0
        items.insert(pos, it)
        added.append(name)

    public = {r["name"]: r["url"] for r in repos}
    for it in items:  # add "Open it" to GitHub-only cards once their Pages site is live
        links = it.get("links", [])
        if it["id"] in public and len(links) == 1 and links[0]["href"] == public[it["id"]] and it["id"] not in added:
            if status(pages_url(org, it["id"])) == 200:  # a plain HTTP check: no API rate limit
                it["links"] = [{"label": "Open it", "href": pages_url(org, it["id"]), "primary": True},
                               {"label": "View on GitHub", "href": links[0]["href"]}]
                upgraded.append(it["id"])

    if added or upgraded:
        log(f"{src_cfg['name']}: added {len(added)} ({', '.join(added[:8])}{'…' if len(added) > 8 else ''}); "
            f"Open-it links added {len(upgraded)}")
        if not DRY:
            write_list(key, items)
    changed = render_fallbacks(src_cfg, items)
    return added, upgraded, changed


def pick_sources():
    if "--org" in sys.argv:
        want = sys.argv[sys.argv.index("--org") + 1].lower()
        return list(SOURCES.values()) if want == "all" else [SOURCES[want]]
    env_org = os.environ.get("FREEBUILDS_ORG")
    if env_org:
        return [s for s in SOURCES.values() if s["org"].lower() == env_org.lower()]
    return list(SOURCES.values())


def main():
    try:
        import fcntl  # POSIX only: stops two publishers from syncing at once
        lock = open("/tmp/sync_freebuilds.lock", "w")
        fcntl.flock(lock, fcntl.LOCK_EX)
    except ImportError:
        pass
    if run("git", "config", "user.email").strip() != IDENT["GIT_AUTHOR_EMAIL"]:
        sys.exit("git user.email in the hub repo is not dylanasdale@users.noreply.github.com; stopping.")
    if not DRY and not NO_PUSH:
        run("git", "pull", "-q", "--rebase", "--autostash", "origin", "main", env=IDENT)

    notes, any_change = [], False
    for src_cfg in pick_sources():
        added, upgraded, changed = sync(src_cfg)
        if added:
            notes.append(f"{src_cfg['name']}: add {len(added)}" if len(added) > 8 else f"{src_cfg['name']}: add {', '.join(added)}")
        elif upgraded or changed:
            notes.append(f"{src_cfg['name']}: refresh list")
        any_change |= bool(added or upgraded or changed)

    if DRY:
        log(f"dry run: {'; '.join(notes) or 'nothing to change'}"); return
    if not any_change:
        log("nothing to change"); return
    paths = ["data/items.json"] + [str(p.relative_to(ROOT)) for p in PAGES]
    run("git", "add", "--", *paths)
    if not run("git", "diff", "--cached", "--name-only").strip():
        log("nothing staged"); return
    run("git", "commit", "-q", "-m", "; ".join(notes), "--", *paths, env=IDENT)
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
