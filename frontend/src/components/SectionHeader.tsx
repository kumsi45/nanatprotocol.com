import { motion } from 'motion/react';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '' }: Props) {
  const center = align === 'center';
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="t-h1 text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="t-body-lg mt-4 text-balance" style={{ maxWidth: center ? 560 : undefined, margin: center ? '16px auto 0' : '16px 0 0' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
