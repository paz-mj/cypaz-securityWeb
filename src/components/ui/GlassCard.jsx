// src/components/ui/GlassCard.jsx
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
      onClick={onClick}
      className={`
        glass rounded-2xl p-6
        ${glow ? 'shadow-neon' : ''}
        ${hover ? 'cursor-pointer hover:neon-border transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}