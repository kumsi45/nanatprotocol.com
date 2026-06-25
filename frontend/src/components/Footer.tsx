import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { useTranslation } from '@/node_modules/react-i18next';

/* ─── design tokens (dark footer) ─── */
const F = {
  bg:           '#0d0d10',
  bgMid:        '#111115',   // slightly lighter surface for subtle depth
  divider:      '#1f1f26',
  textPrimary:  '#ffffff',
  textMuted:    '#6b7280',   // ~gray-500 equivalent — muted links
  textDim:      '#4b5563',   // copyright / secondary text
  hoverText:    '#ffffff',
  dot:          '#3f3f46',   // separator dots
};

/* ─── reusable hover link ─── */
function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      style={{ color: F.textMuted, fontSize: 14, lineHeight: 1, transition: 'color 160ms ease' }}
      onMouseEnter={e => (e.currentTarget.style.color = F.hoverText)}
      onMouseLeave={e => (e.currentTarget.style.color = F.textMuted)}
    >
      {children}
    </Link>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color: F.textMuted, fontSize: 14, lineHeight: 1, transition: 'color 160ms ease' }}
      onMouseEnter={e => (e.currentTarget.style.color = F.hoverText)}
      onMouseLeave={e => (e.currentTarget.style.color = F.textMuted)}
    >
      {children}
    </a>
  );
}

/* ─── column heading ─── */
function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: F.textPrimary,
      marginBottom: 20,
      lineHeight: 1,
    }}>
      {children}
    </p>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const pages = [
    { name: t('nav.home'),        path: '/' },
    { name: t('nav.services'),    path: '/services' },
    { name: t('nav.collections'), path: '/collections' },
    { name: t('nav.pricing'),     path: '/pricing' },
    { name: t('nav.gallery', 'Gallery'), path: '/gallery' },
  ];

  const company = [
    { name: t('nav.about'),   path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
    { name: t('nav.booking'), path: '/booking' },
  ];

  const legal = [
    { name: 'Privacy Policy',   path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/awelkedirdube' },
    { name: 'Facebook',  url: 'https://www.facebook.com/awelkedirdube' },
    { name: 'Telegram',  url: 'https://t.me/nanatprotocol' },
    { name: 'TikTok',    url: 'https://www.tiktok.com/@nanatpro' },
  ];

  const branches = [
    {
      key: 'adaba',
      name: t('contact.branches.adaba.name'),
      region: t('contact.branches.adaba.location'),
      address: t('contact.branches.adaba.address'),
      phone: '+251 920 124 148',
    },
    {
      key: 'shashamene',
      name: t('contact.branches.shashamene.name'),
      region: t('contact.branches.shashamene.location'),
      address: t('contact.branches.shashamene.address'),
      phone: '+251 923 171 212',
    },
  ];

  return (
    <footer style={{ background: F.bg, fontFamily: '"Inter", "Noto Sans Ethiopic", ui-sans-serif, sans-serif' }}>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '80px 24px 64px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 48,
          }}
          className="footer-grid"
        >

          {/* ── BRAND COLUMN ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Logo + name */}
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, textDecoration: 'none' }}
            >
              <img
                src="/logo.png"
                alt="Nanat Protocol"
                style={{ height: 28, width: 'auto', display: 'block' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: F.textPrimary, letterSpacing: '-0.01em' }}>
                  Nanat
                </span>
                <span style={{ fontSize: 11, color: F.textMuted, marginTop: 2, letterSpacing: '0.02em' }}>
                  Protocol
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p style={{
              fontSize: 14,
              color: F.textMuted,
              lineHeight: 1.6,
              maxWidth: 240,
              marginBottom: 28,
            }}>
              {t('footer.tagline')}
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
              {socials.map(s => (
                <ExtLink key={s.name} href={s.url}>{s.name}</ExtLink>
              ))}
            </div>
          </div>

          {/* ── PRODUCT / PAGES ── */}
          <div>
            <ColHead>Product</ColHead>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {pages.map(p => (
                <FooterLink key={p.path} to={p.path}>{p.name}</FooterLink>
              ))}
            </div>
          </div>

          {/* ── COMPANY ── */}
          <div>
            <ColHead>Company</ColHead>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {company.map(p => (
                <FooterLink key={p.path} to={p.path}>{p.name}</FooterLink>
              ))}
            </div>
          </div>

          {/* ── LOCATIONS ── */}
          <div>
            <ColHead>Our Hubs</ColHead>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {branches.map(b => (
                <div key={b.key} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {/* Region label */}
                  <p style={{ fontSize: 11, fontWeight: 500, color: F.dot, textTransform: 'uppercase', letterSpacing: '0.07em', lineHeight: 1 }}>
                    {b.region}
                  </p>
                  {/* Hub name */}
                  <p style={{ fontSize: 14, fontWeight: 500, color: F.textPrimary, lineHeight: 1.2 }}>
                    {b.name}
                  </p>
                  {/* Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                    <MapPin size={13} style={{ color: F.textMuted, marginTop: 1, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: F.textMuted, lineHeight: 1.5 }}>{b.address}</span>
                  </div>
                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <Phone size={13} style={{ color: F.textMuted, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: F.textMuted }}>{b.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: `1px solid ${F.divider}` }}>
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            padding: '20px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {/* Copyright */}
          <p style={{ fontSize: 13, color: F.textDim, lineHeight: 1 }}>
            © {new Date().getFullYear()} Nanat Protocol.{' '}
            <span style={{ color: F.dot }}>{t('footer.rights')}</span>
          </p>

          {/* Legal links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {legal.map((l, i) => (
              <span key={l.path} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {i > 0 && (
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: F.dot, display: 'inline-block' }} />
                )}
                <Link
                  to={l.path}
                  style={{ fontSize: 13, color: F.textDim, transition: 'color 160ms ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = F.textMuted)}
                  onMouseLeave={e => (e.currentTarget.style.color = F.textDim)}
                >
                  {l.name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE GRID STYLES ── */}
      <style>{`
        .footer-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 2fr;
            gap: 56px;
          }
        }
      `}</style>
    </footer>
  );
}
