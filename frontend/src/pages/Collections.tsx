import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarCheck,
  Car,
  Gem,
  Sparkles,
  Shirt,
  WashingMachine,
  X,
} from 'lucide-react';

type CollectionItem = {
  category: string;
  caption: string;
  image: string;
  size: 'hero' | 'tall' | 'wide' | 'standard';
  icon: React.ComponentType<{ size?: number }>;
};

const collectionItems: CollectionItem[] = [
  {
    category: 'Luxury Suit Collection',
    caption: 'Tailored For Exceptional Moments',
    image: '/pw55.jpg',
    size: 'hero',
    icon: Shirt,
  },
  {
    category: 'Wedding Experiences',
    caption: 'Where Elegance Meets Celebration',
    image: '/pw19.jpg',
    size: 'wide',
    icon: Sparkles,
  },
  {
    category: 'Executive Car Collection',
    caption: 'Travel With Prestige',
    image: '/car1.png',
    size: 'tall',
    icon: Car,
  },
  {
    category: 'Premium Decorations',
    caption: 'Atmospheres Designed To Be Remembered',
    image: '/pw22.jpg',
    size: 'standard',
    icon: Gem,
  },
  {
    category: 'Corporate Uniform Collection',
    caption: 'A Refined Standard For Teams',
    image: '/un.png',
    size: 'wide',
    icon: BriefcaseBusiness,
  },
  {
    category: 'Professional Garment Care',
    caption: 'Prepared With Quiet Precision',
    image: '/pwl2.jpg',
    size: 'standard',
    icon: WashingMachine,
  },
  {
    category: 'VIP Events',
    caption: 'Private Hospitality With Champagne Detail',
    image: '/pw9.jpg',
    size: 'tall',
    icon: CalendarCheck,
  },
  {
    category: 'Signature Experiences',
    caption: 'The Nanat Protocol Standard',
    image: '/car2.png',
    size: 'standard',
    icon: Sparkles,
  },
];

const editorialFeatures = [
  {
    number: '01',
    title: 'Bespoke Suit Ritual',
    image: '/pw18.jpg',
    copy: 'Garments selected, fitted, pressed, and presented with the calm confidence of a private atelier.',
  },
  {
    number: '02',
    title: "The Gentleman's Arrival",
    image: '/car2.png',
    copy: 'Executive transportation, precise timing, and a composed arrival experience for meaningful occasions.',
  },
  {
    number: '03',
    title: 'Event Atmosphere',
    image: '/pw19.jpg',
    copy: 'Floral staging, warm lighting, formalwear, and hospitality details arranged into one elegant scene.',
  },
];

function CampaignBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="collection-badge">
      <span />
      {children}
      <span />
    </div>
  );
}

