import { motion } from "framer-motion";

const steps = [
  {
    title: "Site survey",
    desc: "Existing equipment, network, and goals — monitoring, control, energy, or autonomous vehicles.",
  },
  {
    title: "Solution design",
    desc: "Camera, sensor, meter, and AGV layout; automation scenes, routes, and the operations dashboard.",
  },
  {
    title: "Install & commission",
    desc: "On-site setup, threshold tuning, and checks on alerts, control, and reports before handoff.",
  },
  {
    title: "Train & support",
    desc: "Operator training, maintenance, extra measurement points, and upgrades as you grow.",
  },
];

export default function Process() {
  return (
    <section className="section section--light" id="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">From survey to live operations</h2>
          <p className="section-description">
            Built around your site — existing equipment, network, and operating
            goals.
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
