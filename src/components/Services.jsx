import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import services from '../data/services.json';

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="services" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">What we do</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold inline-block title-accent">
            Premium <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="mt-5 text-muted max-w-2xl mx-auto">
            End-to-end web solutions designed to make your business stand out, convert better and grow faster.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass rounded-2xl p-7 relative overflow-hidden group cursor-pointer"
                data-testid={`service-card-${i}`}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-all" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/30 flex items-center justify-center text-gold mb-5 group-hover:rotate-12 transition-transform duration-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">{s.title}</h3>
                  <p className="mt-2 text-muted leading-relaxed text-sm">{s.desc}</p>
                  <div className="mt-5 text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}