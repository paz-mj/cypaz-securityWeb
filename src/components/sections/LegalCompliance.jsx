// src/components/sections/LegalCompliance.jsx
import { motion } from 'framer-motion';
import { Scale, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import NeonButton from '../ui/NeonButton';
import { LEGAL } from '../../constants/copy';

function HighlightBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-body text-neon/80 py-1">
      <CheckCircle2 className="w-3.5 h-3.5 text-neon flex-shrink-0" />
      {children}
    </span>
  );
}

export default function LegalCompliance() {
  return (
    <section id="legal" className="relative py-24 px-4 overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 glass neon-border rounded-full px-4 py-1.5 mb-6">
            <Scale className="w-3.5 h-3.5 text-neon" />
            <span className="text-xs font-mono text-neon/80 uppercase tracking-widest">B2B Compliance</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            {LEGAL.headline}
          </h2>
          <p className="font-body text-slate-400 max-w-xl mx-auto mb-12">
            {LEGAL.subheadline}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {LEGAL.frameworks.map((fw, i) => (
            <GlassCard key={fw.country} delay={i * 0.15} hover glow={false}>
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{fw.flag}</span>
                  <div>
                    <p className="font-body text-xs text-neon/60 uppercase tracking-widest">
                      {fw.country} · {fw.year}
                    </p>
                    <h3 className="font-display font-bold text-white text-lg leading-tight">
                      {fw.law}
                    </h3>
                  </div>
                </div>
                <div className="glass rounded-lg p-2">
                  <FileText className="w-4 h-4 text-neon/60" strokeWidth={1.5} />
                </div>
              </div>

              {/* Subtitle */}
              <p className="font-body text-sm text-slate-500 italic mb-4 pb-4 border-b border-white/5">
                {fw.title}
              </p>

              {/* Relevance */}
              <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">
                {fw.relevance}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-1 pt-4 border-t border-neon/10">
                {fw.highlights.map((h) => (
                  <HighlightBadge key={h}>{h}</HighlightBadge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <NeonButton variant="outline" size="lg" href="#footer">
            {LEGAL.cta}
            <ArrowRight className="w-4 h-4" />
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
}