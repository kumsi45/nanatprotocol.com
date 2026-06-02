import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Lock, Calendar, Globe, Layers, Eye, RefreshCw, MessageSquare } from 'lucide-react';
import GoldParticles from '../components/GoldParticles';

export default function PrivacyPolicy() {
  return (
    <div className="bg-luxury-black min-h-screen selection:bg-royal-gold/30 selection:text-royal-gold">
      <GoldParticles />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-royal-gold/50" />
              <span className="sans-ui text-[10px] tracking-[0.4em] gold-text uppercase font-black">Data Protocol</span>
              <div className="h-[1px] w-12 bg-royal-gold/50" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display italic mb-8 tracking-tight">Privacy <span className="gold-text">Policy</span></h1>
            <p className="max-w-2xl mx-auto text-white/40 text-lg italic">
              Last Updated: May 2026. Your privacy and trust are the foundation of Nanat Protocol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {/* Introduction */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16 italic text-white/60 leading-loose text-lg text-center font-display"
            >
              "Welcome to Nanat Protocol. Your privacy and trust are important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services, website, or contact our business."
            </motion.div>

            {/* 1. Collection */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <UserCheck size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">1. Information We Collect</h2>
              </div>
              <div className="text-white/50 space-y-6 italic border-l border-royal-gold/20 pl-8 ml-6">
                <p>Nanat Protocol may collect the following information:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                  {[
                    'Full name', 'Phone number', 'Email address', 'Appointment details',
                    'Rental information', 'Delivery information', 'Payment details',
                    'Messages or inquiries sent by clients'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold/30" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs gold-text opacity-60 mt-6">We only collect information necessary to provide our services professionally and efficiently.</p>
              </div>
            </motion.div>

            {/* 2. Usage */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <ShieldCheck size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">2. How We Use Your Information</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>Your information may be used for processing bookings, customer support, order confirmation, service improvement, and security.</p>
                <p className="text-royal-gold font-bold uppercase text-[10px] tracking-[0.2em] pt-4">Nanat Protocol does not sell or share your personal information with unauthorized third parties.</p>
              </div>
            </motion.div>

            {/* 3. Security */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <Lock size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">3. Payment & Security</h2>
              </div>
              <p className="text-white/50 text-lg leading-relaxed italic border-l border-white/10 pl-8 ml-6">
                We value the safety of your information. Reasonable security measures are used to protect customer data from unauthorized access, misuse, or disclosure.
              </p>
            </motion.div>

            {/* 4. Booking Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <Calendar size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">4. Rental & Booking Information</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>For suit rentals, car rentals, and event services, clients may be required to provide accurate identification for booking confirmation.</p>
                <p>Clients are responsible for providing correct information during reservations.</p>
              </div>
            </motion.div>

            {/* 5. Cookies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <Globe size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">5. Cookies & Website Usage</h2>
              </div>
              <p className="text-white/50 italic border-l border-white/10 pl-8 ml-6">
                Our website may use cookies and analytics tools to improve user experience. Users can disable cookies through their browser settings if preferred.
              </p>
            </motion.div>

            {/* 6. Third-Party */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <Layers size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">6. Third-Party Services</h2>
              </div>
              <p className="text-white/50 italic border-l border-white/10 pl-8 ml-6">
                Some services may involve trusted providers (payment, delivery, communication). These providers only receive necessary information to perform their roles.
              </p>
            </motion.div>

            {/* 7. Client Rights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <Eye size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">7. Client Rights</h2>
              </div>
              <ul className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <li>• Request access to their information</li>
                <li>• Request corrections to inaccurate data</li>
                <li>• Request deletion of personal data where applicable</li>
              </ul>
            </motion.div>

            {/* 8. Updates */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <RefreshCw size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">8. Policy Updates</h2>
              </div>
              <p className="text-white/50 italic border-l border-white/10 pl-8 ml-6">
                Nanat Protocol may update this Privacy Policy at any time to improve transparency and service quality.
              </p>
            </motion.div>

            {/* 9. Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <MessageSquare size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">9. Contact Information</h2>
              </div>
              <p className="text-white/50 italic border-l border-white/10 pl-8 ml-6">
                For questions regarding this Privacy Policy, clients may contact Nanat Protocol directly through our official phone number, email, or social media platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-40 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={() => window.history.back()}
            className="px-16 py-6 gold-gradient text-black sans-ui font-black tracking-[0.3em] uppercase text-[11px] shadow-[0_0_50px_rgba(197,160,89,0.3)] hover:scale-105 transition-all"
          >
            Protocol Reviewed
          </motion.button>
        </div>
      </section>
    </div>
  );
}
