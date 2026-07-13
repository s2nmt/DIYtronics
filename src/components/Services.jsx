import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "IoT platform outsourcing",
    desc: "Build and operate cloud platforms, dashboards, APIs, and sensor data pipelines — scaled to your project scope.",
    art: "platform",
  },
  {
    num: "02",
    title: "Hardware development",
    desc: "Schematic design, SoC/module selection, PCB prototypes, embedded firmware, and EMC certification — from PoC to mass production.",
    art: "hardware",
  },
  {
    num: "03",
    title: "Ready-made device solutions",
    desc: "Supply and customize field-proven IoT product lines: climate systems, relay controllers, and smart NFC/RFID readers.",
    art: "devices",
  },
];

function ServiceArt({ type }) {
  if (type === "platform") {
    return (
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="260" fill="#ecfdf5" />
        <circle cx="320" cy="40" r="100" fill="#059669" opacity="0.14" />
        <rect x="50" y="55" width="180" height="120" rx="12" fill="#fff" />
        <path d="M70 90 H200 M70 115 H170 M70 140 H190" stroke="#059669" strokeWidth="4" strokeOpacity="0.35" strokeLinecap="round" />
        <circle cx="290" cy="140" r="42" fill="url(#sg)" />
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#111827" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "hardware") {
    return (
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="260" fill="#f0fdf4" />
        <rect x="110" y="50" width="180" height="140" rx="12" fill="#fff" />
        <rect x="140" y="80" width="120" height="70" rx="8" fill="#111827" opacity="0.92" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={130 + i * 35} y="40" width="12" height="14" rx="2" fill="#a3e635" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <rect key={`b${i}`} x={130 + i * 35} y="186" width="12" height="14" rx="2" fill="#059669" />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="260" fill="#ecfdf5" />
      <rect x="48" y="90" width="100" height="70" rx="10" fill="#fff" />
      <circle cx="200" cy="110" r="36" fill="#059669" opacity="0.9" />
      <rect x="250" y="70" width="90" height="120" rx="14" fill="#fff" />
      <circle cx="295" cy="120" r="18" stroke="#a3e635" strokeWidth="3" fill="none" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="section section--light" id="services">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Technology solutions</p>
          <h2 className="section-title">Our services</h2>
          <p className="section-description">
            Deep platform outsourcing, end-to-end hardware, or deploy-ready products —
            pick the model that fits your speed and budget.
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
                <ServiceArt type={s.art} />
              </div>
              <div className="card__body">
                <div className="card__icon">{s.num}</div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.desc}</p>
                <a href="#contact" className="card__link">
                  Learn more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
