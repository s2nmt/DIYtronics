import type { Lang } from '../i18n/translations';
import type { TemperatureHumidityMonitoringArticleCopy } from './projectArticleTemperatureHumidityMonitoring';

export const projectArticleSmartAgricultureIot: Record<Lang, TemperatureHumidityMonitoringArticleCopy> = {
  vi: {
    documentTitle: 'Hệ thống nông nghiệp thông minh ứng dụng IoT | Gemify Projects',
    back: '← Quay lại Dự án',
    title: 'Hệ thống nông nghiệp thông minh ứng dụng IoT',
    meta: 'Dự án đã hoàn thành · IoT · Nông nghiệp thông minh · App & Web',
    lead:
      'Nền tảng IoT cho nông nghiệp giúp giám sát môi trường và tự động điều khiển tưới, dinh dưỡng, chiếu sáng theo thời gian thực qua app và web.',
    overviewTitle: 'Tổng quan dự án',
    overview:
      'Giải pháp triển khai cho nhà màng và khu canh tác cần tối ưu nước tưới, phân bón và điều kiện vi khí hậu. Người quản lý có thể theo dõi dữ liệu theo khu vực, cấu hình ngưỡng mục tiêu và vận hành từ xa để giảm phụ thuộc thao tác thủ công.',
    featuresTitle: 'Tính năng chính',
    features: [
      {
        strong: 'Giám sát nông trại theo zone:',
        text: ' Theo dõi nhiệt độ, độ ẩm không khí, độ ẩm đất, ánh sáng và pH/EC theo từng khu.',
      },
      {
        strong: 'Tự động tưới và châm dinh dưỡng:',
        text: ' Điều khiển van, bơm tưới và định lượng dinh dưỡng theo ngưỡng hoặc theo lịch.',
      },
      {
        strong: 'Cảnh báo & sự cố:',
        text: ' Cảnh báo khi thiếu nước bồn, cảm biến lệch chuẩn hoặc thiết bị mất kết nối.',
      },
      {
        strong: 'Nhật ký vận hành:',
        text: ' Lưu lịch sử tưới, châm phân, thông số môi trường để đánh giá hiệu quả canh tác.',
      },
      {
        strong: 'Điều khiển từ xa:',
        text: ' Bật/tắt thủ công từng thiết bị trên app hoặc web khi cần can thiệp nhanh.',
      },
    ],
    techTitle: 'Công nghệ tham khảo',
    techTags: [
      'ESP32 / LoRa / WiFi node',
      'Soil moisture / pH / EC sensors',
      'Valve & pump controller',
      'MQTT / HTTP API',
      'React (web dashboard)',
      'Mobile app',
      'Node.js backend',
    ],
    techBody:
      'Các node ngoài đồng thu thập dữ liệu cảm biến và gửi về gateway/server qua MQTT hoặc HTTP. Nền tảng web và app dùng chung API để hiển thị dashboard, cảnh báo và gửi lệnh điều khiển thiết bị.',
    uiTitle: 'Giao diện App & Web',
    uiBody:
      'Web: bản đồ khu trồng, trạng thái cảm biến, lịch tưới, cảnh báo và báo cáo mùa vụ. App: theo dõi nhanh từng zone, nhận cảnh báo tức thời và điều khiển thủ công khi cần.',
    uiGallerySections: [],
    uiCarouselPrevAria: 'Ảnh trước',
    uiCarouselNextAria: 'Ảnh sau',
    outcomeTitle: 'Kết quả',
    outcomeBody:
      'Hệ thống giúp tăng độ ổn định canh tác, giảm lãng phí nước và phân bón, đồng thời nâng hiệu quả quản lý trang trại nhờ dữ liệu thời gian thực và tự động hóa vận hành.',
  },
  en: {
    documentTitle: 'Smart agriculture system using IoT | Gemify Projects',
    back: '← Back to Projects',
    title: 'Smart agriculture system using IoT',
    meta: 'Completed project · IoT · Smart agriculture · App & Web',
    lead:
      'An IoT agriculture platform for real-time monitoring and automated control of irrigation, nutrients, and lighting through mobile and web interfaces.',
    overviewTitle: 'Project overview',
    overview:
      'Built for greenhouse and field operations that need better control of water, fertilizer, and micro-climate conditions. Managers can monitor each zone, configure target thresholds, and operate remotely to reduce manual effort.',
    featuresTitle: 'Key features',
    features: [
      {
        strong: 'Zone-based farm monitoring:',
        text: ' Track air temperature/humidity, soil moisture, light, and pH/EC per cultivation zone.',
      },
      {
        strong: 'Automated irrigation and dosing:',
        text: ' Control valves, pumps, and nutrient dosing by thresholds or schedules.',
      },
      {
        strong: 'Alerts and faults:',
        text: ' Notify users when tank levels drop, sensors drift, or field devices disconnect.',
      },
      {
        strong: 'Operational logs:',
        text: ' Keep irrigation, dosing, and environment history for cultivation performance analysis.',
      },
      {
        strong: 'Remote manual control:',
        text: ' Override and switch devices from app or web for fast intervention.',
      },
    ],
    techTitle: 'Technology stack',
    techTags: [
      'ESP32 / LoRa / WiFi nodes',
      'Soil moisture / pH / EC sensors',
      'Valve and pump controllers',
      'MQTT / HTTP API',
      'React (web dashboard)',
      'Mobile app',
      'Node.js backend',
    ],
    techBody:
      'Field nodes collect sensor telemetry and publish to gateway/server over MQTT or HTTP. Web and mobile clients share a common API for dashboards, alerts, and control actions.',
    uiTitle: 'App & web UI',
    uiBody:
      'Web: cultivation zone map, sensor status, irrigation plans, alert center, and season reports. App: quick zone snapshots, real-time alerts, and one-tap manual controls.',
    uiGallerySections: [],
    uiCarouselPrevAria: 'Previous image',
    uiCarouselNextAria: 'Next image',
    outcomeTitle: 'Outcome',
    outcomeBody:
      'The system improves crop operation stability, reduces water and fertilizer waste, and enables data-driven farm management through real-time visibility and automation.',
  },
};
