// Collapsing menu for every page. Takes the row of links that tools/sync_nav.py writes into
// <div class="top-nav">, moves it into a panel that drops down under a Menu button, and adds the
// pages that are otherwise only linked from the footer, so the menu lists every page.
// While it is open a swarm of particles follows the pointer and underlines the link it is on.
(() => {
'use strict';
const root = document.documentElement;
const links = document.querySelector('.top-nav');
const bar = links && links.parentElement;
if (!bar) return;
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lerp = (a, b, t) => a + (b - a) * t;
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };

/* ---------- build: button in the bar, panel right after the bar ---------- */
const btn = el('button', 'navx-btn'); btn.type = 'button'; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'navx');
const btnLabel = el('span', '', 'Menu'); btn.append(btnLabel, el('i'));
const menu = el('div', 'navx'); menu.id = 'navx';
const canvas = el('canvas'); canvas.setAttribute('aria-hidden', 'true');
const scroller = el('div', 'navx-scroll');
// Footer-only pages join the same list, in the same style.
const have = new Set([...links.querySelectorAll('a')].map((a) => a.getAttribute('href')));
for (const a of document.querySelectorAll('nav[aria-label="Footer"] a')) {
  const href = a.getAttribute('href'); if (have.has(href)) continue; have.add(href);
  const c = el('a', 'top-link', a.textContent.trim()); c.href = href; if (href === location.pathname) c.setAttribute('aria-current', 'page'); links.append(c);
}
bar.append(btn);
scroller.append(links); // the same element sync_nav.py fills in, just shown somewhere else
menu.append(canvas, scroller);
const items = [...links.querySelectorAll('a')];
const letters = [];
items.forEach((a, n) => {
  a.style.setProperty('--n', n);
  const label = a.textContent.trim(), wrap = el('span');
  a.setAttribute('aria-label', label); a.textContent = '';
  label.split(/(\s+)/).forEach((w) => {
    if (!w) return; if (/^\s+$/.test(w)) { wrap.append(' '); return; }
    const word = el('span', 'nw'); word.setAttribute('aria-hidden', 'true');
    for (const ch of w) { const l = el('span', 'nl', ch); word.append(l); letters.push({ el: l, cx: 0, cy: 0, y: 0, s: 1, r: 0 }); }
    wrap.append(word);
  });
  a.append(wrap);
});
bar.after(menu);
root.classList.add('nav-live');

/* ---------- open and close ---------- */
let open = false, raf = 0, closedAt = 0;
const mouse = { x: 0, y: 0, inside: false };
function place() { const b = bar.getBoundingClientRect(); menu.style.setProperty('--top', Math.round(b.bottom + 10) + 'px'); menu.style.setProperty('--right', Math.max(8, Math.round(innerWidth - b.right)) + 'px'); }
function toggle(to, refocus) {
  open = to; root.classList.toggle('nav-open', open); btn.setAttribute('aria-expanded', String(open)); btnLabel.textContent = open ? 'Close' : 'Menu';
  if (open) { place(); size(); spawn(); setTimeout(measure, 900); if (!REDUCED) { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); } }
  else { hover = null; hoverRect = null; if (refocus) btn.focus({ preventScroll: true }); }
}
btn.addEventListener('click', () => toggle(!open));
addEventListener('keydown', (e) => { if (open && e.key === 'Escape') toggle(false, true); });
addEventListener('pointerdown', (e) => { if (open && !menu.contains(e.target) && !btn.contains(e.target)) toggle(false); });
menu.addEventListener('focusout', (e) => { if (open && e.relatedTarget && !menu.contains(e.relatedTarget) && e.relatedTarget !== btn) toggle(false); });
addEventListener('pageshow', (e) => { if (e.persisted && open) toggle(false); }); // coming back with the Back button

