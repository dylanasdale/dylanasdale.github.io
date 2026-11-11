// About page: the founder's signature, written in light.
// A point of light writes the signature on, left to right, when it first comes into view: the ink appears exactly
// where the light is, and sparks come off the tip. After that sparks keep lifting off the strokes, and the light
// re-traces the signature every few seconds. The pointer stirs the sparks like wind and pulls more of them out of the ink beneath it;
// a click or tap bursts the ink there.
(() => {
'use strict';
const plate = document.querySelector('.sig'); if (!plate) return;
const ink = plate.querySelector('.sig-ink'), canvas = plate.querySelector('canvas'), ctx = canvas.getContext('2d');
if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; // the still signature is enough
// From here the script owns the write-on: the ink starts hidden and is uncovered frame by frame (see frame()).
const root = document.documentElement, row = plate.closest('.founder-row'), HIDE = 'inset(-10% 100% -10% 0)';
ink.style.clipPath = HIDE; root.classList.add('sig-live');

/* ---------- where the ink is: read once from the signature image, kept as one list of heights per column ---------- */
const COLS = 360; let cols = null;
const img = new Image();
img.onload = () => {
  const h = Math.round(COLS * img.naturalHeight / img.naturalWidth), c = document.createElement('canvas'); c.width = COLS; c.height = h;
  const x = c.getContext('2d'); x.drawImage(img, 0, 0, COLS, h); const d = x.getImageData(0, 0, COLS, h).data;
  cols = Array.from({ length: COLS }, () => []);
  for (let i = 0; i < COLS * h; i++) if (d[i * 4 + 3] > 90) cols[i % COLS].push(((i / COLS) | 0) / h);
};
img.src = '/assets/img/dylan-asdale-signature.webp';

/* ---------- sizes: everything is measured from the canvas's top-left corner ---------- */
let W = 0, H = 0, dpr = 1, ox = 0, oy = 0, kw = 1, kh = 1;
function size() {
  const p = canvas.getBoundingClientRect(), k = ink.getBoundingClientRect(); if (!p.width) return;
  W = p.width; H = p.height; ox = k.left - p.left; oy = k.top - p.top; kw = k.width; kh = k.height;
  dpr = Math.min(devicePixelRatio || 1, 2); canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
}
// A point on the ink near the given spot (x in canvas pixels; y optional), or null where there is no ink.
function inkNear(x, spread, y) {
  let best = null;
  for (let tries = 0; tries < (y === undefined ? 2 : 5); tries++) {
    const c = Math.round(((x - ox) / kw) * COLS + (Math.random() + Math.random() - 1) * spread), col = cols[c]; if (!col || !col.length) continue;
    const p = { x: ox + (c / COLS) * kw, y: oy + col[(Math.random() * col.length) | 0] * kh };
    if (y === undefined) return p;
    if (!best || Math.abs(p.y - y) < Math.abs(best.y - y)) best = p;
  }
  return best;
}

/* ---------- sparks ---------- */
const N = innerWidth < 700 ? 420 : 800;
const px = new Float32Array(N), py = new Float32Array(N), vx = new Float32Array(N), vy = new Float32Array(N), life = new Float32Array(N), span = new Float32Array(N), sz = new Float32Array(N), hue = new Uint8Array(N);
const COLORS = ['#ffffff', '#ffd3ea', '#ff8cc6', '#ff3fa4', '#b06bff'];
let next = 0;
function spark(p, speed, up) {
  const i = next; next = (next + 1) % N; const a = Math.random() * 6.283;
  px[i] = p.x; py[i] = p.y; vx[i] = Math.cos(a) * speed; vy[i] = Math.sin(a) * speed - up;
  span[i] = life[i] = .7 + Math.random() * 1.5; sz[i] = .7 + Math.random() * 1.5; hue[i] = (Math.random() * COLORS.length) | 0;
}
const mouse = { x: 0, y: 0, vx: 0, vy: 0, inside: false };
plate.addEventListener('pointermove', (e) => {
  const p = canvas.getBoundingClientRect(), x = e.clientX - p.left, y = e.clientY - p.top;
  if (mouse.inside) { mouse.vx = x - mouse.x; mouse.vy = y - mouse.y; } mouse.x = x; mouse.y = y; mouse.inside = true;
}, { passive: true });
plate.addEventListener('pointerleave', () => { mouse.inside = false; });
plate.addEventListener('pointerdown', (e) => {
  if (!cols || !written) return; const p = canvas.getBoundingClientRect(), x = e.clientX - p.left, y = e.clientY - p.top;
  for (let n = 0; n < 200; n++) { const q = inkNear(x, 34, y); if (q) spark(q, .6 + Math.random() * 3.6, .4); }
});

let pen = { x: 0, y: 0, on: false }, carry = 0, t0 = -1, written = false;
const WRITE = 2.4, EVERY = 7; // seconds one pass takes, and how often it repeats
function frame(ms) {
  // The clock starts once the ink map is loaded and the row has faded in, so the first stroke is never missed.
  if (t0 < 0 && cols && (!row || row.classList.contains('fx-in') || !root.classList.contains('fx-live'))) t0 = ms + 400;
  const t = t0 < 0 ? -1 : (ms - t0) / 1000, first = t < WRITE; // first: still being written on
  if (cols && t >= 0) {
    // the tracing light: crosses the signature in the first 2.4 s of every 7 s
    const ph = (t % EVERY) / WRITE; pen.on = ph < 1; let e = 1;
    if (pen.on) { e = ph * ph * (3 - 2 * ph); const q = inkNear(ox + e * kw, 1.5); pen.x = ox + e * kw; if (q) pen.y += (q.y - pen.y) * .35; }
    // the ink is uncovered up to the light, a hair ahead of it
    if (first) ink.style.clipPath = `inset(-10% ${Math.max(0, 98.5 - e * 100).toFixed(2)}% -10% 0)`; else if (!written) { ink.style.clipPath = 'none'; written = true; }
    // how many sparks to release this frame
    carry += first ? 4.5 : mouse.inside ? 5 : pen.on ? 3.2 : .7;
    while (carry >= 1) { carry--;
      const q = first ? (Math.random() < .85 ? inkNear(pen.x, 3) : inkNear(ox + Math.random() * (pen.x - ox), 2)) // while writing: only from the tip, or ink already written
        : mouse.inside && Math.random() < .8 ? inkNear(mouse.x, 12, mouse.y) : pen.on && Math.random() < .8 ? inkNear(pen.x, 3) : inkNear(ox + Math.random() * kw, 2);
      if (q) spark(q, .15 + Math.random() * .5, .25 + Math.random() * .5); }
  }
  // the light inside the ink follows the pointer, or else the tracing light
  if (mouse.inside && !first) { ink.style.setProperty('--sx', (mouse.x - ox).toFixed(1) + 'px'); ink.style.setProperty('--sy', (mouse.y - oy).toFixed(1) + 'px'); }
  else if (pen.on) { ink.style.setProperty('--sx', (pen.x - ox).toFixed(1) + 'px'); ink.style.setProperty('--sy', (pen.y - oy).toFixed(1) + 'px'); }
  else { ink.style.removeProperty('--sx'); ink.style.removeProperty('--sy'); }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < N; i++) {
    if (life[i] <= 0) continue; life[i] -= 1 / 60;
    if (mouse.inside) { const dx = px[i] - mouse.x, dy = py[i] - mouse.y, d = Math.hypot(dx, dy); if (d < 110) { const f = 1 - d / 110; vx[i] += mouse.vx * .035 * f + dx / (d + 1) * .05 * f; vy[i] += mouse.vy * .035 * f + dy / (d + 1) * .05 * f; } }
    vx[i] = (vx[i] + Math.sin(t * 1.7 + py[i] * .06 + i) * .012) * .975; vy[i] = (vy[i] - .006) * .975; px[i] += vx[i]; py[i] += vy[i];
    const f = Math.max(0, life[i] / span[i]), s = sz[i] * (.4 + f * .8);
    ctx.globalAlpha = Math.min(1, f * 1.6) * .9; ctx.fillStyle = COLORS[f > .75 ? 0 : hue[i]]; ctx.fillRect(px[i] - s / 2, py[i] - s / 2, s, s);
  }
  mouse.vx *= .8; mouse.vy *= .8;
  if (pen.on && cols) { // the glowing tip of the tracing light
    const g = ctx.createRadialGradient(pen.x, pen.y, 0, pen.x, pen.y, 16); g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.25, 'rgba(255,140,198,.5)'); g.addColorStop(1, 'rgba(255,63,164,0)');
    ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.beginPath(); ctx.arc(pen.x, pen.y, 16, 0, 6.283); ctx.fill();
  }
}

