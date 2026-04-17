// src/App.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

import Hero from './components/sections/Hero';
import StatsDisc from './components/sections/StatsDisc';
import TrustBar from './components/sections/TrustBar';
import LegalCompliance from './components/sections/LegalCompliance';
import Footer from './components/sections/Footer';
import NeonButton from './components/ui/NeonButton';
import { META, FOOTER } from './constants/copy';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto glass neon-border rounded-xl px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5">
            <div className="bg-neon/10 rounded-lg p-1.5">
              <Shield className="w-5 h-5 text-neon" strokeWidth={1.5} />
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">{META.name}</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {FOOTER.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-slate-400 hover:text-neon transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <NeonButton variant="primary" size="sm" href="#footer">
                Demo B2B
              </NeonButton>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden glass rounded-lg p-2 text-slate-400 hover:text-neon transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 max-w-6xl mx-auto glass neon-border rounded-xl px-5 py-4 flex flex-col gap-3"
            >
              {FOOTER.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-slate-300 hover:text-neon transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/5">
                <NeonButton variant="primary" size="sm" href="#footer" className="w-full justify-center">
                  Solicitar Demo B2B
                </NeonButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}
export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 noise relative">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <StatsDisc />
        <LegalCompliance />
        <Footer />
      </main>
    </div>
  );
}