// Homepage animations: WebGL background, particle sculpture, cursor, tilt cards, scroll effects and the voice player.
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
let W = innerWidth, H = innerHeight;
const mouse = { x: W * .7, y: H * .45, sx: W * .7, sy: H * .45, seen: false };
let scrollY = 0, lastScroll = 0, scrollVel = 0;
let clickAt = -10, clickX = 0, clickY = 0;
const STAR = 'M12 1.5c.7 5.6 4.9 9.8 10.5 10.5-5.6.7-9.8 4.9-10.5 10.5C11.3 16.9 7.1 12.7 1.5 12 7.1 11.3 11.3 7.1 12 1.5Z';

addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; if (!mouse.seen) { mouse.seen = true; mouse.sx = mouse.x; mouse.sy = mouse.y; } }, { passive: true });
addEventListener('pointerdown', (e) => {
  clickAt = performance.now() / 1000; clickX = e.clientX; clickY = e.clientY;
  if (REDUCED) return;
  const s = document.createElement('div'); s.className = 'shock'; s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px';
  document.body.appendChild(s); s.addEventListener('animationend', () => s.remove());
  burst(e.clientX, e.clientY);
});

/* =============== 1. WebGL background: domain-warped noise that bends toward the pointer =============== */
const glc = $('#gl');
const gl = glc.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
let glU = null;
if (gl) {
  const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  const fs = `precision highp float;
uniform vec2 r; uniform float t; uniform vec2 m; uniform float s; uniform vec3 c;
float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,v=0.;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*r)/r.y; vec2 mp=(m-.5*r)/r.y; float d=length(uv-mp);
  vec2 q=uv*1.5; q-=.42*(uv-mp)*exp(-d*2.2); q.y+=s*.0007;
  float a=fbm(q+vec2(t*.05,-t*.035));
  vec2 w=q+1.9*vec2(fbm(q+a+t*.06),fbm(q-a-t*.045));
  float f=fbm(w);
  vec3 ink=vec3(.027,.024,.039), vio=vec3(.42,.2,.95), pk=vec3(1.,.25,.64);
  vec3 col=mix(ink,vio*.55,smoothstep(.25,.8,f));
  col=mix(col,pk*.85,smoothstep(.52,.92,f)*.85);
  col+=pk*.5*exp(-d*3.2)*(.6+.4*f);
  float cd=length(uv-(c.xy-.5*r)/r.y); float ring=exp(-pow((cd-c.z*1.3)*8.,2.))*exp(-c.z*1.7);
  col+=(pk+.3)*ring*.9;
  col*=.82*mix(1.,.6,clamp(s/900.,0.,1.));
  col*=1.-.55*dot(uv*.75,uv*.75);
  col+=(h(gl_FragCoord.xy+t)-.5)*.03;
  gl_FragColor=vec4(max(col,ink*.6),1.);
}`;
  const sh = (type, src) => { const o = gl.createShader(type); gl.shaderSource(o, src); gl.compileShader(o); return o; };
  const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(pr);
  if (gl.getProgramParameter(pr, gl.LINK_STATUS)) {
    gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    glU = { r: gl.getUniformLocation(pr, 'r'), t: gl.getUniformLocation(pr, 't'), m: gl.getUniformLocation(pr, 'm'), s: gl.getUniformLocation(pr, 's'), c: gl.getUniformLocation(pr, 'c') };
  }
}
let glScale = 1;
function sizeGL() { glScale = Math.min(devicePixelRatio || 1, 1.25) * (W > 1600 ? .8 : 1); glc.width = Math.round(W * glScale); glc.height = Math.round(H * glScale); if (gl) gl.viewport(0, 0, glc.width, glc.height); }
function drawGL(t) {
  if (!glU) return;
  gl.uniform2f(glU.r, glc.width, glc.height); gl.uniform1f(glU.t, t);
  gl.uniform2f(glU.m, mouse.sx * glScale, (H - mouse.sy) * glScale); gl.uniform1f(glU.s, scrollY);
  gl.uniform3f(glU.c, clickX * glScale, (H - clickY) * glScale, t - clickAt);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

/* =============== 2. Particle sculpture: morphs between shapes, scatters from the pointer =============== */
const fx = $('#fx'), ctx = fx.getContext('2d');
const N = W < 700 ? 1500 : 3400;
const LABELS = ['Asdale Dynamics', 'AI model router', 'Patient-advocacy briefs', 'Voice for AI agents', 'AI-brain interfaces · research'];
function sample(draw) {
  const S = 400, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'); g.fillStyle = g.strokeStyle = '#fff'; g.lineCap = g.lineJoin = 'round'; draw(g, S);
  const d = g.getImageData(0, 0, S, S).data, pts = [];
  for (let y = 0; y < S; y += 2) for (let x = 0; x < S; x += 2) if (d[(y * S + x) * 4 + 3] > 110) pts.push(x, y);
  const out = new Float32Array(N * 2);
  for (let i = 0; i < N; i++) { const k = (Math.random() * pts.length / 2 | 0) * 2; out[i * 2] = (pts[k] + Math.random() * 2 - S / 2) / (S / 2); out[i * 2 + 1] = (pts[k + 1] + Math.random() * 2 - S / 2) / (S / 2); }
  return out;
}
const dot = (g, x, y, r) => { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); };
const SHAPES = [
  sample((g, S) => { g.save(); g.scale(S / 24, S / 24); g.fill(new Path2D(STAR)); g.restore(); }),
  sample((g) => { g.lineWidth = 7; for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2 - 1.57, x = 200 + Math.cos(a) * 150, y = 200 + Math.sin(a) * 150; g.beginPath(); g.moveTo(200, 200); g.lineTo(x, y); g.stroke(); dot(g, x, y, i % 3 ? 22 : 30); } dot(g, 200, 200, 48); }),
  sample((g) => { g.lineWidth = 15; g.beginPath(); [[14, 210], [96, 210], [116, 176], [136, 210], [160, 210], [182, 60], [212, 340], [236, 210], [262, 210], [286, 158], [312, 210], [386, 210]].forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.stroke(); }),
  sample((g) => { const hs = [50, 110, 190, 130, 250, 330, 210, 290, 160, 230, 120, 80, 40]; hs.forEach((h, i) => { const x = 22 + i * 28; g.beginPath(); g.roundRect(x, 200 - h / 2, 18, h, 9); g.fill(); }); }),
  sample((g) => { const L = [[70, [110, 200, 290]], [200, [70, 157, 243, 330]], [330, [110, 200, 290]]]; g.lineWidth = 4; for (let k = 0; k < 2; k++) for (const y1 of L[k][1]) for (const y2 of L[k + 1][1]) { g.beginPath(); g.moveTo(L[k][0], y1); g.lineTo(L[k + 1][0], y2); g.stroke(); } for (const [x, ys] of L) for (const y of ys) dot(g, x, y, 26); }),
];
const px = new Float32Array(N), py = new Float32Array(N), vx = new Float32Array(N), vy = new Float32Array(N), pz = new Float32Array(N), ps = new Float32Array(N), pc = new Uint8Array(N);
for (let i = 0; i < N; i++) { px[i] = Math.random() * W; py[i] = Math.random() * H; pz[i] = Math.random() * 2 - 1; ps[i] = .8 + Math.random() * 1.9; pc[i] = Math.random() * 10 < 5 ? 0 : Math.random() * 10 < 5 ? 1 : Math.random() * 10 < 6 ? 2 : 3; }
const COLORS = ['#ff3fa4', '#ff8cc6', '#b06bff', '#ffffff'];
let shape = 0, cycle = 0, cycleAt = 0, hoverShape = null, voiceIn = false, fxScale = 1;
const cap = $('.shape-cap');
const levels = new Float32Array(13);
function sizeFX() { fxScale = Math.min(devicePixelRatio || 1, 2); fx.width = Math.round(W * fxScale); fx.height = Math.round(H * fxScale); }
function burst(x, y) { for (let i = 0; i < N; i++) { const dx = px[i] - x, dy = py[i] - y, d = Math.hypot(dx, dy) + 1; if (d < 380) { const f = (1 - d / 380) * 26; vx[i] += dx / d * f; vy[i] += dy / d * f; } } }
function setShape(k) { if (k === shape) return; shape = k; for (let i = 0; i < N; i++) { vx[i] += (Math.random() - .5) * 14; vy[i] += (Math.random() - .5) * 14; } }
function drawFX(t) {
  const p = clamp(scrollY / (H * .8), 0, 1), mobile = W < 900;
  if (t - cycleAt > 4.6) { cycleAt = t; cycle = (cycle + 1) % SHAPES.length; }
  setShape(hoverShape ?? (voiceIn ? 3 : p < .6 ? cycle : 0));
  const cx = lerp(mobile ? W * .5 : W * .76, W * .5, p), cy = lerp(mobile ? H * .8 : H * .5, H * .5, p) - (mobile ? 0 : scrollY * .12 * (1 - p));
  const R = lerp(mobile ? Math.min(W * .3, H * .15) : Math.min(W * .19, H * .32), Math.min(W, H) * .4, p);
  const mxn = (mouse.sx / W - .5) * 2, myn = (mouse.sy / H - .5) * 2;
  const ay = mxn * .7 + Math.sin(t * .5) * .22, ax = myn * .45 + Math.cos(t * .37) * .12;
  const ca = Math.cos(ay), sa = Math.sin(ay), cb = Math.cos(ax), sb = Math.sin(ax);
  const T = SHAPES[shape], wave = shape === 3 && playing, mx = mouse.sx, my = mouse.sy, RR = mobile ? 90 : 150;
  for (let i = 0; i < N; i++) {
    let sx = T[i * 2], sy = T[i * 2 + 1]; const z = pz[i] * .22;
    if (wave) sy *= .35 + 2.2 * levels[clamp((sx + .95) / 1.9 * 13 | 0, 0, 12)];
    const x3 = sx * ca + z * sa, d3 = -sx * sa + z * ca, y3 = sy * cb + d3 * sb, pers = 1 / (1 - (d3 * cb - sy * sb) * .28);
    const tx = cx + x3 * R * pers, ty = cy + y3 * R * pers;
    vx[i] += (tx - px[i]) * .05 + (Math.random() - .5) * .12; vy[i] += (ty - py[i]) * .05 + (Math.random() - .5) * .12;
    const dx = px[i] - mx, dy = py[i] - my, d2 = dx * dx + dy * dy;
    if (d2 < RR * RR && mouse.seen) { const d = Math.sqrt(d2) + .01, f = (1 - d / RR); vx[i] += dx / d * f * 3.4; vy[i] += dy / d * f * 3.4; }
    vx[i] *= .84; vy[i] *= .84; px[i] += vx[i]; py[i] += vy[i];
  }
  ctx.setTransform(fxScale, 0, 0, fxScale, 0, 0); ctx.clearRect(0, 0, W, H);
  ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = lerp(.95, .34, p);
  for (let b = 0; b < 4; b++) { ctx.fillStyle = COLORS[b]; ctx.beginPath(); for (let i = b; i < N; i++) { if (pc[i] !== b) continue; const s = ps[i] * (1 + pz[i] * .35); ctx.rect(px[i], py[i], s, s); } ctx.fill(); }
  cap.style.opacity = (1 - p * 2.2).toFixed(2);
  cap.style.transform = `translate(${cx}px, ${cy + R * 1.28}px) translate(-50%, 0)`;
  if (cap.dataset.k !== String(shape)) { cap.dataset.k = shape; scramble(cap, LABELS[shape]); }
}

