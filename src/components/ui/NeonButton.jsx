// src/components/ui/NeonButton.jsx
import { motion } from 'framer-motion';

export default function NeonButton({ children, variant = 'primary', onClick, href, className = '', size = 'md' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    primary: `
      bg-neon text-navy-900 font-semibold font-display
      shadow-neon hover:shadow-neon-lg
      hover:bg-white transition-all duration-300
    `,
    outline: `
      bg-transparent text-neon font-medium font-display
      border border-neon/40 hover:border-neon/80
      shadow-neon-sm hover:shadow-neon
      transition-all duration-300
    `,
    ghost: `
      bg-neon/5 text-neon/80 font-medium font-display
      border border-neon/10 hover:border-neon/30 hover:bg-neon/10
      transition-all duration-300
    `,
  };

  const base = `
    inline-flex items-center gap-2 rounded-lg cursor-pointer
    ${sizes[size]} ${variants[variant]} ${className}
  `;

  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={base} {...motionProps}>
      {children}
    </motion.button>
  );
}