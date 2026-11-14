// Homepage section dividers. Three canvases that sit between the sections and react to the pointer and to scrolling:
//   string - a glowing string you can pull and let go; it also shakes while the voice clip plays
//   fuse   - a line that burns from left to right as you scroll; the pointer blows its sparks about
//   rain   - a band of fast code rain that speeds up under the pointer
// Each one only draws while it is on screen. With reduced motion nothing runs and the plain CSS line stays.
(() => {
'use strict';
const els = [...document.querySelectorAll('.divider[data-divider]')];
if (!els.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
const PINK = '#ff3fa4', SOFT = '#ff8cc6', VIO = '#b06bff';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rnd = Math.random;
const mouse = { x: -9999, y: -9999, px: -9999, py: -9999 };
addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
const clip = document.getElementById('clip');
let lastScroll = scrollY, scrollVel = 0;

/* ---------- sparks, shared by the string and the fuse (g: pull per frame, negative rises) ---------- */
function makeSparks(max, g) {
  const x = new Float32Array(max), y = new Float32Array(max), vx = new Float32Array(max), vy = new Float32Array(max), life = new Float32Array(max), span = new Float32Array(max);
  let k = 0;
  return {
    emit(X, Y, VX, VY, L) { x[k] = X; y[k] = Y; vx[k] = VX; vy[k] = VY; life[k] = span[k] = L; k = (k + 1) % max; },
    step(ctx, mx, my) {
      for (let i = 0; i < max; i++) {
        if (life[i] <= 0) continue;
        const dx = x[i] - mx, dy = y[i] - my, d2 = dx * dx + dy * dy;
        if (d2 < 12100) { const d = Math.sqrt(d2) + .01, f = (1 - d / 110) * .9; vx[i] += dx / d * f; vy[i] += dy / d * f; } // the pointer blows them away
        vy[i] += g; vx[i] *= .98; vy[i] *= .98; x[i] += vx[i]; y[i] += vy[i];
        const r = --life[i] / span[i], s = 1 + r * 1.8;
        ctx.fillStyle = r > .7 ? '#fff' : r > .35 ? SOFT : r > .15 ? PINK : VIO; ctx.globalAlpha = Math.min(1, r * 1.6); ctx.fillRect(x[i], y[i], s, s);
      }
      ctx.globalAlpha = 1;
    },
  };
}

/* ---------- 1. string ---------- */
function initString(d) { d.n = clamp(Math.round(d.w / 5), 60, 360); d.y = new Float32Array(d.n); d.v = new Float32Array(d.n); d.sp = makeSparks(180, .07); }
function drawString(d, t, lx, ly, inside) {
  const { ctx, w, h, n, y, v } = d, mid = h / 2, step = w / (n - 1), pi = lx / step;
  if (inside && lx > 0 && lx < w && Math.abs(ly - mid) < h * .5) { // the pointer holds the string; moving away lets it go
    const off = clamp(ly - mid, -h * .42, h * .42), R = n * .045 + 4;
    for (let i = Math.max(1, pi - R * 2.5 | 0); i < Math.min(n - 1, pi + R * 2.5); i++) { const f = Math.exp(-(((i - pi) / R) ** 2)); y[i] += (off - y[i]) * .3 * f; v[i] *= 1 - .5 * f; }
    if (Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py) > 5) for (let k = 0; k < 3; k++) d.sp.emit(lx, mid + y[clamp(pi | 0, 0, n - 1)], (rnd() - .5) * 5, -rnd() * 3 - .5, 26 + rnd() * 30);
  }
  if (Math.abs(scrollVel) > 1) v[1 + rnd() * (n - 2) | 0] += clamp(scrollVel, -40, 40) * .12; // scrolling shakes it
  if (clip && !clip.paused) for (let k = 0; k < 5; k++) v[1 + rnd() * (n - 2) | 0] += (rnd() - .5) * 5; // so does the voice clip
  v[n >> 3] += Math.sin(t * 2.1) * .14; v[n - (n >> 3)] += Math.sin(t * 1.7 + 1) * .14; // it never lies fully still
  for (let s = 0; s < 3; s++) { for (let i = 1; i < n - 1; i++) v[i] += (y[i - 1] + y[i + 1] - 2 * y[i]) * .17 - y[i] * .0012; for (let i = 1; i < n - 1; i++) { v[i] *= .9972; y[i] = clamp(y[i] + v[i], -h * .46, h * .46); } }
  ctx.clearRect(0, 0, w, h); ctx.globalCompositeOperation = 'lighter'; ctx.lineJoin = ctx.lineCap = 'round';
  const line = (k, lw, style) => { ctx.beginPath(); for (let i = 0; i < n; i++) { const X = i * step, Y = mid + y[i] * k; if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); } ctx.lineWidth = lw; ctx.strokeStyle = style; ctx.stroke(); };
  line(-.55, 1, 'rgba(176,107,255,.4)'); line(.3, 1, 'rgba(255,140,198,.25)'); // two quieter echoes
  line(1, 10, 'rgba(255,63,164,.1)'); line(1, 3.5, 'rgba(255,63,164,.5)'); line(1, 1.4, '#ffe6f3');
  ctx.fillStyle = '#fff'; const gap = Math.max(4, n / 14 | 0);
  for (let i = gap; i < n - 1; i += gap) { ctx.beginPath(); ctx.arc(i * step, mid + y[i], 2.2, 0, 7); ctx.fill(); }
  d.sp.step(ctx, lx, ly);
}

/* ---------- 2. fuse ---------- */
const STAR = new Path2D('M12 1.5c.7 5.6 4.9 9.8 10.5 10.5-5.6.7-9.8 4.9-10.5 10.5C11.3 16.9 7.1 12.7 1.5 12 7.1 11.3 11.3 7.1 12 1.5Z');
function initFuse(d) { d.sp = makeSparks(280, -.03); d.head = 0; }
function drawFuse(d, t, lx, ly, inside, top) {
  const { ctx, w, h } = d, mid = h * .58, pad = Math.max(30, w * .08), end = w - pad;
  const p = clamp((innerHeight * .92 - top) / (innerHeight * .62), 0, 1), target = pad + p * (end - pad), prev = d.head || pad;
  const hx = d.head = prev + (target - prev) * .14, moved = Math.abs(hx - prev);
  const Y = (x) => mid + Math.sin(x * .013 + 1) * h * .1 + Math.sin(x * .041) * h * .035;
  const path = (a, b) => { ctx.beginPath(); ctx.moveTo(a, Y(a)); for (let x = a + 6; x < b; x += 6) ctx.lineTo(x, Y(x)); ctx.lineTo(b, Y(b)); };
  ctx.clearRect(0, 0, w, h); ctx.globalCompositeOperation = 'lighter'; ctx.lineCap = 'round';
  ctx.setLineDash([2, 7]); path(hx, end); ctx.lineWidth = 1.3; ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.stroke(); ctx.setLineDash([]); // the part still to burn
  if (hx > pad + 2) { // the burnt part glows, brightest near the head
    const g = ctx.createLinearGradient(pad, 0, hx, 0); g.addColorStop(0, 'rgba(176,107,255,0)'); g.addColorStop(.55, 'rgba(176,107,255,.6)'); g.addColorStop(1, PINK);
    path(pad, hx); ctx.strokeStyle = g; ctx.globalAlpha = .18; ctx.lineWidth = 9; ctx.stroke(); ctx.globalAlpha = 1; ctx.lineWidth = 2; ctx.stroke();
  }
  const lit = p > .985, sy = Y(end); // a star waits at the far end and lights when the fuse reaches it
  ctx.save(); ctx.translate(end + 6, sy - 13); ctx.scale(1.1, 1.1); ctx.fillStyle = lit ? '#fff' : 'rgba(255,255,255,.28)'; if (lit) { ctx.shadowColor = PINK; ctx.shadowBlur = 22; } ctx.fill(STAR); ctx.restore();
  if (lit && rnd() < .5) d.sp.emit(end + 19, sy, (rnd() - .5) * 5, (rnd() - .5) * 5, 30 + rnd() * 30);
  if (p > 0 && !lit) { // the burning head
    const hy = Y(hx), g = ctx.createRadialGradient(hx, hy, 0, hx, hy, 30); g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.25, 'rgba(255,63,164,.6)'); g.addColorStop(1, 'rgba(255,63,164,0)');
    ctx.fillStyle = g; ctx.fillRect(hx - 30, hy - 30, 60, 60);
    for (let k = 0, c = 2 + Math.min(9, moved * .7); k < c; k++) d.sp.emit(hx, hy, (rnd() - .5) * 4.5 - 1, -rnd() * 3.6 - .4, 26 + rnd() * 44);
  }
  if (inside && lx > pad && lx < hx && Math.abs(ly - Y(lx)) < 50) for (let k = 0; k < 2; k++) d.sp.emit(lx, Y(lx), (rnd() - .5) * 3, -rnd() * 3 - .5, 22 + rnd() * 30); // passing over the burnt line stirs it up
  d.sp.step(ctx, lx, ly);
}

