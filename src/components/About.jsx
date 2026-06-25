import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Zap, Sparkles, Smartphone } from 'lucide-react';

const features = [
  { icon: Target, title: 'Business Focus', desc: 'Strategy-first websites built around your goals and customers.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Most projects launched within 7–14 days without compromising quality.' },
  { icon: Sparkles, title: 'Modern UI', desc: 'Clean, premium aesthetics that elevate your brand at first glance.' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Beautiful and snappy on every device — mobile, tablet and desktop.' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">About</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight title-accent">
              About <span className="text-gold-gradient">YG Web Studio</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              Founded by <span className="text-white font-semibold">Yash Gohel</span>, a passionate
              <span className="text-gold"> Business Website Specialist</span> from Pune. We craft modern,
              high-converting websites for restaurants, jewellery showrooms, e-commerce stores and
              ambitious local brands across India.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Every project is a partnership — from the first idea to the final pixel — built to make
              your business look as premium online as it feels in person.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Restaurants', 'Jewellery', 'E-Commerce', 'Local Brands'].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full border border-gold/40 text-xs uppercase tracking-widest text-muted">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:rotate-6 transition-transform">
                  <f.icon size={22} />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}