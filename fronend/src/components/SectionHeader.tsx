import { motion } from 'motion/react';

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, light = false, align = 'center' }: Props) {
  return (
    <div className={`flex flex-col gap-4 mb-20 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <div className={`flex items-center gap-3 mb-2 ${align === 'center' ? 'justify-center w-full' : ''}`}>
        <div className="h-[1px] w-12 gold-gradient"></div>
        <span className="sans-ui gold-text tracking-[0.3em] text-[11px] md:text-xs">{subtitle || 'Signature Service'}</span>
        {align === 'center' && <div className="h-[1px] w-12 gold-gradient"></div>}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-3xl md:text-5xl font-display italic tracking-tight leading-tight ${light ? 'text-white' : 'text-white'}`}
      >
        {title.split(' ').map((word, i) => {
          const isEmphasis = ['Standard', 'Excellence', 'ጥራትን', 'የላቀ', 'Qulqullina', 'Olaanaa'].some(emp => word.includes(emp));
          return (
            <span key={i} className={isEmphasis ? 'text-royal-gold font-bold not-italic' : ''}>
              {word}{' '}
            </span>
          );
        })}
      </motion.h2>
    </div>
  );
}
