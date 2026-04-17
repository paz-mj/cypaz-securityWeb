import { motion } from 'framer-motion';

export default function ProductDemo() {
  return (
    <section id="product-demo" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass neon-border rounded-2xl p-4 md:p-6"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Product Demo
          </h2>
          <video
            className="w-full rounded-xl border border-neon/20"
            src="/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </motion.div>
      </div>
    </section>
  );
}
