import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react';

/**
 * Contact form is plain HTML POST — wire to FormSubmit (https://formsubmit.co)
 * by replacing the action URL with: https://formsubmit.co/hello.ygwebstudio@gmail.com
 * On first submit FormSubmit will email a confirmation link to activate the form.
 */
const FORM_ENDPOINT = 'https://formsubmit.co/hello.ygwebstudio@gmail.com';

const cards = [
  { icon: Phone, label: 'Phone', value: '+91 9409447069', href: 'tel:+919409447069' },
  { icon: Mail, label: 'Email', value: 'hello.ygwebstudio@gmail.com', href: 'mailto:hello.ygwebstudio@gmail.com' },
  { icon: Globe, label: 'Website', value: 'ygwebstudio.vercel.app', href: 'https://ygwebstudio.vercel.app' },
  { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra', href: '#' },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Get in touch</div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold inline-block title-accent">
            Let's <span className="text-gold-gradient">Grow Together</span>
          </h2>
          <p className="mt-5 text-muted max-w-2xl mx-auto">
            Tell us about your business — we'll send a free website demo within 48 hours.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {cards.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 group"
                data-testid={`contact-card-${c.label.toLowerCase()}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold group-hover:rotate-6 transition-transform">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{c.label}</div>
                  <div className="font-semibold text-white text-sm md:text-base">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="glass rounded-2xl p-5 mt-4">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Business Hours</div>
              <div className="text-sm text-muted">Mon – Sat · 10:00 AM – 8:00 PM IST</div>
              <div className="text-sm text-muted">Sundays — by appointment</div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            action={FORM_ENDPOINT}
            method="POST"
            onSubmit={() => setSent(true)}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 md:p-10 space-y-5"
            data-testid="contact-form"
          >
            {/* FormSubmit settings */}
            <input type="hidden" name="_subject" value="New Lead - YG Web Studio" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" name="name" placeholder="Yash Gohel" required />
              <Field label="Email Address" type="email" name="email" placeholder="you@business.com" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Business Name" name="business" placeholder="Komal Jewellers" />
              <Field label="Phone (optional)" name="phone" placeholder="+91 ..." />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-gold mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your business and what you need..."
                className="w-full bg-bg/50 border border-gold/25 focus:border-gold rounded-xl px-4 py-3 text-white placeholder:text-muted/50 outline-none transition"
              />
            </div>

            {sent ? (
              <div className="flex items-center gap-3 text-gold bg-gold/10 border border-gold/30 rounded-xl px-4 py-3">
                <CheckCircle2 /> Thanks! Your enquiry has been sent — we'll reply within 24 hours.
              </div>
            ) : (
              <button type="submit" className="btn-gold w-full justify-center animate-glow" data-testid="contact-submit">
                Send Message <Send size={18} />
              </button>
            )}

            <p className="text-[11px] text-muted/70 text-center">
              We respect your privacy. No spam, ever. — Powered by FormSubmit (no backend needed).
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-gold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-bg/50 border border-gold/25 focus:border-gold rounded-xl px-4 py-3 text-white placeholder:text-muted/50 outline-none transition"
      />
    </div>
  );
}