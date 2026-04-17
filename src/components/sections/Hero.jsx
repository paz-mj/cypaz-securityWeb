// src/components/sections/Hero.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, MousePointerClick, ChevronDown, Zap } from 'lucide-react';
import NeonButton from '../ui/NeonButton';
import { HERO, META } from '../../constants/copy';

function ThreatCounter() {
  const [count, setCount] = useState(0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime.current) / 1000;
      setCount(Math.floor(elapsed * HERO.threatCounter.ratePerSecond));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="glass neon-border rounded-xl px-5 py-4 inline-flex items-center gap-4 max-w-xl"
    >
      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-neon animate-pulse" />
      <div className="text-left">
        <p className="text-xs text-slate-400 font-body mb-0.5">{HERO.threatCounter.label}</p>
        <p className="text-2xl font-display font-bold neon-text tabular-nums tracking-tight">
          {count.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Animated cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(46,255,195,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Scanline */}
      <div className="absolute inset-0 scanline pointer-events-none overflow-hidden" />

      {/* Shield visual */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mb-8"
      >
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-40"
            style={{ background: '#2effc3', transform: 'scale(1.4)' }}
          />
          <div className="relative glass neon-border rounded-full p-4 flex items-center justify-center">
            <Shield className="w-10 h-10 text-neon" strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div {...fadeUp(0.1)}>
        <div className="inline-flex items-center gap-2 glass neon-border rounded-full px-4 py-1.5 mb-6">
          <Zap className="w-3 h-3 text-neon" />
          <span className="text-xs font-body text-neon/80 tracking-widest uppercase">
            {META.badge}
          </span>
        </div>
      </motion.div>

      {/* Eyebrow */}
      <motion.p
        {...fadeUp(0.2)}
        className="font-mono text-xs text-neon/60 tracking-widest uppercase mb-4"
      >
        {HERO.eyebrow}
      </motion.p>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.3)}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.05] tracking-tight mb-6 max-w-4xl"
      >
        {HERO.headline.map((line, i) => (
          <span key={i} className={`block ${i === 2 ? 'neon-text' : 'text-white'}`}>
            {line}
          </span>
        ))}
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        {...fadeUp(0.45)}
        className="font-body text-slate-400 text-lg md:text-xl text-center max-w-2xl mb-10 leading-relaxed"
      >
        {HERO.subheadline}
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.55)}
        className="flex flex-col sm:flex-row gap-3 mb-12"
      >
        <NeonButton variant="primary" size="lg" href="#footer">
          <Shield className="w-4 h-4" />
          {META.ctaPrimary}
        </NeonButton>
        <NeonButton variant="outline" size="lg" href="#stats">
          <MousePointerClick className="w-4 h-4" />
          {META.ctaSecondary}
        </NeonButton>
      </motion.div>

      {/* Live threat counter */}
      <ThreatCounter />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-neon/40" />
      </motion.div>
    </section>
  );
}