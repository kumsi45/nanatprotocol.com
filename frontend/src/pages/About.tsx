import { motion } from 'motion/react';
import { useTranslation } from '@/node_modules/react-i18next';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { key: 'excellence',     title: t('about.values.excellence'),     desc: t('about.values.excellence_desc') },
    { key: 'trust',          title: t('about.values.trust'),          desc: t('about.values.trust_desc') },
    { key: 'prestige',       title: t('about.values.prestige'),       desc: t('about.values.prestige_desc') },
    { key: 'professionalism',title: t('about.values.professionalism'),desc: t('about.values.professionalism_desc') },
    { key: 'loyalty',        title: t('about.values.loyalty'),        desc: t('about.values.loyalty_desc') },
    { key: 'satisfaction',   title: t('about.values.satisfaction'),   desc: t('about.values.satisfaction_desc') },
  ];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Brand Story */}
      <section className="page-header" style={{ background: '#f7f7f8', borderBottom: '1px solid #eaeaea' }}>
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <SectionHeader
                eyebrow={t('about.subtitle')}
                title={t('about.title')}
                subtitle={t('about.description')}
                align="left"
              />
              <p className="t-body mb-8">{t('about.brand_story')}</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: t('contact.branches.adaba.name'),      focus: t('contact.branches.adaba.focus') },
                  { name: t('contact.branches.shashamene.name'), focus: t('contact.branches.shashamene.focus') },
                ].map(b => (
                  <div key={b.name} className="card-surface" style={{ borderRadius: 10, padding: 16 }}>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#111111' }}>{b.name}</p>
                    <p className="text-xs" style={{ color: '#9a9a9a' }}>{b.focus}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden" style={{ borderRadius: 16, border: '1px solid #eaeaea' }}>
                <img src="pwl1.jpg" className="w-full object-cover" style={{ height: 540 }} alt="Nanat Protocol" />
              </div>
              <div className="absolute -bottom-5 -left-4 card" style={{ maxWidth: 280, padding: 20 }}>
                <p className="text-sm italic" style={{ color: '#5a5a5a', marginBottom: 8 }}>"{t('about.quote')}"</p>
                <p className="text-xs font-semibold" style={{ color: '#111111' }}>— {t('about.ceo.title')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment + Community */}
      <section className="section">
        <div className="container-app grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: t('about.commitment.title'), text: t('about.commitment.text'), accent: true },
            { title: t('about.community.title'),  text: t('about.community.text'),  accent: false },
          ].map(card => (
            <div key={card.title} className="card" style={{
              padding: 32,
              borderRadius: 16,
              borderTop: card.accent ? '3px solid #0071e3' : '1px solid #eaeaea',
            }}>
              <h3 className="t-h2 mb-4">{card.title}</h3>
              <p className="t-body">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-sm" style={{ background: '#f7f7f8', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div className="container-app">
          <SectionHeader eyebrow={t('about.values.subtitle')} title={t('about.values.title')} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="card-surface text-center"
                style={{ borderRadius: 10, padding: '20px 12px' }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: '#111111' }}>{v.title}</p>
                <p className="text-xs" style={{ color: '#9a9a9a' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="section">
        <div className="container-app">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="relative overflow-hidden" style={{ borderRadius: 16, border: '1px solid #eaeaea', aspectRatio: '3/4' }}>
                <img src="pwl2.jpg" className="w-full h-full object-cover" alt="Leadership" />
              </div>
            </div>
            <div className="md:col-span-2">
              <span className="eyebrow">{t('about.ceo.title')}</span>
              <blockquote className="t-h2 mb-6" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                "{t('about.ceo.quote')}"
              </blockquote>
              <p className="t-body mb-8">{t('about.ceo.message')}</p>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#111111' }}>NANAT PROTOCOL</p>
                <p className="text-xs mt-1" style={{ color: '#9a9a9a' }}>Complete Preparation for Every Occasion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
