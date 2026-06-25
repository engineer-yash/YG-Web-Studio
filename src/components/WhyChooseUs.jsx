import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import features from '../data/features.json';

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="why" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Why us</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold inline-block title-accent">
            Why Choose <span className="text-gold-gradient">YG Web Studio</span>
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = Icons[f.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-7 flex gap-5 items-start"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}