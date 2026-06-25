import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/node_modules/react-i18next';
import { MapPin, Phone, Clock, ShieldCheck, Lock, Send, Zap, Mail } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', channel: '', service: t('contact.services.protocol'), message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Protocol Request:\nName: ${formData.name}\nChannel: ${formData.channel}\nInterest: ${formData.service}\nRequirements: ${formData.message}`;
    window.open(`https://t.me/nanatprotocol?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  const branches = [
    {
      key: 'adaba',
      name: t('contact.branches.adaba.name'),
      location: t('contact.branches.adaba.location'),
      address: t('contact.branches.adaba.address'),
      phone: '+251 920124148',
      focus: t('contact.branches.adaba.focus'),
    },
    {
      key: 'shashamene',
      name: t('contact.branches.shashamene.name'),
      location: t('contact.branches.shashamene.location'),
      address: t('contact.branches.shashamene.address'),
      phone: '+251 923171212',
      focus: t('contact.branches.shashamene.focus'),
    },
  ];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <div className="container-app page-header">
        <SectionHeader
          eyebrow={t('contact.subtitle')}
          title={t('contact.title')}
          subtitle="Reach our protocol team directly. We respond within one hour."
          align="left"
        />
      </div>

      <div className="container-app" style={{ paddingBottom: 96 }}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* LEFT — info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Branch cards */}
            <div>
              <p className="t-label mb-4">{t('contact.establishment')}</p>
              <div className="flex flex-col gap-3">
                {branches.map(branch => (
                  <div key={branch.key} className="card" style={{ padding: 20 }}>
                    <p className="t-label mb-2" style={{ color: '#9a9a9a' }}>{branch.location}</p>
                    <h4 className="t-h3 mb-4">{branch.name}</h4>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-start gap-2.5 text-sm" style={{ color: '#5a5a5a' }}>
                        <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: '#0071e3' }} />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm" style={{ color: '#5a5a5a' }}>
                        <Phone size={14} className="shrink-0" style={{ color: '#0071e3' }} />
                        <span>{branch.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours + Support */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Clock,       label: t('contact.standardHours'), value: 'Mon–Sat: 08:30–20:00' },
                { icon: ShieldCheck, label: t('contact.prioritySupport'), value: t('contact.concierge247') },
              ].map(item => (
                <div key={item.label} className="card-surface flex gap-3" style={{ padding: 16, borderRadius: 10 }}>
                  <item.icon size={16} className="shrink-0 mt-0.5" style={{ color: '#0071e3' }} />
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: '#111111' }}>{item.label}</p>
                    <p className="text-xs" style={{ color: '#9a9a9a' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust */}
            <div className="divider" />
            <div className="flex gap-6">
              {[
                { icon: Lock,       label: 'Confidential' },
                { icon: ShieldCheck, label: 'Encrypted' },
                { icon: Zap,        label: '< 1hr Response' },
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center gap-1.5 text-center flex-1">
                  <item.icon size={16} style={{ color: '#9a9a9a' }} />
                  <span className="text-xs" style={{ color: '#9a9a9a' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="card" style={{ padding: 32, borderRadius: 16 }}>
              <div className="mb-6">
                <h2 className="t-h2 mb-1">{t('contact.initializeTerminal')}</h2>
                <p className="t-body text-sm">
                  Submit your confidential protocol request. A protocol manager will contact you directly.
                </p>
              </div>

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <ShieldCheck size={22} style={{ color: '#16a34a' }} />
                  </div>
                  <h3 className="t-h3 mb-2">Message Sent</h3>
                  <p className="t-body text-sm">We'll contact you within the hour via your preferred channel.</p>
                  <button onClick={() => setSent(false)} className="btn btn-ghost mt-6 btn-sm">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="input-label">{t('contact.labels.fullName')}</label>
                      <input type="text" required value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        placeholder={t('contact.placeholders.name')}
                        className="input" />
                    </div>
                    <div>
                      <label className="input-label">{t('contact.labels.protocolChannel')}</label>
                      <input type="text" required value={formData.channel}
                        onChange={e => setFormData(p => ({ ...p, channel: e.target.value }))}
                        placeholder="Telegram / Email / Phone"
                        className="input" />
                    </div>
                  </div>

                  <div>
                    <label className="input-label">{t('contact.labels.serviceInterest')}</label>
                    <select value={formData.service}
                      onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                      className="input" style={{ cursor: 'pointer' }}>
                      {[
                        t('contact.services.grooming'),
                        t('contact.services.logistics'),
                        t('contact.services.events'),
                        t('contact.services.protocol'),
                        t('contact.services.general'),
                      ].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="input-label">{t('contact.labels.requirements')}</label>
                    <textarea rows={5} required value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder={t('contact.placeholders.requirements')}
                      className="input" style={{ resize: 'vertical' }} />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full justify-center">
                    {t('contact.submit')}
                    <Send size={16} />
                  </button>

                  <div className="flex items-center gap-2 justify-center" style={{ color: '#9a9a9a' }}>
                    <Mail size={12} />
                    <span className="text-xs">contact@nanatprotocol.com</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
