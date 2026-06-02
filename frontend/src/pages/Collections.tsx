import { useState, useEffect } from 'react';
import { useTranslation } from '@/node_modules/react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import {
  Camera, Watch, FlaskConical, Sparkles, ChevronRight,
  Gem, User as UserIcon, Briefcase, Calendar, Loader2,
  Filter, ChevronDown, X
} from 'lucide-react';
import GoldParticles from '../components/GoldParticles';

interface CollectionItem {
  id: string;
  title: string;
  category: string;
  price?: string;
  description?: string;
  image: string | null;
  type: 'suit' | 'watch' | 'perfume' | 'service';
  order?: number;
}

const LUXURY_COLLECTIONS = [
  // --- SUITS (10) ---
  {
    id: 'suit-1',
    title: 'Midnight Shadow Black',
    category: 'suits',
    image: 'pw55.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-2',
    title: 'Royal Navy Executive',
    category: 'suits',
    image: 'pw21.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-3',
    title: 'The Wedding Classic',
    category: 'suits',
    image: 'pw14.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-4',
    title: 'Double-Breasted Ivory',
    category: 'suits',
    image: 'pw13.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-5',
    title: 'Vintage Tweed Legacy',
    category: 'suits',
    image: 'pw6.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-6',
    title: 'Charcoal Silk Blend',
    category: 'suits',
    image: 'pw7.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-7',
    title: 'The Italian Cut',
    category: 'suits',
    image: 'pw8.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-8',
    title: 'Burgundy Velvet Ceremony',
    category: 'suits',
    image: 'pw9.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-9',
    title: 'Graphite Modern Fit',
    category: 'suits',
    image: 'pw10.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-10',
    title: 'Onyx tuxedo Elite',
    category: 'suits',
    image: 'pw11.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  {
    id: 'suit-11',
    title: 'white tuxedo Elite',
    category: 'suits',
    image: 'pw18.jpg',
    type: 'suit',
    price: 'Bespoke'
  },
  // --- WATCHES (4) ---
  {
    id: 'watch-1',
    title: 'Chrono Gold Heritage',
    category: 'watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=90',
    type: 'watch',
    price: 'Premium'
  },
  {
    id: 'watch-2',
    title: 'Deep Sea Mariner',
    category: 'watch',
    image: 'https://images.unsplash.com/photo-1623998021411-8159d3081128?auto=format&fit=crop&q=90',
    type: 'watch',
    price: 'Premium'
  },
  {
    id: 'watch-3',
    title: 'Skeleton Mechanical',
    category: 'watch',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=90',
    type: 'watch',
    price: 'Premium'
  },
  {
    id: 'watch-4',
    title: 'Silver Dial Executive',
    category: 'watch',
    image: 'https://images.unsplash.com/photo-1612817159949-19ec613a7c89?auto=format&fit=crop&q=90',
    type: 'watch',
    price: 'Premium'
  },

  // --- PERFUMES (4) ---
  {
    id: 'perfume-1',
    title: 'Midnight Oud Signature',
    category: 'perfume',
    image: 'pp3.jpg',
    type: 'perfume',
    price: 'Signature'
  },
  {
    id: 'perfume-2',
    title: 'Royal Musk Extract',
    category: 'perfume',
    image: 'pp2.jpg',
    type: 'perfume',
    price: 'Signature'
  },
  {
    id: 'perfume-3',
    title: 'Desert Rose Noir',
    category: 'perfume',
    image: 'pd.jpg',
    type: 'perfume',
    price: 'Signature'
  },
  {
    id: 'perfume-4',
    title: 'Liquid Platinum',
    category: 'perfume',
    image: 'pls.jpg',
    type: 'perfume',
    price: 'Signature'
  },

  // --- CARS (2) ---
  {
    id: 'car-1',
    title: 'Phantom Ghost Series',
    category: 'car',
    image: 'car1.png',
    type: 'service',
    price: 'Exclusive'
  },
  {
    id: 'car-2',
    title: 'Stuttgart Classic Excellence',
    category: 'car',
    image: 'car2.png',
    type: 'service',
    price: 'Exclusive'
  },

  // --- DECORATION (1) ---
  {
    id: 'deco-1',
    title: 'Imperial Suite Design',
    category: 'decoration',
    image: 'https://images.unsplash.com/photo-1616489953149-804369527eac?auto=format&fit=crop&q=90',
    type: 'service',
    price: 'Bespoke'
  },

  // --- LAUNDRY (2) ---
  {
    id: 'laundry-1',
    title: 'Fabric Care Protocol',
    category: 'laundry',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=90',
    type: 'service',
    price: 'Premium'
  },
  {
    id: 'laundry-2',
    title: 'Silk & Wool Sanctuary',
    category: 'laundry',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb0f?auto=format&fit=crop&q=90',
    type: 'service',
    price: 'Premium'
  },

  // --- UNIFORM (1) ---
  {
    id: 'uniform-1',
    title: 'Professional Corporate Identity',
    category: 'student unifrom',
    image: 'un.png',
    type: 'service',
    price: 'Corporate'
  },

  // --- SHOES (2) ---
  {
    id: 'shoes-1',
    title: 'Handcrafted Oxford Gold',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=90',
    type: 'service',
    price: 'Luxury'
  },
  {
    id: 'shoes-2',
    title: 'Italian Leather Loafers',
    category: 'shoes',
    image: null,
    type: 'service',
    price: 'Luxury'
  },

  // --- SUIT PACKAGES (2) ---
  {
    id: 'package-1',
    title: 'Executive Collection Bundle',
    category: 'suit packages',
    image: null,
    type: 'service',
    price: 'Package'
  },
  {
    id: 'package-2',
    title: 'Wedding Party protocol',
    category: 'suit packages',
    image: 'https://images.unsplash.com/photo-1491333078588-55b6733c7de6?auto=format&fit=crop&q=90',
    type: 'service',
    price: 'Package'
  }
];

