import { ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

interface Props { service: Service; index: number; onBook?: (service: Service) => void; }

export default function ServiceCard({ service, onBook }: Props) {
  const isBookable = ['wedding-decoration', 'premium-car-rental', 'groom-package'].includes(service.id);

  return (
    <div className="card group" style={{ padding: 0, overflow: 'hidden' }}>
      <div className="relative overflow-hidden" style={{ height: 240 }}>
        <img src={service.image} alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(17,17,17,0.5) 100%)' }} />
        <div className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.9)', opacity: 0, transition: 'opacity 150ms' }}
          ref={el => { if (el) el.style.opacity = '0'; }}
        >
          <ArrowUpRight size={14} style={{ color: '#111111' }} />
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <p className="t-label mb-2" style={{ color: '#9a9a9a' }}>{service.category}</p>
        <h3 className="t-h3 mb-2">{service.title}</h3>
        <p className="text-sm mb-4" style={{ color: '#9a9a9a', lineHeight: 1.5 }}>{service.description}</p>
        {isBookable && (
          <button onClick={() => onBook?.(service)} className="btn btn-ghost btn-sm">
            Reserve Consultation
          </button>
        )}
      </div>
    </div>
  );
}
