import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Calendar, Clock, User, MessageSquare, 
  ChevronRight, CalendarCheck, MapPin, Phone
} from 'lucide-react';

const Booking = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    requirements: ''
  });

  const services = [
    t('contact.services.grooming'),
    t('contact.services.logistics'),
    t('contact.services.events'),
    t('contact.services.protocol'),
    t('contact.services.general')
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Booking Request:%0A- Name: ${formData.name}%0A- Service: ${formData.service}%0A- Date: ${formData.date}%0A- Time: ${formData.time}%0A- Notes: ${formData.requirements}`;
    window.open(`https://t.me/nanatprotocol?text=${message}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-luxury-black">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="sans-ui text-royal-gold uppercase tracking-[0.3em] text-[10px] block mb-4">
            {t('booking.subtitle')}
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-white mb-6">
            {t('booking.title')}
          </h1>
          <div className="w-24 h-px bg-royal-gold/30 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Sidebar */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-sm">
              <CalendarCheck className="text-royal-gold mb-6" size={32} />
              <h3 className="font-display text-xl text-white mb-4">{t('booking.sidebar.title')}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
                {t('booking.sidebar.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/50 text-xs">
                  <Clock size={16} className="text-royal-gold" />
                  <span>{t('contact.workingHours')}</span>
                </div>
                <div className="flex items-center gap-4 text-white/50 text-xs">
                  <MapPin size={16} className="text-royal-gold" />
                  <span>{t('booking.sidebar.location')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-royal-gold/10 border border-royal-gold/20 p-8 rounded-sm">
              <h4 className="sans-ui text-royal-gold text-[9px] uppercase tracking-widest mb-2 font-bold">{t('booking.sidebar.prioritySupport')}</h4>
              <p className="text-white/80 text-xs italic">
                {t('booking.sidebar.quote')}
              </p>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-sm space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="sans-ui text-[10px] text-white/40 uppercase tracking-widest block pl-1">
                      {t('contact.labels.fullName')}
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-gold/50" size={16} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.placeholders.name')}
                        className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-royal-gold/50 transition-colors text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="sans-ui text-[10px] text-white/40 uppercase tracking-widest block pl-1">
                      {t('contact.labels.serviceInterest')}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-white focus:outline-none focus:border-royal-gold/50 transition-colors text-sm appearance-none"
                      required
                    >
                      <option value="" disabled className="bg-luxury-black">{t('booking.form.selectService')}</option>
                      {services.map((service, i) => (
                        <option key={i} value={service} className="bg-luxury-black">{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="sans-ui text-[10px] text-white/40 uppercase tracking-widest block pl-1">
                      {t('booking.form.preferredDate')}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-gold/50" size={16} />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-royal-gold/50 transition-colors text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="sans-ui text-[10px] text-white/40 uppercase tracking-widest block pl-1">
                      {t('booking.form.preferredTime')}
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-gold/50" size={16} />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-royal-gold/50 transition-colors text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="sans-ui text-[10px] text-white/40 uppercase tracking-widest block pl-1">
                    {t('contact.labels.requirements')}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-5 text-royal-gold/50" size={16} />
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder={t('contact.placeholders.requirements')}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-royal-gold/50 transition-colors text-sm resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold group flex items-center justify-center gap-3 overflow-hidden relative"
                >
                  <span className="relative z-10 uppercase tracking-widest text-[10px] font-bold">
                    {t('booking.form.submit')}
                  </span>
                  <ChevronRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
