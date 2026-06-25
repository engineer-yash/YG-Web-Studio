import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Responsive Sites' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section ref={ref} className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-6xl font-extrabold text-gold-gradient">
                  {inView && <CountUp end={s.value} duration={2.2} />}
                  {s.suffix}
                </div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.25em] text-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}