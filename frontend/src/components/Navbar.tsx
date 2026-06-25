import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/node_modules/react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const NAV_LINKS = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.collections'), path: '/collections' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.about'), path: '/about' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.9)' : 'rgba(8,8,8,0.56)',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.18)' : '1px solid rgba(212,175,55,0.08)',
        boxShadow: scrolled ? '0 18px 50px rgba(0,0,0,0.28)' : 'none',
        backdropFilter: 'blur(18px)',
      }}
    >
      <div className="container-app">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img src="/logo.png" alt="Nanat Protocol" className="h-7 w-auto shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight" style={{ color: '#f7e9b5', letterSpacing: '-0.01em' }}>
                Nanat
              </span>
              <span className="text-[10px] font-normal" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Protocol
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link px-3 py-1.5 rounded-md transition-colors duration-150"
                  style={{
                    color: active ? '#f7e9b5' : 'rgba(255,255,255,0.66)',
                    fontWeight: active ? 500 : 400,
                    background: active ? 'rgba(212,175,55,0.1)' : 'transparent',
                    fontSize: 14,
                  }}
                  onMouseEnter={e => {
                    if (!active) (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onMouseLeave={e => {
                    if (!active) (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector />
            <Link
              to="/booking"
              className="nav-link px-3 py-1.5 rounded-md text-sm"
              style={{
                color: location.pathname === '/booking' ? '#f7e9b5' : 'rgba(255,255,255,0.66)',
                fontWeight: location.pathname === '/booking' ? 500 : 400,
              }}
            >
              {t('nav.booking')}
            </Link>
            <Link
              to="/contact"
              className="btn btn-sm"
              style={{ background: '#d4af37', color: '#080808', borderRadius: 6, fontWeight: 700 }}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            style={{ color: '#f7e9b5' }}
            onClick={() => setIsOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            style={{
              background: 'rgba(8,8,8,0.96)',
              borderTop: '1px solid rgba(212,175,55,0.14)',
              borderBottom: '1px solid rgba(212,175,55,0.14)',
              backdropFilter: 'blur(18px)',
            }}
          >
            <div className="container-app py-4">
              <nav className="flex flex-col gap-1">
                {[...NAV_LINKS,
                  { name: t('nav.booking'), path: '/booking' },
                  { name: t('nav.contact'), path: '/contact' },
                ].map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="px-3 py-2.5 rounded-md text-sm transition-colors"
                    style={{
                      color: location.pathname === link.path ? '#f7e9b5' : 'rgba(255,255,255,0.64)',
                      fontWeight: location.pathname === link.path ? 500 : 400,
                      background: location.pathname === link.path ? 'rgba(212,175,55,0.1)' : 'transparent',
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(212,175,55,0.14)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.52)' }}>+251 990 069 892</span>
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
