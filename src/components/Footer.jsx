import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const servicesList = [
  'Business Website',
  'Restaurant Website',
  'Jewellery Website',
  'E-Commerce Website',
  'SEO Optimization',
  'Website Maintenance',
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="yglogo.png" alt="YG" className="w-10 h-10 object-contain" />
              <div className="font-display font-extrabold tracking-wide">
                <span className="text-gold-gradient">YG</span> <span className="text-white">WEB STUDIO</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Modern, premium websites for growing businesses across India. Crafted with care in Pune.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-bg transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {servicesList.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted hover:text-gold transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3"><Phone className="text-gold mt-0.5 shrink-0" size={16} /> +91 9409447069</li>
              <li className="flex items-start gap-3"><Mail className="text-gold mt-0.5 shrink-0" size={16} /> hello.ygwebstudio@gmail.com</li>
              <li className="flex items-start gap-3"><MapPin className="text-gold mt-0.5 shrink-0" size={16} /> Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <div>© 2026 <span className="text-white font-semibold">YG WEB STUDIO</span>. All Rights Reserved.</div>
          <div className="font-script text-base text-gold">Let's Grow Together!</div>
        </div>
      </div>
    </footer>
  );
}