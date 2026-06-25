import { useEffect, useRef, useState, type ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  Car,
  Check,
  ChevronRight,
  Quote,
  Scissors,
  ShieldCheck,
  Shirt,
  Sparkles,
  Star,
  WashingMachine,
} from 'lucide-react';
import BookingModal from '../components/BookingModal';

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  icon: ComponentType<{ size?: number }>;
};

const services: Service[] = [
  {
    number: '01',
    title: 'Luxury Suit Rental',
    description: 'Experience premium suit rentals crafted for weddings, corporate events, formal occasions, and unforgettable moments.',
    image: '/pw55.jpg',
    cta: 'Explore Collection',
    icon: Shirt,
  },
  {
    number: '02',
    title: "Gentlemen's Suits",
    description: 'Premium tailored suits designed for professionals who value confidence, style, and sophistication.',
    image: '/pw18.jpg',
    cta: 'View Collection',
    icon: Scissors,
  },
  {
    number: '03',
    title: 'Luxury Car Rental',
    description: 'Travel with prestige through our selection of executive vehicles and premium transportation services.',
    image: '/car1.png',
    cta: 'View Fleet',
    icon: Car,
  },
  {
    number: '04',
    title: 'Decoration Services',
    description: 'Transform weddings, corporate events, and celebrations into extraordinary experiences.',
    image: '/pw19.jpg',
    cta: 'View Portfolio',
    icon: Sparkles,
  },
  {
    number: '05',
    title: 'Professional Laundry',
    description: 'Expert garment care preserving the elegance, quality, and longevity of your premium clothing.',
    image: '/pwl2.jpg',
    cta: 'Learn More',
    icon: WashingMachine,
  },
  {
    number: '06',
    title: 'Uniform Services',
    description: 'Premium uniform solutions designed for businesses, institutions, and professional teams.',
    image: '/un.png',
    cta: 'View Solutions',
    icon: BriefcaseBusiness,
  },
];

const stats = [
  { value: 4, suffix: '+', label: 'Core Services' },
  { value: 8, suffix: '+', label: 'Elite Packages' },
  { value: 3, suffix: '+', label: 'Corporate Clients' },
  { value: 1, suffix: '', label: 'Dedicated House' },
];

const featured = [
  {
    title: 'The Grand Union Protocol',
    label: 'Wedding & Gala',
    image: '/pw22.jpg',
    copy: 'Ceremony presentation, formalwear, transport, and atmosphere orchestrated as one elegant experience.',
  },
  {
    title: 'The Executive Presence',
    label: 'Corporate Identity',
    image: '/pw21.jpg',
    copy: 'Premium garments, executive arrival, and refined support for leadership moments.',
  },
];

const journey = [
  ['01', 'Choose Service', 'Select the luxury service or combination that fits your occasion.'],
  ['02', 'Consultation', 'Share timing, measurements, venue needs, and service expectations.'],
  ['03', 'Premium Service', 'Our team prepares garments, logistics, styling, and atmosphere.'],
  ['04', 'Exceptional Results', 'Arrive, host, and move through the occasion with confidence.'],
];

const testimonials = [
  ['Samuel Bekele', 'Corporate Client', 'The service felt calm, disciplined, and premium from consultation to final delivery.'],
  ['Helen Tadesse', 'Wedding Client', 'Nanat Protocol transformed our celebration into something elegant and unforgettable.'],
  ['Abdi Hassen', 'Suit Rental', 'The suit presentation, fit, and timing were far beyond a normal rental experience.'],
];

function LuxuryBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="svc-badge">
      <span />
      {children}
      <span />
    </div>
  );
}

function CountStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="svc-stat">
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function Services() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openBooking = (service: string) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="services-luxury">
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <img src="/car1.png" alt="" />
        </div>
        <div className="svc-shell svc-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <LuxuryBadge>PREMIUM SERVICES</LuxuryBadge>
            <h1>Exceptional Services.<br /><em>Delivered With Elegance.</em></h1>
            <p>
              From luxury suit rentals and premium event decoration to executive transportation
              and professional garment care, Nanat Protocol delivers world-class experiences
              with unmatched attention to detail.
            </p>
            <div className="svc-actions">
              <button type="button" onClick={() => openBooking('Premium Service Consultation')}>
                Book Consultation <ArrowRight size={16} />
              </button>
              <Link to="/collections">View Collections</Link>
            </div>
          </motion.div>

          <motion.div
            className="svc-hero-stack"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="svc-stack-card stack-primary">
              <img src="/pw18.jpg" alt="Luxury suit rental" />
              <span>Signature Tailoring</span>
            </div>
            <motion.div className="svc-stack-card stack-secondary" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.6, repeat: Infinity }}>
              <img src="/pw19.jpg" alt="Decoration services" />
              <span>Event Atmosphere</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="svc-showcase">
        <div className="svc-shell">
          <div className="svc-section-head">
            <LuxuryBadge>Premium service house</LuxuryBadge>
            <h2>Exceptional Services. Delivered With Elegance.</h2>
            <p>Luxury lifestyle support for clients who expect presentation, timing, atmosphere, and care to work together.</p>
          </div>

          <div className="svc-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="svc-card"
                  key={service.title}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.65, delay: (index % 2) * 0.08 }}
                >
                  <div className="svc-card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="svc-card-copy">
                    <span>{service.number}</span>
                    <div className="svc-card-icon"><Icon size={19} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <button type="button" onClick={() => openBooking(service.title)}>
                      {service.cta} <ChevronRight size={15} />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="svc-stats-section">
        <div className="svc-shell svc-stats-grid">
          {stats.map((stat) => (
            <CountStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="svc-featured">
        <div className="svc-shell">
          <div className="svc-featured-head">
            <div>
              <LuxuryBadge>Curated protocols</LuxuryBadge>
              <h2>Featured Experiences</h2>
            </div>
            <div className="svc-mini-controls">
              <button type="button" aria-label="Previous featured experience">‹</button>
              <button type="button" aria-label="Next featured experience">›</button>
            </div>
          </div>

          <div className="svc-featured-grid">
            {featured.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-journey">
        <div className="svc-shell">
          <h2>The Journey</h2>
          <div className="svc-journey-grid">
            {journey.map(([num, title, copy]) => (
              <div key={num}>
                <BadgeCheck size={18} />
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-testimonials">
        <div className="svc-shell">
          <LuxuryBadge>Client voices</LuxuryBadge>
          <div className="svc-testimonial-grid">
            {testimonials.map(([name, role, text]) => (
              <article key={name}>
                <div className="svc-stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <Quote size={18} />
                <p>{text}</p>
                <strong>{name}</strong>
                <span>{role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ShieldCheck size={24} />
            <h2>Ready To Experience Premium Service?</h2>
            <p>Elevate your wardrobe, hospitality, decoration, and arrival into one polished experience.</p>
            <button type="button" onClick={() => openBooking('Premium Service Consultation')}>
              Inquire Now <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} serviceTitle={selectedService} />

      <style>{`
        .services-luxury {
          --gold: #d4af37;
          --champagne: #f1dfad;
          --ink: #080808;
          --muted: rgba(255,255,255,0.64);
          min-height: 100vh;
          overflow: hidden;
          background: #080808;
          color: #fff;
          font-family: "Inter", "Noto Sans Ethiopic", ui-sans-serif, system-ui, sans-serif;
        }

        .services-luxury h1,
        .services-luxury h2,
        .services-luxury h3,
        .services-luxury p {
          margin: 0;
          color: inherit;
          letter-spacing: 0;
        }

        .svc-shell {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .svc-hero {
          min-height: 94svh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 104px 0 78px;
          isolation: isolate;
          background:
            radial-gradient(circle at 76% 20%, rgba(212,175,55,0.16), transparent 30%),
            linear-gradient(180deg, #0d0d0d, #080808);
        }

        .svc-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          opacity: 0.24;
        }

        .svc-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(8,8,8,0.96), rgba(8,8,8,0.74), rgba(8,8,8,0.9));
        }

        .svc-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.72) contrast(1.08);
        }

        .svc-hero-grid {
          display: grid;
          gap: 48px;
          align-items: center;
        }

        .svc-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--gold);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .svc-badge span {
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }

        .svc-badge span:last-child {
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .svc-hero h1 {
          margin-top: 20px;
          max-width: 860px;
          font-size: clamp(46px, 8vw, 104px);
          line-height: 0.9;
          font-weight: 900;
          text-wrap: balance;
        }

        .svc-hero h1 em,
        .svc-card-copy h3 em {
          color: var(--gold);
          font-style: italic;
        }

        .svc-hero p {
          max-width: 680px;
          margin-top: 24px;
          color: rgba(255,255,255,0.7);
          font-size: clamp(15px, 2vw, 20px);
          line-height: 1.75;
        }

        .svc-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 34px;
        }

        .svc-actions button,
        .svc-actions a,
        .svc-card-copy button,
        .svc-cta button {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 4px;
          border: 1px solid rgba(212,175,55,0.62);
          padding: 0 18px;
          color: #080808;
          background: linear-gradient(135deg, #f8e9b8, #d4af37 56%, #997622);
          box-shadow: 0 16px 38px rgba(212,175,55,0.2);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
        }

        .svc-actions a {
          color: var(--champagne);
          background: rgba(255,255,255,0.025);
          box-shadow: none;
          border-color: rgba(241,223,173,0.26);
          backdrop-filter: blur(14px);
        }

        .svc-actions button:hover,
        .svc-actions a:hover,
        .svc-card-copy button:hover,
        .svc-cta button:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }

        .svc-hero-stack {
          position: relative;
          display: none;
          min-height: 540px;
        }

        .svc-stack-card {
          position: absolute;
          overflow: hidden;
          border: 1px solid rgba(241,223,173,0.2);
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          box-shadow: 0 40px 100px rgba(0,0,0,0.45);
        }

        .svc-stack-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.84) contrast(1.06);
        }

        .svc-stack-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 44%, rgba(0,0,0,0.82));
        }

        .svc-stack-card span {
          position: absolute;
          z-index: 2;
          left: 18px;
          bottom: 18px;
          color: var(--champagne);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .stack-primary {
          inset: 74px 0 0 36px;
          transform: rotate(-2deg);
        }

        .stack-secondary {
          width: 44%;
          height: 56%;
          top: 0;
          left: 0;
          transform: rotate(3deg);
        }

        .svc-showcase,
        .svc-featured,
        .svc-journey,
        .svc-testimonials,
        .svc-cta {
          padding: 96px 0;
          background: #080808;
        }

        .svc-showcase {
          background:
            radial-gradient(circle at 50% 0%, rgba(212,175,55,0.1), transparent 32%),
            #080808;
        }

        .svc-section-head {
          max-width: 760px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .svc-section-head h2,
        .svc-featured-head h2,
        .svc-journey h2,
        .svc-cta h2 {
          margin-top: 14px;
          font-size: clamp(34px, 6vw, 74px);
          line-height: 0.95;
          font-weight: 900;
          text-wrap: balance;
        }

        .svc-section-head p {
          max-width: 620px;
          margin: 18px auto 0;
          color: var(--muted);
          line-height: 1.76;
        }

        .svc-list {
          display: grid;
          gap: 74px;
        }

        .svc-card {
          position: relative;
          display: grid;
          gap: 24px;
          align-items: center;
        }

        .svc-card-image {
          min-height: 420px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(241,223,173,0.15);
          border-radius: 8px;
          box-shadow: 0 34px 90px rgba(0,0,0,0.34);
        }

        .svc-card-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 42%, rgba(0,0,0,0.72));
        }

        .svc-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.84) contrast(1.05);
          transition: transform 760ms cubic-bezier(0.22, 1, 0.36, 1), filter 760ms ease;
        }

        .svc-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          z-index: 0;
          border-radius: 10px;
          border: 1px solid transparent;
          pointer-events: none;
          transition: border-color 220ms ease, box-shadow 220ms ease;
        }

        .svc-card:hover::before {
          border-color: rgba(212,175,55,0.35);
          box-shadow: 0 0 58px rgba(212,175,55,0.1);
        }

        .svc-card:hover .svc-card-image img {
          transform: scale(1.06);
          filter: saturate(0.96) contrast(1.08);
        }

        .svc-card-image::before {
          content: '';
          position: absolute;
          inset: -40% auto -40% -70%;
          z-index: 2;
          width: 46%;
          transform: skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.17), transparent);
          opacity: 0;
          transition: left 760ms ease, opacity 220ms ease;
        }

        .svc-card:hover .svc-card-image::before {
          left: 126%;
          opacity: 1;
        }

        .svc-card-copy {
          position: relative;
          z-index: 1;
          padding: 26px;
          border: 1px solid rgba(241,223,173,0.13);
          border-radius: 8px;
          background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.022));
          backdrop-filter: blur(18px);
          box-shadow: 0 28px 80px rgba(0,0,0,0.22);
        }

        .svc-card-copy > span {
          color: rgba(212,175,55,0.58);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.2em;
        }

        .svc-card-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-top: 20px;
          border: 1px solid rgba(212,175,55,0.26);
          border-radius: 50%;
          color: var(--gold);
          background: rgba(8,8,8,0.44);
        }

        .svc-card-copy h3 {
          margin-top: 18px;
          font-size: clamp(30px, 5vw, 58px);
          line-height: 0.97;
          font-weight: 900;
          text-wrap: balance;
        }

        .svc-card-copy p {
          max-width: 520px;
          margin-top: 18px;
          color: rgba(255,255,255,0.66);
          line-height: 1.78;
        }

        .svc-card-copy button {
          margin-top: 24px;
          color: var(--champagne);
          background: rgba(255,255,255,0.025);
          box-shadow: none;
          border-color: rgba(241,223,173,0.26);
        }

        .svc-card:hover .svc-card-copy button {
          color: #080808;
          background: linear-gradient(135deg, #f8e9b8, #d4af37 56%, #997622);
          box-shadow: 0 16px 38px rgba(212,175,55,0.2);
        }

        .svc-stats-section {
          padding: 54px 0;
          border-block: 1px solid rgba(241,223,173,0.1);
          background: #0d0d0d;
        }

        .svc-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .svc-stat {
          min-height: 112px;
          display: grid;
          place-items: center;
          align-content: center;
          border: 1px solid rgba(241,223,173,0.1);
          border-radius: 8px;
          background: rgba(255,255,255,0.026);
          text-align: center;
        }

        .svc-stat strong {
          color: var(--gold);
          font-size: clamp(32px, 6vw, 52px);
          line-height: 1;
          font-weight: 900;
        }

        .svc-stat span {
          margin-top: 8px;
          color: rgba(255,255,255,0.56);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .svc-featured {
          background: #0d0d0d;
        }

        .svc-featured-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
        }

        .svc-featured-grid {
          display: grid;
          gap: 18px;
        }

        .svc-featured-grid article {
          overflow: hidden;
          border: 1px solid rgba(241,223,173,0.14);
          border-radius: 8px;
          background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
        }

        .svc-featured-grid img {
          width: 100%;
          aspect-ratio: 16 / 11;
          object-fit: cover;
          filter: saturate(0.86) contrast(1.05);
        }

        .svc-featured-grid article > div {
          padding: 20px;
        }

        .svc-featured-grid span {
          color: var(--gold);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .svc-featured-grid h3 {
          margin-top: 8px;
          font-size: 24px;
          line-height: 1.02;
          font-weight: 900;
        }

        .svc-featured-grid p {
          margin-top: 10px;
          color: rgba(255,255,255,0.6);
          line-height: 1.62;
          font-size: 14px;
        }

        .svc-mini-controls {
          display: flex;
          gap: 8px;
        }

        .svc-mini-controls button {
          width: 32px;
          height: 32px;
          border: 1px solid rgba(212,175,55,0.34);
          border-radius: 4px;
          color: var(--gold);
          background: transparent;
          cursor: pointer;
        }

        .svc-journey {
          background: linear-gradient(180deg, #171717, #111);
          text-align: center;
        }

        .svc-journey-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 36px;
        }

        .svc-journey-grid div {
          padding: 24px;
          border: 1px solid rgba(241,223,173,0.13);
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
        }

        .svc-journey-grid svg {
          color: var(--gold);
        }

        .svc-journey-grid span {
          display: block;
          margin-top: 10px;
          color: var(--gold);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.15em;
        }

        .svc-journey-grid h3 {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 850;
        }

        .svc-journey-grid p {
          margin-top: 8px;
          color: rgba(255,255,255,0.6);
          line-height: 1.58;
          font-size: 13px;
        }

        .svc-testimonials {
          background: #080808;
          text-align: center;
        }

        .svc-testimonial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 34px;
          text-align: left;
        }

        .svc-testimonial-grid article {
          padding: 22px;
          border: 1px solid rgba(241,223,173,0.12);
          border-radius: 8px;
          background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
        }

        .svc-stars {
          display: flex;
          gap: 2px;
          color: var(--gold);
        }

        .svc-testimonial-grid article > svg {
          margin-top: 18px;
          color: rgba(212,175,55,0.65);
        }

        .svc-testimonial-grid p {
          margin-top: 12px;
          color: rgba(255,255,255,0.68);
          line-height: 1.65;
        }

        .svc-testimonial-grid strong {
          display: block;
          margin-top: 18px;
          color: #fff;
          font-size: 14px;
        }

        .svc-testimonial-grid span {
          display: block;
          margin-top: 3px;
          color: var(--gold);
          font-size: 11px;
        }

        .svc-cta {
          min-height: 500px;
          display: flex;
          align-items: center;
          text-align: center;
          background:
            radial-gradient(circle at 50% 12%, rgba(212,175,55,0.18), transparent 32%),
            #0b0b0b;
        }

        .svc-cta svg {
          color: var(--gold);
        }

        .svc-cta p {
          max-width: 540px;
          margin: 18px auto 0;
          color: rgba(255,255,255,0.66);
          line-height: 1.7;
        }

        .svc-cta button {
          margin-top: 30px;
        }

        @media (min-width: 720px) {
          .svc-shell {
            width: min(1180px, calc(100% - 56px));
          }

          .svc-hero-grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.78fr);
          }

          .svc-hero-stack {
            display: block;
          }

          .svc-card {
            grid-template-columns: minmax(0, 0.92fr) minmax(0, 1fr);
            gap: 72px;
          }

          .svc-card:nth-child(even) .svc-card-image {
            order: 2;
          }

          .svc-featured-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .svc-journey-grid,
          .svc-stats-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .svc-testimonial-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1080px) {
          .svc-showcase,
          .svc-featured,
          .svc-journey,
          .svc-testimonials,
          .svc-cta {
            padding: 120px 0;
          }
        }

        @media (max-width: 520px) {
          .svc-hero {
            padding-top: 96px;
          }

          .svc-actions,
          .svc-actions button,
          .svc-actions a,
          .svc-card-copy button,
          .svc-cta button {
            width: 100%;
          }

          .svc-actions {
            flex-direction: column;
          }

          .svc-featured-head {
            align-items: start;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
