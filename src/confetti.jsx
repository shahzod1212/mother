export function confetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("canvas");
  Object.assign(c.style, {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 100,
  });
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  document.body.appendChild(c);
  const ctx = c.getContext("2d");
  const colors = ["#f1d9a7", "#f2a1b5", "#b3294e", "#fff4ea", "#e0b15a"];
  const parts = Array.from({ length: 170 }, () => ({
    x: c.width / 2 + (Math.random() - 0.5) * 240,
    y: c.height * 0.62,
    vx: (Math.random() - 0.5) * 18,
    vy: -Math.random() * 19 - 6,
    s: Math.random() * 9 + 5,
    r: Math.random() * 6.28,
    vr: (Math.random() - 0.5) * 0.3,
    c: colors[(Math.random() * colors.length) | 0],
  }));
  let t = 0;
  const tick = () => {
    t++;
    ctx.clearRect(0, 0, c.width, c.height);
    for (const p of parts) {
      p.vy += 0.32;
      p.vx *= 0.992;
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      ctx.restore();
    }
    if (t < 280) requestAnimationFrame(tick);
    else c.remove();
  };
  tick();
}
