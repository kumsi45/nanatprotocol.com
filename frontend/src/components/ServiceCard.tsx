import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

interface Props {
  service: Service;
  index: number;
  onBook?: (service: Service) => void;
  key?: string | number;
}

export default function ServiceCard({ service, index, onBook }: Props) {
  const isBookable = ['wedding-decoration', 'premium-car-rental', 'groom-package'].includes(service.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="luxury-card group"
    >
      <div className="relative h-[450px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent opacity-90" />
        
        <div className="absolute bottom-10 left-8 right-8 z-10 transition-transform duration-500 group-hover:-translate-y-4">
          <span className="text-royal-gold text-[9px] uppercase tracking-[0.5em] font-bold mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">
            {service.category}
          </span>
          <h3 className="text-3xl font-display text-white mb-4 group-hover:text-royal-gold transition-colors duration-500 leading-tight">
            {service.title}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 h-0 group-hover:h-auto overflow-hidden">
            {service.description}
          </p>

          {isBookable && (
            <button
              onClick={() => onBook?.(service)}
              className="w-full py-4 border border-royal-gold/30 text-royal-gold sans-ui text-[9px] font-bold hover:bg-royal-gold hover:text-black transition-all duration-500 tracking-[0.3em] opacity-0 group-hover:opacity-100"
            >
              Reserve Consultation
            </button>
          )}
        </div>

        <div className="absolute top-8 right-8 w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white/40 group-hover:text-royal-gold group-hover:border-royal-gold transition-all duration-700 group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}
