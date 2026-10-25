"""Build the "Every AWS Service on the Free Plan" guide from data/aws-free-plan-services.json.

Outputs:
  assets/pdf/aws-free-plan-services.pdf          print-ready US Letter PDF
  assets/img/aws-guides/free-plan-services.webp  cover thumbnail for the site
  free-guides/aws-guides/index.html              service list between the aws-services markers

Run from the repo root:  python tools/build_aws_guide.py
Needs Google Chrome (or Edge) and Pillow.
"""
import html, json, os, re, shutil, subprocess, sys, tempfile
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "aws-free-plan-services.json"
PDF_OUT = ROOT / "assets" / "pdf" / "aws-free-plan-services.pdf"
COVER_OUT = ROOT / "assets" / "img" / "aws-guides" / "free-plan-services.webp"
PAGE = ROOT / "free-guides" / "aws-guides" / "index.html"
FONT_DIR = (ROOT / "assets" / "fonts").as_uri()

BROWSERS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "google-chrome", "chromium",
]

e = html.escape


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def edition(checked):
    d = date.fromisoformat(checked)
    return f"{d:%B} {d.year}"


def long_date(checked):
    d = date.fromisoformat(checked)
    return f"{d:%B} {d.day}, {d.year}"


# ----------------------------------------------------------------- print HTML
PRINT_CSS = """
@font-face { font-family: 'Bluu Next'; src: url(FONTS/BluuNext-Bold.woff2) format('woff2'); font-weight: 700; }
@font-face { font-family: 'Bluu Next'; src: url(FONTS/BluuNext-Bolditalic.woff2) format('woff2'); font-weight: 700; font-style: italic; }
@page { size: letter; margin: 0.7in 0.75in 0.75in;
  @bottom-left { content: "Every AWS Service on the Free Plan"; font: 500 7.5pt 'Hanken Grotesk', sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #8a7f86; }
  @bottom-right { content: counter(page); font: 600 8pt 'Hanken Grotesk', sans-serif; color: #8a7f86; } }
@page cover { margin: 0; @bottom-left { content: none; } @bottom-right { content: none; } }
:root { --ink: #16121a; --ink-2: #4c4450; --ink-3: #8a7f86; --rule: #e6dfe3; --pink: #e0177f; --pink-bg: #fdeef6; --display: 'Bluu Next', Georgia, serif; --body: 'Hanken Grotesk', 'Segoe UI', sans-serif; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; color: var(--ink); font: 400 9.6pt/1.5 var(--body); }
h1, h2, h3 { margin: 0; }
p { margin: 0; }

/* cover */
.cover { page: cover; position: relative; width: 8.5in; height: 11in; padding: 0.6in 0.75in 0.55in; display: flex; flex-direction: column; break-after: page; overflow: hidden; }
.cover-top { display: flex; justify-content: space-between; font: 600 7.5pt var(--body); letter-spacing: .24em; text-transform: uppercase; }
.cover-top .vol { color: var(--pink); }
.cover-art { flex: 1; display: flex; align-items: center; justify-content: flex-end; margin: 0.25in -0.2in 0.2in 0; }
.cover-art svg { width: 5.4in; height: auto; }
.badges { display: flex; gap: 8pt; margin-bottom: 14pt; }
.badge { padding: 4pt 9pt; border: 1px solid var(--ink); border-radius: 4pt; font: 600 7pt var(--body); letter-spacing: .2em; text-transform: uppercase; }
.badge.pink { border-color: var(--pink); color: var(--pink); }
.cover h1 { font: 700 46pt/1 var(--display); letter-spacing: -.01em; max-width: 6.4in; }
.cover h1 em { color: var(--pink); }
.cover .lede { margin-top: 14pt; max-width: 5.2in; font-size: 13.5pt; line-height: 1.4; color: var(--ink-2); }
.cover-foot { margin-top: 26pt; padding-top: 10pt; border-top: 1px solid var(--rule); display: flex; gap: 14pt; font-size: 7.5pt; color: var(--ink-3); }
.cover-foot span + span::before { content: "•"; margin-right: 14pt; }

/* intro */
.kicker { font: 600 7.5pt var(--body); letter-spacing: .22em; text-transform: uppercase; color: var(--pink); }
.intro h2 { margin: 6pt 0 12pt; font: 700 26pt/1.05 var(--display); }
.intro .lead { font-size: 11pt; line-height: 1.55; color: var(--ink-2); max-width: 6in; }
.facts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10pt; margin: 18pt 0 20pt; }
.fact { padding: 11pt 13pt; border-radius: 8pt; background: var(--pink-bg); }
.fact b { display: block; font: 700 15pt/1.15 var(--display); color: var(--pink); margin-bottom: 3pt; }
.fact span { font-size: 8.8pt; color: var(--ink-2); }
.howto { margin: 0 0 18pt; padding-left: 15pt; color: var(--ink-2); font-size: 9.2pt; }
.howto li { margin-bottom: 4pt; }
.howto b { color: var(--ink); }
.toc-title { margin: 6pt 0 8pt; font: 700 15pt var(--display); }
.toc { columns: 2; column-gap: 24pt; padding: 0; margin: 0; list-style: none; }
.toc li { display: flex; justify-content: space-between; gap: 8pt; padding: 5pt 0; border-bottom: 1px solid var(--rule); break-inside: avoid; font-size: 9.4pt; }
.toc li span { color: var(--ink-3); font-variant-numeric: tabular-nums; }

/* categories */
.cat { break-before: page; }
.cat-head { display: flex; justify-content: space-between; align-items: end; gap: 12pt; padding-bottom: 9pt; margin-bottom: 12pt; border-bottom: 2px solid var(--ink); }
.cat-head h2 { font: 700 24pt/1.05 var(--display); }
.cat-head .count { flex: none; font: 600 7.5pt var(--body); letter-spacing: .2em; text-transform: uppercase; color: var(--pink); }
.cat-blurb { margin: -4pt 0 14pt; color: var(--ink-2); font-size: 10.5pt; }
.svc { display: grid; grid-template-columns: 1.85in 1fr; gap: 14pt; padding: 9pt 0; border-bottom: 1px solid var(--rule); break-inside: avoid; }
.svc h3 { font: 700 10.2pt/1.3 var(--body); }
.svc p { color: var(--ink-2); }
.svc .note { margin-top: 4pt; font-size: 8.4pt; color: var(--ink); }
.svc .note b { color: var(--pink); font-weight: 600; letter-spacing: .04em; }

/* back */
.back { break-before: page; }
.back h2 { margin: 6pt 0 10pt; font: 700 20pt var(--display); }
.back p { margin-bottom: 9pt; color: var(--ink-2); max-width: 6in; }
.back a { color: var(--pink); }
"""


