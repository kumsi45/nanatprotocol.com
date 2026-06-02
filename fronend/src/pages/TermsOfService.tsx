import { motion } from 'motion/react';
import { ShieldCheck, BookOpen, Scale, AlertCircle, FileText, Lock, Globe, RefreshCcw } from 'lucide-react';
import GoldParticles from '../components/GoldParticles';

export default function TermsOfService() {
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
              <span className="sans-ui text-[10px] tracking-[0.4em] gold-text uppercase font-black">Legal Protocol</span>
              <div className="h-[1px] w-12 bg-royal-gold/50" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display italic mb-8 tracking-tight">Terms of <span className="gold-text">Service</span></h1>
            <p className="max-w-2xl mx-auto text-white/40 text-lg italic italic">
              By using Nanat Protocol services, you agree to the following Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {/* 1. Acceptance */}
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
                <h2 className="text-3xl font-display italic tracking-wide">1. Acceptance of Terms</h2>
              </div>
              <p className="text-white/50 text-lg leading-relaxed italic border-l border-royal-gold/20 pl-8 ml-6">
                Using our website or services means you agree to comply with these terms and conditions.
              </p>
            </motion.div>

            {/* 2. Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <BookOpen size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">2. Services Provided</h2>
              </div>
              <div className="text-white/50 space-y-6 italic border-l border-white/10 pl-8 ml-6">
                <p>Nanat Protocol provides services including but not limited to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-display">
                  {['Suit rental', 'Men’s suit sales', 'Decoration services', 'Car rental', 'Laundry services', 'Student uniform services', 'Fashion accessories', 'Groom styling services', 'Watches, perfumes, shoes, and tie sales'].map((s, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-royal-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs gold-text opacity-60">Service availability may change at any time.</p>
              </div>
            </motion.div>

            {/* 3. Bookings */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <FileText size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">3. Bookings & Appointments</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>Clients are encouraged to provide accurate booking information.</p>
                <p>Nanat Protocol reserves the right to cancel or reschedule appointments when necessary.</p>
              </div>
            </motion.div>

            {/* 4. Rental Conditions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <Scale size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">4. Rental Conditions</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p className="text-royal-gold/80 mb-4 uppercase text-[10px] tracking-widest font-black">For rented items such as suits or vehicles:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4">
                    <span className="text-royal-gold text-xs">01</span>
                    <span>Clients must return items on the agreed date.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-royal-gold text-xs">02</span>
                    <span>Damaged or lost items may result in additional charges.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-royal-gold text-xs">03</span>
                    <span>Clients are responsible for proper handling of rented products.</span>
                  </li>
                </ul>
                <p className="text-xs gold-text opacity-60">Late returns may include extra fees.</p>
              </div>
            </motion.div>

            {/* 5. Payments */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <AlertCircle size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">5. Payments</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>All prices are provided in Ethiopian Birr (ETB) unless stated otherwise.</p>
                <p>Payments for certain services may require advance deposits or full payment before delivery.</p>
              </div>
            </motion.div>

            {/* 6. Returns & Exchanges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <RefreshCcw size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">6. Returns & Exchanges</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>Returns or exchanges may depend on the type of product or service purchased.</p>
                <p>Customized or altered items may not qualify for refunds unless there is a confirmed issue from our side.</p>
              </div>
            </motion.div>

            {/* 7. Client Responsibilities */}
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
                <h2 className="text-3xl font-display italic tracking-wide">7. Client Responsibilities</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>Clients agree to provide accurate information, respect rental agreements, and not misuse our services or products.</p>
              </div>
            </motion.div>

            {/* 8. Limitation of Liability */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <AlertCircle size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">8. Limitation of Liability</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>Nanat Protocol is not responsible for delays caused by external circumstances, misuse of rented products, or losses caused by incorrect client information.</p>
              </div>
            </motion.div>

            {/* 9. Intellectual Property */}
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
                <h2 className="text-3xl font-display italic tracking-wide">9. Intellectual Property</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>All branding, website content, logos, and designs related to Nanat Protocol remain protected and may not be copied without permission.</p>
              </div>
            </motion.div>

            {/* 10. Changes to Terms */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-xl bg-royal-gold/5 border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
                  <RefreshCcw size={24} strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-display italic tracking-wide">10. Changes to Terms</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>Nanat Protocol reserves the right to update these Terms of Service at any time without prior notice.</p>
              </div>
            </motion.div>

            {/* 11. Contact */}
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
                <h2 className="text-3xl font-display italic tracking-wide">11. Contact</h2>
              </div>
              <div className="text-white/50 space-y-4 italic border-l border-white/10 pl-8 ml-6">
                <p>For support or questions regarding these terms, clients may contact Nanat Protocol through official communication channels.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-40 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-16 py-6 gold-gradient text-black sans-ui font-black tracking-[0.3em] uppercase text-[11px] shadow-[0_0_50px_rgba(197,160,89,0.3)] hover:scale-105 transition-all"
          >
            Review Complete
          </motion.button>
        </div>
      </section>
    </div>
  );
}