/* ---------- particles and letters (all positions are measured from the panel's top-left corner) ---------- */
const ctx = canvas.getContext('2d');
let W = 0, H = 0, dpr = 1, box = null, hover = null, hoverRect = null;
const N = innerWidth < 700 ? 280 : 560;
const px = new Float32Array(N), py = new Float32Array(N), vx = new Float32Array(N), vy = new Float32Array(N), pk = new Float32Array(N), pu = new Float32Array(N), ps = new Float32Array(N), pc = new Uint8Array(N);
for (let i = 0; i < N; i++) { pk[i] = Math.random(); pu[i] = Math.random(); ps[i] = .8 + Math.random() * 1.5; pc[i] = Math.random() * 10 < 5 ? 0 : Math.random() * 10 < 5 ? 1 : Math.random() * 10 < 6 ? 2 : 3; }
const COLORS = ['#ff3fa4', '#ff8cc6', '#b06bff', '#ffffff'];
function size() { box = menu.getBoundingClientRect(); W = box.width; H = box.height; dpr = Math.min(devicePixelRatio || 1, 2); canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); }
function spawn() { for (let i = 0; i < N; i++) { px[i] = W - 56; py[i] = 0; const a = Math.random() * 3.1416, f = 4 + Math.random() * 22; vx[i] = Math.cos(a) * f; vy[i] = Math.sin(a) * f; } }
const rel = (r) => ({ left: r.left - box.left, bottom: r.bottom - box.top, width: r.width });
function measure() { if (!open) return; size(); for (const l of letters) l.el.style.transform = ''; for (const l of letters) { const b = l.el.getBoundingClientRect(); l.cx = b.left + b.width / 2 - box.left; l.cy = b.top + b.height / 2 - box.top; } if (hover) hoverRect = rel(hover.firstElementChild.getBoundingClientRect()); }
addEventListener('resize', () => { if (open) { place(); measure(); } });
scroller.addEventListener('scroll', measure, { passive: true });
addEventListener('pointermove', (e) => { if (!open || !box) return; mouse.x = e.clientX - box.left; mouse.y = e.clientY - box.top; mouse.inside = mouse.x > -60 && mouse.y > -60 && mouse.x < W + 60 && mouse.y < H + 60; }, { passive: true });
const setHover = (a) => { hover = a; hoverRect = a && box ? rel(a.firstElementChild.getBoundingClientRect()) : null; };
for (const a of items) { a.addEventListener('pointerenter', () => setHover(a)); a.addEventListener('pointerleave', () => setHover(null)); a.addEventListener('focus', () => setHover(a)); a.addEventListener('blur', () => setHover(null)); }
menu.addEventListener('pointerdown', () => { for (let i = 0; i < N; i++) { const dx = px[i] - mouse.x, dy = py[i] - mouse.y, d = Math.hypot(dx, dy) + 1; if (d < 220) { const f = (1 - d / 220) * 18; vx[i] += dx / d * f; vy[i] += dy / d * f; } } });

function frame(ms) {
  const t = ms / 1000, r = hoverRect;
  // With the pointer away, the swarm drifts in a slow figure of eight around the middle of the panel.
  const mx = mouse.inside ? mouse.x : W * (.5 + .3 * Math.sin(t * .6)), my = mouse.inside ? mouse.y : H * (.5 + .34 * Math.sin(t * .43));
  for (let i = 0; i < N; i++) {
    let tx, ty; const k = pk[i];
    if (r && k < .7) { // most of the swarm lines up under the link being pointed at
      tx = r.left + pu[i] * r.width; ty = r.bottom + 2 + Math.sin(t * 3 + pu[i] * 18) * (2 + k * 5);
    } else { // the rest circles the pointer
      const a = t * (.35 + k * .9) + pu[i] * 6.283, rad = 18 + k * (r ? 70 : 120);
      tx = mx + Math.cos(a) * rad; ty = my + Math.sin(a) * rad * .7;
    }
    vx[i] += (tx - px[i]) * (.014 + k * .03) + (Math.random() - .5) * .2; vy[i] += (ty - py[i]) * (.014 + k * .03) + (Math.random() - .5) * .2;
    vx[i] *= .88; vy[i] *= .88; px[i] += vx[i]; py[i] += vy[i];
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = .85;
  for (let b = 0; b < 4; b++) { ctx.fillStyle = COLORS[b]; ctx.beginPath(); for (let i = 0; i < N; i++) { if (pc[i] === b) ctx.rect(px[i], py[i], ps[i], ps[i]); } ctx.fill(); }
  for (const l of letters) { // letters lift and lean as the pointer passes
    const dx = l.cx - mouse.x, d = Math.hypot(dx, l.cy - mouse.y), f = mouse.inside ? Math.max(0, 1 - d / 95) : 0, e = f * f;
    if (e < .001 && Math.abs(l.y) < .05) { if (l.on) { l.el.style.transform = ''; l.on = false; } continue; }
    l.y = lerp(l.y, -e * 9, .2); l.s = lerp(l.s, 1 + e * .22, .2); l.r = lerp(l.r, dx / 95 * e * 12, .2); l.on = true;
    l.el.style.transform = `translateY(${l.y.toFixed(2)}px) rotate(${l.r.toFixed(2)}deg) scale(${l.s.toFixed(3)})`;
  }
}
// Keeps drawing while the menu is open, and for a moment after, so it can wipe away cleanly.
function loop(ms) { frame(ms); if (open) closedAt = ms; if (open || ms - closedAt < 700) raf = requestAnimationFrame(loop); else ctx.clearRect(0, 0, W, H); }
// Test hook: run n frames at once (used to check the menu where animation is throttled).
window.__navStep = (n = 60) => { let ms = performance.now(); for (let i = 0; i < n; i++) frame(ms += 16.7); };
})();
