import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '@/node_modules/react-i18next';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY } from '../constants';
import SectionHeader from '../components/SectionHeader';

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const CATEGORIES = ['All', t('services.categories.fashion'), t('services.categories.events'), t('services.categories.protocol')];

  const filtered = activeCategory === 'All'
    ? GALLERY : GALLERY.filter(i => i.category === activeCategory);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Header */}
      <section className="page-header" style={{ background: '#f7f7f8', borderBottom: '1px solid #eaeaea' }}>
        <div className="container-app">
          <SectionHeader
            eyebrow={t('gallery.subtitle')}
            title={t('gallery.title')}
            subtitle="A curated visual portfolio of our executive protocol work and lifestyle services."
          />
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map(cat => {
              const count = cat === 'All' ? GALLERY.length : GALLERY.filter(i => i.category === cat).length;
              if (count === 0 && cat !== 'All') return null;
              const active = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="btn btn-sm flex items-center gap-1.5"
                  style={{
                    background: active ? '#111111' : '#ffffff',
                    color:      active ? '#ffffff' : '#5a5a5a',
                    border:     active ? '1px solid #111111' : '1px solid #eaeaea',
                  }}>
                  {cat} <span style={{ opacity: 0.5 }}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container-app">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
            {filtered.map((item, i) => (
              <motion.div
                layout key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`relative overflow-hidden group cursor-pointer ${i % 4 === 1 ? 'md:row-span-2 md:h-auto' : ''}`}
                style={{ borderRadius: 12, border: '1px solid #eaeaea' }}
                onClick={() => setSelectedImage(item.image)}
              >
                <img src={item.image} alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(17,17,17,0.72) 100%)' }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.9)' }}>
                    <ZoomIn size={16} style={{ color: '#111111' }} />
                  </div>
                  <p className="text-xs font-medium text-white/70 mb-1">{item.category}</p>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-16 card" style={{ padding: 32, borderRadius: 16 }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="t-h2 mb-2">Elite Portfolio Access</h3>
                <p className="t-body text-sm" style={{ maxWidth: 460 }}>
                  Our digital gallery showcases only a fraction of our prestige transformations.
                  For private viewing, contact our concierge directly.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-w-45">
                <button className="btn btn-primary">Contact Concierge</button>
                <button className="btn btn-ghost">Download Brochure</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
              onClick={() => setSelectedImage(null)}>
              <X size={16} />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }}
              src={selectedImage} alt="Preview"
              className="max-w-full max-h-full object-contain"
              style={{ borderRadius: 12, boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
