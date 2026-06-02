import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from '@/node_modules/react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32">
      {/* Brand Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                title={t('about.title')}
                subtitle={t('about.subtitle')}
                align="left"
              />
              <p className="text-lg text-white/70 leading-loose mb-8">
                {t('about.description')}
              </p>
              <p className="text-white/50 leading-loose mb-10">
                {t('about.brand_story')}
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-3xl italic text-royal-gold mb-2">{t('contact.branches.adaba.name')}</h4>
                  <span className="sans-ui text-white/40 text-[9px]">{t('contact.branches.adaba.focus')}</span>
                </div>
                <div>
                  <h4 className="text-3xl italic text-royal-gold mb-2">{t('contact.branches.shashamene.name')}</h4>
                  <span className="sans-ui text-white/40 text-[9px]">{t('contact.branches.shashamene.focus')}</span>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="h-[700px] grayscale overflow-hidden">
                <img
                  src="pwl1.jpg"
                  className="w-full h-full object-cover"
                  alt="Prestige Story"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-10 max-w-xs transition-transform hover:-translate-y-2 duration-500">
                <blockquote className="text-xl italic text-white/90 leading-relaxed mb-4">
                  "{t('about.quote')}"
                </blockquote>
                <cite className="sans-ui text-royal-gold not-italic">— {t('about.ceo.title')}</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="glass p-16">
            <h3 className="text-3xl italic mb-8">{t('about.commitment.title')}</h3>
            <p className="text-white/60 leading-[2] text-lg">
              {t('about.commitment.text')}
            </p>
            <div className="mt-12 h-[1px] w-full bg-white/10" />
          </div>
          <div className="glass p-16 border-t-[3px] border-t-royal-gold">
            <h3 className="text-3xl italic mb-8">{t('about.community.title')}</h3>
            <p className="text-white/60 leading-[2] text-lg">
              {t('about.community.text')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-12">
          <SectionHeader title={t('about.values.title')} subtitle={t('about.values.subtitle')} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { title: t('about.values.excellence'), desc: t('about.values.excellence_desc') },
              { title: t('about.values.trust'), desc: t('about.values.trust_desc') },
              { title: t('about.values.prestige'), desc: t('about.values.prestige_desc') },
              { title: t('about.values.professionalism'), desc: t('about.values.professionalism_desc') },
              { title: t('about.values.loyalty'), desc: t('about.values.loyalty_desc') },
              { title: t('about.values.satisfaction'), desc: t('about.values.satisfaction_desc') }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl italic text-white group-hover:text-royal-gold transition-colors duration-300 mb-2">
                  {value.title}
                </div>
                <div className="sans-ui text-[9px] text-white/40">{value.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-32 bg-luxury-black overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-12 flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/3 aspect-[3/4] glass relative overflow-hidden grayscale grayscale-100 hover:grayscale-0 transition-all duration-700">
            <img
              src="pwl2.jpg"
              className="w-full h-full object-cover"
              alt="CEO"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 gold-gradient"></div>
              <span className="sans-ui gold-text">{t('about.ceo.title')}</span>
            </div>
            <h2 className="text-3xl italic mb-10 leading-tight">"{t('about.ceo.quote')}"</h2>
            <p className="text-white/70 leading-loose text-lg mb-8 italic">
              {t('about.ceo.message')}
            </p>
            <div className="flex flex-col">
              <span className="text-lg italic tracking-widest uppercase">NANAT PROTOCOL</span>
              <span className="sans-ui gold-text text-[10px] mt-2">COMPLETE PREPARATION FOR EVERY OCCASION</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
