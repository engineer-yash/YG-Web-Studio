import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, PenTool, Code2, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  { n: '01', icon: MessageCircle, title: 'Discussion', desc: 'We listen to your goals, audience and brand to craft the perfect plan.' },
  { n: '02', icon: PenTool, title: 'Design', desc: 'High-fidelity, on-brand UI designs you approve before development.' },
  { n: '03', icon: Code2, title: 'Development', desc: 'Clean, fast, responsive code built with modern stacks.' },
  { n: '04', icon: ShieldCheck, title: 'Testing', desc: 'Rigorous QA across devices, browsers, performance and SEO.' },
  { n: '05', icon: Rocket, title: 'Launch', desc: 'Deployment, handover and post-launch support — you go live with confidence.' },
];

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="process" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">How we work</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold inline-block title-accent">
            Working <span className="text-gold-gradient">Process</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* timeline vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent hidden md:block" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 ? 'md:[direction:rtl]' : ''}`}
              >
                <div className={`glass rounded-2xl p-6 md:p-7 [direction:ltr] ${i % 2 ? 'md:text-right' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                      <s.icon size={20} />
                    </div>
                    <div className="font-display text-gold text-sm tracking-widest">STEP {s.n}</div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">{s.title}</h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}