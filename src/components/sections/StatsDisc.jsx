// src/components/sections/StatsDisc.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Target, Users, DollarSign } from 'lucide-react';
import { STATS } from '../../constants/copy';

const ICONS = { Zap, Target, Users, DollarSign };

function useCountUp(target, duration = 2000, trigger = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = Date.now();
    const isFloat = !Number.isInteger(target);
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setValue(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, target, duration]);
  return value;
}

function StatCard({ stat, isActive, onClick, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const Icon = ICONS[stat.icon];
  const count = useCountUp(stat.value, 1800, isActive || inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className={`
        glass rounded-2xl p-6 cursor-pointer relative overflow-hidden
        transition-all duration-400
        ${isActive
          ? 'border border-neon/60 shadow-neon'
          : 'border border-neon/10 hover:border-neon/30'
        }
      `}
    >
      {/* Active glow bg */}
      {isActive && (
        <motion.div
          layoutId="activeGlow"
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(46,255,195,0.08) 0%, transparent 70%)' }}
        />
      )}

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
        <div className="w-full h-full border-r border-t border-neon rounded-tr-2xl" />
      </div>

      <div className="relative z-10">
        <div className={`
          inline-flex p-2.5 rounded-lg mb-4
          ${isActive ? 'bg-neon/15 shadow-neon-sm' : 'bg-white/5'}
          transition-all duration-300
        `}>
          <Icon className={`w-5 h-5 ${isActive ? 'text-neon' : 'text-slate-400'}`} strokeWidth={1.5} />
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className={`font-display font-bold tabular-nums transition-all duration-300 ${
            isActive ? 'text-4xl neon-text' : 'text-3xl text-white'
          }`}>
            {count}
          </span>
          <span className={`font-display font-bold text-lg ${isActive ? 'neon-text' : 'text-slate-400'}`}>
            {stat.suffix}
          </span>
        </div>

        <p className="font-body text-slate-400 text-sm leading-snug mb-3">{stat.label}</p>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-mono text-xs text-neon/50 uppercase tracking-widest pt-3 border-t border-neon/10">
                Fuente: {stat.source}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function StatsDisc() {
  const [active, setActive] = useState(0);

  // Auto-cycle
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % STATS.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="stats" className="relative py-24 px-4 overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(46,255,195,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-neon/60 tracking-widest uppercase mb-3">
            // La amenaza en números
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            El panorama de{' '}
            <span className="neon-text">amenazas digitales</span>{' '}
            en Latinoamérica
          </h2>
          <p className="font-body text-slate-400 max-w-xl mx-auto">
            Datos reales del ecosistema de ciberseguridad 2025–2026. Haz clic en cada stat para más contexto.
          </p>
        </motion.div>

        {/* Disc / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={i}
              isActive={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Animated progress bar */}
        <div className="flex justify-center gap-2 mt-8">
          {STATS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-400 ${
                active === i ? 'w-8 bg-neon shadow-neon-sm' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}