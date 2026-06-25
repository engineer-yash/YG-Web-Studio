import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import projects from '../data/projects.json';

const categoryGradient = {
  'Jewellery Website': 'from-amber-500/40 via-yellow-700/20 to-yellow-900/40',
  'Restaurant Website': 'from-orange-600/30 via-red-700/20 to-rose-900/40',
  'E-Commerce Website': 'from-emerald-600/30 via-teal-700/20 to-cyan-900/40',
};

export default function Portfolio() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="portfolio" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Recent Work</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold inline-block title-accent">
            Featured <span className="text-gold-gradient">Portfolio</span>
          </h2>
          <p className="mt-5 text-muted max-w-2xl mx-auto">
            A glimpse into some of the brands we've helped transform online.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group"
              data-testid={`portfolio-card-${i}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${categoryGradient[p.category] || 'from-gold/30 to-bg'} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="font-display font-extrabold text-3xl text-white/90 drop-shadow">{p.title}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gold">{p.category}</div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent opacity-80 group-hover:opacity-100 transition" />
              </div>

              <div className="p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{p.category}</div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold/30 text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn-gold !py-2 !px-4 text-xs" data-testid={`portfolio-demo-${i}`}>
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost !py-2 !px-4 text-xs" data-testid={`portfolio-code-${i}`}>
                    <Github size={14} /> Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}