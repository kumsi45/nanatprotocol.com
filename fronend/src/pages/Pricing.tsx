import { motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  Shirt, Scissors, Watch, FlaskConical, Search, 
  Footprints, Clock, Sparkles, Car, School, 
  UserCheck, Gem, ShieldCheck, Star, Truck, 
  Headphones, ChevronRight, Zap, Crown, Award,
  ArrowRight
} from 'lucide-react';
import BookingModal from '../components/BookingModal';
import GoldParticles from '../components/GoldParticles';

const PRICING_DATA = [
  {
    key: 'suits',
    price: '800 ETB – 3000 ETB',
    icon: Shirt
  },
  {
    key: 'retail_suits',
    price: '8000 ETB – 15000 ETB',
    icon: Scissors
  },
  {
    key: 'watches',
    price: '2900 ETB – 5000 ETB',
    icon: Watch
  },
  {
    key: 'perfumes',
    price: '2500 ETB – 4500 ETB',
    icon: FlaskConical
  },
  {
    key: 'ties',
    price: '500 ETB – 1000 ETB',
    icon: Search
  },
  {
    key: 'shoes',
    price: '2500 ETB – 4500 ETB',
    icon: Footprints
  },
  {
    key: 'laundry',
    price: 'Starting from 200 ETB',
    icon: Clock
  },
  {
    key: 'decoration',
    price: 'Custom Pricing',
    icon: Sparkles
  },
  {
    key: 'cars',
    price: 'Custom Pricing',
    icon: Car
  },
  {
    key: 'uniforms',
    price: 'Starting from 1500 ETB',
    icon: School
  },
  {
    key: 'groom',
    price: 'Starting from 5000 ETB',
    icon: UserCheck
  },
  {
    key: 'accessories',
    price: 'Starting from 300 ETB',
    icon: Gem
  }
];

const SPECIAL_OFFERS = [
  {
    key: 'weddingPkg',
    price: 'Custom Elite',
    features: ['feature1', 'feature2', 'feature3', 'feature4'],
    icon: Crown,
    popular: false
  },
  {
    key: 'vipPkg',
    price: 'From 12,000 ETB',
    features: ['feature1', 'feature2', 'feature3', 'feature4'],
    icon: Award,
    popular: true
  },
  {
    key: 'eventPkg',
    price: 'Multi-Set Discount',
    features: ['feature1', 'feature2', 'feature3', 'feature4'],
    icon: Zap,
    popular: false
  }
];

