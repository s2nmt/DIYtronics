import type { Lang } from '../i18n/translations';

export type Example1ArticleCopy = {
  documentTitle: string;
  back: string;
  title: string;
  meta: string;
  lead: string;
  overviewTitle: string;
  overview: string;
  featuresTitle: string;
  features: { strong: string; text: string }[];
  techTitle: string;
  techTags: string[];
  techBody: string;
  uiTitle: string;
  uiBody: string;
  outcomeTitle: string;
  outcomeBody: string;
};

export const projectArticleExample1: Record<Lang, Example1ArticleCopy> = {
  vi: {
    documentTitle: 'Giám sát & điều khiển nhiệt độ, độ ẩm từ xa | Gemify Projects',
    back: '← Quay lại Dự án',
    title: 'Giám sát & điều khiển nhiệt độ, độ ẩm từ xa qua App & Website',
    meta: 'Dự án đã hoàn thành · IoT · App & Web',
    lead:
      'Hệ thống giám sát và điều khiển nhiệt độ, độ ẩm từ xa thông qua app di động và website. Dữ liệu thời gian thực, cảnh báo và điều khiển từ xa.',
    overviewTitle: 'Tổng quan dự án',
    overview:
      'Dự án xây dựng giải pháp IoT cho khách hàng cần theo dõi nhiệt độ và độ ẩm tại nhiều vị trí (kho, phòng server, nhà xưởng, văn phòng). Người dùng có thể xem dữ liệu real-time, thiết lập ngưỡng cảnh báo và điều khiển thiết bị (bật/tắt máy lạnh, máy hút ẩm...) từ xa qua app hoặc web.',
    featuresTitle: 'Tính năng chính',
    features: [
      {
        strong: 'Giám sát thời gian thực:',
        text: ' Hiển thị nhiệt độ, độ ẩm từ các cảm biến, cập nhật liên tục trên app và web.',
      },
      {
        strong: 'Dashboard web:',
        text: ' Giao diện quản trị với biểu đồ lịch sử, báo cáo theo ngày/tuần/tháng.',
      },
      {
        strong: 'App di động:',
        text: ' Xem nhanh, nhận push notification khi vượt ngưỡng cảnh báo.',
      },
      {
        strong: 'Điều khiển từ xa:',
        text: ' Bật/tắt relay điều khiển thiết bị (máy lạnh, quạt, máy hút ẩm) theo ngưỡng hoặc thủ công.',
      },
      {
        strong: 'Cảnh báo:',
        text: ' Cài đặt ngưỡng min/max, nhận thông báo qua app hoặc email khi vượt ngưỡng.',
      },
    ],
    techTitle: 'Công nghệ sử dụng',
    techTags: [
      'ESP32 / ESP8266',
      'Cảm biến DHT22 / BME280',
      'MQTT / HTTP API',
      'React / Next.js (Web)',
      'React Native / Flutter (App)',
      'Node.js backend',
    ],
    techBody:
      'Thiết bị đầu cuối (sensor + relay) kết nối WiFi, gửi dữ liệu lên server qua MQTT hoặc HTTP. Web dashboard và app kết nối API để hiển thị và điều khiển.',
    uiTitle: 'Giao diện App & Web',
    uiBody:
      'Web: trang đăng nhập, dashboard với đồ thị nhiệt độ/độ ẩm theo thời gian, danh sách thiết bị, cài đặt ngưỡng và điều khiển relay. App: màn hình chính hiển thị các phòng/zone, chi tiết từng điểm đo và nút điều khiển nhanh.',
    outcomeTitle: 'Kết quả',
    outcomeBody:
      'Hệ thống đã được bàn giao và vận hành ổn định, giúp khách hàng giám sát nhiệt độ – độ ẩm 24/7 và chủ động điều khiển thiết bị từ xa, giảm rủi ro hư hỏng thiết bị và tiết kiệm chi phí vận hành.',
  },
  en: {
    documentTitle: 'Remote temperature & humidity monitoring & control | Gemify Projects',
    back: '← Back to Projects',
    title: 'Remote temperature & humidity monitoring & control via app & website',
    meta: 'Completed project · IoT · App & Web',
    lead:
      'A system for remote monitoring and control of temperature and humidity through a mobile app and website—real-time data, alerts, and remote actuation.',
    overviewTitle: 'Project overview',
    overview:
      'This IoT solution targets customers who need to track temperature and humidity across multiple sites (warehouse, server room, factory floor, office). Users can view live data, configure alert thresholds, and control equipment (air conditioning, dehumidifiers, and more) remotely from the app or web.',
    featuresTitle: 'Key features',
    features: [
      {
        strong: 'Real-time monitoring:',
        text: ' Temperature and humidity from sensors, continuously updated on app and web.',
      },
      {
        strong: 'Web dashboard:',
        text: ' Admin UI with historical charts and daily, weekly, and monthly reports.',
      },
      {
        strong: 'Mobile app:',
        text: ' At-a-glance views and push notifications when readings exceed thresholds.',
      },
      {
        strong: 'Remote control:',
        text: ' Relay outputs to switch equipment (AC, fans, dehumidifiers) automatically by threshold or manually.',
      },
      {
        strong: 'Alerts:',
        text: ' Min/max thresholds with notifications via app or email when values go out of range.',
      },
    ],
    techTitle: 'Technology stack',
    techTags: [
      'ESP32 / ESP8266',
      'DHT22 / BME280 sensors',
      'MQTT / HTTP API',
      'React / Next.js (web)',
      'React Native / Flutter (app)',
      'Node.js backend',
    ],
    techBody:
      'Edge hardware (sensor + relay) connects over Wi‑Fi and sends data to the server via MQTT or HTTP. The web dashboard and mobile app use the same API for visualization and control.',
    uiTitle: 'App & web UI',
    uiBody:
      'Web: sign-in, dashboard with temperature/humidity trends over time, device list, threshold settings, and relay control. App: home view by room or zone, per-sensor detail, and quick control actions.',
    outcomeTitle: 'Outcome',
    outcomeBody:
      'The system was delivered and runs reliably, enabling 24/7 temperature and humidity monitoring and proactive remote control—reducing equipment risk and operating cost.',
  },
};
