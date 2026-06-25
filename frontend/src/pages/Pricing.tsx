import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Car,
  Check,
  Crown,
  Gem,
  Handshake,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
} from 'lucide-react';
import BookingModal from '../components/BookingModal';

const packages = [
  {
    name: 'ESSENTIAL',
    description: 'For individuals seeking professional elegance.',
    image: '/pw18.jpg',
    priceLabel: 'Starting From',
    price: 'ETB 2,500',
    button: 'Book Package',
    icon: ShieldCheck,
    features: ['Suit Rental', 'Professional Laundry', 'Styling Assistance', 'Flexible Booking'],
  },
  {
    name: 'SIGNATURE',
    badge: 'Most Popular',
    description: 'Perfect for weddings and special occasions.',
    image: '/pw19.jpg',
    priceLabel: 'Starting From',
    price: 'ETB 8,500',
    button: 'Book Consultation',
    icon: Crown,
    highlighted: true,
    features: ['Premium Suit Rental', 'Decoration Consultation', 'Luxury Styling', 'Priority Support', 'Event Assistance'],
  },
  {
    name: 'EXECUTIVE',
    description: 'Designed for professionals and corporate clients.',
    image: '/car1.png',
    priceLabel: 'Starting From',
    price: 'ETB 15,000',
    button: 'Schedule Meeting',
    icon: Car,
    features: ['Executive Suit Collection', 'Luxury Car Rental', 'Corporate Uniform Solutions', 'VIP Service Support', 'Dedicated Consultant'],
  },
  {
    name: 'BESPOKE EXPERIENCE',
    description: 'For clients who demand exclusivity.',
    image: '/pw9.jpg',
    priceLabel: 'Pricing',
    price: 'Custom Quote',
    button: 'Request Proposal',
    icon: Gem,
    features: ['Full Event Planning', 'Premium Decoration', 'Luxury Transportation', 'VIP Concierge', 'Custom Solutions'],
  },
];