def cover_art(categories):
    """One dot per service, one row per category: a quiet map of the whole guide."""
    rows, dots = [], []
    gap, r = 22, 6.2
    for i, cat in enumerate(categories):
        y = 20 + i * 26
        n = len(cat["services"])
        x0 = 520 - n * gap  # right-aligned rows
        for j in range(n):
            x = x0 + j * gap + 11
            op = 0.35 + 0.65 * ((j + 1) / n)
            dots.append(f'<circle cx="{x:.1f}" cy="{y}" r="{r}" fill="#e0177f" fill-opacity="{op:.2f}"/>')
        rows.append(f'<line x1="{x0 + 11}" y1="{y}" x2="{520 - gap + 11}" y2="{y}" stroke="#e0177f" stroke-opacity=".18" stroke-width="1.2"/>')
    h = 20 + len(categories) * 26
    return f'<svg viewBox="0 0 540 {h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">{"".join(rows)}{"".join(dots)}</svg>'


def build_print_html(d):
    cats = d["categories"]
    total = sum(len(c["services"]) for c in cats)
    ed = edition(d["checked"])
    out = [f"<!doctype html><html lang='en'><head><meta charset='utf-8'><title>{e(d['title'])}</title>",
           "<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=block'>",
           f"<style>{PRINT_CSS.replace('FONTS', FONT_DIR)}</style></head><body>"]

    out.append(f"""<section class="cover">
  <div class="cover-top"><span>Dylan Asdale · AWS Guides</span><span class="vol">Vol. 01</span></div>
  <div class="cover-art">{cover_art(cats)}</div>
  <div class="badges"><span class="badge">A reference guide</span><span class="badge pink">Free plan edition</span></div>
  <h1>Every AWS Service on the <em>Free&nbsp;Plan</em></h1>
  <p class="lede">All {total} services you can use on a new AWS Free plan account, what each one does in plain English, sorted into {len(cats)} categories.</p>
  <div class="cover-foot"><span>For beginners and builders</span><span>{ed} edition</span><span>US Letter</span></div>
</section>""")

    toc = "".join(f"<li>{e(c['name'])}<span>{len(c['services'])}</span></li>" for c in cats)
    out.append(f"""<section class="intro">
  <p class="kicker">Before you start</p>
  <h2>How the AWS Free plan works</h2>
  <p class="lead">Every new AWS account picks a plan at sign-up. The Free plan lets you build and experiment without being charged, but only with the services in this guide. Upgrade to the Paid plan at any time to unlock everything else.</p>
  <div class="facts">
    <div class="fact"><b>$100 in credits</b><span>You get this as soon as you sign up, plus up to $100 more for trying key services.</span></div>
    <div class="fact"><b>Up to 6 months</b><span>The plan ends after 6 months or when your credits run out, whichever comes first.</span></div>
    <div class="fact"><b>No charges</b><span>You're never billed on the Free plan. When it ends, upgrade within 90 days to keep your account and data.</span></div>
    <div class="fact"><b>30+ always free</b><span>Some services include a monthly free allowance that never expires, on both plans.</span></div>
  </div>
  <ol class="howto">
    <li><b>Some features are held back.</b> Anything that could use up your credits in one go, such as Reserved Instances, Savings Plans or hardware purchases, needs the Paid plan. Where a service in this guide has a specific limit, it's marked <b>Free plan limit</b>.</li>
    <li><b>One Region at a time.</b> Multi-Region and cross-Region features aren't supported on the Free plan.</li>
    <li><b>Credits are spent as you go.</b> Usage beyond a service's always-free allowance comes out of your credits. Check the Billing and Cost Management console to see your balance.</li>
  </ol>
  <h3 class="toc-title">What's inside</h3>
  <ul class="toc">{toc}</ul>
</section>""")

    for c in cats:
        n = len(c["services"])
        items = []
        for s in c["services"]:
            note = f'<p class="note"><b>Free plan limit:</b> {e(s["note"])}</p>' if s.get("note") else ""
            items.append(f'<div class="svc"><h3>{e(s["name"])}</h3><div><p>{e(s["desc"])}</p>{note}</div></div>')
        out.append(f"""<section class="cat">
  <div class="cat-head"><h2>{e(c['name'])}</h2><span class="count">{n} service{'s' if n != 1 else ''}</span></div>
  <p class="cat-blurb">{e(c['blurb'])}</p>
  {''.join(items)}
</section>""")

    out.append(f"""<section class="back">
  <p class="kicker">About this guide</p>
  <h2>Where this list comes from</h2>
  <p>The service list follows AWS's own documentation of the services included in the Free plan for new accounts, checked on {long_date(d['checked'])}: <a href="{e(d['source'])}">{e(d['source'])}</a></p>
  <p>AWS adds and changes Free plan services often, and AWS is still rolling out its new sign-up experience, so what you see in your own account can differ. Always check the AWS Free Tier page and your Billing console before you rely on something being free.</p>
  <p>Descriptions are written for this guide in plain English. AWS, Amazon Web Services and all service names are trademarks of Amazon.com, Inc. or its affiliates. This guide is independent and isn't endorsed by AWS.</p>
  <p>More free guides at <a href="https://dylanasdale.github.io/free-guides/">dylanasdale.github.io/free-guides</a></p>
</section>""")
    out.append("</body></html>")
    return "".join(out)


