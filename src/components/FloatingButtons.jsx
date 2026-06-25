import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919409447069';
const WHATSAPP_MSG = encodeURIComponent("Hi Yash! I'd like a free website demo for my business.");

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed z-50 bottom-5 right-5 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-gold-gradient text-bg shadow-gold hover:scale-110 transition-transform flex items-center justify-center"
            aria-label="Back to top"
            data-testid="float-top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="tel:+919409447069"
        className="w-12 h-12 rounded-full bg-bg border border-gold/40 text-gold hover:bg-gold hover:text-bg transition-all flex items-center justify-center shadow-goldSm"
        aria-label="Call us"
        data-testid="float-call"
      >
        <Phone size={18} />
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform flex items-center justify-center animate-glow"
        aria-label="WhatsApp"
        data-testid="float-whatsapp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}