/* =============== 3. Text helpers: scramble, split into letters and words =============== */
const GLYPHS = '✦/\\<>[]{}=+*#01';
function scramble(el, to) {
  const final = to ?? el.dataset.final ?? el.textContent; el.dataset.final = final;
  if (REDUCED) { el.textContent = final; return; }
  cancelAnimationFrame(el._raf); let f = 0; const total = 26;
  const step = () => { const k = Math.floor(final.length * f / total); let s = final.slice(0, k);
    for (let i = k; i < final.length; i++) s += final[i] === ' ' ? ' ' : GLYPHS[Math.random() * GLYPHS.length | 0];
    el.textContent = s; if (f++ < total) el._raf = requestAnimationFrame(step); else el.textContent = final; };
  step();
}
function splitWords(el) { let i = 0; const walk = (node) => { for (const c of [...node.childNodes]) { if (c.nodeType === 3) { const frag = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach((w) => { if (!w) return; if (/^\s+$/.test(w)) { frag.append(' '); return; } const o = document.createElement('span'); o.className = 'sw'; const inner = document.createElement('span'); inner.style.setProperty('--i', i++); inner.textContent = w; o.append(inner); frag.append(o); }); c.replaceWith(frag); } else walk(c); } }; walk(el); }
$$('[data-split]').forEach(splitWords);
const letters = [];
(function splitH1() { const h = $('#h1'); let i = 0; h.setAttribute('aria-label', h.textContent);
  const walk = (node) => { for (const c of [...node.childNodes]) { if (c.nodeType === 3) { const frag = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach((w) => { if (!w) return; if (/^\s+$/.test(w)) { frag.append(' '); return; } const word = document.createElement('span'); word.className = 'w'; word.setAttribute('aria-hidden', 'true'); for (const ch of w) { const lo = document.createElement('span'); lo.className = 'lo'; lo.style.setProperty('--i', i++); const li = document.createElement('span'); li.className = 'li'; li.textContent = ch; lo.append(li); word.append(lo); letters.push({ el: li, cx: 0, cy: 0, x: 0, y: 0, r: 0, s: 1 }); } frag.append(word); }); c.replaceWith(frag); } else walk(c); } }; walk(h); })();
