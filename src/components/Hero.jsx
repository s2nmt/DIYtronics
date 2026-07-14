import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />

      <div className="container">
        <div className="hero__content">
          <motion.h1
            className="hero__brand"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Gemi<span>fy</span>
          </motion.h1>

          <motion.p
            className="hero__headline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Outsource IoT platforms. Build PCB & firmware. Design mechanics.
          </motion.p>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Gemify partners with you from idea to production — cloud platforms, PCB
            and firmware, and mechanical enclosures ready for manufacturing.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="btn btn--primary">
              Talk to us
            </a>
            <a href="/products" className="btn btn--outline">
              Browse devices
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