# ----------------------------------------------------------------- web list
def build_web_list(d):
    parts = []
    for c in d["categories"]:
        items = []
        for s in c["services"]:
            note = f'<p class="svc-note"><b>Free plan limit:</b> {e(s["note"])}</p>' if s.get("note") else ""
            items.append(f'<li class="svc"><h4 class="svc-name">{e(s["name"])}</h4><p class="svc-desc">{e(s["desc"])}</p>{note}</li>')
        n = len(c["services"])
        parts.append(f'<details class="svc-cat" id="{slug(c["name"])}"><summary><span class="svc-cat-name">{e(c["name"])}</span><span class="svc-count">{n}</span></summary><p class="svc-blurb">{e(c["blurb"])}</p><ul class="svc-list">{"".join(items)}</ul></details>')
    return "\n".join(parts)


def find_browser():
    for b in BROWSERS:
        if os.path.isfile(b) or shutil.which(b):
            return b
    sys.exit("Chrome or Edge not found")


def chrome(browser, args, profile):
    subprocess.run([browser, "--headless=new", "--disable-gpu", "--no-first-run", f"--user-data-dir={profile}",
                    "--virtual-time-budget=8000", *args], check=True, capture_output=True, timeout=180)


def main():
    d = json.loads(DATA.read_text(encoding="utf-8"))
    browser = find_browser()
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        src = tmp / "guide.html"
        src.write_text(build_print_html(d), encoding="utf-8")
        PDF_OUT.parent.mkdir(parents=True, exist_ok=True)
        chrome(browser, ["--no-pdf-header-footer", f"--print-to-pdf={PDF_OUT}", src.as_uri()], tmp / "p1")

        # Cover thumbnail: render the cover alone at 2x, then scale to the site's 400x518 guide size.
        cover_png = tmp / "cover.png"
        chrome(browser, ["--window-size=816,1056", "--force-device-scale-factor=2", "--hide-scrollbars",
                         f"--screenshot={cover_png}", src.as_uri()], tmp / "p2")
        from PIL import Image
        COVER_OUT.parent.mkdir(parents=True, exist_ok=True)
        Image.open(cover_png).convert("RGB").resize((800, 1036), Image.LANCZOS).save(COVER_OUT, "WEBP", quality=86, method=6)

    page = PAGE.read_text(encoding="utf-8")
    total = sum(len(c["services"]) for c in d["categories"])
    page, n = re.subn(r"(<!-- aws-services:start -->).*?(<!-- aws-services:end -->)",
                      lambda m: m.group(1) + "\n" + build_web_list(d) + "\n" + m.group(2), page, flags=re.S)
    if n != 1:
        sys.exit("aws-services markers not found in free-guides/aws-guides/index.html")
    page = re.sub(r'data-count="total">\d+<', f'data-count="total">{total}<', page)
    page = re.sub(r'data-count="cats">\d+<', f'data-count="cats">{len(d["categories"])}<', page)
    PAGE.write_text(page, encoding="utf-8", newline="\n")
    print(f"{total} services in {len(d['categories'])} categories")
    print(f"PDF   {PDF_OUT.relative_to(ROOT)}  ({PDF_OUT.stat().st_size // 1024} KB)")
    print(f"Cover {COVER_OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
