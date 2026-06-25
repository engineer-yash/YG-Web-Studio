import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-bg/70 border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3" data-testid="nav-logo">
          <img src="images/yglogo.png" alt="YG Web Studio" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-extrabold tracking-wide">
              <span className="text-gold-gradient">YG</span> <span className="text-white">WEB STUDIO</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted/70">Business Website Specialist</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors relative group"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 bg-gold" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-gold !py-2.5 !px-5 hidden lg:inline-flex text-sm" data-testid="nav-cta">
          Free Demo
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-strong border-t border-gold/20"
          >
            <ul className="px-6 py-6 space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block text-white/90 hover:text-gold py-1.5 font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a onClick={() => setOpen(false)} href="#contact" className="btn-gold w-full justify-center mt-2">
                Request Free Demo
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}