import { useId } from "react";

const covers = {
  mqtt: ["#111827", "#059669", "MQTT"],
  climate: ["#059669", "#a3e635", "24°"],
  relay: ["#047857", "#111827", "I/O"],
  rfid: ["#111827", "#34d399", "NFC"],
  pcb: ["#064e3b", "#059669", "PCB"],
  cloud: ["#059669", "#a3e635", "API"],
};

export default function CoverArt({ type = "mqtt", className = "" }) {
  const uid = useId().replace(/:/g, "");
  const [a, b, label] = covers[type] || covers.mqtt;
  const gradId = `c-${type}-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${gradId})`} />
      <circle cx="320" cy="40" r="90" fill="#fff" opacity="0.1" />
      <circle cx="60" cy="220" r="70" fill="#fff" opacity="0.08" />
      <text
        x="40"
        y="140"
        fill="#fff"
        fontSize="42"
        fontFamily="Space Grotesk, sans-serif"
        fontWeight="700"
      >
        {label}
      </text>
    </svg>
  );
}
