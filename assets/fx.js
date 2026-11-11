// Motion layer for every page except the homepage: WebGL background, cursor, floating nav,
// headline letters, scroll reveals, tilting cards, magnetic buttons and the footer wordmark.
// Styles are in fx.css. The homepage has its own, larger version in home.js.
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;
let W = innerWidth, H = innerHeight;
const mouse = { x: W * .7, y: H * .35, sx: W * .7, sy: H * .35, seen: false };
let scrollY = 0, clickAt = -10, clickX = 0, clickY = 0;
const add = (cls, parent = document.body) => { const el = document.createElement('div'); el.className = cls; el.setAttribute('aria-hidden', 'true'); parent.appendChild(el); return el; };

addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; if (!mouse.seen) { mouse.seen = true; mouse.sx = mouse.x; mouse.sy = mouse.y; } }, { passive: true });
addEventListener('pointerdown', (e) => {
  clickAt = performance.now() / 1000; clickX = e.clientX; clickY = e.clientY;
  if (REDUCED) return;
  const s = add('shock'); s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px';
  s.addEventListener('animationend', () => s.remove());
});

/* =============== 1. WebGL background (same shader as the homepage, dimmed for reading) =============== */
const glc = $('#aurora');
const gl = glc && glc.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
let glU = null, glScale = 1;
if (gl) {
  const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  const fs = `precision highp float;
uniform vec2 r; uniform float t; uniform vec2 m; uniform float s; uniform vec3 c;
float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,v=0.;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*r)/r.y; vec2 mp=(m-.5*r)/r.y; float d=length(uv-mp);
  vec2 q=uv*1.5; q-=.42*(uv-mp)*exp(-d*2.2); q.y+=s*.0005;
  float a=fbm(q+vec2(t*.05,-t*.035));
  vec2 w=q+1.9*vec2(fbm(q+a+t*.06),fbm(q-a-t*.045));
  float f=fbm(w);
  vec3 ink=vec3(.027,.024,.039), vio=vec3(.42,.2,.95), pk=vec3(1.,.25,.64);
  vec3 col=mix(ink,vio*.55,smoothstep(.25,.8,f));
  col=mix(col,pk*.85,smoothstep(.52,.92,f)*.85);
  col+=pk*.32*exp(-d*3.2)*(.6+.4*f);
  float cd=length(uv-(c.xy-.5*r)/r.y); float ring=exp(-pow((cd-c.z*1.3)*8.,2.))*exp(-c.z*1.7);
  col+=(pk+.3)*ring*.7;
  col*=.56*mix(1.,.72,clamp(s/700.,0.,1.));
  col*=1.-.55*dot(uv*.75,uv*.75);
  col+=(h(gl_FragCoord.xy+t)-.5)*.025;
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
    glc.classList.add('on'); // site.css keeps the canvas invisible until it has something to show
  }
}
function sizeGL() { if (!gl) return; glScale = Math.min(devicePixelRatio || 1, 1.25) * (W > 1600 ? .8 : 1); glc.width = Math.round(W * glScale); glc.height = Math.round(H * glScale); gl.viewport(0, 0, glc.width, glc.height); }
function drawGL(t) {
  if (!glU) return;
  gl.uniform2f(glU.r, glc.width, glc.height); gl.uniform1f(glU.t, t);
  gl.uniform2f(glU.m, mouse.sx * glScale, (H - mouse.sy) * glScale); gl.uniform1f(glU.s, scrollY);
  gl.uniform3f(glU.c, clickX * glScale, (H - clickY) * glScale, t - clickAt);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

/* =============== 2. Headline letters and section-heading words =============== */
const letters = []; let lettersReady = false;
const h1 = $('.hero-copy h1');
function eachWord(el, make) { const walk = (node) => { for (const c of [...node.childNodes]) { if (c.nodeType === 3) { const frag = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach((w) => { if (!w) return; if (/^\s+$/.test(w)) frag.append(' '); else frag.append(make(w)); }); c.replaceWith(frag); } else if (c.nodeType === 1) walk(c); } }; walk(el); }
if (h1 && !REDUCED) {
  let i = 0; h1.setAttribute('aria-label', h1.textContent.trim());
  eachWord(h1, (w) => { const word = document.createElement('span'); word.className = 'w'; word.setAttribute('aria-hidden', 'true');
    for (const ch of w) { const lo = document.createElement('span'); lo.className = 'lo'; lo.style.setProperty('--i', i++); const li = document.createElement('span'); li.className = 'li'; li.textContent = ch; lo.append(li); word.append(lo); letters.push({ el: li, cx: 0, cy: 0, x: 0, y: 0, r: 0, s: 1 }); }
    return word; });
  setTimeout(measureLetters, 1250 + i * 24);
}
if (h1) h1.classList.add('fx-split');
function measureLetters() { for (const l of letters) l.el.style.transform = ''; for (const l of letters) { const b = l.el.getBoundingClientRect(); l.cx = b.left + b.width / 2; l.cy = b.top + b.height / 2 + window.scrollY; } lettersReady = true; }
function drawLetters() {
  if (!lettersReady || scrollY > H) return;
  const mx = mouse.sx, my = mouse.sy + scrollY, RAD = Math.max(130, W * .09);
  for (const l of letters) {
    const dx = l.cx - mx, dy = l.cy - my, d = Math.hypot(dx, dy) + .01, f = mouse.seen ? Math.max(0, 1 - d / RAD) : 0, e = f * f;
    l.x = lerp(l.x, dx / d * e * 34, .16); l.y = lerp(l.y, dy / d * e * 34, .16); l.r = lerp(l.r, dx / RAD * e * 26, .16); l.s = lerp(l.s, 1 + e * .25, .16);
    l.el.style.transform = `translate(${l.x.toFixed(2)}px, ${l.y.toFixed(2)}px) rotate(${l.r.toFixed(2)}deg) scale(${l.s.toFixed(3)})`;
  }
}
if (!REDUCED) for (const h2 of $$('.section-head h2')) { let i = 0; eachWord(h2, (w) => { const o = document.createElement('span'); o.className = 'sw'; const inner = document.createElement('span'); inner.style.setProperty('--i', i++); inner.textContent = w; o.append(inner); return o; }); }

/* =============== 3. Scroll reveal =============== */
const REVEAL = 'main > .section, .notes, .page-hero .lede, .hero-actions';
if (!REDUCED && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => { for (const e of es) if (e.isIntersecting) { e.target.classList.add('fx-in'); io.unobserve(e.target); } }, { rootMargin: '0px 0px -7% 0px' });
  $$(REVEAL).forEach((el) => io.observe(el));
} else $$(REVEAL).forEach((el) => el.classList.add('fx-in'));
root.classList.add('fx-live');

/* =============== 4. Cursor, tilting cards, magnetic buttons =============== */
// Shelves are filled in by site.js after load, so all of this listens on the document instead of on each card.
const TILT = '.item, .link-card, .feature, .notes > section';
const ring = add('cur-ring'), cdot = add('cur-dot'); let rx = mouse.x, ry = mouse.y;
if (FINE && !REDUCED) document.body.classList.add('has-cursor');
addEventListener('pointerdown', () => ring.classList.add('down')); addEventListener('pointerup', () => ring.classList.remove('down'));
let tiltEl = null; const mag = { el: null, x: 0, y: 0, tx: 0, ty: 0 };
const untilt = () => { if (!tiltEl) return; tiltEl.classList.remove('fx-tilting'); for (const p of ['--rx', '--ry', '--sc']) tiltEl.style.removeProperty(p); tiltEl = null; };
document.addEventListener('pointermove', (e) => {
  const t = e.target.closest ? e.target : null; if (!t) return;
  ring.classList.toggle('hot', !!t.closest('a, button, summary, ' + TILT));
  const card = t.closest(TILT);
  if (card !== tiltEl) untilt();
  if (card) { const b = card.getBoundingClientRect(), x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height;
    card.style.setProperty('--mx', x * 100 + '%'); card.style.setProperty('--my', y * 100 + '%');
    if (FINE && !REDUCED) { tiltEl = card; card.classList.add('fx-tilting'); const k = Math.min(1, 420 / b.width); // wide cards tilt less
      card.style.setProperty('--ry', ((x - .5) * 9 * k).toFixed(2) + 'deg'); card.style.setProperty('--rx', ((.5 - y) * 8 * k).toFixed(2) + 'deg'); card.style.setProperty('--sc', 1.012); } }
  const btn = t.closest('.btn');
  if (btn !== mag.el) { mag.tx = mag.ty = 0; if (btn) { if (mag.el) mag.el.style.transform = ''; mag.el = btn; mag.x = mag.y = 0; } }
  if (btn) { const b = btn.getBoundingClientRect(); btn.style.setProperty('--bx', (e.clientX - b.left) + 'px'); btn.style.setProperty('--by', (e.clientY - b.top) + 'px');
    if (FINE && !REDUCED) { mag.tx = (e.clientX - b.left - b.width / 2) * .28; mag.ty = (e.clientY - b.top - b.height / 2) * .28; } }
}, { passive: true });
document.addEventListener('pointerleave', () => { untilt(); mag.tx = mag.ty = 0; });
function drawMagnet() { if (!mag.el) return; mag.x = lerp(mag.x, mag.tx, .16); mag.y = lerp(mag.y, mag.ty, .16);
  if (!mag.tx && !mag.ty && Math.abs(mag.x) + Math.abs(mag.y) < .05) { mag.el.style.transform = ''; mag.el = null; return; }
  mag.el.style.transform = `translate(${mag.x.toFixed(2)}px, ${mag.y.toFixed(2)}px)`; }

/* =============== 5. Nav, progress bar, footer wordmark =============== */
const nav = $('.topbar'), bar = add('fx-progress');
const here = $('.top-nav [aria-current="page"]');
if (here) { const tn = here.parentElement; tn.scrollLeft = here.offsetLeft - (tn.clientWidth - here.offsetWidth) / 2; }
let wm = null, wml = [];
const foot = $('footer.foot');
if (foot) { wm = document.createElement('div'); wm.className = 'fx-wordmark'; wm.setAttribute('aria-hidden', 'true'); foot.before(wm);
  wml = [...'ASDALE DYNAMICS'].map((ch) => { const s = document.createElement('span'); s.textContent = ch; if (ch === ' ') s.style.width = '.22em'; wm.append(s); return { el: s, y: 0, f: 0 }; }); }
function drawWordmark(t) { if (!wm) return; const b = wm.getBoundingClientRect(); if (b.top > H || b.bottom < 0) return;
  wml.forEach((l, i) => { const r = l.el.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - mouse.sx), near = mouse.seen && Math.abs(mouse.sy - (r.top + r.height / 2)) < r.height ? Math.max(0, 1 - d / (W * .16)) : 0;
    l.f = lerp(l.f, near, .12); l.y = lerp(l.y, -near * 26 + Math.sin(t * 1.6 + i * .5) * 4, .12);
    l.el.style.transform = `translateY(${l.y.toFixed(2)}px)`; l.el.style.color = `rgb(255 63 164 / ${l.f.toFixed(3)})`;
    l.el.style.textShadow = l.f > .05 ? `0 0 ${Math.round(l.f * 60)}px rgb(255 63 164 / ${(l.f * .8).toFixed(2)})` : ''; }); }

/* =============== 6. One loop drives everything =============== */
function resize() { W = innerWidth; H = innerHeight; sizeGL(); if (lettersReady) measureLetters(); }
addEventListener('resize', resize); resize();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (lettersReady) measureLetters(); });
let prevY = 0;
function tick(ms) {
  const t = ms / 1000, c0 = performance.now();
  scrollY = window.scrollY;
  mouse.sx = lerp(mouse.sx, mouse.x, .14); mouse.sy = lerp(mouse.sy, mouse.y, .14);
  drawGL(t); drawLetters(); drawMagnet(); drawWordmark(t);
  rx = lerp(rx, mouse.x, .2); ry = lerp(ry, mouse.y, .2);
  ring.style.transform = `translate(${rx}px, ${ry}px)`; cdot.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
  bar.style.transform = `scaleX(${clamp(scrollY / Math.max(1, root.scrollHeight - H), 0, 1)})`;
  if (nav && Math.abs(scrollY - prevY) > 6) { nav.classList.toggle('fx-hide', scrollY > prevY && scrollY > 240 && !nav.contains(document.activeElement)); prevY = scrollY; }
  window.__ms = lerp(window.__ms || 0, performance.now() - c0, .2);
}
function frame(ms) { tick(ms); requestAnimationFrame(frame); }
// Test hook: run n frames at once (used to check a page where animation is throttled).
window.__step = (n = 60) => { let ms = performance.now(); for (let i = 0; i < n; i++) tick(ms += 16.7); return +window.__ms.toFixed(2); };
if (REDUCED) { tick(performance.now()); addEventListener('scroll', () => tick(performance.now()), { passive: true }); } // still picture, no loop
else requestAnimationFrame(frame);
})();
