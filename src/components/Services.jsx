import { motion } from "framer-motion";
import { assetPath } from "../utils/assetPath";

const services = [
  {
    num: "01",
    title: "Monitoring & control",
    desc: "Watch sites through cameras and sensors. Automate pumps, fans, valves, and lights on schedules, thresholds, or remote commands — one system for farms, barns, and plants.",
    image: "images/service-monitor.jpg",
    alt: "Cameras and sensors for IoT monitoring",
  },
  {
    num: "02",
    title: "Energy management",
    desc: "Track electricity by zone and asset, catch anomalies, cut operating cost, and report usage for farms or factories.",
    image: "images/service-energy.jpg",
    alt: "Electrical room and energy management dashboard",
  },
  {
    num: "03",
    title: "Autonomous vehicles",
    desc: "AGVs and AMRs that move materials on farms, in barns, and across factory floors — mapped routes, obstacle avoidance, and fleet status on the same dashboard.",
    image: "images/service-agv.jpg",
    alt: "Autonomous mobile robot on a factory floor",
  },
];

export default function Services() {
  return (
    <section className="section section--light" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Three platforms for smarter operations</h2>
          <p className="section-description">
            Gemify connects field devices, energy, and autonomous vehicles to
            dashboards, alerts, and automation.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="card__media">
                <img src={assetPath(s.image)} alt={s.alt} width="1280" height="720" loading="lazy" />
              </div>
              <div className="card__body">
                <div className="card__icon">{s.num}</div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.desc}</p>
                <a href="#contact" className="card__link">
                  Talk to us →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
