import { motion } from "framer-motion";
import { assetPath } from "../utils/assetPath";

const services = [
  {
    num: "01",
    title: "Hardware PCB",
    desc: "Schematic, multilayer PCB layout, DFM, and Gerber — a board your firmware or Linux image can boot on, ready for your manufacturer.",
    points: ["Schematic & multilayer PCB", "DFM and Gerber", "Bring-up against the board"],
    image: "images/service-pcb.jpg",
    alt: "PCB schematic and layout design",
  },
  {
    num: "02",
    title: "Firmware & Embedded Linux",
    desc: "Bare-metal and RTOS on MCUs, or Yocto/Buildroot BSPs on SoCs — drivers, bootloaders, OTA, device trees, and production images as one stack.",
    points: ["Bare-metal / RTOS / OTA", "Yocto, device tree, kernel", "Board bring-up"],
    image: "images/service-firmware.jpg",
    alt: "Processor in a socket — firmware and Embedded Linux",
  },
  {
    num: "03",
    title: "IoT platform",
    desc: "Dashboards, APIs, and device data pipelines that sit on top of the board — sized to the product, not a generic platform.",
    points: ["Device APIs & MQTT", "Dashboards and alerts", "Handoff with source"],
    image: "images/service-iot.jpg",
    alt: "IoT dashboard and device software",
  },
];

export default function Services() {
  return (
    <section className="section section--light" id="services">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">What we do</p>
          <h2 className="section-title">The stack</h2>
          <p className="section-description">
            PCB, firmware &amp; Embedded Linux, and IoT platform.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              className="card card--industry"
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
                <ul className="card__list">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
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