// Draws only while the signature is on screen.
let raf = 0, visible = false;
function loop(ms) { frame(ms); raf = visible ? requestAnimationFrame(loop) : 0; }
size(); pen.y = oy + kh / 2;
addEventListener('resize', size); addEventListener('load', size);
if ('IntersectionObserver' in window) new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible && !raf) { size(); raf = requestAnimationFrame(loop); } }).observe(plate);
// Test hook: run n frames at once from a chosen time (used to check the effect where animation is throttled).
window.__sigStep = (n = 60, from = performance.now(), again = false) => { if (again) { t0 = -1; written = false; ink.style.clipPath = HIDE; } // again: replay the write-on
  size(); let ms = from; for (let i = 0; i < n; i++) frame(ms += 16.7); return !!cols; };
})();

// The backdrop behind the portrait: code rain. Columns of random characters fall slowly down a near-black card,
// violet with one brighter character at the head of each column. The pointer works like a torch: characters near it
// light up pink and white, scramble, and show even where no column is passing; columns under it fall faster.
(() => {
'use strict';
const canvas = document.querySelector('.portrait-back canvas'); if (!canvas) return;
const ctx = canvas.getContext('2d'), REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const CHARS = '01ABCDEF{}<>/=+*#$%&XYZ7359;:[]()', CELL = 14, FONT = 12;
const pick = () => CHARS[(Math.random() * CHARS.length) | 0];
let W = 0, H = 0, dpr = 1, rows = 0, cols = [];
function column(scatter) { const len = 14 + ((Math.random() * 22) | 0);
  return { head: scatter ? Math.random() * (rows + len) : -Math.random() * 14, speed: 6 + Math.random() * 9, len, wait: Math.random() < .15 ? Math.random() * 2 : 0, pink: Math.random() < .14,
    glyphs: Array.from({ length: rows + 1 }, pick) }; } // speed: rows per second; wait: seconds before it starts; each row keeps its character
function size() {
  const b = canvas.getBoundingClientRect(); if (!b.width) return; if (Math.round(b.width) === Math.round(W) && Math.round(b.height) === Math.round(H)) return;
  W = b.width; H = b.height; dpr = Math.min(devicePixelRatio || 1, 2); canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  rows = Math.ceil(H / CELL); cols = Array.from({ length: Math.floor(W / CELL) }, () => column(true));
}
const mouse = { x: -999, y: -999, k: 0, on: false }, REACH = 125; // k: how strongly the torch is lit, eased in and out
const frameEl = canvas.closest('.portrait-frame');
frameEl.addEventListener('pointermove', (e) => { const b = canvas.getBoundingClientRect(); mouse.x = e.clientX - b.left; mouse.y = e.clientY - b.top; mouse.on = true; }, { passive: true });
frameEl.addEventListener('pointerleave', () => { mouse.on = false; });
function frame(dt) {
  mouse.k += ((mouse.on ? 1 : 0) - mouse.k) * .12;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H); ctx.font = FONT + 'px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const pad = (W - cols.length * CELL) / 2 + CELL / 2;
  if (mouse.k > .01) { const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, REACH); g.addColorStop(0, `rgba(255,63,164,${(.2 * mouse.k).toFixed(3)})`); g.addColorStop(1, 'rgba(255,63,164,0)'); // the torch's pool of light
    ctx.fillStyle = g; ctx.fillRect(mouse.x - REACH, mouse.y - REACH, REACH * 2, REACH * 2); }
  const near = (x, y) => mouse.k < .01 ? 0 : Math.max(0, 1 - Math.hypot(x - mouse.x, y - mouse.y) / REACH) * mouse.k; // 0 far from the pointer, 1 on it
  for (let c = 0; c < cols.length; c++) { let k = cols[c]; const x = pad + c * CELL;
    const under = mouse.k * Math.max(0, 1 - Math.abs(x - mouse.x) / (REACH * .7)); // columns under the pointer fall up to 2.5 times as fast
    if (k.wait > 0) k.wait -= dt * (1 + under * 4);
    else { k.head += k.speed * dt * (1 + under * 1.5); if (k.head - k.len > rows) k = cols[c] = column(false); }
    const top = k.wait > 0 ? -999 : Math.floor(k.head);
    // the torch: every character within reach of the pointer shows, lit and scrambling, whether or not a column is passing
    if (mouse.k > .01 && Math.abs(x - mouse.x) < REACH) { const r0 = Math.max(0, Math.floor((mouse.y - REACH) / CELL)), r1 = Math.min(rows, Math.ceil((mouse.y + REACH) / CELL));
      for (let row = r0; row <= r1; row++) { const n = near(x, row * CELL + CELL / 2); if (n <= 0 || (row <= top && row > top - k.len)) continue;
        if (Math.random() < .12 * n) k.glyphs[row] = pick();
        ctx.fillStyle = `rgba(255,${Math.round(120 + 110 * n * n)},${Math.round(195 + 50 * n * n)},${Math.min(1, n * (.45 + .75 * n)).toFixed(3)})`; ctx.fillText(k.glyphs[row], x, row * CELL + CELL / 2); } }
    for (let i = 0; i < k.len; i++) { const row = top - i; if (row < 0 || row > rows) continue; const y = row * CELL + CELL / 2, n = near(x, y);
      if (Math.random() < .006 + .2 * n) k.glyphs[row] = pick(); // now and then a character changes; near the pointer, constantly
      const fade = Math.pow(1 - i / k.len, 1.15);
      ctx.fillStyle = i === 0 ? 'rgba(246,228,255,.95)' : n > .02 ? `rgba(${Math.round(168 + 87 * n)},${Math.round(128 + 100 * n * n)},${Math.round(255 - 40 * n * (1 - n))},${Math.min(1, fade * .78 + n * .7).toFixed(3)})`
        : k.pink ? `rgba(255,99,180,${(fade * .8).toFixed(3)})` : `rgba(168,128,255,${(fade * .78).toFixed(3)})`;
      ctx.fillText(k.glyphs[row], x, y); }
  }
}
let raf = 0, visible = false, last = 0;
function loop(ms) { const dt = Math.min(.05, (ms - last) / 1000 || 0); last = ms; frame(dt); raf = visible ? requestAnimationFrame(loop) : 0; }
size(); frame(0); canvas.classList.add('on');
addEventListener('resize', () => { size(); if (!raf) frame(0); }); addEventListener('load', () => { size(); if (!raf) frame(0); });
if (!REDUCED && 'IntersectionObserver' in window) new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible && !raf) { size(); last = performance.now(); raf = requestAnimationFrame(loop); } }).observe(canvas);
window.__backStep = (n = 60) => { size(); for (let i = 0; i < n; i++) frame(1 / 60); };
})();
