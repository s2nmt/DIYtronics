import type { Lang } from '../i18n/translations';
import type { TemperatureHumidityMonitoringArticleCopy } from './projectArticleTemperatureHumidityMonitoring';

export const projectArticleLivestockMonitoringControl: Record<
  Lang,
  TemperatureHumidityMonitoringArticleCopy
> = {
  vi: {
    documentTitle: 'Hệ thống giám sát điều khiển trong chăn nuôi | Gemify Projects',
    back: '← Quay lại Dự án',
    title: 'Hệ thống giám sát điều khiển trong chăn nuôi',
    meta: 'Dự án đã hoàn thành · IoT · Nông nghiệp thông minh · App & Web',
    lead:
      'Giải pháp giám sát và điều khiển môi trường chuồng nuôi theo thời gian thực qua app và website: theo dõi nhiệt độ, độ ẩm, khí độc và tự động hóa thiết bị.',
    overviewTitle: 'Tổng quan dự án',
    overview:
      'Hệ thống được triển khai cho trang trại cần kiểm soát vi khí hậu ổn định trong chuồng nuôi. Người dùng theo dõi dữ liệu cảm biến theo khu vực, nhận cảnh báo khi thông số vượt ngưỡng và điều khiển thiết bị như quạt, phun sương, đèn sưởi, cấp nước hoặc cho ăn từ xa.',
    featuresTitle: 'Tính năng chính',
    features: [
      {
        strong: 'Giám sát đa thông số:',
        text: ' Theo dõi nhiệt độ, độ ẩm, NH3/CO2 và trạng thái thiết bị theo từng khu chuồng.',
      },
      {
        strong: 'Điều khiển tự động:',
        text: ' Bật/tắt quạt, phun sương, đèn sưởi, bơm nước theo ngưỡng hoặc theo lịch.',
      },
      {
        strong: 'Cảnh báo tức thời:',
        text: ' Gửi thông báo qua app khi môi trường bất thường hoặc thiết bị gặp lỗi.',
      },
      {
        strong: 'Quản lý từ xa:',
        text: ' Theo dõi và thao tác toàn bộ hệ thống trên điện thoại hoặc dashboard web.',
      },
      {
        strong: 'Nhật ký & báo cáo:',
        text: ' Lưu lịch sử vận hành, thống kê dữ liệu để tối ưu quy trình chăm sóc đàn.',
      },
    ],
    techTitle: 'Công nghệ tham khảo',
    techTags: [
      'ESP32 / gateway IoT',
      'Temp/Humidity + gas sensors',
      'Relay controller',
      'MQTT / HTTP API',
      'React (web dashboard)',
      'Mobile app',
      'Node.js backend',
    ],
    techBody:
      'Các node cảm biến và bộ điều khiển thu thập dữ liệu môi trường, gửi lên server qua MQTT/HTTP. App và web cùng sử dụng API để hiển thị trạng thái theo thời gian thực và gửi lệnh điều khiển thiết bị.',
    uiTitle: 'Giao diện App & Web',
    uiBody:
      'Web: tổng quan nhiều chuồng nuôi, bản đồ trạng thái, cảnh báo và lịch sử điều khiển. App: xem nhanh từng khu, nhận cảnh báo khẩn và thao tác điều khiển ngay trên điện thoại.',
    uiGallerySections: [],
    uiCarouselPrevAria: 'Ảnh trước',
    uiCarouselNextAria: 'Ảnh sau',
    outcomeTitle: 'Kết quả',
    outcomeBody:
      'Giải pháp giúp trang trại duy trì môi trường ổn định, giảm rủi ro dịch bệnh, tăng tỷ lệ sống và giảm chi phí vận hành nhờ tự động hóa và giám sát từ xa 24/7.',
  },
  en: {
    documentTitle: 'Livestock monitoring and control system | Gemify Projects',
    back: '← Back to Projects',
    title: 'Livestock monitoring and control system',
    meta: 'Completed project · IoT · Smart agriculture · App & Web',
    lead:
      'A real-time livestock environment monitoring and control solution via mobile app and web dashboard: temperature, humidity, gas tracking, and automated actuation.',
    overviewTitle: 'Project overview',
    overview:
      'This system is designed for farms that need stable micro-climate control in livestock houses. Users monitor sensor data by zone, receive alerts when readings exceed thresholds, and remotely control fans, misting, heating lamps, water pumps, or feeding devices.',
    featuresTitle: 'Key features',
    features: [
      {
        strong: 'Multi-parameter monitoring:',
        text: ' Track temperature, humidity, NH3/CO2, and device status per livestock zone.',
      },
      {
        strong: 'Automated control:',
        text: ' Drive fans, misting, heating, and pumps by thresholds or schedules.',
      },
      {
        strong: 'Instant alerts:',
        text: ' Push notifications when environmental values drift or equipment fails.',
      },
      {
        strong: 'Remote operations:',
        text: ' Supervise and control the full system from phone or web dashboard.',
      },
      {
        strong: 'Logs and reporting:',
        text: ' Keep operational history and trend reports for better farm decisions.',
      },
    ],
    techTitle: 'Technology stack',
    techTags: [
      'ESP32 / IoT gateway',
      'Temp/Humidity + gas sensors',
      'Relay controllers',
      'MQTT / HTTP API',
      'React (web dashboard)',
      'Mobile app',
      'Node.js backend',
    ],
    techBody:
      'Sensor and control nodes collect environment data and publish it to the server over MQTT/HTTP. Web and mobile clients share the same APIs for live status, alerting, and remote control.',
    uiTitle: 'App & web UI',
    uiBody:
      'Web: multi-house overview, status map, alert center, and control history. App: quick zone view, urgent alerts, and one-tap control actions in the field.',
    uiGallerySections: [],
    uiCarouselPrevAria: 'Previous image',
    uiCarouselNextAria: 'Next image',
    outcomeTitle: 'Outcome',
    outcomeBody:
      'The system helps farms maintain stable conditions, reduce disease risk, improve survival rates, and lower operating costs through 24/7 remote monitoring and automation.',
  },
};