export default function Pricing() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBook = (title: string, isKey = true) => {
    setSelectedService(isKey ? t(`services.list.${title}.title`) : title);
    setIsBookingOpen(true);
  };

  const handleBookPkg = (pkgKey: string) => {
    setSelectedService(t(`pricing.${pkgKey}.title`));
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-luxury-black min-h-screen selection:bg-royal-gold/30 selection:text-royal-gold">
      <GoldParticles />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="h-[1px] w-12 bg-royal-gold/30" />
              <span className="sans-ui text-[10px] tracking-[0.5em] gold-text uppercase font-black">{t('pricing.subtitle')}</span>
              <div className="h-[1px] w-12 bg-royal-gold/30" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display italic mb-8 tracking-tighter">
              {t('pricing.title')}
            </h1>
            
            <p className="max-w-xl mx-auto text-white/40 text-lg md:text-xl leading-relaxed italic mb-16">
              {t('pricing.description')}
            </p>
            
            <button 
              onClick={() => document.getElementById('pricing-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 gold-gradient text-black sans-ui font-black tracking-[0.3em] uppercase text-[11px] hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] transition-all mx-auto"
            >
              {t('pricing.cta')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section id="pricing-grid" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {PRICING_DATA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-royal-gold/40 transition-all duration-700 hover:bg-white/[0.04]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-royal-gold/0 group-hover:bg-royal-gold/[0.02] blur-2xl transition-all duration-700 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-royal-gold/5 flex items-center justify-center text-royal-gold border border-royal-gold/10 group-hover:bg-royal-gold group-hover:text-black transition-all duration-500">
                    <item.icon size={26} strokeWidth={1} />
                  </div>
                  
                  <h3 className="text-2xl font-display italic mb-2 tracking-wide text-white group-hover:text-royal-gold transition-colors">
                    {t(`services.list.${item.key}.title`)}
                  </h3>
                  
                  <p className="text-royal-gold text-sm font-mono tracking-wider font-bold mb-4">{item.price}</p>
                  
                  <p className="text-white/40 text-[13px] leading-relaxed italic mb-8 h-12 line-clamp-2">
                    {t(`services.list.${item.key}.desc`)}
                  </p>
                  
                  <button 
                    onClick={() => handleBook(item.key)}
                    className="flex items-center gap-2 text-[9px] sans-ui font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-royal-gold transition-colors"
                  >
                    {t('pricing.getQuote')} <ChevronRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {[
              { icon: Crown, title: t('common.affordableLuxury') },
              { icon: Star, title: t('common.premiumQuality') },
              { icon: ShieldCheck, title: t('common.trustedService') },
              { icon: Truck, title: t('common.fastDelivery') },
              { icon: Headphones, title: t('common.professionalTeam') }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="mx-auto w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-royal-gold/40 mb-5 group-hover:scale-110 group-hover:text-royal-gold transition-all duration-500">
                  <feature.icon size={22} strokeWidth={1} />
                </div>
                <p className="sans-ui text-[10px] tracking-[0.3em] text-white/60 uppercase font-black">{feature.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-32 px-6 bg-luxury-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="sans-ui gold-text text-[10px] tracking-[0.5em] uppercase font-black block mb-4">{t('pricing.limitedEdition')}</span>
            <h2 className="text-5xl md:text-7xl font-display italic">{t('pricing.signaturePackages')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SPECIAL_OFFERS.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative p-12 rounded-3xl border ${
                  pkg.popular ? 'border-royal-gold bg-royal-gold/[0.03] shadow-[0_0_50px_rgba(197,160,89,0.1)]' : 'border-white/5 bg-white/[0.01]'
                } overflow-hidden group`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-royal-gold text-black px-8 py-2 text-[9px] sans-ui font-black uppercase tracking-[0.3em] rotate-45 translate-x-[25px] translate-y-[15px] shadow-2xl">
                    {t('pricing.mostPopular')}
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-10">
                  <div className={`p-4 rounded-2xl ${pkg.popular ? 'bg-royal-gold text-black' : 'bg-white/5 text-royal-gold'}`}>
                    <pkg.icon size={32} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display italic">{t(`pricing.${pkg.key}.title`)}</h3>
                    <p className={`sans-ui text-[10px] tracking-[0.2em] uppercase font-black ${pkg.popular ? 'gold-text' : 'text-white/30'}`}>{t('pricing.exclusiveRank')}</p>
                  </div>
                </div>
                
                <div className="mb-10">
                  <p className="text-6xl font-display italic text-white mb-2">{pkg.price}</p>
                  <p className="text-[10px] sans-ui uppercase tracking-[0.4em] text-white/20">{t('pricing.protocolStandard')}</p>
                </div>
                
                <ul className="space-y-6 mb-12 border-t border-white/5 pt-10">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white/50 italic font-display">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold" />
                      {t(`pricing.${pkg.key}.${feature}`)}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handleBookPkg(pkg.key)}
                  className={`w-full py-5 rounded-full sans-ui text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500 border ${
                    pkg.popular 
                    ? 'gold-gradient text-black hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]' 
                    : 'border-white/10 hover:border-royal-gold hover:text-royal-gold'
                  }`}
                >
                  {t('pricing.acquirePackage')}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 relative text-center border-t border-white/5 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal-gold/20 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-5xl md:text-8xl font-display italic mb-10 tracking-tighter">{t('common.joinElite')}?</h2>
            <p className="text-white/30 text-lg md:text-2xl italic mb-16 px-12">
              {t('about.commitment.text')}
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-20 py-8 gold-gradient text-black sans-ui font-black tracking-[0.4em] uppercase text-[12px] shadow-[0_0_60px_rgba(197,160,89,0.3)] hover:scale-110 transition-all flex items-center gap-4 mx-auto group"
            >
              {t('nav.contact')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
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
