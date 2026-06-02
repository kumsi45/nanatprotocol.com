import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/node_modules/react-i18next';

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface WhyChooseUsCarouselProps {
  features: Feature[];
}

export default function WhyChooseUsCarousel({ features }: WhyChooseUsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = features.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="relative mt-24 group px-0">
      <div className="overflow-hidden">
        <motion.div
          className="flex bg-white/[0.03] border border-white/10"
          animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          style={{ width: `${(features.length * (100 / itemsPerPage))}%` }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-luxury-black p-8 md:p-12 group/item hover:bg-white/[0.02] transition-colors relative flex-shrink-0"
              style={{ width: `${100 / features.length}%` }}
            >
              <div className="w-14 h-14 rounded-2xl border border-royal-gold/20 flex items-center justify-center text-royal-gold mb-10 group-hover/item:scale-110 group-hover/item:rotate-12 transition-transform shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-display italic font-bold mb-6 text-white group-hover/item:text-royal-gold transition-colors">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed italic pr-4">{feature.desc}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-royal-gold group-hover/item:w-full transition-all duration-700" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 px-4">
        <div className="flex items-center gap-3">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-700 ${currentIndex === i
                  ? 'w-12 bg-royal-gold'
                  : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-royal-gold hover:text-royal-gold hover:bg-royal-gold/5 transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-royal-gold hover:text-royal-gold hover:bg-royal-gold/5 transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
