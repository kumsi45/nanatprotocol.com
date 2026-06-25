import { useTranslation } from '@/node_modules/react-i18next';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'am', name: 'አማርኛ' },
  { code: 'om', name: 'Oromo' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(v => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm transition-colors"
        style={{ color: '#5a5a5a', background: isOpen ? '#f0f0f2' : 'transparent', border: '1px solid transparent' }}
        onMouseEnter={e => { if (!isOpen) (e.currentTarget.style.background = '#f7f7f8'); }}
        onMouseLeave={e => { if (!isOpen) (e.currentTarget.style.background = 'transparent'); }}
      >
        <span className="text-xs font-medium uppercase" style={{ letterSpacing: '0.04em' }}>
          {current.code}
        </span>
        <ChevronDown size={12} style={{ transition: 'transform 150ms', transform: isOpen ? 'rotate(180deg)' : 'none' }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 mt-1 w-36 rounded-lg overflow-hidden z-50"
            style={{ background: '#ffffff', border: '1px solid #eaeaea', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
          >
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => { i18n.changeLanguage(lang.code); setIsOpen(false); }}
                className="w-full text-left px-3 py-2.5 text-sm transition-colors"
                style={{
                  color: i18n.language === lang.code ? '#111111' : '#5a5a5a',
                  fontWeight: i18n.language === lang.code ? 500 : 400,
                  background: i18n.language === lang.code ? '#f7f7f8' : 'transparent',
                }}
                onMouseEnter={e => { if (i18n.language !== lang.code) (e.currentTarget.style.background = '#f7f7f8'); }}
                onMouseLeave={e => { if (i18n.language !== lang.code) (e.currentTarget.style.background = 'transparent'); }}
              >
                {lang.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
