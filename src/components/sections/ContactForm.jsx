import { motion } from 'framer-motion';
import NeonButton from '../ui/NeonButton';

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass neon-border rounded-2xl p-6 md:p-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Hablemos de seguridad
          </h2>
          <p className="font-body text-slate-400 mb-8">
            Cuentanos sobre tu empresa y te contactamos para una demo personalizada.
          </p>

          <form
            method="POST"
            action="https://formspree.io/f/xvzdapln"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-body text-slate-300 mb-2">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-navy-950/70 border border-neon/20 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-neon/60 focus:ring-2 focus:ring-neon/20 transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-body text-slate-300 mb-2">
                Email corporativo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-navy-950/70 border border-neon/20 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-neon/60 focus:ring-2 focus:ring-neon/20 transition-all"
                placeholder="nombre@empresa.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-body text-slate-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-navy-950/70 border border-neon/20 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-neon/60 focus:ring-2 focus:ring-neon/20 transition-all resize-y"
                placeholder="Cuéntanos tu caso de uso"
              />
            </div>

            <div className="pt-2">
              <NeonButton variant="primary" size="md" className="w-full justify-center">
                Enviar mensaje
              </NeonButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
