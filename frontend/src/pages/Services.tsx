import { motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from '@/node_modules/react-i18next';
import {
  Shirt, Sparkles, Car, ShoppingBag,
  Clock, School, Footprints, Search,
  Watch, FlaskConical, UserCheck, Gem,
  ShieldCheck, CircleDollarSign, Star,
  Truck, Users, ChevronRight, ArrowRight,
  Scissors
} from 'lucide-react';
import BookingModal from '../components/BookingModal';

const SERVICES = [
  {
    title: 'suits',
    icon: Shirt,
    category: 'Rental',
  },
  {
    title: 'decoration',
    icon: Sparkles,
    category: 'Rental',
  },
  {
    title: 'cars',
    icon: Car,
    category: 'Rental',
  },
  {
    title: 'retail_suits',
    icon: Scissors,
    category: 'Fashion',
  },
  {
    title: 'laundry',
    icon: Clock,
    category: 'Maintenance',
  },
  {
    title: 'uniforms',
    icon: School,
    category: 'Fashion',
  },
  {
    title: 'shoes',
    icon: Footprints,
    category: 'Accessories',
  },
  {
    title: 'ties',
    icon: Search,
    category: 'Accessories',
  },
  {
    title: 'watches',
    icon: Watch,
    category: 'Accessories',
  },
  {
    title: 'perfumes',
    icon: FlaskConical,
    category: 'Accessories',
  },
  {
    title: 'groom',
    icon: UserCheck,
    category: 'Fashion',
  },
  {
    title: 'accessories',
    icon: Gem,
    category: 'Accessories',
  }
];

const CATEGORIES = ['All', 'Rental', 'Fashion', 'Accessories', 'Maintenance'];

export default function Services() {
  const { t } = useTranslation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleBook = (titleKey: string, isKey = true) => {
    setSelectedService(isKey ? t(`services.list.${titleKey}.title`) : titleKey);
    setIsBookingOpen(true);
  };

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="bg-luxury-black min-h-screen selection:bg-royal-gold/30 selection:text-royal-gold">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-royal-gold/50" />
              <span className="sans-ui text-[10px] tracking-[0.4em] gold-text uppercase font-black">Nanat Protocol</span>
              <div className="h-[1px] w-12 bg-royal-gold/50" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display italic mb-8 tracking-tight">{t('services.title')}</h1>
            <p className="max-w-2xl mx-auto text-white/40 text-lg leading-relaxed italic mb-12">
              {t('about.description')}
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full sans-ui text-[10px] tracking-[0.2em] uppercase font-black transition-all duration-500 border ${activeCategory === cat
                      ? 'bg-royal-gold text-black border-royal-gold shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                      : 'text-white/40 border-white/10 hover:border-royal-gold/30 hover:text-white'
                    }`}
                >
                  {t(`services.categories.${cat.toLowerCase()}`)}
                </button>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 gold-gradient text-black sans-ui font-black tracking-[0.2em] uppercase text-[11px] flex items-center gap-3 mx-auto group hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all"
            >
              {t('hero.explore')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-royal-gold/30 transition-all duration-500 hover:bg-white/[0.04]"
              >
                <div className="mb-8 w-14 h-14 rounded-xl bg-royal-gold/5 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all duration-500">
                  <service.icon size={26} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-display italic mb-4 group-hover:text-royal-gold transition-colors">{t(`services.list.${service.title}.title`)}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 italic">{t(`services.list.${service.title}.desc`)}</p>
                <button
                  onClick={() => handleBook(service.title)}
                  className="flex items-center gap-2 text-[10px] sans-ui font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-royal-gold transition-colors"
                >
                  {t('services.cta')} <ChevronRight size={12} />
                </button>

                {/* Corner detail */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-royal-gold transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-royal-gold/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display italic mb-4">{t('common.whyChooseUs')}</h2>
            <div className="h-[1px] w-20 bg-royal-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: ShieldCheck, title: t('common.trustedService') },
              { icon: CircleDollarSign, title: t('common.affordableLuxury') },
              { icon: Star, title: t('common.premiumQuality') },
              { icon: Truck, title: t('common.fastDelivery') },
              { icon: Users, title: t('common.professionalTeam') }
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-royal-gold/40">
                  <feature.icon size={20} strokeWidth={1} />
                </div>
                <p className="sans-ui text-[10px] tracking-[0.2em] text-white/60 uppercase font-black">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display italic mb-10 tracking-tight">{t('common.joinElite')}?</h2>
          <p className="text-white/30 text-lg italic mb-16">{t('about.commitment.text')}</p>
          <button
            onClick={() => handleBook('General Transformation', false)}
            className="px-16 py-6 gold-gradient text-black sans-ui font-black tracking-[0.3em] uppercase text-[11px] shadow-[0_0_50px_rgba(197,160,89,0.3)] hover:scale-105 transition-all"
          >
            {t('common.readMore')}
          </button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        serviceTitle={selectedService}
      />
    </div>
  );
}

