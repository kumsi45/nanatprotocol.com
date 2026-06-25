import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Lock, Calendar, Globe, Layers, Eye, RefreshCw, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const SECTIONS = [
  {
    icon: UserCheck,
    title: '1. Information We Collect',
    content: 'Nanat Protocol may collect: full name, phone number, email address, appointment details, rental information, delivery information, payment details, and messages or inquiries sent by clients. We only collect information necessary to provide our services professionally.',
  },
  {
    icon: ShieldCheck,
    title: '2. How We Use Your Information',
    content: 'Your information may be used for processing bookings, customer support, order confirmation, service improvement, and security. Nanat Protocol does not sell or share your personal information with unauthorized third parties.',
  },
  {
    icon: Lock,
    title: '3. Payment & Security',
    content: 'We value the safety of your information. Reasonable security measures are used to protect customer data from unauthorized access, misuse, or disclosure.',
  },
  {
    icon: Calendar,
    title: '4. Rental & Booking Information',
    content: 'For suit rentals, car rentals, and event services, clients may be required to provide accurate identification for booking confirmation. Clients are responsible for providing correct information during reservations.',
  },
  {
    icon: Globe,
    title: '5. Cookies & Website Usage',
    content: 'Our website may use cookies and analytics tools to improve user experience. Users can disable cookies through their browser settings if preferred.',
  },
  {
    icon: Layers,
    title: '6. Third-Party Services',
    content: 'Some services may involve trusted providers (payment, delivery, communication). These providers only receive necessary information to perform their roles.',
  },
  {
    icon: Eye,
    title: '7. Client Rights',
    content: 'Clients may request access to their information, request corrections to inaccurate data, and request deletion of personal data where applicable.',
  },
  {
    icon: RefreshCw,
    title: '8. Policy Updates',
    content: 'Nanat Protocol may update this Privacy Policy at any time to improve transparency and service quality.',
  },
  {
    icon: MessageSquare,
    title: '9. Contact Information',
    content: 'For questions regarding this Privacy Policy, clients may contact Nanat Protocol directly through our official phone number, email, or social media platforms.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <div className="page-header container-app">
        <SectionHeader
          eyebrow="Data Protocol"
          title="Privacy Policy"
          subtitle="Last Updated: May 2026. Your privacy and trust are the foundation of Nanat Protocol."
        />
      </div>

      <div className="container-app" style={{ paddingBottom: 96, maxWidth: 800 }}>
        <div className="flex flex-col gap-6">
          {SECTIONS.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="card"
              style={{ padding: 28 }}
            >
              <div className="flex items-start gap-4">
                <div className="icon-wrap shrink-0">
                  <sec.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="t-h3 mb-3">{sec.title}</h3>
                  <p className="t-body text-sm">{sec.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button onClick={() => window.history.back()} className="btn btn-ghost">← Go Back</button>
        </div>
      </div>
    </div>
  );
}