export default function Collections() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const [preview, setPreview] = useState<CollectionItem | null>(null);

  return (
    <div className="collections-campaign">
      <section className="collection-hero" ref={heroRef}>
        <motion.div className="collection-hero-bg" style={{ y }}>
          <img src="/pw55.jpg" alt="" />
        </motion.div>
        <div className="collection-shell collection-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <CampaignBadge>SIGNATURE COLLECTION</CampaignBadge>
            <h1>Crafted Moments.<br />Timeless Elegance.</h1>
            <p>
              Explore a curated collection of premium experiences, luxury attire, elegant events,
              executive transportation, and exceptional service delivered by Nanat Protocol.
            </p>
            <div className="collection-actions">
              <Link className="collection-btn collection-btn-gold" to="/booking">
                Request Viewing <ArrowRight size={16} />
              </Link>
              <Link className="collection-btn collection-btn-ghost" to="/contact">
                Private Concierge
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="collection-hero-stack"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="stack-card stack-large">
              <img src="/car1.png" alt="Executive car collection" />
              <span>Executive Fleet</span>
            </div>
            <motion.div className="stack-card stack-small" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
              <img src="/pw18.jpg" alt="Luxury suit collection" />
              <span>Suit Atelier</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="collection-masonry-section">
        <div className="collection-shell">
          <div className="collection-section-head">
            <CampaignBadge>Nanat Protocol</CampaignBadge>
            <h2>Crafted Moments. Timeless Elegance.</h2>
            <p>
              A luxury editorial archive of garments, movement, atmosphere, and care,
              composed for clients who expect every detail to speak softly and beautifully.
            </p>
          </div>

          <div className="luxury-masonry">
            {collectionItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  type="button"
                  className={`masonry-card masonry-${item.size}`}
                  key={item.category}
                  onClick={() => setPreview(item)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
                >
                  <img src={item.image} alt={item.category} />
                  <div className="masonry-shine" />
                  <div className="masonry-glass">
                    <Icon size={18} />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="masonry-copy">
                    <p>{item.category}</p>
                    <h3>{item.caption}</h3>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="collection-editorial">
        <div className="collection-shell">
          <div className="collection-section-head compact">
            <CampaignBadge>Luxury service campaign</CampaignBadge>
            <h2>Exceptional Services. Delivered With Elegance.</h2>
          </div>

          <div className="editorial-list">
            {editorialFeatures.map((feature, index) => (
              <motion.article
                className="editorial-feature"
                key={feature.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
              >
                <div className="editorial-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="editorial-copy">
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                  <Link to="/services">View protocol <ArrowUpRight size={15} /></Link>
                </div>
                {index < editorialFeatures.length - 1 && <div className="editorial-rule" />}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="collection-stats">
        <div className="collection-shell stats-grid">
          {[
            ['4+', 'Curated verticals'],
            ['8+', 'Signature stories'],
            ['3+', 'Hero campaigns'],
            ['1', 'Exclusive house'],
          ].map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="collection-cta">
        <div className="collection-shell">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CampaignBadge>Private appointment</CampaignBadge>
            <h2>Ready To Experience Premium Service?</h2>
            <p>Reserve a private consultation and let our team curate the right look, arrival, setting, and service around your occasion.</p>
            <Link className="collection-btn collection-btn-gold" to="/booking">
              Inquire Now <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="collection-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" aria-label="Close preview" onClick={() => setPreview(null)}>
                <X size={18} />
              </button>
              <img src={preview.image} alt={preview.category} />
              <div>
                <CampaignBadge>Selected experience</CampaignBadge>
                <h3>{preview.category}</h3>
                <p>{preview.caption}</p>
                <Link to="/booking">Request this experience <ArrowRight size={15} /></Link>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .collections-campaign {
          --gold: #d4af37;
          --champagne: #f1dfad;
          --ink: #090909;
          --muted: rgba(255,255,255,0.64);
          min-height: 100vh;
          overflow: hidden;
          background: #080808;
          color: #fff;
          font-family: "Inter", "Noto Sans Ethiopic", ui-sans-serif, system-ui, sans-serif;
        }

        .collections-campaign h1,
        .collections-campaign h2,
        .collections-campaign h3,
        .collections-campaign p {
          margin: 0;
          color: inherit;
          letter-spacing: 0;
        }

        .collection-shell {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .collection-hero {
          position: relative;
          min-height: 94svh;
          display: flex;
          align-items: center;
          padding: 100px 0 72px;
          isolation: isolate;
        }

        .collection-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(8,8,8,0.96), rgba(8,8,8,0.76) 48%, rgba(8,8,8,0.9)),
            radial-gradient(circle at 72% 20%, rgba(212,175,55,0.16), transparent 30%),
            #080808;
        }

        .collection-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          opacity: 0.24;
        }

        .collection-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.8) contrast(1.1);
        }

        .collection-hero-grid {
          display: grid;
          gap: 48px;
          align-items: center;
        }

        .collection-badge {
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

        .collection-badge span {
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }

        .collection-badge span:last-child {
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .collection-hero h1 {
          margin-top: 22px;
          max-width: 850px;
          font-size: clamp(48px, 9vw, 118px);
          line-height: 0.89;
          font-weight: 900;
          color: #fff;
          text-wrap: balance;
        }

        .collection-hero p {
          max-width: 640px;
          margin-top: 24px;
          color: rgba(255,255,255,0.72);
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.72;
        }

        .collection-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 34px;
        }

        .collection-btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 22px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .collection-btn:hover {
          transform: translateY(-2px);
        }

        .collection-btn-gold {
          color: #080808;
          background: linear-gradient(135deg, #f8e9b8, #d4af37 56%, #997622);
          box-shadow: 0 18px 45px rgba(212,175,55,0.24);
        }

        .collection-btn-ghost {
          color: var(--champagne);
          border: 1px solid rgba(241,223,173,0.28);
          background: rgba(255,255,255,0.035);
          backdrop-filter: blur(16px);
        }

        .collection-hero-stack {
          position: relative;
          display: none;
          min-height: 540px;
        }

        .stack-card {
          position: absolute;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(241,223,173,0.22);
          background: rgba(255,255,255,0.04);
          box-shadow: 0 40px 100px rgba(0,0,0,0.45);
        }

        .stack-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.88) contrast(1.05);
        }

        .stack-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 42%, rgba(0,0,0,0.82));
        }

        .stack-card span {
          position: absolute;
          z-index: 2;
          left: 18px;
          bottom: 18px;
          color: var(--champagne);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .stack-large {
          inset: 58px 0 0 46px;
          transform: rotate(-2deg);
        }

        .stack-small {
          width: 42%;
          height: 58%;
          top: 0;
          left: 0;
          transform: rotate(3deg);
        }

        .collection-masonry-section,
        .collection-editorial,
        .collection-stats,
        .collection-cta {
          position: relative;
          padding: 96px 0;
          background: #080808;
        }

        .collection-masonry-section {
          background:
            radial-gradient(circle at 50% 0%, rgba(212,175,55,0.1), transparent 32%),
            #080808;
        }

        .collection-section-head {
          max-width: 760px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .collection-section-head.compact {
          margin-bottom: 64px;
        }

        .collection-section-head h2,
        .collection-editorial h2,
        .collection-cta h2 {
          margin-top: 14px;
          font-size: clamp(34px, 6vw, 76px);
          line-height: 0.95;
          font-weight: 900;
          color: #fff;
          text-wrap: balance;
        }

        .collection-section-head p,
        .collection-cta p {
          max-width: 680px;
          margin: 18px auto 0;
          color: var(--muted);
          line-height: 1.78;
          font-size: 15px;
        }

        .luxury-masonry {
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-flow: dense;
          gap: 16px;
        }

        .masonry-card {
          min-height: 330px;
          position: relative;
          display: block;
          overflow: hidden;
          border: 1px solid rgba(241,223,173,0.13);
          border-radius: 8px;
          background: #151515;
          color: #fff;
          text-align: left;
          cursor: pointer;
          box-shadow: 0 28px 70px rgba(0,0,0,0.28);
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
        }

        .masonry-card:hover {
          transform: translateY(-7px);
          border-color: rgba(212,175,55,0.62);
          box-shadow: 0 32px 95px rgba(0,0,0,0.38), 0 0 42px rgba(212,175,55,0.14);
        }

        .masonry-card img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          filter: saturate(0.82) contrast(1.06);
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 700ms ease;
        }

        .masonry-card:hover img {
          transform: scale(1.07);
          filter: saturate(0.98) contrast(1.08);
        }

        .masonry-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.82)),
            linear-gradient(90deg, rgba(0,0,0,0.48), transparent 48%);
          pointer-events: none;
        }

        .masonry-shine {
          position: absolute;
          inset: -35% auto -35% -70%;
          z-index: 2;
          width: 48%;
          transform: skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          opacity: 0;
          transition: left 720ms ease, opacity 220ms ease;
        }

        .masonry-card:hover .masonry-shine {
          left: 125%;
          opacity: 1;
        }

        .masonry-glass {
          position: absolute;
          z-index: 3;
          top: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid rgba(241,223,173,0.2);
          border-radius: 6px;
          background: rgba(8,8,8,0.62);
          color: var(--champagne);
          backdrop-filter: blur(18px);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.16em;
        }

        .masonry-copy {
          position: absolute;
          z-index: 3;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 18px;
          border: 1px solid rgba(241,223,173,0.14);
          border-radius: 8px;
          background: linear-gradient(145deg, rgba(8,8,8,0.72), rgba(8,8,8,0.36));
          backdrop-filter: blur(18px);
          transform: translateY(8px);
          opacity: 0.94;
          transition: transform 260ms ease, opacity 260ms ease;
        }

        .masonry-card:hover .masonry-copy {
          transform: translateY(0);
          opacity: 1;
        }

        .masonry-copy p {
          color: var(--gold);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .masonry-copy h3 {
          margin-top: 9px;
          color: #fff;
          font-size: clamp(21px, 3vw, 34px);
          line-height: 1;
          font-weight: 850;
          text-wrap: balance;
        }

        .collection-editorial {
          border-top: 1px solid rgba(241,223,173,0.11);
          background:
            linear-gradient(180deg, #080808, #0f0f0f 45%, #080808);
        }

        .editorial-list {
          display: grid;
          gap: 58px;
        }

        .editorial-feature {
          position: relative;
          display: grid;
          gap: 24px;
          align-items: center;
        }

        .editorial-image {
          min-height: 420px;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(241,223,173,0.15);
          box-shadow: 0 34px 90px rgba(0,0,0,0.34);
        }

        .editorial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.86) contrast(1.04);
        }

        .editorial-copy {
          max-width: 520px;
        }

        .editorial-copy span {
          color: var(--gold);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.2em;
        }

        .editorial-copy h3 {
          margin-top: 18px;
          font-size: clamp(32px, 5vw, 58px);
          line-height: 0.96;
          font-weight: 900;
          color: #fff;
          text-wrap: balance;
        }

        .editorial-copy p {
          margin-top: 18px;
          color: rgba(255,255,255,0.66);
          line-height: 1.78;
        }

        .editorial-copy a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          color: var(--champagne);
          border: 1px solid rgba(241,223,173,0.26);
          border-radius: 4px;
          padding: 12px 16px;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .editorial-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.26), transparent);
        }

        .collection-stats {
          padding: 54px 0;
          border-block: 1px solid rgba(241,223,173,0.11);
          background: #0d0d0d;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .stats-grid div {
          min-height: 112px;
          display: grid;
          place-items: center;
          align-content: center;
          border: 1px solid rgba(241,223,173,0.12);
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
          text-align: center;
        }

        .stats-grid strong {
          color: var(--champagne);
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1;
        }

        .stats-grid span {
          margin-top: 8px;
          color: rgba(255,255,255,0.55);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .collection-cta {
          min-height: 520px;
          display: flex;
          align-items: center;
          text-align: center;
          background:
            radial-gradient(circle at 50% 18%, rgba(212,175,55,0.18), transparent 34%),
            #080808;
        }

        .collection-cta p {
          margin-bottom: 30px;
        }

        .collection-lightbox {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0,0,0,0.78);
          backdrop-filter: blur(16px);
        }

        .collection-lightbox article {
          position: relative;
          width: min(960px, 100%);
          display: grid;
          overflow: hidden;
          border: 1px solid rgba(241,223,173,0.22);
          border-radius: 10px;
          background: #0d0d0d;
          box-shadow: 0 40px 120px rgba(0,0,0,0.55);
        }

        .collection-lightbox button {
          position: absolute;
          z-index: 3;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(241,223,173,0.24);
          border-radius: 6px;
          color: var(--champagne);
          background: rgba(8,8,8,0.72);
          cursor: pointer;
        }

        .collection-lightbox img {
          width: 100%;
          height: min(58vh, 560px);
          object-fit: cover;
        }

        .collection-lightbox article > div {
          padding: 26px;
        }

        .collection-lightbox h3 {
          margin-top: 12px;
          color: #fff;
          font-size: clamp(28px, 5vw, 52px);
          line-height: 0.98;
        }

        .collection-lightbox p {
          margin-top: 12px;
          color: rgba(255,255,255,0.64);
        }

        .collection-lightbox a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          color: #080808;
          background: var(--gold);
          border-radius: 4px;
          padding: 13px 16px;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @media (min-width: 720px) {
          .collection-shell {
            width: min(1180px, calc(100% - 56px));
          }

          .collection-hero-grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.78fr);
          }

          .collection-hero-stack {
            display: block;
          }

          .luxury-masonry {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-auto-rows: 160px;
          }

          .masonry-card {
            min-height: 0;
          }

          .masonry-hero {
            grid-column: span 2;
            grid-row: span 3;
          }

          .masonry-tall {
            grid-column: span 1;
            grid-row: span 3;
          }

          .masonry-wide {
            grid-column: span 2;
            grid-row: span 2;
          }

          .masonry-standard {
            grid-column: span 1;
            grid-row: span 2;
          }

          .editorial-feature {
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
            gap: 72px;
          }

          .editorial-feature:nth-child(even) .editorial-image {
            order: 2;
          }

          .stats-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .collection-lightbox article {
            grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
          }

          .collection-lightbox img {
            height: 620px;
          }
        }

        @media (min-width: 1080px) {
          .collection-masonry-section,
          .collection-editorial,
          .collection-cta {
            padding: 124px 0;
          }

          .luxury-masonry {
            grid-auto-rows: 190px;
            gap: 18px;
          }
        }

        @media (max-width: 520px) {
          .collection-actions,
          .collection-btn {
            width: 100%;
          }

          .collection-actions {
            flex-direction: column;
          }

          .masonry-copy {
            padding: 15px;
          }

          .masonry-copy h3 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
