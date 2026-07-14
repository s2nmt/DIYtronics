import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & scope",
    desc: "Clarify the problem, deployment environment, cost constraints, and timeline.",
  },
  {
    title: "Solution design",
    desc: "Platform architecture, PCB & firmware scope, or mechanical enclosure concept that fits.",
  },
  {
    title: "Prototype & field test",
    desc: "On-site PoC, RF validation, firmware tuning, and dashboard iteration.",
  },
  {
    title: "Production & handoff",
    desc: "Volume manufacturing, system integration, operator training, and warranty support.",
  },
];

export default function Process() {
  return (
    <section className="section section--light" id="process">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">How we work</p>
          <h2 className="section-title">From brief to devices in the field</h2>
          <p className="section-description">
            A clear path that lowers technical risk and shortens time-to-market for IoT
            projects.
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
