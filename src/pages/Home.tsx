import React, { useState, Suspense, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Crown, Star, Truck, Users, 
  ChevronRight, ChevronLeft, Play, Award, Zap, Gem, Sparkles,
  Watch, UserCheck, Flame
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero3D from '../components/Hero3D';
import SectionHeader from '../components/SectionHeader';
import GoldParticles from '../components/GoldParticles';
import WhyChooseUsCarousel from '../components/WhyChooseUsCarousel';

// --- Stat Counter Component ---
function StatCounter({ value, label, suffix = '' }: { value: string, label: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, ''));
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl md:text-7xl font-display italic gold-text mb-2 transition-transform duration-500 group-hover:scale-110">
        {count}{value.includes('+') ? '+' : ''}{suffix}
      </div>
      <div className="text-[11px] uppercase tracking-[0.4em] text-white/70 font-black">{label}</div>
      <div className="h-[1px] w-8 bg-royal-gold/20 mx-auto mt-6 group-hover:w-16 transition-all duration-700" />
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const whyChooseUs = [
    { icon: <ShieldCheck size={24} />, title: t('common.trustedService'), desc: t('common.trustedServiceDesc') },
    { icon: <Crown size={24} />, title: t('common.premiumQuality'), desc: t('common.premiumQualityDesc') },
    { icon: <Flame size={24} />, title: t('common.affordableLuxury'), desc: t('common.affordableLuxuryDesc') },
    { icon: <Truck size={24} />, title: t('common.fastDelivery'), desc: t('common.fastDeliveryDesc') },
    { icon: <Users size={24} />, title: t('common.professionalTeam'), desc: t('common.professionalTeamDesc') },
  ];

  return (
    <div className="bg-luxury-black text-white selection:bg-royal-gold/30">
      <GoldParticles />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-32 lg:pt-40">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-black/40 to-luxury-black z-10" />
          <motion.div style={{ y: y1 }} className="h-full w-full">
            <img 
              src="https://images.unsplash.com/photo-1594932224828-b4b05a832fe3?auto=format&fit=crop&q=90" 
              className="h-full w-full object-cover grayscale brightness-[0.2] contrast-125"
              alt=""
            />
          </motion.div>
        </div>

        {/* Floating Luxury Elements */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%] w-32 h-32 blur-3xl bg-royal-gold/10 rounded-full"
          />
          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[5%] w-64 h-64 blur-[100px] bg-royal-gold/5 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center pb-20">
          <motion.div style={{ opacity }} className="order-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.85] font-display italic mb-12 tracking-tight overflow-hidden">
              <motion.span 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {t('hero.title', '').split(' ').slice(0, 2).join(' ')} <br />
                <span className="gold-text">{t('hero.title', '').split(' ').slice(2).join(' ')}</span>
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl italic"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <Link 
                to="/services" 
                className="group relative px-12 py-6 bg-royal-gold text-black font-black sans-ui tracking-[0.2em] text-[11px] uppercase overflow-hidden transition-transform hover:scale-105 active:scale-95 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t('hero.explore')} <ChevronRight size={14} />
                </span>
                <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
              <Link 
                to="/contact" 
                className="group relative px-12 py-6 border border-white/20 text-white font-black sans-ui tracking-[0.2em] text-[11px] uppercase overflow-hidden hover:border-royal-gold transition-colors text-center"
              >
                {t('common.bookNow')}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] lg:h-[700px] order-2"
          >
            <Suspense fallback={<div className="h-full w-full bg-white/5 animate-pulse rounded-2xl" />}>
              <Hero3D isHero={true} />
            </Suspense>
            {/* Spotlight Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-royal-gold/10 blur-[150px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-royal-gold to-transparent" />
        </motion.div>
      </section>

      {/* --- LUXURY SHOWCASE SECTION --- */}
      <section className="py-24 bg-luxury-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group"
            >
              <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="pw10.jpg" 
                alt="Finest Craftsmanship Detail" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <span className="sans-ui text-[10px] tracking-[0.5em] text-white/50 uppercase font-bold block mb-2">Excellence</span>
                <h3 className="text-3xl font-display italic text-white">Precision Detail</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group md:translate-y-20"
            >
              <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="pw18.jpg" 
                alt="Tailored Luxury Suit" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <span className="sans-ui text-[10px] tracking-[0.5em] text-white/50 uppercase font-bold block mb-2">Distinction</span>
                <h3 className="text-3xl font-display italic text-white">Bespoke Elegance</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- IMMERSIVE MASTERPIECE (THE GREY PROTOCOL) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black group">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="pw19.jpg" 
              alt="The Grey Protocol Masterpiece" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20" />
        </div>
        
        <div className="relative z-30 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-royal-gold/40" />
              <span className="sans-ui text-[10px] md:text-[12px] tracking-[0.8em] gold-text uppercase font-black">Signature Piece</span>
              <div className="h-[1px] w-12 bg-royal-gold/40" />
            </div>
            
            <h2 className="text-6xl md:text-[10rem] font-display italic text-white mb-10 leading-[0.9] tracking-tighter">
              The Grey <br />
              <span className="gold-text">Protocol</span>
            </h2>
            
            <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-2xl font-display italic leading-relaxed mb-16 px-4">
              "True luxury is found in the quiet confidence of a perfect fit." <br className="hidden md:block" />
              Witness our latest bespoke grey architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                to="/contact"
                className="px-16 py-6 bg-royal-gold gold-gradient text-black sans-ui font-black tracking-[0.3em] uppercase text-[11px] shadow-[0_0_50px_rgba(197,160,89,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                Inquire About Piece
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-luxury-black to-transparent z-40" />
      </section>

      {/* --- WHY CLIENTS CHOOSE US --- */}
      <section className="py-24 md:py-40 bg-luxury-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            title={t('common.whyChooseUs')} 
            subtitle={t('common.distinction')} 
          />

          <WhyChooseUsCarousel features={whyChooseUs} />
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          <StatCounter value="1000+" label={t('common.happyClients')} suffix="+" />
          <StatCounter value="500+" label={t('common.suitRentals')} suffix="+" />
          <StatCounter value="10+" label={t('common.premiumServices')} suffix="+" />
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-60 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-gold/5 blur-[120px] -skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-royal-gold/5 blur-[120px] skew-x-12 -translate-x-1/4" />

        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="sans-ui text-[10px] tracking-[0.6em] gold-text uppercase font-black mb-8 block">
              {t('common.joinElite')}
            </span>
            <h2 className="text-5xl md:text-8xl font-display italic mb-16 leading-tight">
              {t('common.experienceLuxury')} <br />
              <span className="gold-text underline decoration-royal-gold/20 underline-offset-8">Nanat Protocol</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                to="/services" 
                className="px-16 py-8 gold-gradient text-black sans-ui font-black tracking-[0.4em] uppercase text-[12px] shadow-[0_20px_60px_rgba(197,160,89,0.3)] hover:scale-105 transition-all"
              >
                {t('common.elevateStyle')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Watermark */}
      <div className="py-20 text-center opacity-10 pointer-events-none">
        <span className="text-[15vw] font-display font-black tracking-tighter uppercase whitespace-nowrap overflow-hidden block">
          Nanat Protocol
        </span>
      </div>
    </div>
  );
}