let lettersReady = false;
function measureLetters() { for (const l of letters) { l.el.style.transform = ''; } for (const l of letters) { const b = l.el.getBoundingClientRect(); l.cx = b.left + b.width / 2; l.cy = b.top + b.height / 2 + scrollY; } lettersReady = true; }
function drawLetters() {
  if (!lettersReady || scrollY > H) return;
  const mx = mouse.sx, my = mouse.sy + scrollY, RAD = Math.max(170, W * .13);
  for (const l of letters) {
    const dx = l.cx - mx, dy = l.cy - my, d = Math.hypot(dx, dy) + .01, f = mouse.seen ? Math.max(0, 1 - d / RAD) : 0, e = f * f;
    l.x = lerp(l.x, dx / d * e * 54, .16); l.y = lerp(l.y, dy / d * e * 54, .16); l.r = lerp(l.r, dx / RAD * e * 34, .16); l.s = lerp(l.s, 1 + e * .32, .16);
    l.el.style.transform = `translate(${l.x.toFixed(2)}px, ${l.y.toFixed(2)}px) rotate(${l.r.toFixed(2)}deg) scale(${l.s.toFixed(3)})`;
  }
}

/* =============== 4. Cursor, magnetic elements, tilt cards =============== */
const ring = $('.cur-ring'), cdot = $('.cur-dot'); let rx = mouse.x, ry = mouse.y;
if (FINE && !REDUCED) document.body.classList.add('has-cursor');
addEventListener('pointerdown', () => ring.classList.add('down')); addEventListener('pointerup', () => ring.classList.remove('down'));
document.addEventListener('pointerover', (e) => ring.classList.toggle('hot', !!e.target.closest('a, button, .card, .fact')));
const magnets = $$('[data-magnetic]').map((el) => ({ el, k: +el.dataset.magnetic, x: 0, y: 0, tx: 0, ty: 0, inner: el.querySelector('span') }));
for (const m of magnets) {
  m.el.addEventListener('pointermove', (e) => { const b = m.el.getBoundingClientRect(); m.tx = (e.clientX - b.left - b.width / 2) * m.k; m.ty = (e.clientY - b.top - b.height / 2) * m.k; m.el.style.setProperty('--bx', (e.clientX - b.left) + 'px'); m.el.style.setProperty('--by', (e.clientY - b.top) + 'px'); });
  m.el.addEventListener('pointerleave', () => { m.tx = m.ty = 0; });
}
function drawMagnets() { for (const m of magnets) { m.x = lerp(m.x, m.tx, .16); m.y = lerp(m.y, m.ty, .16); if (Math.abs(m.x) + Math.abs(m.y) < .02 && !m.tx && !m.ty) { if (m.on) { m.el.style.transform = ''; if (m.inner) m.inner.style.transform = ''; m.on = false; } continue; } m.on = true; m.el.style.transform = `translate(${m.x.toFixed(2)}px, ${m.y.toFixed(2)}px)`; if (m.inner) m.inner.style.transform = `translate(${(m.x * .35).toFixed(2)}px, ${(m.y * .35).toFixed(2)}px)`; } }
for (const el of $$('.tilt')) {
  const strong = el.classList.contains('card');
  el.addEventListener('pointermove', (e) => { const b = el.getBoundingClientRect(), x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height;
    el.classList.add('live'); el.style.setProperty('--mx', x * 100 + '%'); el.style.setProperty('--my', y * 100 + '%');
    if (FINE && !REDUCED) { el.style.setProperty('--ry', (x - .5) * (strong ? 22 : 14) + 'deg'); el.style.setProperty('--rx', (.5 - y) * (strong ? 18 : 12) + 'deg'); el.style.setProperty('--sc', strong ? 1.035 : 1.02); } });
  el.addEventListener('pointerleave', () => { el.classList.remove('live'); el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); el.style.setProperty('--sc', 1); });
  if (el.dataset.shape) { el.addEventListener('pointerenter', () => { hoverShape = +el.dataset.shape; }); el.addEventListener('pointerleave', () => { hoverShape = null; }); }
}

