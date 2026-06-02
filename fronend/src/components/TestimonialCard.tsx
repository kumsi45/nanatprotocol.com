import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="p-10 bg-deep-charcoal border border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <span className="text-8xl font-display">"</span>
      </div>
      
      <div className="flex gap-1 mb-6 text-royal-gold">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>

      <p className="text-white/80 text-lg md:text-sm font-medium leading-[2] italic mb-8 relative z-10">
        "{testimonial.content}"
      </p>

      <div className="flex flex-col">
        <span className="text-white font-display text-lg tracking-wide uppercase">{testimonial.name}</span>
        <span className="text-royal-gold text-[10px] uppercase tracking-[0.25em] font-bold mt-1">
          {testimonial.role}
        </span>
      </div>
    </motion.div>
  );
}
