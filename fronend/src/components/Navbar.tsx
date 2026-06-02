import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const NAV_LINKS = [
    { name: t('nav.home', 'Home'), path: '/' },
    { name: t('nav.services', 'Services'), path: '/services' },
    { name: t('nav.collections', 'Collections'), path: '/collections' },
    { name: t('nav.pricing', 'Pricing'), path: '/pricing' },
    { name: t('nav.about', 'About Us'), path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-luxury-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1440px] mx-auto px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <div className="flex items-center gap-3">
  <img
    src="/logo.png" 
    alt="Nanat Protocol"
    className="h-12 w-auto"
  />

  <div className="flex flex-col">
    <span className="text-[#D4AF37] text-2xl font-bold tracking-[0.35em] uppercase">
      NANAT
    </span>

    <span className="text-[9px] tracking-[0.45em] text-white/40 uppercase font-semibold">
      Protocol
    </span>
  </div>
</div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`sans-ui text-[10px] hover:text-royal-gold transition-colors relative group tracking-[0.2em] font-bold ${
                location.pathname === link.path ? 'text-royal-gold' : 'text-white/80'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-royal-gold transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <div className="flex items-center gap-6 pl-6 border-l border-white/10">
            <LanguageSelector />
            <Link 
              to="/booking" 
              className="sans-ui text-[10px] text-white/80 hover:text-royal-gold transition-colors tracking-[0.2em] font-bold"
            >
              {t('nav.booking')}
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-royal-gold gold-text sans-ui text-[10px] hover:bg-royal-gold hover:text-black transition-all duration-500 tracking-[0.2em] font-bold"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-royal-gold p-2 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-black border-t border-white/5 py-10 px-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-display tracking-wide ${
                    location.pathname === link.path ? 'text-royal-gold' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className={`text-lg font-display tracking-wide ${
                  location.pathname === '/booking' ? 'text-royal-gold' : 'text-white'
                }`}
              >
                {t('nav.booking')}
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-lg font-display tracking-wide ${
                  location.pathname === '/contact' ? 'text-royal-gold' : 'text-white'
                }`}
              >
                {t('nav.contact')}
              </Link>
              <div className="pt-6 border-t border-white/10 mt-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-white/50 uppercase tracking-[0.2em]">{t('common.selectLanguage')}</p>
                  <LanguageSelector />
                </div>
                <div className="flex items-center gap-3 text-royal-gold">
                  <Phone size={16} />
                  <span className="text-sm font-medium">+251 990 069 892</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
