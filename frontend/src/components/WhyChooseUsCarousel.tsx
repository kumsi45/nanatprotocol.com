import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature { icon: React.ReactNode; title: string; desc: string; }
interface Props { features: Feature[]; }

export default function WhyChooseUsCarousel({ features }: Props) {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(3);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const total = features.length;
  const next = useCallback(() => setCurrent(p => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(p => (p - 1 + total) % total), [total]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const visible = Array.from({ length: perPage }, (_, i) => features[(current + i) % total]);

  return (
    <div className="relative mt-8">
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${perPage}, 1fr)` }}>
        {visible.map((f, i) => (
          <div key={i} className="card" style={{ padding: 24 }}>
            <div className="icon-wrap mb-4">{f.icon}</div>
            <h3 className="t-h3 mb-2">{f.title}</h3>
            <p className="t-body text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-6 justify-center">
        <button onClick={prev} className="btn btn-ghost btn-sm" aria-label="Previous"><ChevronLeft size={16} /></button>
        <div className="flex gap-1.5">
          {features.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-200"
              style={{ width: i === current ? 20 : 6, height: 6, background: i === current ? '#111111' : '#eaeaea', border: 'none', cursor: 'pointer' }}
            />
          ))}
        </div>
        <button onClick={next} className="btn btn-ghost btn-sm" aria-label="Next"><ChevronRight size={16} /></button>
      </div>
    </div>
  );
}
