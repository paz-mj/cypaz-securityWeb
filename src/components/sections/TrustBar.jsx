// src/components/sections/TrustBar.jsx
import { motion } from 'framer-motion';
import { TRUST } from '../../constants/copy';

const logos = [
  { name: 'UCN', src: '/ucn.png' },
  { name: 'StartCo', src: '/startco.png' },
  { name: 'ProChile', src: '/prochile.png' },
  { name: 'Usqai', src: '/usqai.png' },
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

        <div className="grid grid-cols-2 gap-4 justify-items-center md:flex md:flex-nowrap md:items-center md:justify-center md:gap-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-4 flex items-center justify-center w-32 h-20 shadow-lg border border-white/10"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(46,255,195,0.2), transparent)' }} />
    </section>
  );
}