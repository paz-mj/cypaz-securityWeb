// src/components/sections/Footer.jsx
import { motion } from 'framer-motion';
import { Shield, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import NeonButton from '../ui/NeonButton';
import { FOOTER, META } from '../../constants/copy';

const SOCIAL_ICONS = { Linkedin, Twitter, Mail };

export default function Footer() {
  return (
    <footer id="footer" className="relative pt-20 pb-8 px-4 border-t border-neon/10 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(46,255,195,0.5), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass neon-border rounded-2xl p-10 text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(46,255,195,0.06) 0%, transparent 70%)' }} />

          <Shield className="w-10 h-10 text-neon mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            ¿Listo para proteger su organización?
          </h2>
          <p className="font-body text-slate-400 max-w-lg mx-auto mb-8">
            Agende una demo y vea Cypaz en acción. Sin compromisos — solo seguridad real.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <NeonButton variant="primary" size="lg" href="mailto:hola@cypaz.com">
              <Mail className="w-4 h-4" />
              hola@cypaz.com
            </NeonButton>
            <NeonButton variant="ghost" size="lg" href="https://linkedin.com">
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ExternalLink className="w-3 h-3 opacity-60" />
            </NeonButton>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="glass neon-border rounded-lg p-2">
              <Shield className="w-5 h-5 text-neon" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-display font-bold text-white text-lg leading-none">{META.name}</p>
              <p className="font-body text-xs text-neon/60 leading-none mt-0.5">{FOOTER.tagline}</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {FOOTER.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-slate-500 hover:text-neon transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {FOOTER.social.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon];
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass neon-border rounded-lg p-2 text-slate-400 hover:text-neon transition-colors duration-200"
                  aria-label={s.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Legal */}
        <div className="text-center mt-10 pt-6 border-t border-white/5">
          <p className="font-body text-xs text-slate-600">{FOOTER.legal}</p>
        </div>
      </div>
    </footer>
  );
}