/* =============== 5. Scroll: reveals, marquee, lit words, nav, progress =============== */
const io = new IntersectionObserver((es) => { for (const e of es) if (e.isIntersecting) { e.target.classList.add('in'); $$('[data-scramble]', e.target).forEach((s) => scramble(s)); io.unobserve(e.target); } }, { threshold: .18 });
$$('[data-reveal], [data-inview]').forEach((el) => io.observe(el));
new IntersectionObserver((es) => { voiceIn = es[0].isIntersecting; }, { threshold: .45 }).observe($('#voice-sec'));
const ITEMS = ['AI model router', 'Patient-advocacy briefs', 'Voice for AI agents', 'RN-founded', 'Avon, Indiana', 'In development', 'Bootstrapped'];
const tracks = $$('.track').map((el, k) => { const html = ITEMS.map((s, i) => `<span class="${(i + k) % 2 ? 'o' : ''}">${s}</span><span class="s">✦</span>`).join(''); el.innerHTML = html + html + html + html; return { el, dir: +el.dataset.dir, off: 0, half: 0 }; });
function sizeTracks() { for (const tr of tracks) tr.half = tr.el.scrollWidth / 4; }
function drawTracks() { for (const tr of tracks) { tr.off += (1.1 + Math.abs(scrollVel) * .55) * tr.dir * (scrollVel < -1 ? -1 : 1); const o = ((tr.off % tr.half) + tr.half) % tr.half; tr.el.style.transform = `translate3d(${-o}px, 0, 0) skewX(${clamp(scrollVel * -.35, -14, 14)}deg)`; } }
const big = $('#big'); const words = [];
(function () { const walk = (node, pk) => { for (const c of [...node.childNodes]) { if (c.nodeType === 3) { const frag = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach((w) => { if (!w) return; if (/^\s+$/.test(w)) { frag.append(' '); return; } const s = document.createElement('span'); s.className = 'wd' + (pk ? ' pk' : ''); s.textContent = w; words.push(s); frag.append(s); }); c.replaceWith(frag); } else { walk(c, true); c.replaceWith(...c.childNodes); } } }; walk(big, false); })();
let litCount = -1;
function drawWords() { const b = big.getBoundingClientRect(); const pr = clamp((H * .86 - b.top) / (b.height + H * .42), 0, 1), k = Math.round(pr * words.length); if (k === litCount) return; litCount = k; words.forEach((w, i) => w.classList.toggle('lit', i < k)); }
const nav = $('.nav'), bar = $('.progress');
const wm = $('#wordmark'); const wml = [...'ASDALE DYNAMICS'].map((ch) => { const s = document.createElement('span'); s.textContent = ch; if (ch === ' ') s.style.width = '.22em'; wm.append(s); return { el: s, y: 0, f: 0 }; });
function drawWordmark(t) { const b = wm.getBoundingClientRect(); if (b.top > H || b.bottom < 0) return; wml.forEach((l, i) => { const r = l.el.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - mouse.sx), near = Math.abs(mouse.sy - (r.top + r.height / 2)) < r.height ? Math.max(0, 1 - d / (W * .16)) : 0; l.f = lerp(l.f, near, .12); l.y = lerp(l.y, -near * 34 + Math.sin(t * 1.6 + i * .5) * 5, .12); l.el.style.transform = `translateY(${l.y.toFixed(2)}px)`; l.el.style.color = `rgb(255 63 164 / ${l.f.toFixed(3)})`; l.el.style.textShadow = l.f > .05 ? `0 0 ${Math.round(l.f * 60)}px rgb(255 63 164 / ${(l.f * .8).toFixed(2)})` : ''; }); }

