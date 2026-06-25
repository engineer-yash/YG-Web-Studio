import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Decorative gold corners (mimic business card) */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rotate-45 bg-gold-gradient opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[420px] h-[420px] rotate-45 bg-gold-gradient opacity-20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mx-auto mb-8 w-44 h-44 md:w-56 md:h-56 rounded-3xl glass flex items-center justify-center animate-floatY shadow-gold"
        >
          <img src="https://res.cloudinary.com/dkinrfyq7/image/upload/v1782386118/yglogo_rzuudx.png" alt="YG Web Studio logo" className="w-32 md:w-44 object-contain" />
        </motion.div>

        {/* <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5 text-xs tracking-[0.3em] uppercase text-gold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Premium Web Studio · Pune, India
        </motion.div> */}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          <span className="text-gold-gradient">YG</span> <span className="text-white">WEB STUDIO</span>
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-5 text-base md:text-lg text-muted/90 font-light tracking-wide">
          <span className="text-gold-shimmer font-semibold">Modern Websites</span> for Growing Businesses
        </motion.p>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-6 max-w-2xl mx-auto text-muted text-base md:text-lg leading-relaxed">
          We build premium business websites that help companies attract more customers, establish trust, and grow online.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-gold animate-glow" data-testid="hero-free-demo">
            Request a Free Website Demo <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className="btn-ghost" data-testid="hero-view-portfolio">
            View Portfolio
          </a>
          <a href="#contact" className="btn-ghost" data-testid="hero-consult">
            <Phone size={16} /> Free Consultation
          </a>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {['Business', 'E-Commerce', 'SEO', 'Maintenance'].map((t) => (
            <div key={t} className="glass rounded-2xl px-4 py-3 text-xs uppercase tracking-widest text-muted/90">
              <span className="text-gold">●</span> {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}