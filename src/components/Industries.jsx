import { motion } from "framer-motion";
import { assetPath } from "../utils/assetPath";

const industries = [
  {
    title: "Agriculture",
    desc: "Greenhouses, irrigation, and crop climate. Cameras for pests and security. Automate pumps and shade — and move harvest or inputs with autonomous vehicles.",
    image: "images/industry-agriculture.jpg",
    alt: "Smart greenhouse with irrigation and sensors",
  },
  {
    title: "Livestock",
    desc: "Barn climate, toxic gas, and cameras. Control ventilation, heat, and feed lines. AGVs for feed or waste runs when staff should not walk every aisle.",
    image: "images/industry-livestock.jpg",
    alt: "Modern livestock facility with climate sensors and cameras",
  },
  {
    title: "Factories",
    desc: "Area and line cameras, energy by production line, and AGVs that haul pallets between cells — one operations view for people and vehicles.",
    image: "images/industry-factory.jpg",
    alt: "Factory production line with cameras and monitoring kiosk",
  },
];

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Agriculture, livestock, and factories</h2>
          <p className="section-description">
            One stack for monitoring, energy, and autonomous vehicles — configured
            for each industry.
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