interface CardProps {
  item: typeof LUXURY_COLLECTIONS[0];
  index: number;
  onPreview: (item: typeof LUXURY_COLLECTIONS[0]) => void;
}

function CollectionCard({ item, index, onPreview }: CardProps) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const getTypeIcon = () => {
    switch (item.type) {
      case 'watch': return <Watch size={32} strokeWidth={1} />;
      case 'perfume': return <FlaskConical size={32} strokeWidth={1} />;
      case 'service': return <Sparkles size={32} strokeWidth={1} />;
      case 'suit': return <Briefcase size={32} strokeWidth={1} />;
      default: return <Camera size={32} strokeWidth={1} />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Decorative Glow */}
      <div className={`absolute -inset-2 bg-royal-gold/10 blur-xl opacity-0 transition-opacity duration-1000 ${isHovered ? 'opacity-100' : ''}`} />

      <div
        onClick={() => onPreview(item)}
        className={`relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5 bg-luxury-black/40 backdrop-blur-sm transition-all duration-700 cursor-zoom-in ${isHovered ? 'border-royal-gold/40 scale-[1.01] shadow-[0_0_40px_rgba(197,160,89,0.15)]' : ''
          }`}
      >
        <motion.div className="h-full w-full overflow-hidden">
          {item.image ? (
            <motion.img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-luxury-black via-black/40 to-luxury-black relative overflow-hidden">
              {/* Luxury Geometric Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[1px] bg-royal-gold rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[1px] bg-royal-gold -rotate-45" />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="p-8 rounded-full border border-royal-gold/20 bg-royal-gold/5 text-royal-gold animate-pulse">
                  {getTypeIcon()}
                </div>
                <div className="space-y-2 text-center">
                  <span className="sans-ui text-[9px] tracking-[0.5em] gold-text uppercase font-black opacity-40">{t('collections.vaultExclusive', 'Vault Exclusive')}</span>
                  <p className="sans-ui text-[10px] tracking-[0.2em] text-white/20 uppercase font-black">{t('collections.digitalBlueprint', 'Digital Blueprint Only')}</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Glassmorphism Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80" />

        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <span className="sans-ui text-[9px] tracking-[0.5em] gold-text uppercase font-black mb-2 opacity-80">{t(`collections.categories.${item.category}`)}</span>
          <h3 className="text-2xl font-display italic text-white text-center mb-6">{t(`collections.items.${item.id}`)}</h3>

          <button className="px-8 py-3 bg-royal-gold gold-gradient text-black sans-ui text-[10px] uppercase tracking-[0.3em] font-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.4)]">
            {t('collections.bookNow', 'Book Now')}
          </button>
        </div>

        {/* Static Title/Category for default view */}
        <div className={`absolute bottom-6 left-6 right-6 transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-[1px] w-4 bg-royal-gold/50" />
            <p className="sans-ui text-[9px] tracking-[0.3em] gold-text uppercase font-black">{t(`collections.categories.${item.category}`)}</p>
          </div>
          <h3 className="text-xl font-display italic tracking-wide text-white">
            {t(`collections.items.${item.id}`)}
          </h3>
        </div>
      </div>

      {/* Booking Button beneath Card (Always visible on mobile, reveal on hover desktop or just always there for emphasis as requested) */}
      <div className="mt-6 flex justify-center lg:hidden">
        <button className="w-full px-8 py-4 bg-royal-gold gold-gradient text-black sans-ui text-[10px] uppercase tracking-[0.3em] font-black shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
          {t('collections.bookNow', 'Book Now')}
        </button>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('ALL');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof LUXURY_COLLECTIONS[0] | null>(null);

  const categories = ['ALL', 'suits', 'watch', 'perfume', 'shoes', 'car', 'decoration', 'laundry', 'student unifrom', 'suit packages'];

  const filteredItems = filter === 'ALL'
    ? LUXURY_COLLECTIONS
    : LUXURY_COLLECTIONS.filter(item => item.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-luxury-black selection:bg-royal-gold/30 selection:text-royal-gold pt-32 lg:pt-40">
      <GoldParticles />

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />

            <motion.div
              layoutId={selectedItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[4/5] md:aspect-video rounded-sm overflow-hidden border border-white/10 bg-luxury-black shadow-[0_0_100px_rgba(0,0,0,0.8)] z-10"
            >
              {selectedItem.image ? (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-luxury-black via-black/40 to-luxury-black">
                  <div className="p-12 md:p-20 rounded-full border border-royal-gold/20 bg-royal-gold/5 text-royal-gold mb-10">
                    {selectedItem.type === 'watch' && <Watch size={60} strokeWidth={1} />}
                    {selectedItem.type === 'perfume' && <FlaskConical size={60} strokeWidth={1} />}
                    {selectedItem.type === 'service' && <Sparkles size={60} strokeWidth={1} />}
                    {selectedItem.type === 'suit' && <Briefcase size={60} strokeWidth={1} />}
                    {!['watch', 'perfume', 'service', 'suit'].includes(selectedItem.type) && <Camera size={60} strokeWidth={1} />}
                  </div>
                  <div className="text-center">
                    <span className="sans-ui text-xs tracking-[0.6em] gold-text uppercase font-black block mb-4">{t('collections.confidentialArchive', 'Confidential Archive')}</span>
                    <p className="text-white/20 italic font-display text-xl px-10">{t('collections.blueprintReserved', 'Detailed visual blueprints for this piece are reserved for elite members.')}</p>
                  </div>
                </div>
              )}

              {/* Lightbox Controls */}
              <div className="absolute top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
                <div className="space-y-1">
                  <span className="sans-ui text-[10px] tracking-[0.5em] gold-text uppercase font-black block opacity-80">{t(`collections.categories.${selectedItem.category}`)}</span>
                  <h2 className="text-3xl md:text-5xl font-display italic text-white">{t(`collections.items.${selectedItem.id}`)}</h2>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all group active:scale-95"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>

              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <p className="sans-ui text-xs tracking-widest text-white/40 font-bold uppercase">{t('collections.vaultAccess', 'Vault Access Level: Gold')}</p>
                <button className="px-10 py-4 bg-royal-gold gold-gradient text-black sans-ui text-[11px] uppercase tracking-[0.3em] font-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(197,160,89,0.3)]">
                  {t('collections.bookPiece', 'Request Piece')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=90"
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Luxury Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
        </motion.div>

        <div className="relative z-10 text-center px-6 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <span className="sans-ui text-[10px] tracking-[1em] gold-text uppercase font-black block mb-6">{t('collections.subtitle', 'THE ARCHIVE')}</span>
            <h1 className="text-6xl md:text-9xl font-display italic mb-8 tracking-tighter leading-none text-white whitespace-pre-line">
              {t('collections.title', 'Luxury\nCollections')}
            </h1>
            <p className="max-w-2xl mx-auto text-white/40 text-sm md:text-lg leading-loose italic font-display px-4">
              {t('collections.description', 'A curated sanctuary of distinction. Discover our finest bespoke pieces and premium protocols.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dropdown Filter Bar */}
      <div className="sticky top-[56px] z-40 bg-luxury-black/80 backdrop-blur-xl border-y border-white/5 px-6 md:px-12 py-6 shadow-2xl">
        <div className="max-w-[1800px] mx-auto flex flex-col items-center justify-center relative">
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-4 px-10 py-4 border border-royal-gold/30 gold-text sans-ui text-[11px] font-black uppercase tracking-[0.4em] hover:bg-royal-gold/10 transition-all duration-500 rounded-sm"
            >
              <Filter size={14} />
              <span>{t('collections.filterBy', 'Filter By')}: <span className="text-white ml-2">{t(`collections.categories.${filter}`)}</span></span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-luxury-black/95 backdrop-blur-2xl border border-royal-gold/20 p-2 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm"
                >
                  <div className="flex flex-col gap-1">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => {
                          setFilter(cat);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-6 py-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 rounded-sm ${filter === cat ? 'bg-royal-gold text-black' : 'text-white/60 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        {t(`collections.categories.${cat}`)}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <section className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto min-h-screen">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <CollectionCard
                key={item.id}
                item={item}
                index={i}
                onPreview={setSelectedItem}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Global CTA */}
      <section className="py-60 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 border-t border-white/5 pt-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="gold-text mb-12">
              <Sparkles size={40} strokeWidth={1} className="mx-auto" />
            </div>
            <h2 className="text-5xl md:text-8xl font-display italic mb-10 text-white">{t('collections.joinElite', 'Join our Protocol')}</h2>
            <p className="text-white/40 text-lg md:text-2xl leading-loose italic max-w-2xl mx-auto mb-16">
              Experience the pinnacle of luxury with our bespoke services and exclusive collections.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <button className="px-16 py-6 gold-gradient text-black sans-ui font-black tracking-[0.3em] uppercase text-[11px] hover:shadow-[0_0_50px_rgba(197,160,89,0.3)] transition-all">
                {t('collections.concierge', 'Request Concierge')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

