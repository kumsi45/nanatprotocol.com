import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { X, Calendar as CalendarIcon, Clock, Send, CheckCircle2 } from 'lucide-react';
import 'react-day-picker/dist/style.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export default function BookingModal({ isOpen, onClose, serviceTitle }: BookingModalProps) {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'calendar' | 'success'>('calendar');

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;
    
    // Simulate booking success
    setStep('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-luxury-black border border-royal-gold/20 p-8 md:p-12 glass overflow-hidden"
          >
            {/* Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-royal-gold/10 -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-royal-gold/10 -z-10" />

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {step === 'calendar' ? (
              <div className="space-y-8">
                <div className="text-center">
                  <span className="sans-ui text-[10px] gold-text tracking-[0.5em] mb-4 block">Reservation Terminal</span>
                  <h3 className="text-3xl font-display italic mb-2">{serviceTitle}</h3>
                  <p className="text-white/40 text-sm">Select your preferred date and time for consultation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                  <div className="calendar-container">
                    <style>{`
                      .rdp {
                        --rdp-cell-size: 40px;
                        --rdp-accent-color: #C5A059;
                        --rdp-background-color: rgba(197, 160, 89, 0.1);
                        margin: 0;
                      }
                      .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
                        background-color: var(--rdp-accent-color);
                        color: black;
                        font-weight: bold;
                      }
                      .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
                        background-color: rgba(255, 255, 255, 0.05);
                      }
                      .rdp-head_cell {
                        font-size: 10px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        color: #C5A059;
                      }
                    `}</style>
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={{ before: new Date() }}
                      className="text-white"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-royal-gold">
                        <Clock size={16} />
                        <span className="sans-ui text-[10px] tracking-widest">Select Timeline</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-4 text-[10px] sans-ui border transition-all ${
                              selectedTime === time 
                                ? 'bg-royal-gold text-black border-royal-gold' 
                                : 'bg-white/5 border-white/10 text-white/60 hover:border-royal-gold/40'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-white/40 text-[10px] sans-ui uppercase">Selected Configuration</div>
                        <div className="text-right">
                          <div className="text-white text-sm font-light">
                            {selectedDate ? format(selectedDate, 'MMMM dd, yyyy') : 'No date selected'}
                          </div>
                          <div className="text-royal-gold text-[10px] sans-ui">
                            {selectedTime || 'Select a time'}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleBooking}
                        disabled={!selectedDate || !selectedTime}
                        className="w-full gold-gradient py-5 text-black sans-ui font-bold shadow-[0_20px_50px_rgba(197,160,89,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-30 disabled:hover:scale-100"
                      >
                        <span className="text-[10px]">Secure Reservation</span>
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center text-black mx-auto mb-8 shadow-2xl">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-4xl font-display italic mb-4 text-white">{t('booking.success.title')}</h3>
                <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-sm inline-block min-w-[280px]">
                  <p className="text-royal-gold sans-ui text-[10px] uppercase tracking-widest mb-2">{t('booking.success.details')}</p>
                  <p className="text-white text-lg font-light mb-1">
                    {selectedDate ? format(selectedDate, 'MMMM dd, yyyy') : ''}
                  </p>
                  <p className="text-white/60 text-sm">
                    {t('booking.success.at')} {selectedTime}
                  </p>
                </div>
                <p className="text-white/40 text-sm max-w-sm mx-auto mb-10 leading-relaxed">
                  {t('booking.success.message', { service: serviceTitle })}
                </p>
                <button
                  onClick={onClose}
                  className="px-12 py-4 border border-royal-gold gold-text sans-ui text-[10px] hover:bg-royal-gold hover:text-black transition-all"
                >
                  {t('booking.success.return')}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