/* ---------- 3. rain ---------- */
const GLYPHS = '01<>/{}[]=+*#✦RN';
function initRain(d) {
  const cell = d.cell = d.w < 700 ? 14 : 16, cols = d.cols = Math.ceil(d.w / cell), rows = Math.ceil(d.h / cell);
  d.row = new Float32Array(cols); d.spd = new Float32Array(cols); d.acc = new Float32Array(cols); d.last = new Array(cols).fill('');
  for (let c = 0; c < cols; c++) { d.row[c] = Math.round((rnd() * 2 - 1) * rows); d.spd[c] = .3 + rnd() * .7; }
}
function drawRain(d, t, lx, ly, inside) {
  const { ctx, w, h, cell } = d;
  ctx.globalCompositeOperation = 'destination-out'; ctx.fillStyle = 'rgba(0,0,0,.17)'; ctx.fillRect(0, 0, w, h); // older glyphs fade
  ctx.globalCompositeOperation = 'source-over'; ctx.font = `600 ${cell - 2}px ui-monospace, Consolas, Menlo, monospace`; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  const boost = 1 + Math.min(3, Math.abs(scrollVel) * .08);
  for (let c = 0; c < d.cols; c++) {
    const x = c * cell + cell / 2, near = inside ? Math.max(0, 1 - Math.abs(x - lx) / 150) : 0;
    d.acc[c] += d.spd[c] * boost * (1 + near * 2.4);
    while (d.acc[c] >= 1) {
      d.acc[c]--; const r = d.row[c], yy = r * cell;
      if (d.last[c]) { ctx.clearRect(x - cell / 2, yy - cell, cell, cell); ctx.fillStyle = near > .3 ? SOFT : c % 5 ? PINK : VIO; ctx.fillText(d.last[c], x, yy - cell); }
      const g = GLYPHS[rnd() * GLYPHS.length | 0]; ctx.fillStyle = '#fff'; ctx.fillText(g, x, yy); d.last[c] = g; d.row[c] = r + 1;
      if (yy > h + rnd() * h * 1.5) { d.row[c] = -(rnd() * 8 | 0); d.last[c] = ''; }
    }
  }
}

