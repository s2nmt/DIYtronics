import { motion } from "framer-motion";

const steps = [
  {
    title: "Spec",
    desc: "Interfaces, MCU or SoC, PCB constraints, and what your team must own at handoff.",
  },
  {
    title: "Architecture",
    desc: "PCB stack-up, firmware or Linux BSP, and software APIs — reviewed with your engineers before anything is frozen.",
  },
  {
    title: "Bring-up",
    desc: "Board bring-up, driver work, image builds, and a working unit you can evaluate.",
  },
  {
    title: "Handoff",
    desc: "Gerber, firmware, BSP recipes, and docs. Your team maintains and ships from there.",
  },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">How we work</p>
          <h2 className="section-title">From spec to handoff</h2>
          <p className="section-description">
            Spec, architecture, bring-up, then a source handoff.
          </p>
        </div>

        <ol className="features-grid">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="feature"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="feature__num">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
