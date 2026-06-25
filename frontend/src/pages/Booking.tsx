import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/node_modules/react-i18next';
import { Calendar, Clock, User, MessageSquare, ChevronRight, CalendarCheck, MapPin, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Booking = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', service: '', date: '', time: '', requirements: '' });
  const [sent, setSent] = useState(false);

  const services = [
    t('contact.services.grooming'), t('contact.services.logistics'),
    t('contact.services.events'),   t('contact.services.protocol'),
    t('contact.services.general'),
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Booking Request:%0A- Name: ${formData.name}%0A- Service: ${formData.service}%0A- Date: ${formData.date}%0A- Time: ${formData.time}%0A- Notes: ${formData.requirements}`;
    window.open(`https://t.me/nanatprotocol?text=${msg}`, '_blank');
    setSent(true);
  };

  const labelClass = 'input-label';
  const fieldWrap = 'flex flex-col gap-1.5';

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <div className="page-header container-app">
        <SectionHeader
          eyebrow={t('booking.subtitle')}
          title={t('booking.title')}
          subtitle={t('booking.sidebar.description')}
          align="left"
        />
      </div>

      <div className="container-app" style={{ paddingBottom: 96 }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4"
          >
            <div className="card" style={{ padding: 24 }}>
              <CalendarCheck size={22} className="mb-4" style={{ color: '#0071e3' }} />
              <h3 className="t-h3 mb-2">{t('booking.sidebar.title')}</h3>
              <p className="text-sm mb-5" style={{ color: '#9a9a9a', lineHeight: 1.6 }}>
                {t('booking.sidebar.description')}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5 text-sm" style={{ color: '#5a5a5a' }}>
                  <Clock size={14} style={{ color: '#0071e3' }} /> {t('contact.workingHours')}
                </div>
                <div className="flex items-center gap-2.5 text-sm" style={{ color: '#5a5a5a' }}>
                  <MapPin size={14} style={{ color: '#0071e3' }} /> {t('booking.sidebar.location')}
                </div>
              </div>
            </div>

            <div className="card-surface" style={{ padding: 20, borderRadius: 12, borderLeft: '3px solid #0071e3' }}>
              <p className="text-xs font-semibold mb-2" style={{ color: '#0071e3' }}>{t('booking.sidebar.prioritySupport')}</p>
              <p className="text-sm italic" style={{ color: '#5a5a5a' }}>{t('booking.sidebar.quote')}</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="card" style={{ padding: 32, borderRadius: 16 }}>
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <CheckCircle size={22} style={{ color: '#16a34a' }} />
                  </div>
                  <h3 className="t-h3 mb-2">{t('booking.success.title')}</h3>
                  <p className="t-body text-sm">{t('booking.success.message', { service: formData.service })}</p>
                  <button onClick={() => setSent(false)} className="btn btn-ghost mt-6 btn-sm">Book another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={fieldWrap}>
                      <label className={labelClass}>{t('contact.labels.fullName')}</label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#9a9a9a' }} />
                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                          placeholder={t('contact.placeholders.name')} required
                          className="input" style={{ paddingLeft: 36 }} />
                      </div>
                    </div>
                    <div className={fieldWrap}>
                      <label className={labelClass}>{t('contact.labels.serviceInterest')}</label>
                      <select name="service" value={formData.service} onChange={handleChange}
                        required className="input" style={{ cursor: 'pointer' }}>
                        <option value="">{t('booking.form.selectService')}</option>
                        {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={fieldWrap}>
                      <label className={labelClass}>{t('booking.form.preferredDate')}</label>
                      <div className="relative">
                        <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#9a9a9a' }} />
                        <input type="date" name="date" value={formData.date} onChange={handleChange}
                          required className="input" style={{ paddingLeft: 36 }} />
                      </div>
                    </div>
                    <div className={fieldWrap}>
                      <label className={labelClass}>{t('booking.form.preferredTime')}</label>
                      <div className="relative">
                        <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#9a9a9a' }} />
                        <input type="time" name="time" value={formData.time} onChange={handleChange}
                          required className="input" style={{ paddingLeft: 36 }} />
                      </div>
                    </div>
                  </div>

                  <div className={fieldWrap}>
                    <label className={labelClass}>{t('contact.labels.requirements')}</label>
                    <div className="relative">
                      <MessageSquare size={14} className="absolute left-3 top-4 pointer-events-none" style={{ color: '#9a9a9a' }} />
                      <textarea name="requirements" value={formData.requirements} onChange={handleChange}
                        placeholder={t('contact.placeholders.requirements')} rows={4}
                        className="input" style={{ paddingLeft: 36, resize: 'vertical' }} />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full justify-center">
                    {t('booking.form.submit')} <ChevronRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
