import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { assetPath } from "../utils/assetPath";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Selected work</p>
          <h2 className="section-title">Reference projects</h2>
          <p className="section-description">
            A few engagements across PCB, firmware, Embedded Linux, and IoT.
          </p>
        </div>

        <div className="cards-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="card card--industry"
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
                <p className="card__cat">{p.role}</p>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
