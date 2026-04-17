// src/components/sections/TrustBar.jsx
import { motion } from 'framer-motion';
import { TRUST } from '../../constants/copy';

const logos = [
  {
    name: 'UCN',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="22" letterSpacing="3">
          UCN
        </text>
      </svg>
    ),
    label: 'Universidad Católica del Norte',
  },
  {
    name: 'ProChile',
    svg: (
      <svg viewBox="0 0 140 40" fill="currentColor" className="h-8 w-auto">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="18" letterSpacing="1">
          ProChile
        </text>
      </svg>
    ),
    label: 'ProChile — Gobierno de Chile',
  },
  {
    name: 'Nómada',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="18" letterSpacing="1">
          Nómada
        </text>
      </svg>
    ),
    label: 'Nómada Hub',
  },
  {
    name: 'StartCo',
    svg: (
      <svg viewBox="0 0 130 40" fill="currentColor" className="h-8 w-auto">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="18" letterSpacing="1">
          StartCo
        </text>
      </svg>
    ),
    label: 'StartCo Medellín',
  },
];

export default function TrustBar() {
  return (
    <section className="relative py-16 px-4 border-y border-neon/10">
      {/* Thin top highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(46,255,195,0.4), transparent)' }} />

      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center font-body text-xs text-slate-500 uppercase tracking-widest mb-10"
        >
          {TRUST.headline}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              title={logo.label}
              className="relative group"
            >
              <div
                className="text-slate-500 group-hover:text-white transition-all duration-400"
                style={{ filter: 'brightness(0.6)', }}
              >
                <div className="group-hover:drop-shadow-[0_0_12px_rgba(46,255,195,0.6)] transition-all duration-400">
                  {logo.svg}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(46,255,195,0.2), transparent)' }} />
    </section>
  );
}