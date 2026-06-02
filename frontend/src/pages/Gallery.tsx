import SectionHeader from '../components/SectionHeader';
import { GALLERY } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from '@/node_modules/react-i18next';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  const CATEGORIES = [
    'All',
    t('services.categories.fashion'),
    t('services.categories.events'),
    t('services.categories.protocol')
  ];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12">
          <SectionHeader
            title={t('gallery.title')}
            subtitle={t('gallery.subtitle')}
          />

          {/* Filtering */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 overflow-x-auto pb-4 scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' ? GALLERY.length : GALLERY.filter(i => i.category === cat).length;
              if (count === 0 && cat !== 'All') return null;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`sans-ui pb-2 transition-all duration-300 relative group flex items-center gap-2 ${activeCategory === cat ? 'text-royal-gold' : 'text-white/40 hover:text-white'
                    }`}
                >
                  <span className="text-sm tracking-[0.2em]">{cat}</span>
                  <span className="text-[10px] opacity-40 font-mono">({count})</span>
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-royal-gold transition-all duration-500 ${activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]"
          >
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group relative overflow-hidden glass cursor-pointer ${i % 4 === 1 || i % 4 === 2 ? 'md:row-span-2 md:h-auto' : ''
                  }`}
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-royal-gold/40 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ZoomIn className="text-royal-gold" size={20} />
                  </div>

                  <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <span className="sans-ui text-royal-gold text-[10px] uppercase tracking-[0.3em] mb-2 block">{item.category}</span>
                    <h4 className="text-3xl italic text-white font-display mb-2">{item.title}</h4>
                    <div className="h-[1px] w-0 group-hover:w-full bg-royal-gold/40 transition-all duration-1000" />
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-0 border border-royal-gold/0 group-hover:border-royal-gold/20 transition-all duration-700 m-4 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury-black/95 p-4 md:p-12"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={32} />
                </button>
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  src={selectedImage}
                  alt="Gallery Preview"
                  className="max-w-full max-h-full object-contain shadow-2xl glass p-1"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-32 p-12 glass relative overflow-hidden bg-white/[0.01]">
            <div className="absolute top-0 left-0 w-full h-[1px] gold-gradient opacity-30" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-3xl italic mb-4">Elite Portfolio Access</h3>
                <p className="text-white/50 leading-relaxed">
                  Our digital gallery showcases only a fraction of our prestige transformations. For private viewing of our VIP protocol portfolios, please contact our concierge service.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-w-[240px]">
                <button className="gold-gradient text-black px-8 py-4 sans-ui font-bold shadow-xl">Contact Concierge</button>
                <button className="border border-white/10 text-white px-8 py-4 sans-ui font-bold hover:bg-white/5 transition-all">Download Brochure</button>
              </div>
            </div>
            {/* Large background text */}
            <div className="absolute -bottom-20 -right-20 text-[180px] font-bold opacity-[0.02] italic select-none pointer-events-none">
              LEGACY
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
