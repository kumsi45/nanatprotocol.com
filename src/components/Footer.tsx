import { Link } from 'react-router-dom';
import { Instagram, Facebook, Send, MapPin, Phone, Mail, Music2 } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex flex-col w-fit">
              <span className="text-3xl font-display font-bold tracking-[0.2em] text-white">
                NANAT
              </span>
              <span className="text-xs tracking-[0.5em] text-royal-gold uppercase font-medium">
                Protocol
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 mt-2">
              {[
                { Icon: Instagram, url: 'https://www.instagram.com/awelkedirdube' },
                { Icon: Facebook, url: 'https://www.facebook.com/awelkedirdube' },
                { Icon: Send, url: 'https://t.me/nanatprotocol' },
                { Icon: Music2, url: 'https://www.tiktok.com/@nanatpro' }
              ].map(({ Icon, url }, i) => (
                <a key={i} href={url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-royal-gold hover:border-royal-gold transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-royal-gold">{t('footer.links')}</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.services'), path: '/services' },
                { name: t('nav.collections', 'Collections'), path: '/collections#suits' },
                { name: t('nav.pricing', 'Pricing'), path: '/services#pricing' },
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.contact'), path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className="text-white/60 hover:text-royal-gold hover:translate-x-1 transition-all duration-300 text-sm font-medium w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-royal-gold">{t('footer.hubs')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="h-32 mb-2 glass overflow-hidden relative group border border-white/5 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d39.4!3d7.016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDEnMDIuMCJOIDM5wrAyNCc1NS4wIkU!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
                    width="100%" height="100%" style={{ border: 0, filter: 'invert(1) contrast(1.2) opacity(0.5)' }} 
                    allowFullScreen loading="lazy" title="Adaba Map"
                  />
                </div>
                <h5 className="text-white font-display text-lg tracking-wide uppercase">{t('contact.branches.adaba.name')}</h5>
                <p className="text-white/50 text-xs">{t('contact.branches.adaba.location')}</p>
                <div className="flex items-center gap-3 text-white/70 text-xs">
                  <Phone size={12} className="text-royal-gold" />
                  <span>+251 990 069 892</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-32 mb-2 glass overflow-hidden relative group border border-white/5 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.5!2d38.612347!3d7.201590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTInMDUuNyJOIDM4wrAzNic0NC40IkU!5e0!3m2!1sen!2set!4v1714713600000!5m2!1sen!2set"
                    width="100%" height="100%" style={{ border: 0, filter: 'invert(1) contrast(1.2) opacity(0.5)' }} 
                    allowFullScreen loading="lazy" title="Shashamene Map"
                  />
                </div>
                <h5 className="text-white font-display text-lg tracking-wide uppercase">{t('contact.branches.shashamene.name')}</h5>
                <p className="text-white/50 text-xs">{t('contact.branches.shashamene.location')}</p>
                <div className="flex items-center gap-3 text-white/70 text-xs">
                  <Phone size={12} className="text-royal-gold" />
                  <span>+251 965 254 377</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} NANAT PROTOCOL. {t('footer.rights')}
          </p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-white/30 text-[10px] uppercase tracking-[0.4em] hover:text-royal-gold hover:-translate-y-0.5 transition-all duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/30 text-[10px] uppercase tracking-[0.4em] hover:text-royal-gold hover:-translate-y-0.5 transition-all duration-300">Terms of Luxury</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
