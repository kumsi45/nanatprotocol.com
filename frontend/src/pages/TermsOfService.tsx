import { motion } from 'motion/react';
import { ShieldCheck, BookOpen, Scale, AlertCircle, FileText, Lock, Globe, RefreshCcw } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const SECTIONS = [
  { icon: ShieldCheck, title: '1. Acceptance of Terms', content: 'Using our website or services means you agree to comply with these terms and conditions.' },
  {
    icon: BookOpen,
    title: '2. Services Provided',
    content: 'Nanat Protocol provides: suit rental, men\'s suit sales, decoration services, car rental, laundry services, student uniform services, fashion accessories, groom styling services, and watches, perfumes, shoes, and tie sales. Service availability may change at any time.',
  },
  { icon: FileText, title: '3. Bookings & Appointments', content: 'Clients are encouraged to provide accurate booking information. Nanat Protocol reserves the right to cancel or reschedule appointments when necessary.' },
  {
    icon: Scale,
    title: '4. Rental Conditions',
    content: 'For rented items: clients must return items on the agreed date. Damaged or lost items may result in additional charges. Clients are responsible for proper handling of rented products. Late returns may include extra fees.',
  },
  { icon: AlertCircle, title: '5. Payments', content: 'All prices are provided in Ethiopian Birr (ETB) unless stated otherwise. Payments for certain services may require advance deposits or full payment before delivery.' },
  { icon: RefreshCcw, title: '6. Returns & Exchanges', content: 'Returns or exchanges may depend on the type of product or service purchased. Customized or altered items may not qualify for refunds unless there is a confirmed issue from our side.' },
  { icon: Lock, title: '7. Client Responsibilities', content: 'Clients agree to provide accurate information, respect rental agreements, and not misuse our services or products.' },
  { icon: AlertCircle, title: '8. Limitation of Liability', content: 'Nanat Protocol is not responsible for delays caused by external circumstances, misuse of rented products, or losses caused by incorrect client information.' },
  { icon: Globe, title: '9. Intellectual Property', content: 'All branding, website content, logos, and designs related to Nanat Protocol remain protected and may not be copied without permission.' },
  { icon: RefreshCcw, title: '10. Changes to Terms', content: 'Nanat Protocol reserves the right to update these Terms of Service at any time without prior notice.' },
  { icon: Lock, title: '11. Contact', content: 'For support or questions regarding these terms, clients may contact Nanat Protocol through official communication channels.' },
];

export default function TermsOfService() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <div className="page-header container-app">
        <SectionHeader
          eyebrow="Legal Protocol"
          title="Terms of Service"
          subtitle="By using Nanat Protocol services, you agree to the following Terms of Service."
        />
      </div>

      <div className="container-app" style={{ paddingBottom: 96, maxWidth: 800 }}>
        <div className="flex flex-col gap-5">
          {SECTIONS.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              viewport={{ once: true }}
              className="card"
              style={{ padding: 24 }}
            >
              <div className="flex items-start gap-4">
                <div className="icon-wrap shrink-0"><sec.icon size={18} strokeWidth={1.5} /></div>
                <div>
                  <h3 className="t-h3 mb-2">{sec.title}</h3>
                  <p className="t-body text-sm">{sec.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn btn-ghost"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </div>
  );
}
