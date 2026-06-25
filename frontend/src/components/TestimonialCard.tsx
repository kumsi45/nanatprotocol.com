import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface Props { testimonial: Testimonial; }

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="card" style={{ padding: 24 }}>
      <div className="flex gap-0.5 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={13} fill="#111111" strokeWidth={0} />
        ))}
      </div>
      <p className="text-sm mb-5" style={{ color: '#5a5a5a', lineHeight: 1.7 }}>"{testimonial.content}"</p>
      <div>
        <p className="text-sm font-semibold" style={{ color: '#111111' }}>{testimonial.name}</p>
        <p className="text-xs mt-0.5" style={{ color: '#9a9a9a' }}>{testimonial.role}</p>
      </div>
    </div>
  );
}
