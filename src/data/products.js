export const products = [
  {
    slug: "climatelink-th",
    cat: "Monitoring",
    name: "ClimateLink TH",
    shortDesc:
      "Remote temperature and humidity monitoring & control with live dashboard, alerts, and automated climate actions.",
    icon: "TH",
    sidebarTitle: "ClimateLink",
    sidebarDesc: "Remote climate monitoring & control for rooms, warehouses, and farms.",
    introHeading: "Overview",
    introBody:
      "ClimateLink TH connects temperature and humidity sensors to a cloud dashboard so teams can watch conditions in real time, set thresholds, and trigger alerts or actuators when values drift.",
    specsHeading: "Key specifications",
    specLines: [
      "Temperature & humidity sensing with configurable sample rate",
      "Cloud or local-network dashboard with historical charts",
      "SMS / app / email alerts with hysteresis and quiet hours",
      "Remote setpoint and actuator control (optional relay output)",
      "OTA firmware updates and device health reporting",
    ],
    detailsHeading: "Where it fits",
    detailsBody:
      "Ideal for cold storage, server rooms, greenhouses, and multi-site facilities that need reliable remote climate visibility without building a custom stack from scratch. Buy off the shelf or customize sensors, enclosure, and branding.",
    features: ["Temp + humidity sensors", "Remote setpoint control", "SMS / app alerts"],
    price: "Request a quote",
    art: "climate",
  },
  {
    slug: "relaylink-remote",
    cat: "Control",
    name: "RelayLink Remote",
    shortDesc:
      "Multi-channel remote relay control for pumps, lights, HVAC, and industrial loads — with schedules and fail-safes.",
    icon: "RL",
    sidebarTitle: "RelayLink",
    sidebarDesc: "Switch and schedule equipment safely from anywhere.",
    introHeading: "Overview",
    introBody:
      "RelayLink Remote lets operators switch channels from web or mobile, run time schedules, and define fail-safe states when the network drops — so remote control stays predictable on real industrial loads.",
    specsHeading: "Key specifications",
    specLines: [
      "Multi-channel relay outputs with clear channel labeling",
      "Web / mobile control plus local schedule engine",
      "Configurable fail-safe: last state, forced off, or schedule-only",
      "Audit trail of who switched what and when",
      "Isolation-minded hardware design for inductive loads",
    ],
    detailsHeading: "Where it fits",
    detailsBody:
      "Use RelayLink for irrigation pumps, lighting banks, HVAC auxiliaries, and small automation panels where remote switching must be simple for staff and safe for equipment.",
    features: ["Multi-channel relays", "Schedules & scenes", "Web / mobile control"],
    price: "Request a quote",
    art: "relay",
  },
  {
    slug: "tagsense-nfc-rfid",
    cat: "Access",
    name: "TagSense NFC/RFID",
    shortDesc:
      "Smart NFC and RFID readers for access, attendance, and asset check-in with cloud logs and APIs.",
    icon: "TS",
    sidebarTitle: "TagSense",
    sidebarDesc: "NFC/RFID readers with reliable cloud event logging.",
    introHeading: "Overview",
    introBody:
      "TagSense captures badge taps even when Wi-Fi drops, then syncs events to the cloud with sequence IDs so attendance and access systems stay consistent across outages and retries.",
    specsHeading: "Key specifications",
    specLines: [
      "NFC and RFID read support for common card formats",
      "Offline event cache with monotonic sequence IDs",
      "Cloud logs, webhooks, and REST API integration",
      "Anti-duplication acknowledgements on upload",
      "Clear offline-mode indicator for on-site staff",
    ],
    detailsHeading: "Where it fits",
    detailsBody:
      "Deploy TagSense at doors, time clocks, and asset stations. Integrate with your HR or access system via API/webhooks, or use Gemify’s cloud console out of the box.",
    features: ["NFC + RFID support", "Cloud event logs", "API / webhook ready"],
    price: "Request a quote",
    art: "rfid",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
