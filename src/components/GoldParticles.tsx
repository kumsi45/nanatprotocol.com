import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function GoldParticles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-royal-gold/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(197, 160, 89, 0.4)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-radial from-royal-gold/5 to-transparent opacity-30" />
    </div>
  );
}
