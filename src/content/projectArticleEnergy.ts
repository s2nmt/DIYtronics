import type { Lang } from '../i18n/translations';
import type { Example1ArticleCopy } from './projectArticleExample1';

export const projectArticleEnergy: Record<Lang, Example1ArticleCopy> = {
  vi: {
    documentTitle: 'Hệ thống giám sát năng lượng từ xa | Gemify Projects',
    back: '← Quay lại Dự án',
    title: 'Hệ thống giám sát năng lượng từ xa',
    meta: 'Dự án đã hoàn thành · IoT · Năng lượng · App & Web',
    lead:
      'Giải pháp theo dõi điện năng và phụ tải từ xa qua ứng dụng di động và web: dữ liệu theo thời gian thực, báo cáo, ngưỡng cảnh báo và cơ sở để tối ưu tiêu thụ.',
    overviewTitle: 'Tổng quan dự án',
    overview:
      'Hệ thống phục vụ khách hàng cần giám sát năng lượng tại xưởng, văn phòng, trạm hoặc nhiều điểm đo. Người dùng xem công suất, năng lượng tích lũy và xu hướng theo thời gian, nhận cảnh báo khi vượt ngưỡng và xuất báo cáo phục vụ vận hành và quản trị chi phí.',
    featuresTitle: 'Tính năng chính',
    features: [
      {
        strong: 'Giám sát từ xa:',
        text: ' Theo dõi điện năng, dòng, công suất và phụ tải qua app và trình duyệt.',
      },
      {
        strong: 'Báo cáo & xu hướng:',
        text: ' Biểu đồ theo giờ, ngày, tuần; so sánh kỳ và tổng hợp tiêu thụ.',
      },
      {
        strong: 'Cảnh báo ngưỡng:',
        text: ' Cài đặt min/max hoặc công suất đỉnh; thông báo qua app hoặc email.',
      },
      {
        strong: 'Đa điểm đo:',
        text: ' Tổng hợp nhiều đồng hồ / phân tích theo khu vực, dây chuyền hoặc tòa nhà.',
      },
      {
        strong: 'Phân quyền:',
        text: ' Tài khoản vận hành, xem báo cáo và quản trị cấu hình.',
      },
    ],
    techTitle: 'Công nghệ tham khảo',
    techTags: [
      'Smart meter / CT sensor',
      'ESP32 / gateway IoT',
      'MQTT / HTTP API',
      'React (Web dashboard)',
      'Mobile app',
      'Node.js / time-series DB',
    ],
    techBody:
      'Thiết bị đo hoặc gateway thu dữ liệu năng lượng, đẩy lên máy chủ qua MQTT hoặc HTTP. Web và app hiển thị dashboard, lịch sử và cảnh báo từ cùng một nền API.',
    uiTitle: 'Giao diện App & Web',
    uiBody:
      'Web: đăng nhập, tổng quan tiêu thụ, biểu đồ xu hướng, danh sách điểm đo, cài đặt ngưỡng và báo cáo. App: xem nhanh theo site hoặc phân xưởng, chi tiết từng đồng hồ và thông báo khi có sự cố hoặc vượt ngưỡng.',
    uiGallerySections: [],
    uiCarouselPrevAria: 'Ảnh trước',
    uiCarouselNextAria: 'Ảnh sau',
    outcomeTitle: 'Kết quả',
    outcomeBody:
      'Hệ thống đã được bàn giao và vận hành ổn định trên Android, iOS và web, giúp khách hàng minh bạch hóa tiêu thụ điện, phát hiện bất thường sớm và giảm lãng phí năng lượng.',
  },
  en: {
    documentTitle: 'Remote energy monitoring system | Gemify Projects',
    back: '← Back to Projects',
    title: 'Remote energy monitoring system',
    meta: 'Completed project · IoT · Energy · App & Web',
    lead:
      'Remote tracking of power use and loads through a mobile app and web dashboard—live data, reports, threshold alerts, and a foundation for efficiency improvements.',
    overviewTitle: 'Project overview',
    overview:
      'Built for teams that need visibility into energy use across plants, offices, sites, or multiple metering points. Users see power, energy, and trends over time, get alerts when thresholds are exceeded, and export reports for operations and cost control.',
    featuresTitle: 'Key features',
    features: [
      {
        strong: 'Remote monitoring:',
        text: ' Track energy, current, power, and loads from app and browser.',
      },
      {
        strong: 'Reports & trends:',
        text: ' Charts by hour, day, and week; period comparisons and consumption rollups.',
      },
      {
        strong: 'Threshold alerts:',
        text: ' Min/max or peak-power rules with notifications via app or email.',
      },
      {
        strong: 'Multi-site:',
        text: ' Aggregate many meters; break down by area, line, or building.',
      },
      {
        strong: 'Roles:',
        text: ' Operator, reporting, and admin access for day-to-day use and configuration.',
      },
    ],
    techTitle: 'Technology stack',
    techTags: [
      'Smart meter / CT sensing',
      'ESP32 / IoT gateway',
      'MQTT / HTTP API',
      'React (web dashboard)',
      'Mobile app',
      'Node.js / time-series store',
    ],
    techBody:
      'Meters or gateways publish energy data to the server over MQTT or HTTP. The web dashboard and mobile app share the same APIs for charts, history, and alerts.',
    uiTitle: 'App & web UI',
    uiBody:
      'Web: sign-in, consumption overview, trend charts, meter list, threshold setup, and exports. App: quick views by site or plant, per-meter detail, and push-style alerts for faults or threshold breaches.',
    uiGallerySections: [],
    uiCarouselPrevAria: 'Previous image',
    uiCarouselNextAria: 'Next image',
    outcomeTitle: 'Outcome',
    outcomeBody:
      'Delivered and running reliably on Android, iOS, and the web—giving the client clear visibility into electricity use, earlier detection of anomalies, and lower energy waste.',
  },
};
