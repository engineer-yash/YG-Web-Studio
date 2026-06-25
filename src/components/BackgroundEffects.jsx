import { useEffect, useRef } from 'react';

/**
 * Decorative background: animated gold particles + soft gradients
 * Implemented with canvas for perf. Kept subtle so content always reads first.
 */
export default function BackgroundEffects() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);

    const N = Math.min(60, Math.floor(w / 28));
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.6 + 0.2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        grad.addColorStop(0, `rgba(241,216,122,${p.a})`);
        grad.addColorStop(1, 'rgba(212,175,55,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      {/* Base dark gradient */}
      <div className="fixed inset-0 -z-10" style={{
        background: 'radial-gradient(1200px 600px at 80% -10%, rgba(212,175,55,0.10), transparent 60%), radial-gradient(900px 500px at -10% 30%, rgba(14,42,54,0.9), transparent 60%), linear-gradient(180deg, #061520 0%, #071824 60%, #050f17 100%)'
      }} />
      {/* Grain */}
      <div className="fixed inset-0 -z-10 opacity-[0.06] mix-blend-overlay" style={{
        backgroundImage: 'url(\"data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>\")'
      }} />
      <canvas ref={ref} className="fixed inset-0 -z-10 pointer-events-none" />
    </>
  );
}