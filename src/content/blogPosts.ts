export type BlogPostEntry = {
  href: string;
  cover: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
};

/** Newest first; matches former blog.html listing. */
export const blogPosts: BlogPostEntry[] = [
  {
    href: 'articles/post6',
    cover: 'img/post3/cover.png',
    title: 'ESP32 OTA Firmware Update over HTTPS',
    author: 'Tuan Nguyen',
    date: 'Mar 3, 2025',
    excerpt:
      'Update ESP32 firmware over the air: the device checks an HTTPS URL for a new binary, verifies the server with a Root CA, and installs the update. Includes version header (304 when up to date) and full sketch walkthrough.',
  },
  {
    href: 'articles/post5',
    cover: 'img/post5/cover.png',
    title: 'MQTTS in A76xx',
    author: 'Tuan Nguyen',
    date: 'Jan 24, 2025',
    excerpt:
      'A76xx LTE modules support MQTT and MQTTS over cellular. Use AT commands to open a secure connection, connect with LWT, subscribe and publish, and handle messages via URC.',
  },
  {
    href: 'articles/post4',
    cover: 'img/post4/cover.png',
    title: 'MQTTS on W5500 and ESP32',
    author: 'Tuan Nguyen',
    date: 'Jan 23, 2025',
    excerpt:
      'Use the W5500 Ethernet module with ESP32 for wired MQTT/MQTTS. Set up Ethernet, connect to a broker with LWT, and publish or subscribe over a stable connection.',
  },
  {
    href: 'articles/post3',
    cover: 'img/post3/cover.png',
    title: 'Public MQTTS on ESP32',
    author: 'Tuan Nguyen',
    date: 'Jan 22, 2025',
    excerpt:
      'MQTT is a lightweight messaging protocol perfect for IoT devices. Learn how to implement MQTT publish and subscribe on ESP32 with secure connections, increased buffer size, and last message tracking.',
  },
  {
    href: 'articles/post2',
    cover: 'img/post2/cover.png',
    title: 'How to Send Email Using Node.js',
    author: 'Tuan Nguyen',
    date: 'Jan 21, 2025',
    excerpt:
      'Sending emails programmatically is a common requirement in modern web applications. Learn how to send emails using Node.js with the popular Nodemailer library, including HTML emails, attachments, and best practices.',
  },
  {
    href: 'articles/post1',
    cover: 'img/post1/cover.png',
    title: 'How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu',
    author: 'Tuan Nguyen',
    date: 'Jan 20, 2025',
    excerpt:
      'MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for IoT devices. Setting up an MQTT broker on Ubuntu allows you to create a central hub for your IoT projects.',
  },
];

export const blogRecentSidebarCount = 4;
