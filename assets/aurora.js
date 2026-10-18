// Copied from Guides for Everything (guidesforeverythingai.github.io), v3 design.
// The aurora: magenta, pink and violet light flowing behind the page, seen through a halftone dot grid,
// in the spirit of Gemini's background. One WebGL pass computes the light field and the dots together;
// browsers without WebGL get a 2D canvas glow instead. 60 fps, paused on hidden tabs, still under reduced motion.
(() => {
  const cv = document.getElementById('aurora');
  const still = matchMedia('(prefers-reduced-motion: reduce)');
  const SPEED = 10.5;      // drift speed (10.5x the first version; v4 was 3.5x)
  const STILL_T = 12;      // the frame shown when motion is off
  // blob: colour, radius (share of the long side), home x/y, drift amplitude x/y, speed, phase
  const blobs = [
    [[1.00, .18, .53], .55, .78, .14, .16, .10, .061, 0.0],
    [[1.00, .25, .64], .42, .22, .50, .18, .16, .047, 1.7],
    [[.59, .14, .75],  .50, .55, .82, .22, .12, .039, 3.1],
    [[.77, .07, .28],  .40, .12, .10, .12, .14, .053, 4.4],
    [[.66, .36, 1.00], .30, .62, .40, .26, .20, .071, 2.3],
  ];
  const pos = (b, t, w, h) => {
    const k = t * b[6] + b[7], m = Math.max(w, h);
    return [(b[2] + Math.sin(k) * b[4] + Math.sin(k * .37) * b[4] * .5) * w,
            (b[3] + Math.cos(k * .83) * b[5]) * h,
            b[1] * m * (.85 + .2 * Math.sin(k * 1.3))];
  };
  let raf = 0, draw = null, resize = null;

  const gl = cv.getContext('webgl', { alpha: false, antialias: false, premultipliedAlpha: false, powerPreference: 'low-power' });
  if (gl) {
    const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    const fs = `precision mediump float;
      uniform vec2 res; uniform float cell; uniform float gain; uniform vec3 bc[5]; uniform vec3 bp[5];
      vec3 field(vec2 q){ vec3 c=vec3(0.); for(int i=0;i<5;i++){ float d=length(q-bp[i].xy)/bp[i].z; c+=bc[i]*exp(-3.2*d*d); } return c*gain; }
      void main(){
        vec2 f=vec2(gl_FragCoord.x,res.y-gl_FragCoord.y);
        // a grid turned 45 degrees, like a printed halftone screen
        mat2 r=mat2(.7071,-.7071,.7071,.7071);
        vec2 g=r*f/cell; vec2 id=floor(g)+.5; vec2 center=mat2(.7071,.7071,-.7071,.7071)*(id*cell);
        vec3 lc=field(center); float lum=clamp(dot(lc,vec3(.45,.3,.25)),0.,1.);
        float rad=.46*sqrt(lum);                         // dot radius follows the light
        float d=length(g-id);
        float aa=1.2/cell;
        float dot=1.-smoothstep(rad-aa,rad+aa,d);
        vec3 glow=field(f)*.10;                          // the soft light behind the dots
        vec3 col=vec3(.027,.024,.039)+glow+dot*lc*.95;
        gl_FragColor=vec4(min(col,vec3(1.)),1.);
      }`;
    const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(pr);
    if (gl.getProgramParameter(pr, gl.LINK_STATUS)) {
      gl.useProgram(pr);
      const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const U = (n) => gl.getUniformLocation(pr, n);
      const uRes = U('res'), uCell = U('cell'), uGain = U('gain'), uBc = U('bc'), uBp = U('bp');
      gl.uniform3fv(uBc, new Float32Array(blobs.flatMap((b) => b[0])));
      let dpr = 1;
      resize = () => {
        dpr = Math.min(devicePixelRatio || 1, 1.5);
        cv.width = Math.round(innerWidth * dpr); cv.height = Math.round(innerHeight * dpr);
        gl.viewport(0, 0, cv.width, cv.height);
        gl.uniform2f(uRes, cv.width, cv.height);
        gl.uniform1f(uCell, 6.5 * dpr);                 // dot pitch: 6.5 CSS px
        gl.uniform1f(uGain, innerWidth < 700 ? .23 : .38); // phones: the light covers more of the screen, so dim it
      };
      draw = (t) => {
        const w = cv.width, h = cv.height, p = [];
        for (const b of blobs) p.push(...pos(b, t, w, h));
        gl.uniform3fv(uBp, new Float32Array(p));
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      };
    }
  }
  if (!draw) {
    // 2D fallback: the glow alone, drawn small and scaled up so smoothing does the blur
    const ctx = cv.getContext('2d', { alpha: false });
    resize = () => { cv.width = Math.max(64, Math.round(innerWidth / 8)); cv.height = Math.max(64, Math.round(innerHeight / 8)); };
    draw = (t) => {
      const w = cv.width, h = cv.height;
      ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = '#07060a'; ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (const b of blobs) {
        const [x, y, r] = pos(b, t, w, h), [R, G, B] = b[0].map((v) => Math.round(v * 255));
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${R},${G},${B},.22)`); g.addColorStop(.45, `rgba(${R},${G},${B},.07)`); g.addColorStop(1, `rgba(${R},${G},${B},0)`);
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      }
    };
  }
  const loop = (now) => { raf = requestAnimationFrame(loop); draw(STILL_T + now / 1000 * SPEED); }; // every frame (60 fps) so the faster drift stays smooth
  const start = () => { cancelAnimationFrame(raf); if (still.matches || document.hidden) { draw(STILL_T); return; } raf = requestAnimationFrame(loop); };
  resize(); draw(STILL_T); cv.classList.add('on'); start();
  addEventListener('resize', () => { resize(); draw(STILL_T + performance.now() / 1000 * SPEED); }, { passive: true });
  document.addEventListener('visibilitychange', () => (document.hidden ? cancelAnimationFrame(raf) : start()));
  still.addEventListener?.('change', start);
})();
