import { motion } from "framer-motion";
import { assetPath } from "../utils/assetPath";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />

      <div className="container hero__layout">
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
            See every site. Control every thing.
          </motion.p>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Sensors, controllers, and autonomous vehicles you can buy — plus
            monitoring, energy, and AGV systems for farms, barns, and plants.
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
            <a href="#hardware" className="btn btn--outline">
              Browse hardware
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__collage"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="hero__shot hero__shot--main"
            src={assetPath("images/hero-control.jpg")}
            alt="IoT operations room with camera and sensor dashboards"
            width="1200"
            height="900"
            fetchPriority="high"
          />
          <img
            className="hero__shot hero__shot--top"
            src={assetPath("images/hero-greenhouse.jpg")}
            alt="Smart greenhouse with sensors"
            width="1200"
            height="900"
          />
          <img
            className="hero__shot hero__shot--bot"
            src={assetPath("images/hero-factory.jpg")}
            alt="Factory floor with monitoring cameras"
            width="1200"
            height="900"
          />
        </motion.div>
      </div>
    </section>
  );
}
