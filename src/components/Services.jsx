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
    title: "PCB & firmware",
    desc: "Schematic and multilayer PCB layout, DFM/Gerber delivery, plus bare-metal or RTOS firmware, drivers, and board bring-up — from concept to working hardware.",
    art: "hardware",
  },
  {
    num: "03",
    title: "Mechanical design",
    desc: "Enclosure and structural design in CAD, DFM for injection molding or sheet metal, 3D prototypes, and production-ready drawings for your electronics.",
    art: "mechanical",
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
      <rect x="70" y="55" width="160" height="150" rx="10" fill="#fff" stroke="#059669" strokeWidth="2" strokeOpacity="0.25" />
      <rect x="95" y="80" width="110" height="70" rx="6" fill="#111827" opacity="0.88" />
      <circle cx="290" cy="100" r="42" fill="none" stroke="#059669" strokeWidth="10" opacity="0.35" />
      <circle cx="290" cy="100" r="18" fill="#a3e635" />
      <circle cx="290" cy="175" r="28" fill="none" stroke="#111827" strokeWidth="8" opacity="0.45" />
      <circle cx="290" cy="175" r="10" fill="#059669" />
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
            Platform outsourcing, PCB & firmware, and mechanical design —
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
