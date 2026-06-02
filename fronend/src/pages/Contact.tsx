import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send, Clock, ShieldCheck } from 'lucide-react';
import { BRANCHES } from '../constants';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: t('contact.services.protocol'),
    message: ''
  });

  const handleTelegramRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Protocol Inquiry:
Name: ${formData.name}
Email: ${formData.email}
Interest: ${formData.service}
Message: ${formData.message}`;
    
    window.open(`https://t.me/nanatprotocol?text=${encodeURIComponent(text)}`, '_blank');
  };

  const branches = [
    {
      key: 'adaba',
      phone: '+251 920124148',
    },
    {
      key: 'shashamene',
      phone: '+251 923171212',
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-luxury-black">
      {/* Hero Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-royal-gold/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-12">
          <SectionHeader 
            title={t('contact.title')} 
            subtitle={t('contact.subtitle')} 
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Contact Info & Branches */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div>
                <h3 className="sans-ui gold-text text-xs tracking-[0.5em] mb-8">{t('contact.establishment')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {branches.map((branch, i) => (
                    <div key={i} className="group p-8 luxury-card">
                      <div className="sans-ui text-royal-gold/40 text-[8px] mb-4 tracking-[0.5em]">{t(`contact.branches.${branch.key}.location`)}</div>
                      <h4 className="text-2xl italic font-display mb-6 group-hover:text-royal-gold transition-colors">{t(`contact.branches.${branch.key}.name`)}</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 text-white/50 text-sm">
                           <MapPin size={16} className="text-royal-gold shrink-0 mt-1" />
                           <span className="leading-relaxed">{t(`contact.branches.${branch.key}.address`)}</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/50 text-sm">
                           <Phone size={16} className="text-royal-gold shrink-0" />
                           <span>{branch.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-royal-gold/20 flex items-center justify-center text-royal-gold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="sans-ui text-[9px] mb-1">{t('contact.standardHours')}</div>
                    <div className="text-white/60 text-sm">Mon — Sat: 08:30 - 20:00</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-royal-gold/20 flex items-center justify-center text-royal-gold">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="sans-ui text-[9px] mb-1">{t('contact.prioritySupport')}</div>
                    <div className="text-white/60 text-sm">{t('contact.concierge247')}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-royal-gold/20 -z-10" />
              <div className="glass p-12 relative">
                <h3 className="text-4xl italic font-display mb-4">{t('contact.initializeTerminal')}</h3>
                <p className="text-white/40 mb-10 text-sm leading-relaxed">{t('contact.formDesc')}</p>
                
                <form onSubmit={handleTelegramRedirect} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="sans-ui text-[9px] text-white/30 tracking-[0.3em]">{t('contact.labels.fullName')}</label>
                       <input 
                         type="text" 
                         required
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         placeholder={t('contact.placeholders.name')} 
                         className="w-full bg-white/[0.02] border-b border-white/10 p-4 outline-none focus:border-royal-gold transition-colors font-light text-sm" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="sans-ui text-[9px] text-white/30 tracking-[0.3em]">{t('contact.labels.protocolChannel')}</label>
                       <input 
                         type="email" 
                         required
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         placeholder={t('contact.placeholders.email')} 
                         className="w-full bg-white/[0.02] border-b border-white/10 p-4 outline-none focus:border-royal-gold transition-colors font-light text-sm" 
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="sans-ui text-[9px] text-white/30 tracking-[0.3em]">{t('contact.labels.serviceInterest')}</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-white/[0.02] border-b border-white/10 p-4 outline-none focus:border-royal-gold transition-colors font-light text-sm appearance-none"
                    >
                      <option className="bg-luxury-black" value={t('contact.services.grooming')}>{t('contact.services.grooming')}</option>
                      <option className="bg-luxury-black" value={t('contact.services.logistics')}>{t('contact.services.logistics')}</option>
                      <option className="bg-luxury-black" value={t('contact.services.events')}>{t('contact.services.events')}</option>
                      <option className="bg-luxury-black" value={t('contact.services.protocol')}>{t('contact.services.protocol')}</option>
                      <option className="bg-luxury-black" value={t('contact.services.general')}>{t('contact.services.general')}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="sans-ui text-[9px] text-white/30 tracking-[0.3em]">{t('contact.labels.requirements')}</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={t('contact.placeholders.requirements')} 
                      className="w-full bg-white/[0.02] border-b border-white/10 p-4 outline-none focus:border-royal-gold transition-colors font-light text-sm resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full gold-gradient py-6 text-black sans-ui font-bold shadow-[0_20px_50px_rgba(197,160,89,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group"
                  >
                    <span className="text-[10px]">{t('contact.submit')}</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-40">
                  <div className="flex gap-4">
                    <Mail size={16} />
                    <span className="text-[10px] sans-ui">contact@nanatprotocol.com</span>
                  </div>
                  <div className="text-[10px] sans-ui tracking-tighter">EST 2024</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