/* =============== 6. Voice player: the ring and the particle bars follow the audio =============== */
const clip = $('#clip'), playBtn = $('#play'), playLabel = $('#playlabel'), ringC = $('#ring'), rctx = ringC.getContext('2d');
let playing = false, analyser = null, freq = null;
playBtn.addEventListener('click', async () => {
  if (playing) { clip.pause(); return; }
  try { if (!analyser) { const AC = window.AudioContext || window.webkitAudioContext; const ac = new AC(); const src = ac.createMediaElementSource(clip); analyser = ac.createAnalyser(); analyser.fftSize = 256; analyser.smoothingTimeConstant = .78; src.connect(analyser); analyser.connect(ac.destination); freq = new Uint8Array(analyser.frequencyBinCount); clip._ac = ac; } await clip._ac.resume(); } catch (err) { analyser = null; }
  clip.currentTime = 0; clip.play();
});
clip.addEventListener('play', () => { playing = true; playLabel.textContent = 'Stop'; });
for (const ev of ['pause', 'ended']) clip.addEventListener(ev, () => { playing = false; playLabel.textContent = 'Play'; });
function drawRing(t) {
  const b = ringC.getBoundingClientRect(); if (b.bottom < 0 || b.top > H) return;
  const dpr = Math.min(devicePixelRatio || 1, 2), S = Math.round(b.width * dpr); if (ringC.width !== S) ringC.width = ringC.height = S;
  if (playing && analyser) analyser.getByteFrequencyData(freq);
  for (let i = 0; i < 13; i++) { const v = playing ? (analyser ? freq[2 + i * 3] / 255 : .35 + .3 * Math.sin(t * 9 + i * 1.3)) : .18 + .08 * Math.sin(t * 2 + i * .6); levels[i] = lerp(levels[i], v, .3); }
  const c = S / 2, r0 = S * .2, ang = Math.atan2(mouse.sy - (b.top + b.height / 2), mouse.sx - (b.left + b.width / 2)), near = clamp(1 - Math.hypot(mouse.sx - b.left - b.width / 2, mouse.sy - b.top - b.height / 2) / (b.width * 1.1), 0, 1);
  rctx.clearRect(0, 0, S, S); rctx.lineCap = 'round'; const BARS = 96;
  for (let i = 0; i < BARS; i++) {
    const a = i / BARS * Math.PI * 2 - Math.PI / 2, k = Math.min(i, BARS - i) / (BARS / 2);
    let v = playing && analyser ? freq[2 + Math.round(k * 52)] / 255 : playing ? .3 + .3 * Math.abs(Math.sin(t * 8 + i * .7)) : .1 + .07 * Math.sin(t * 2.2 + i * .45);
    let da = Math.abs(a - ang); da = Math.min(da, Math.PI * 2 - da, Math.abs(a + Math.PI * 2 - ang)); v += Math.max(0, 1 - da / .9) * .38 * near;
    const len = S * (.03 + v * .24), x0 = c + Math.cos(a) * r0, y0 = c + Math.sin(a) * r0, x1 = c + Math.cos(a) * (r0 + len), y1 = c + Math.sin(a) * (r0 + len);
    const g = rctx.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, 'rgba(255,63,164,.95)'); g.addColorStop(1, 'rgba(176,107,255,0)');
    rctx.strokeStyle = g; rctx.lineWidth = S * .008; rctx.beginPath(); rctx.moveTo(x0, y0); rctx.lineTo(x1, y1); rctx.stroke();
  }
}

