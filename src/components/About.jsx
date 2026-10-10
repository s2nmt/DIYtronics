import { motion } from "framer-motion";
import { assetPath } from "../utils/assetPath";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__layout">
        <motion.div
          className="about__copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-subtitle">About</p>
          <h2 className="section-title">Gemify Technology</h2>
          <p>
            Founded in January 2026 in Ho Chi Minh City. The team is engineers
            with experience in embedded systems and IoT.
          </p>
          <p>
            The work is project-based: hardware PCB, firmware and Embedded
            Linux, and IoT software — from spec to a working unit. You keep
            the source at handoff.
          </p>
        </motion.div>

        <motion.div
          className="about__photo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <img
            src={assetPath("images/Monitoring-and-control-system.png")}
            alt="Gemify Technology lab — dashboard, devices, and boards"
            width="1280"
            height="720"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
