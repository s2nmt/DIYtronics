import { motion } from "framer-motion";
import { assetPath } from "../utils/assetPath";

const industries = [
  {
    title: "Agriculture",
    desc: "Boards and firmware for greenhouse climate, irrigation, and sensing — plus the dashboards your agronomists will use. You own production and field rollout.",
    image: "images/industry-agriculture.jpg",
    alt: "Greenhouse as an application domain for embedded design",
  },
  {
    title: "Livestock",
    desc: "Design for barn climate, gas sensing, and feed-line control. We deliver the design package; your team installs and operates on site.",
    image: "images/industry-livestock.jpg",
    alt: "Livestock facility as an application domain",
  },
  {
    title: "Factories",
    desc: "Line monitoring, energy metering, and machine I/O designed as a stack you can manufacture and maintain in-house.",
    image: "images/industry-factory.jpg",
    alt: "Factory as an application domain for embedded design",
  },
];

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Where the designs get used</h2>
          <p className="section-description">
            Agriculture, livestock, and factories are application domains — not
            turnkey sites we operate.
          </p>
        </div>

        <div className="cards-grid">
          {industries.map((item, i) => (
            <motion.article
              key={item.title}
              className="card card--industry"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="card__media">
                <img
                  src={assetPath(item.image)}
                  alt={item.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                />
              </div>
              <div className="card__body">
                <span className="card__icon">0{i + 1}</span>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