/* ---------- set-up and the loop ---------- */
const INIT = { string: initString, fuse: initFuse, rain: initRain }, DRAW = { string: drawString, fuse: drawFuse, rain: drawRain };
const divs = els.filter((el) => DRAW[el.dataset.divider]).map((el) => { const canvas = el.querySelector('canvas'); return { el, canvas, ctx: canvas.getContext('2d'), type: el.dataset.divider, vis: false, w: 0, h: 0 }; });
function size(d) {
  const b = d.el.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
  d.w = b.width; d.h = b.height; d.dpr = dpr; d.canvas.width = Math.round(b.width * dpr); d.canvas.height = Math.round(b.height * dpr); INIT[d.type](d);
}
function tick(ms) {
  const t = ms / 1000; scrollVel += ((scrollY - lastScroll) - scrollVel) * .2; lastScroll = scrollY;
  for (const d of divs) {
    if (!d.vis) continue;
    const b = d.el.getBoundingClientRect(), lx = mouse.x - b.left, ly = mouse.y - b.top;
    d.ctx.setTransform(d.dpr, 0, 0, d.dpr, 0, 0);
    DRAW[d.type](d, t, lx, ly, ly > -70 && ly < d.h + 70, b.top);
  }
  mouse.px = mouse.x; mouse.py = mouse.y;
}
let raf = 0;
function frame(ms) { raf = 0; tick(ms); if (divs.some((d) => d.vis)) raf = requestAnimationFrame(frame); }
const io = new IntersectionObserver((es) => { for (const e of es) { const d = divs.find((x) => x.el === e.target); d.vis = e.isIntersecting; } if (!raf && divs.some((d) => d.vis)) raf = requestAnimationFrame(frame); }, { rootMargin: '80px' });
for (const d of divs) { size(d); d.el.classList.add('live'); io.observe(d.el); }
let rz = 0; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => divs.forEach(size), 150); });
// Test hook: run n frames at once for every divider (used to check the page where animation is throttled).
window.__divStep = (n = 60) => { let ms = performance.now(); const was = divs.map((d) => d.vis); divs.forEach((d) => { d.vis = true; }); for (let i = 0; i < n; i++) tick(ms += 16.7); divs.forEach((d, i) => { d.vis = was[i]; }); };
})();