/* =============== 7. One loop drives everything =============== */
function resize() { W = innerWidth; H = innerHeight; sizeGL(); sizeFX(); sizeTracks(); if (lettersReady) measureLetters(); }
addEventListener('resize', resize); resize();
let prevY = 0;
function tick(ms) {
  const t = ms / 1000, c0 = performance.now();
  scrollY = window.scrollY; scrollVel = lerp(scrollVel, scrollY - lastScroll, .2); lastScroll = scrollY;
  mouse.sx = lerp(mouse.sx, mouse.x, .14); mouse.sy = lerp(mouse.sy, mouse.y, .14);
  drawGL(t); drawFX(t); drawLetters(); drawMagnets(); drawTracks(); drawWords(); drawWordmark(t); drawRing(t);
  rx = lerp(rx, mouse.x, .2); ry = lerp(ry, mouse.y, .2);
  ring.style.transform = `translate(${rx}px, ${ry}px)`; cdot.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
  bar.style.transform = `scaleX(${clamp(scrollY / (document.documentElement.scrollHeight - H), 0, 1)})`;
  if (Math.abs(scrollY - prevY) > 6) { nav.classList.toggle('hide', scrollY > prevY && scrollY > 240); prevY = scrollY; }
  window.__ms = lerp(window.__ms || 0, performance.now() - c0, .2);
}
function frame(ms) { tick(ms); if (!REDUCED) requestAnimationFrame(frame); }
// Test hook: run n frames at once (used to check the page where animation is throttled).
window.__step = (n = 60) => { let ms = performance.now(); for (let i = 0; i < n; i++) tick(ms += 16.7); return +window.__ms.toFixed(2); };
const start = () => { document.body.classList.add('ready'); sizeTracks(); $$('.hero [data-scramble]').forEach((s) => setTimeout(() => scramble(s), 300)); setTimeout(measureLetters, REDUCED ? 0 : 2300); requestAnimationFrame(frame); };
// Start when the fonts are in, or after 2.5 s at the latest so the loader can never get stuck.
Promise.race([document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 2500))]).then(() => setTimeout(start, 350));
})();