const standards = [
  {
    icon: Sparkles,
    title: 'Consultation & Strategy',
    copy: 'In-depth review of occasion, guest profile, wardrobe, movement, and atmosphere.',
    tag: 'Adaba aligned',
  },
  {
    icon: Handshake,
    title: 'Global-Level Coordination',
    copy: 'Seamless planning across attire, transport, decoration, laundry, and support teams.',
    tag: 'End-to-end',
  },
  {
    icon: UserRoundCheck,
    title: 'Dedicated Concierge',
    copy: 'Personalized assistance for adjustments, timing changes, and special requirements.',
    tag: 'VIP support',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Events Managed' },
  { value: 1000, suffix: '+', label: 'Satisfied Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Corporate Partners' },
];

function CountMetric({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const duration = 1400;

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
    <div ref={ref} className="pricing-stat">
      <strong>{count.toLocaleString()}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

function LuxuryBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="pricing-badge">
      <span />
      {children}
      <span />
    </div>
  );
}

export default function Pricing() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const openBooking = (name: string) => {
    setSelectedPackage(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="pricing-luxury">
      <section className="pricing-hero">
        <div className="pricing-shell">
          <motion.div
            className="pricing-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <LuxuryBadge>INVESTMENT & PACKAGES</LuxuryBadge>
            <h1>Premium Services.<br /><em>Tailored To Your Needs.</em></h1>
            <p>
              Every event, occasion, and client is unique. Explore our premium service packages
              designed to deliver exceptional experiences and unmatched quality.
            </p>
          </motion.div>

          <div className="package-grid">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.article
                  className={pkg.highlighted ? 'package-card package-card-featured' : 'package-card'}
                  key={pkg.name}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  {pkg.badge && <div className="popular-ribbon">{pkg.badge}</div>}
                  <div className="package-image">
                    <img src={pkg.image} alt={pkg.name} />
                    <div className="package-icon"><Icon size={18} /></div>
                  </div>

                  <div className="package-body">
                    <h2>{pkg.name}</h2>
                    <p>{pkg.description}</p>
                    <ul>
                      {pkg.features.map((feature) => (
                        <li key={feature}>
                          <Check size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="package-price">
                      <span>{pkg.priceLabel}</span>
                      <strong>{pkg.price}</strong>
                    </div>
                    <button type="button" onClick={() => openBooking(pkg.name)}>
                      {pkg.button}
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="custom-note-section">
        <div className="pricing-shell">
          <motion.div
            className="custom-note"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div>
              <LuxuryBadge>Private curation</LuxuryBadge>
              <h2>Need a custom solution?</h2>
              <p>
                Every event and client is unique. Our team can prepare a personalized package
                tailored specifically to your requirements.
              </p>
            </div>
            <button type="button" onClick={() => openBooking('Custom Quote')}>
              Get Custom Quote <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="standards-section">
        <div className="pricing-shell standards-shell">
          <div className="standards-head">
            <LuxuryBadge>Comparison Experience</LuxuryBadge>
            <h2>The Protocol Standards</h2>
          </div>

          <div className="standards-list">
            {standards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="standard-row"
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Icon size={22} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <span>{item.tag}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pricing-trust">
        <div className="pricing-shell trust-grid">
          {stats.map((stat) => (
            <CountMetric key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="pricing-cta">
        <div className="pricing-shell">
          <motion.div
            className="cta-panel"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
          >
            <img src="/car2.png" alt="" />
            <div className="cta-overlay" />
            <div>
              <CalendarCheck size={26} />
              <h2>Let's Create Something <em>Exceptional.</em></h2>
              <p>Speak with our team to design a premium experience tailored to your needs.</p>
              <div className="cta-actions">
                <button type="button" onClick={() => openBooking('Premium Consultation')}>
                  Book Consultation
                </button>
                <Link to="/contact">Contact Nanat Protocol</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        serviceTitle={selectedPackage}
      />

      <style>{`
        .pricing-luxury {
          --gold: #d4af37;
          --champagne: #f1dfad;
          --ink: #0a0a0a;
          --soft: rgba(255,255,255,0.66);
          min-height: 100vh;
          overflow: hidden;
          background: #0b0b0b;
          color: #fff;
          font-family: "Inter", "Noto Sans Ethiopic", ui-sans-serif, system-ui, sans-serif;
        }

        .pricing-luxury h1,
        .pricing-luxury h2,
        .pricing-luxury h3,
        .pricing-luxury p {
          margin: 0;
          color: inherit;
          letter-spacing: 0;
        }

        .pricing-shell {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .pricing-hero {
          position: relative;
          padding: 120px 0 86px;
          background:
            radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 34%),
            linear-gradient(180deg, #0d0d0d, #111 52%, #0b0b0b);
        }

        .pricing-hero-copy {
          max-width: 760px;
          margin: 0 auto 62px;
          text-align: center;
        }

        .pricing-badge {
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

        .pricing-badge span {
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }

        .pricing-badge span:last-child {
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .pricing-hero h1 {
          margin-top: 18px;
          font-size: clamp(42px, 7vw, 88px);
          line-height: 0.94;
          font-weight: 900;
          text-wrap: balance;
        }

        .pricing-hero h1 em,
        .cta-panel h2 em {
          color: var(--gold);
          font-style: italic;
        }

        .pricing-hero p {
          max-width: 650px;
          margin: 22px auto 0;
          color: rgba(255,255,255,0.68);
          line-height: 1.75;
          font-size: 15px;
        }

        .package-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .package-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(241,223,173,0.16);
          border-radius: 8px;
          background: linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025));
          box-shadow: 0 30px 90px rgba(0,0,0,0.28);
          transition: border-color 220ms ease, box-shadow 220ms ease;
        }

        .package-card:hover {
          border-color: rgba(212,175,55,0.5);
          box-shadow: 0 34px 100px rgba(0,0,0,0.36), 0 0 35px rgba(212,175,55,0.12);
        }

        .package-card-featured {
          border-color: rgba(212,175,55,0.66);
          box-shadow: 0 34px 120px rgba(0,0,0,0.4), 0 0 48px rgba(212,175,55,0.22);
        }

        .popular-ribbon {
          position: absolute;
          z-index: 4;
          top: 14px;
          right: 14px;
          color: #0a0a0a;
          background: linear-gradient(135deg, #fff0bc, #d4af37);
          border-radius: 999px;
          padding: 7px 11px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .package-image {
          position: relative;
          aspect-ratio: 16 / 11;
          overflow: hidden;
          background: #171717;
        }

        .package-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.84) contrast(1.06);
          transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .package-card:hover .package-image img {
          transform: scale(1.055);
        }

        .package-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 34%, rgba(0,0,0,0.88));
        }

        .package-icon {
          position: absolute;
          z-index: 2;
          left: 18px;
          bottom: 18px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(241,223,173,0.22);
          border-radius: 50%;
          background: rgba(9,9,9,0.64);
          color: var(--gold);
          backdrop-filter: blur(16px);
        }

        .package-body {
          padding: 24px;
        }

        .package-body h2 {
          color: var(--gold);
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .package-body > p {
          min-height: 54px;
          margin-top: 14px;
          color: rgba(255,255,255,0.72);
          line-height: 1.65;
          font-size: 14px;
        }

        .package-body ul {
          min-height: 170px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 22px 0 26px;
          padding: 0;
          list-style: none;
        }

        .package-body li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.78);
          font-size: 13px;
          line-height: 1.45;
        }

        .package-body li svg {
          flex: 0 0 auto;
          color: var(--gold);
          padding: 2px;
          border: 1px solid rgba(212,175,55,0.32);
          border-radius: 50%;
        }

        .package-price {
          padding-top: 22px;
          border-top: 1px solid rgba(241,223,173,0.12);
        }

        .package-price span {
          display: block;
          color: rgba(255,255,255,0.46);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .package-price strong {
          display: block;
          margin-top: 6px;
          color: #fff;
          font-size: 28px;
          line-height: 1;
          font-weight: 900;
        }

        .package-card-featured .package-price strong {
          color: var(--gold);
        }

        .package-body button,
        .custom-note button,
        .cta-actions button,
        .cta-actions a {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 4px;
          border: 1px solid rgba(212,175,55,0.68);
          padding: 0 18px;
          color: var(--champagne);
          background: transparent;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 180ms ease, background 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .package-body button {
          width: 100%;
          margin-top: 22px;
        }

        .package-card-featured .package-body button,
        .custom-note button,
        .cta-actions button {
          color: #080808;
          background: linear-gradient(135deg, #f8e9b8, #d4af37 56%, #997622);
          box-shadow: 0 16px 36px rgba(212,175,55,0.22);
        }

        .package-body button:hover,
        .custom-note button:hover,
        .cta-actions button:hover,
        .cta-actions a:hover {
          transform: translateY(-2px);
        }

        .custom-note-section,
        .standards-section,
        .pricing-trust,
        .pricing-cta {
          background: #0b0b0b;
          padding: 86px 0;
        }

        .custom-note {
          display: grid;
          gap: 24px;
          align-items: center;
          padding: 28px;
          border: 1px solid rgba(241,223,173,0.16);
          border-radius: 10px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025)),
            radial-gradient(circle at 90% 10%, rgba(212,175,55,0.13), transparent 34%);
          box-shadow: 0 30px 90px rgba(0,0,0,0.24);
        }

        .custom-note h2,
        .standards-head h2 {
          margin-top: 12px;
          color: #fff;
          font-size: clamp(30px, 5vw, 54px);
          line-height: 1;
          font-weight: 900;
        }

        .custom-note p {
          max-width: 650px;
          margin-top: 12px;
          color: rgba(255,255,255,0.66);
          line-height: 1.72;
        }

        .standards-section {
          background:
            linear-gradient(180deg, #0b0b0b, #111 48%, #0b0b0b);
        }

        .standards-shell {
          max-width: 900px;
        }

        .standards-head {
          text-align: center;
          margin-bottom: 46px;
        }

        .standards-list {
          display: grid;
          gap: 0;
        }

        .standard-row {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 18px;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid rgba(241,223,173,0.13);
        }

        .standard-row > svg {
          color: var(--gold);
        }

        .standard-row h3 {
          color: #fff;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .standard-row p {
          margin-top: 7px;
          color: rgba(255,255,255,0.58);
          line-height: 1.58;
          font-size: 14px;
        }

        .standard-row > span {
          grid-column: 2;
          justify-self: start;
          color: var(--gold);
          border: 1px solid rgba(212,175,55,0.28);
          border-radius: 4px;
          padding: 6px 9px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .pricing-trust {
          padding: 64px 0;
          border-block: 1px solid rgba(241,223,173,0.1);
          background: #070707;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .pricing-stat {
          min-height: 130px;
          display: grid;
          place-items: center;
          align-content: center;
          text-align: center;
          border: 1px solid rgba(241,223,173,0.1);
          border-radius: 8px;
          background: rgba(255,255,255,0.026);
        }

        .pricing-stat strong {
          color: var(--gold);
          font-size: clamp(38px, 7vw, 62px);
          line-height: 1;
          font-weight: 900;
          white-space: nowrap;
        }

        .pricing-stat span {
          margin-top: 10px;
          color: rgba(255,255,255,0.56);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .pricing-cta {
          padding: 110px 0 132px;
          background:
            radial-gradient(circle at 15% 10%, rgba(212,175,55,0.1), transparent 32%),
            #111;
        }

        .cta-panel {
          min-height: 520px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(241,223,173,0.16);
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 42px 120px rgba(0,0,0,0.42);
        }

        .cta-panel > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.72) contrast(1.08);
        }

        .cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.9), rgba(0,0,0,0.58), rgba(0,0,0,0.88));
        }

        .cta-panel > div:last-child {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 32px;
        }

        .cta-panel svg {
          color: var(--gold);
        }

        .cta-panel h2 {
          margin-top: 18px;
          color: #fff;
          font-size: clamp(38px, 7vw, 78px);
          line-height: 0.96;
          font-weight: 900;
          text-wrap: balance;
        }

        .cta-panel p {
          max-width: 560px;
          margin: 18px auto 0;
          color: rgba(255,255,255,0.68);
          line-height: 1.7;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .cta-actions a {
          color: var(--champagne);
          background: rgba(255,255,255,0.025);
          border-color: rgba(241,223,173,0.28);
          backdrop-filter: blur(14px);
        }

        @media (min-width: 680px) {
          .pricing-shell {
            width: min(1180px, calc(100% - 56px));
          }

          .package-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .custom-note {
            grid-template-columns: 1fr auto;
            padding: 36px;
          }

          .standard-row {
            grid-template-columns: 38px 1fr auto;
          }

          .standard-row > span {
            grid-column: auto;
            justify-self: end;
          }
        }

        @media (min-width: 1080px) {
          .package-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .trust-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 520px) {
          .pricing-hero {
            padding-top: 96px;
          }

          .custom-note button,
          .cta-actions button,
          .cta-actions a {
            width: 100%;
          }

          .cta-actions {
            flex-direction: column;
          }

          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
