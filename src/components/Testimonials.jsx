import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';
import testimonials from '../data/testimonials.json';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section id="testimonials" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Kind Words</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold inline-block title-accent">
            Client <span className="text-gold-gradient">Testimonials</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="!pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="glass rounded-3xl p-8 h-full flex flex-col">
                  <Quote className="text-gold" />
                  <p className="mt-4 text-white/90 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-1 text-gold">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-gold/20 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center font-display font-bold text-bg">
                      {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .swiper-pagination-bullet { background: rgba(212,175,55,0.4) !important; opacity: 1; }
        .swiper-pagination-bullet-active { background: #D4AF37 !important; width: 22px; border-radius: 4px; }
      `}</style>
    </section>
  );
}