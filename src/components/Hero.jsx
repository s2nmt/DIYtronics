import { motion } from "framer-motion";
import { assetPath } from "../utils/assetPath";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__layout">
        <div className="hero__content">
          <motion.p
            className="hero__kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Embedded engineering partner
          </motion.p>

          <motion.h1
            className="hero__headline hero__headline--lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Embedded and IoT engineering.
          </motion.h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            PCB, firmware, Embedded Linux, and IoT platforms — from spec to
            bring-up.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <a href="#contact" className="btn btn--primary">
              Talk to us
            </a>
            <a href="#services" className="btn btn--outline">
              See services
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__photo-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="hero__photo"
            src={assetPath("images/hero-pcb.jpg")}
            alt="Printed circuit board"
            width="1600"
            height="1067"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
