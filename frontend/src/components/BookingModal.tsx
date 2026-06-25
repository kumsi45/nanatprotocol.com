import { useState } from 'react';
import { useTranslation } from '@/node_modules/react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { X, Clock, CheckCircle } from 'lucide-react';
import 'react-day-picker/dist/style.css';

interface Props { isOpen: boolean; onClose: () => void; serviceTitle: string; }

const TIME_SLOTS = ['09:00 AM','10:00 AM','11:00 AM','02:00 PM','03:00 PM','04:00 PM','05:00 PM'];

const calCss = `
  .rdp { --rdp-cell-size:36px; --rdp-accent-color:#111111; margin:0; font-size:13px; }
  .rdp-day_selected,.rdp-day_selected:hover { background:#111111!important; color:#fff!important; border-radius:8px; }
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background:#f7f7f8; border-radius:8px; }
  .rdp-head_cell { font-size:11px; font-weight:600; letter-spacing:.04em; color:#9a9a9a; text-transform:uppercase; }
  .rdp-caption_label { font-size:14px; font-weight:600; color:#111111; }
  .rdp-nav_button { color:#9a9a9a; }
  .rdp-day { color:#111111; border-radius:8px; }
  .rdp-day_disabled { color:#d4d4d8!important; }
`;

export default function BookingModal({ isOpen, onClose, serviceTitle }: Props) {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'calendar' | 'success'>('calendar');

  const confirm = () => { if (selectedDate && selectedTime) setStep('success'); };

  const close = () => {
    onClose();
    setTimeout(() => { setStep('calendar'); setSelectedTime(null); }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl overflow-hidden"
            style={{ background: '#ffffff', borderRadius: 16, border: '1px solid #eaeaea', boxShadow: '0 24px 80px rgba(0,0,0,0.12)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-7 pb-5" style={{ borderBottom: '1px solid #eaeaea' }}>
              <div>
                <p className="text-xs font-medium mb-0.5" style={{ color: '#9a9a9a', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Reservation</p>
                <h3 className="text-lg font-semibold" style={{ color: '#111111' }}>{serviceTitle}</h3>
              </div>
              <button onClick={close} className="w-8 h-8 flex items-center justify-center rounded-md transition-colors"
                style={{ color: '#9a9a9a' }}
                onMouseEnter={e => { (e.currentTarget.style.background = '#f7f7f8'); (e.currentTarget.style.color = '#111111'); }}
                onMouseLeave={e => { (e.currentTarget.style.background = 'transparent'); (e.currentTarget.style.color = '#9a9a9a'); }}
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-8 py-7">
              {step === 'calendar' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <style>{calCss}</style>
                    <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate}
                      disabled={{ before: new Date() }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock size={14} style={{ color: '#9a9a9a' }} />
                      <p className="text-xs font-semibold" style={{ color: '#111111', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Select Time</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {TIME_SLOTS.map(t => (
                        <button key={t} onClick={() => setSelectedTime(t)}
                          className="btn btn-sm"
                          style={{
                            background: selectedTime === t ? '#111111' : '#f7f7f8',
                            color:      selectedTime === t ? '#ffffff' : '#5a5a5a',
                            border:     selectedTime === t ? '1px solid #111111' : '1px solid #eaeaea',
                            fontSize: 13,
                          }}>
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg mb-5" style={{ background: '#f7f7f8', border: '1px solid #eaeaea' }}>
                      <p className="text-xs mb-1" style={{ color: '#9a9a9a' }}>Selected</p>
                      <p className="text-sm font-medium" style={{ color: '#111111' }}>
                        {selectedDate ? format(selectedDate, 'MMM dd, yyyy') : '—'}{selectedTime ? ` at ${selectedTime}` : ''}
                      </p>
                    </div>

                    <button onClick={confirm} disabled={!selectedDate || !selectedTime}
                      className="btn btn-primary w-full justify-center"
                      style={{ opacity: (!selectedDate || !selectedTime) ? 0.4 : 1, cursor: (!selectedDate || !selectedTime) ? 'not-allowed' : 'pointer' }}>
                      Confirm Reservation
                    </button>
                  </div>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <CheckCircle size={22} style={{ color: '#16a34a' }} />
                  </div>
                  <h3 className="t-h3 mb-2">{t('booking.success.title')}</h3>
                  <div className="p-4 rounded-lg mb-5 inline-block" style={{ background: '#f7f7f8', border: '1px solid #eaeaea', minWidth: 240 }}>
                    <p className="text-sm font-medium" style={{ color: '#111111' }}>
                      {selectedDate ? format(selectedDate, 'MMMM dd, yyyy') : ''}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#9a9a9a' }}>at {selectedTime}</p>
                  </div>
                  <p className="text-sm mb-6" style={{ color: '#9a9a9a' }}>
                    {t('booking.success.message', { service: serviceTitle })}
                  </p>
                  <button onClick={close} className="btn btn-ghost">{t('booking.success.return')}</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
