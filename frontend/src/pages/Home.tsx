import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Award,
  CalendarCheck,
  Car,
  ChevronRight,
  Clock3,
  Quote,
  Scissors,
  ShieldCheck,
  Shirt,
  Sparkles,
  Star,
  Users,
  WashingMachine,
  BriefcaseBusiness,
} from 'lucide-react';

const services = [
  {
    title: 'Suit Rental',
    label: 'Black tie',
    image: '/pw55.jpg',
    icon: Shirt,
    copy: 'Curated eveningwear, wedding suits, and statement pieces prepared for the exact moment.',
  },
  {
    title: "Gentlemen's Suits",
    label: 'Signature fit',
    image: '/pw18.jpg',
    icon: Scissors,
    copy: 'Modern silhouettes, polished styling, and detail-led presentation for business or ceremony.',
  },
  {
    title: 'Car Rental',
    label: 'Chauffeur ready',
    image: '/car1.png',
    icon: Car,
    copy: 'Premium vehicles, precise routing, and calm arrival experiences for VIP clients.',
  },
  {
    title: 'Decoration Services',
    label: 'Event atelier',
    image: '/pw22.jpg',
    icon: Sparkles,
    copy: 'Atmospheric settings for weddings, corporate dinners, cultural events, and private receptions.',
  },
  {
    title: 'Laundry Services',
    label: 'Fabric care',
    image: '/pwl2.jpg',
    icon: WashingMachine,
    copy: 'Professional garment treatment for suits, uniforms, ceremonial wear, and delicate pieces.',
  },
  {
    title: 'Uniform Services',
    label: 'Corporate grade',
    image: '/un.png',
    icon: BriefcaseBusiness,
    copy: 'Institutional uniform programs with sizing, finishing, and dependable delivery.',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Events Managed' },
  { value: 1000, suffix: '+', label: 'Suit Rentals' },
  { value: 300, suffix: '+', label: 'Corporate Clients' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

const experiences = [
  {
    title: 'The Grand Union',
    category: 'Weddings',
    image: '/pw19.jpg',
    copy: 'Ceremony styling, formalwear, guest movement, and arrival moments arranged with quiet precision.',
  },
  {
    title: 'The Executive Presence',
    category: 'Corporate Events',
    image: '/pw9.jpg',
    copy: 'Boardroom-ready tailoring, transport coordination, and polished protocol for leadership teams.',
  },
  {
    title: 'VIP Client Movement',
    category: 'Private Protocol',
    image: '/car2.png',
    copy: 'Discreet transport and concierge service for high-visibility guests and milestone occasions.',
  },
];

const steps = [
  ['01', 'Choose Service', 'Select the service mix that matches your event, wardrobe, or corporate need.'],
  ['02', 'Book Consultation', 'Share dates, measurements, venue details, and expectations with our team.'],
  ['03', 'Receive Premium Service', 'We prepare, coordinate, and deliver with a single accountable protocol lead.'],
  ['04', 'Enjoy Exceptional Results', 'Arrive composed, host beautifully, and let every detail feel intentional.'],
];

const testimonials = [
  {
    name: 'Samuel Bekele',
    service: 'Corporate Protocol',
    image: '/ps2.jpg',
    text: 'The team handled our executive visit with calm discipline. Every arrival, suit, and venue detail felt considered.',
  },
  {
    name: 'Helen Tadesse',
    service: 'Wedding Decoration',
    image: '/pp2.jpg',
    text: 'Our reception looked cinematic without feeling excessive. Nanat Protocol understood elegance immediately.',
  },
  {
    name: 'Dr. Michael Kebede',
    service: 'Suit Rental',
    image: '/pw18.jpg',
    text: 'The fit, preparation, and service timing were excellent. It felt like working with a proper luxury house.',
  },
];

function CountUp({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const duration = 1300;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="np-stat">
      <strong>{current.toLocaleString()}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="np-eyebrow">
      <span />
      {children}
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.45]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % testimonials.length);
    }, 4600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="np-home">
      <section ref={heroRef} className="np-hero">
        <motion.div className="np-hero-bg" style={{ y: heroY, opacity: heroOpacity }}>
          <img src="/car1.png" alt="" />
        </motion.div>
        <div className="np-hero-shade" />

        <div className="np-shell np-hero-grid">
          <motion.div
            className="np-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Adaba premium service house</Eyebrow>
            <h1>NANAT PROTOCOL</h1>
            <p>Luxury Services. Exceptional Experiences.</p>
            <div className="np-actions">
              <Link className="np-btn np-btn-gold" to="/services">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link className="np-btn np-btn-ghost" to="/booking">
                Book Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="np-hero-composition"
            initial={{ opacity: 0, x: 32, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="np-orbit-card np-orbit-main">
              <img src="/pw55.jpg" alt="Luxury black suit from Nanat Protocol" />
            </div>
            <motion.div className="np-float-card np-float-one" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
              <Sparkles size={16} />
              <span>Event Decoration</span>
            </motion.div>
            <motion.div className="np-float-card np-float-two" animate={{ y: [0, 10, 0] }} transition={{ duration: 5.2, repeat: Infinity }}>
              <Car size={16} />
              <span>Executive Fleet</span>
            </motion.div>
            <motion.div className="np-float-card np-float-three" animate={{ y: [0, -7, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
              <Shirt size={16} />
              <span>Suit Atelier</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="np-section">
        <div className="np-shell">
          <div className="np-section-head">
            <Eyebrow>Arabia presence</Eyebrow>
            <h2>Curated Services</h2>
          </div>
          <div className="np-services">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="np-service-card"
                  key={service.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                >
                  <div className="np-service-image">
                    <img src={service.image} alt={service.title} />
                    <Icon size={18} />
                  </div>
                  <div className="np-card-body">
                    <span>{service.label}</span>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <Link to="/services">Explore collection <ChevronRight size={15} /></Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="np-section np-metrics">
        <div className="np-shell np-metrics-grid">
          <div>
            <Eyebrow>Verified excellence</Eyebrow>
            <h2>Luxury Gallery</h2>
            <p>
              A disciplined service system for clients who expect timing, presentation,
              garment quality, and atmosphere to work together.
            </p>
          </div>
          <div className="np-stats">
            {stats.map((stat) => (
              <CountUp key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="np-section">
        <div className="np-shell">
          <div className="np-section-head np-head-split">
            <div>
              <Eyebrow>Featured experience</Eyebrow>
              <h2>Service as a cinematic moment.</h2>
            </div>
            <p>From wardrobe to venue atmosphere, every touchpoint is composed like a premium editorial spread.</p>
          </div>
          <div className="np-experiences">
            {experiences.map((item, index) => (
              <motion.article
                className={index === 0 ? 'np-experience np-experience-large' : 'np-experience'}
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
              >
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="np-section np-process">
        <div className="np-shell">
          <div className="np-section-head">
            <Eyebrow>The protocol</Eyebrow>
            <h2>Four steps from request to refinement.</h2>
          </div>
          <div className="np-timeline">
            {steps.map(([number, title, copy], index) => (
              <motion.div
                className="np-step"
                key={number}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <strong>{number}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="np-section np-proof">
        <div className="np-shell np-proof-grid">
          <div>
            <Eyebrow>Client confidence</Eyebrow>
            <h2>Trusted for moments that cannot feel ordinary.</h2>
            <div className="np-proof-points">
              <span><ShieldCheck size={17} /> Discreet handling</span>
              <span><Award size={17} /> Premium finish</span>
              <span><Clock3 size={17} /> Time-precise delivery</span>
              <span><Users size={17} /> Dedicated team</span>
            </div>
          </div>

          <div className="np-testimonial-wrap">
            <AnimatePresence mode="wait">
              <motion.article
                className="np-testimonial"
                key={testimonials[testimonialIndex].name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <Quote size={28} />
                <p>{testimonials[testimonialIndex].text}</p>
                <div className="np-client">
                  <img src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].name} />
                  <div>
                    <strong>{testimonials[testimonialIndex].name}</strong>
                    <span>{testimonials[testimonialIndex].service}</span>
                  </div>
                  <div className="np-stars" aria-label="Five star rating">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="np-cta">
        <img src="/pw13.jpg" alt="" />
        <div className="np-cta-overlay" />
        <div className="np-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CalendarCheck size={24} />
            <h2>Ready To Experience Premium Service?</h2>
            <p>Submit your request and let Nanat Protocol shape the wardrobe, movement, and atmosphere around your occasion.</p>
            <div className="np-actions">
              <Link className="np-btn np-btn-gold" to="/booking">Book Now</Link>
              <Link className="np-btn np-btn-ghost" to="/contact">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .np-home {
          --gold: #d4af37;
          --champagne: #e8d8a8;
          --black: #0a0a0a;
          --panel: rgba(255,255,255,0.055);
          --line: rgba(232,216,168,0.16);
          --muted: rgba(255,255,255,0.66);
          background: #0a0a0a;
          color: #fff;
          overflow: hidden;
        }

        .np-home h1,
        .np-home h2,
        .np-home h3,
        .np-home p {
          color: inherit;
          letter-spacing: 0;
          margin: 0;
        }

        .np-shell {
          width: min(1160px, calc(100% - 32px));
          margin: 0 auto;
        }

        .np-hero {
          min-height: 100svh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 96px 0 58px;
          isolation: isolate;
        }

        .np-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.72) 46%, rgba(10,10,10,0.82) 100%),
            radial-gradient(circle at 18% 24%, rgba(212,175,55,0.18), transparent 30%),
            radial-gradient(circle at 84% 18%, rgba(232,216,168,0.12), transparent 34%),
            #0a0a0a;
          z-index: -3;
        }

        .np-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          opacity: 0.28;
        }

        .np-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.72) contrast(1.12);
        }

        .np-hero-shade {
          position: absolute;
          inset: auto 0 0;
          height: 170px;
          background: linear-gradient(transparent, #0a0a0a);
          z-index: -1;
        }

        .np-hero-grid {
          display: grid;
          gap: 38px;
          align-items: center;
        }

        .np-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--gold);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .np-eyebrow span {
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .np-hero-copy h1 {
          max-width: 760px;
          margin-top: 22px;
          font-size: clamp(58px, 13vw, 128px);
          line-height: 0.86;
          font-weight: 900;
          color: #fff;
          text-wrap: balance;
        }

        .np-hero-copy h1::first-line {
          color: var(--champagne);
        }

        .np-hero-copy p {
          margin-top: 22px;
          color: rgba(255,255,255,0.74);
          font-size: clamp(16px, 2vw, 21px);
          line-height: 1.55;
          max-width: 520px;
        }

        .np-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 34px;
        }

        .np-btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 4px;
          padding: 0 20px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .np-btn:hover {
          transform: translateY(-2px);
        }

        .np-btn-gold {
          color: #080808;
          background: linear-gradient(135deg, #f4e9bd, #d4af37 54%, #9d7c22);
          box-shadow: 0 14px 34px rgba(212,175,55,0.22);
        }

        .np-btn-ghost {
          color: #f5e8bd;
          border: 1px solid rgba(232,216,168,0.34);
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(16px);
        }

        .np-hero-composition {
          position: relative;
          min-height: 500px;
          display: none;
          perspective: 1000px;
        }

        .np-orbit-main {
          position: absolute;
          inset: 0 48px 0 20px;
          border: 1px solid rgba(232,216,168,0.22);
          border-radius: 8px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          box-shadow: 0 40px 100px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12);
          transform: rotateY(-8deg) rotateX(2deg);
        }

        .np-orbit-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.86) contrast(1.04);
        }

        .np-orbit-main::after,
        .np-service-image::after,
        .np-experience::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 38%, rgba(0,0,0,0.76));
          pointer-events: none;
        }

        .np-float-card {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border-radius: 6px;
          border: 1px solid rgba(232,216,168,0.2);
          background: rgba(9,9,9,0.72);
          color: #f4e8c0;
          box-shadow: 0 20px 50px rgba(0,0,0,0.38);
          backdrop-filter: blur(18px);
          font-size: 12px;
          font-weight: 700;
        }

        .np-float-one { left: -8px; bottom: 76px; }
        .np-float-two { right: 0; top: 52px; }
        .np-float-three { right: 34px; bottom: 26px; }

        .np-section {
          position: relative;
          padding: 78px 0;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.018), transparent 26%),
            #0a0a0a;
        }

        .np-section-head {
          margin-bottom: 28px;
        }

        .np-section-head h2,
        .np-metrics h2,
        .np-proof h2,
        .np-cta h2 {
          margin-top: 12px;
          color: #fff;
          font-size: clamp(32px, 5vw, 64px);
          line-height: 0.98;
          font-weight: 850;
          text-wrap: balance;
        }

        .np-head-split {
          display: grid;
          gap: 18px;
          align-items: end;
        }

        .np-head-split p,
        .np-metrics p,
        .np-cta p {
          color: var(--muted);
          line-height: 1.75;
          max-width: 560px;
        }

        .np-services {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .np-service-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(232,216,168,0.15);
          background: linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025));
          box-shadow: 0 24px 70px rgba(0,0,0,0.22);
          transform-style: preserve-3d;
        }

        .np-service-image {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #111;
        }

        .np-service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease, filter 500ms ease;
        }

        .np-service-card:hover .np-service-image img {
          transform: scale(1.055);
          filter: saturate(0.92) contrast(1.08);
        }

        .np-service-image svg {
          position: absolute;
          right: 14px;
          top: 14px;
          z-index: 2;
          color: #f0d77d;
          padding: 9px;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(232,216,168,0.22);
          border-radius: 6px;
          background: rgba(10,10,10,0.62);
          backdrop-filter: blur(12px);
        }

        .np-card-body {
          padding: 19px;
        }

        .np-card-body span,
        .np-experience span {
          color: var(--gold);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .np-card-body h3 {
          margin-top: 8px;
          color: #fff;
          font-size: 21px;
          line-height: 1.12;
          font-weight: 780;
        }

        .np-card-body p {
          min-height: 76px;
          margin-top: 10px;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.65;
        }

        .np-card-body a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 18px;
          color: #f1d677;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .np-metrics {
          border-block: 1px solid rgba(232,216,168,0.11);
          background:
            radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12), transparent 42%),
            #080808;
        }

        .np-metrics-grid {
          display: grid;
          gap: 36px;
          align-items: center;
        }

        .np-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          min-width: 0;
        }

        .np-stat {
          min-height: 132px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 22px 14px;
          text-align: center;
          border: 1px solid rgba(232,216,168,0.14);
          border-radius: 8px;
          background: linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.022));
          overflow: hidden;
          min-width: 0;
        }

        .np-stat strong {
          color: var(--champagne);
          width: 100%;
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1;
          font-weight: 850;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }

        .np-stat span {
          margin-top: 9px;
          color: rgba(255,255,255,0.55);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .np-experiences {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .np-experience {
          min-height: 360px;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(232,216,168,0.15);
          background: #111;
        }

        .np-experience img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          filter: saturate(0.85) contrast(1.04);
        }

        .np-experience div {
          position: absolute;
          z-index: 2;
          inset: auto 18px 18px;
        }

        .np-experience h3 {
          margin-top: 8px;
          font-size: clamp(25px, 4vw, 46px);
          line-height: 0.98;
          font-weight: 850;
          color: #fff;
        }

        .np-experience p {
          max-width: 520px;
          margin-top: 12px;
          color: rgba(255,255,255,0.68);
          line-height: 1.65;
          font-size: 14px;
        }

        .np-process {
          background:
            linear-gradient(180deg, #0a0a0a, #111 48%, #0a0a0a),
            #0a0a0a;
        }

        .np-timeline {
          position: relative;
          display: grid;
          gap: 14px;
        }

        .np-timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: linear-gradient(var(--gold), rgba(212,175,55,0.08));
        }

        .np-step {
          position: relative;
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 15px;
          padding: 18px 0;
        }

        .np-step strong {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(232,216,168,0.24);
          border-radius: 50%;
          background: #0c0c0c;
          color: var(--gold);
          font-size: 11px;
          z-index: 1;
        }

        .np-step h3 {
          color: #fff;
          font-size: 19px;
          font-weight: 780;
        }

        .np-step p {
          margin-top: 7px;
          color: rgba(255,255,255,0.62);
          line-height: 1.65;
          font-size: 14px;
        }

        .np-proof {
          background:
            radial-gradient(circle at 80% 20%, rgba(212,175,55,0.13), transparent 34%),
            #080808;
        }

        .np-proof-grid {
          display: grid;
          gap: 28px;
          align-items: center;
        }

        .np-proof-points {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 28px;
        }

        .np-proof-points span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.72);
          border: 1px solid rgba(232,216,168,0.12);
          border-radius: 6px;
          padding: 12px;
          background: rgba(255,255,255,0.035);
        }

        .np-proof-points svg {
          color: var(--gold);
        }

        .np-testimonial {
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          border: 1px solid rgba(232,216,168,0.18);
          border-radius: 8px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03)),
            rgba(13,13,13,0.82);
          box-shadow: 0 28px 90px rgba(0,0,0,0.32);
          backdrop-filter: blur(18px);
        }

        .np-testimonial > svg {
          color: var(--gold);
        }

        .np-testimonial p {
          color: rgba(255,255,255,0.78);
          font-size: clamp(18px, 3vw, 28px);
          line-height: 1.45;
        }

        .np-client {
          display: grid;
          grid-template-columns: 48px 1fr auto;
          gap: 12px;
          align-items: center;
          min-width: 0;
        }

        .np-client img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(232,216,168,0.4);
        }

        .np-client strong {
          display: block;
          color: #fff;
          font-size: 14px;
        }

        .np-client span {
          display: block;
          color: rgba(255,255,255,0.5);
          font-size: 12px;
          margin-top: 2px;
        }

        .np-stars {
          display: flex;
          color: var(--gold);
        }

        .np-cta {
          min-height: 520px;
          position: relative;
          display: flex;
          align-items: center;
          padding: 88px 0;
          overflow: hidden;
          isolation: isolate;
        }

        .np-cta > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.8) contrast(1.1);
          z-index: -2;
        }

        .np-cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(5,5,5,0.94), rgba(5,5,5,0.72), rgba(5,5,5,0.86));
          z-index: -1;
        }

        .np-cta svg {
          color: var(--gold);
        }

        .np-cta p {
          margin-top: 18px;
        }

        @media (min-width: 720px) {
          .np-shell {
            width: min(1160px, calc(100% - 56px));
          }

          .np-hero-grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.8fr);
          }

          .np-hero-composition {
            display: block;
          }

          .np-services {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .np-head-split,
          .np-metrics-grid,
          .np-proof-grid {
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          }

          .np-experiences {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .np-experience-large {
            grid-row: span 2;
            min-height: 620px;
          }

          .np-proof-points {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1040px) {
          .np-section {
            padding: 112px 0;
          }

          .np-services {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .np-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .np-stat strong {
            font-size: clamp(38px, 3.3vw, 56px);
          }
        }

        @media (max-width: 520px) {
          .np-hero {
            padding-top: 86px;
          }

          .np-actions {
            flex-direction: column;
          }

          .np-btn {
            width: 100%;
          }

          .np-stats {
            grid-template-columns: 1fr;
          }

          .np-client {
            grid-template-columns: 44px 1fr;
          }

          .np-stars {
            grid-column: 2;
          }
        }
      `}</style>
    </div>
  );
}
