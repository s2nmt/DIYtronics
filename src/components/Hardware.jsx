import { motion } from "framer-motion";
import { hardware } from "../data/hardware";
import { assetPath } from "../utils/assetPath";

export default function Hardware() {
  return (
    <section className="section section--light" id="hardware">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Devices you can buy</h2>
          <p className="section-description">
            Sensors, controllers, meters, and autonomous vehicles.
          </p>
        </div>

        <div className="cards-grid cards-grid--fit">
          {hardware.map((p, i) => (
            <motion.article
              key={p.slug}
              className="card card--product"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="card__media">
                <img
                  src={assetPath(p.image)}
                  alt={p.imageAlt}
                  width="1280"
                  height="720"
                  loading="lazy"
                />
              </div>
              <div className="card__body">
                <p className="card__cat">{p.cat}</p>
                <h3 className="card__title">{p.name}</h3>
                <p className="card__desc">{p.shortDesc}</p>
                <a href="#contact" className="card__link">
                  Request a quote →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
