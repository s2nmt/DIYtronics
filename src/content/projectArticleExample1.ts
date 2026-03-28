import type { Lang } from '../i18n/translations';

export type Example1UiGallerySection = {
  id: string;
  sectionTitle: string;
  images: { src: string; alt: string }[];
};

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
  /** Grouped screenshots: login/register, home/detail, settings, export, config, devices, profile */
  uiGallerySections: Example1UiGallerySection[];
  uiCarouselPrevAria: string;
  uiCarouselNextAria: string;
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
      'Dự án xây dựng giải pháp IoT cho khách hàng cần theo dõi nhiệt độ và độ ẩm tại nhiều vị trí (kho, phòng server, nhà xưởng, văn phòng). Người dùng có thể xem dữ liệu real-time, thiết lập ngưỡng cảnh báo và điều khiển thiết bị từ xa qua app hoặc web.',
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
        text: ' Bật/tắt relay điều khiển thiết bị theo ngưỡng hoặc thủ công.',
      },
      {
        strong: 'Cảnh báo:',
        text: ' Cài đặt ngưỡng min/max, nhận thông báo qua app hoặc email khi vượt ngưỡng.',
      },
    ],
    techTitle: 'Công nghệ sử dụng',
    techTags: [
      'ESP32',
      'Cảm biến DHT22 ',
      'MQTTs / HTTPs API',
      'React',
      'React Native',
      'Node.js backend',
    ],
    techBody:
      'Thiết bị đầu cuối (sensor + relay) kết nối WiFi, gửi dữ liệu lên server qua MQTTs và OTA thông qua HTTPs. Web dashboard và app kết nối API để hiển thị và điều khiển.',
    uiTitle: 'Giao diện App & Web',
    uiBody:
      'Web: trang đăng nhập, dashboard với đồ thị nhiệt độ/độ ẩm theo thời gian, danh sách thiết bị, cài đặt ngưỡng và điều khiển relay. App: màn hình chính hiển thị các phòng/zone, chi tiết từng điểm đo và nút điều khiển nhanh.',
    uiGallerySections: [
      {
        id: 'login',
        sectionTitle: 'Đăng nhập & đăng ký',
        images: [
          {
            src: 'img/projects/example-1/login.png',
            alt: 'Màn hình đăng nhập TTP Scada: email, mật khẩu, giao diện tối.',
          },
          {
            src: 'img/projects/example-1/register.png',
            alt: 'Màn hình đăng ký TTP Scada: tên tài khoản, email, số điện thoại, mật khẩu.',
          },
        ],
      },
      {
        id: 'home-detail',
        sectionTitle: 'Trang chủ & chi tiết',
        images: [
          {
            src: 'img/projects/example-1/home.png',
            alt: 'Màn hình chính TTP Scada: tổng quan thiết bị và dữ liệu.',
          },
          {
            src: 'img/projects/example-1/temp_detail.png',
            alt: 'Chi tiết nhiệt độ / cảm biến.',
          },
          {
            src: 'img/projects/example-1/button.png',
            alt: 'Điều khiển nhanh (nút bật/tắt thiết bị).',
          },
          {
            src: 'img/projects/example-1/settingDevice.png',
            alt: 'Cài đặt thông tin và tùy chọn thiết bị.',
          },
        ],
      },
      {
        id: 'settings',
        sectionTitle: 'Cài đặt ngưỡng',
        images: [
          {
            src: 'img/projects/example-1/settingtemp.png',
            alt: 'Cài đặt ngưỡng nhiệt độ.',
          },
          {
            src: 'img/projects/example-1/settingHumid.png',
            alt: 'Cài đặt ngưỡng độ ẩm.',
          },
          {
            src: 'img/projects/example-1/settingWarning.png',
            alt: 'Cài đặt cảnh báo.',
          },
        ],
      },
      {
        id: 'export',
        sectionTitle: 'Xuất dữ liệu & báo cáo',
        images: [
          {
            src: 'img/projects/example-1/exportTemp.png',
            alt: 'Xuất / báo cáo dữ liệu nhiệt độ.',
          },
          {
            src: 'img/projects/example-1/exportHumid.png',
            alt: 'Xuất / báo cáo dữ liệu độ ẩm.',
          },
          {
            src: 'img/projects/example-1/exportAlarm.png',
            alt: 'Xuất / báo cáo cảnh báo.',
          },
        ],
      },
      {
        id: 'config',
        sectionTitle: 'Cấu hình thiết bị & mạng',
        images: [
          {
            src: 'img/projects/example-1/configWifi.png',
            alt: 'Cấu hình kết nối Wi‑Fi.',
          },
          {
            src: 'img/projects/example-1/netcfg.png',
            alt: 'Cấu hình mạng / thiết bị.',
          },
        ],
      },
      {
        id: 'device-management',
        sectionTitle: 'Thêm & chia sẻ thiết bị',
        images: [
          {
            src: 'img/projects/example-1/addDevice.png',
            alt: 'Thêm thiết bị mới vào tài khoản.',
          },
          {
            src: 'img/projects/example-1/shareDevice.png',
            alt: 'Chia sẻ quyền truy cập thiết bị cho người dùng khác.',
          },
        ],
      },
      {
        id: 'profile',
        sectionTitle: 'Trang cá nhân',
        images: [
          {
            src: 'img/projects/example-1/profile.png',
            alt: 'Hồ sơ tài khoản.',
          },
          {
            src: 'img/projects/example-1/editUser.png',
            alt: 'Chỉnh sửa thông tin người dùng / đăng ký.',
          },
          {
            src: 'img/projects/example-1/editPassword.png',
            alt: 'Đổi mật khẩu.',
          },
        ],
      },
    ],
    uiCarouselPrevAria: 'Ảnh trước',
    uiCarouselNextAria: 'Ảnh sau',
    outcomeTitle: 'Kết quả',
    outcomeBody:
      'Hệ thống đã được bàn giao và vận hành ổn định trên Android, iOS và web, giúp khách hàng theo dõi nhiệt độ – độ ẩm 24/7, chủ động điều khiển thiết bị từ xa, hạn chế hư hỏng và tiết kiệm chi phí vận hành.',
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
      'This IoT solution targets customers who need to track temperature and humidity across multiple sites (warehouse, server room, factory floor, office). Users can view live data, configure alert thresholds, and control equipment remotely from the app or web.',
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
        text: ' Relay outputs to switch equipment automatically by threshold or manually.',
      },
      {
        strong: 'Alerts:',
        text: ' Min/max thresholds with notifications via app or email when values go out of range.',
      },
    ],
    techTitle: 'Technology stack',
    techTags: [
      'ESP32',
      'DHT22 sensors',
      'MQTTs / HTTPs API',
      'React (web)',
      'React Native (app)',
      'Node.js backend',
    ],
    techBody:
      'Edge hardware (sensor + relay) connects over Wi‑Fi and sends data to the server via MQTTs and OTA through https. The web dashboard and mobile app use the same API for visualization and control.',
    uiTitle: 'App & web UI',
    uiBody:
      'Web: sign-in, dashboard with temperature/humidity trends over time, device list, threshold settings, and relay control. App: home view by room or zone, per-sensor detail, and quick control actions.',
    uiGallerySections: [
      {
        id: 'login',
        sectionTitle: 'Login & register',
        images: [
          {
            src: 'img/projects/example-1/login.png',
            alt: 'TTP Scada login screen: email, password, dark theme.',
          },
          {
            src: 'img/projects/example-1/register.png',
            alt: 'TTP Scada registration: username, email, phone, password fields.',
          },
        ],
      },
      {
        id: 'home-detail',
        sectionTitle: 'Home & detail',
        images: [
          {
            src: 'img/projects/example-1/home.png',
            alt: 'TTP Scada home: device overview and readings.',
          },
          {
            src: 'img/projects/example-1/temp_detail.png',
            alt: 'Temperature / sensor detail view.',
          },
          {
            src: 'img/projects/example-1/button.png',
            alt: 'Quick control (device on/off).',
          },
          {
            src: 'img/projects/example-1/settingDevice.png',
            alt: 'Device settings and options.',
          },
        ],
      },
      {
        id: 'settings',
        sectionTitle: 'Threshold settings',
        images: [
          {
            src: 'img/projects/example-1/settingtemp.png',
            alt: 'Temperature threshold settings.',
          },
          {
            src: 'img/projects/example-1/settingHumid.png',
            alt: 'Humidity threshold settings.',
          },
          {
            src: 'img/projects/example-1/settingWarning.png',
            alt: 'Alert / warning settings.',
          },
        ],
      },
      {
        id: 'export',
        sectionTitle: 'Export & reports',
        images: [
          {
            src: 'img/projects/example-1/exportTemp.png',
            alt: 'Export or report temperature data.',
          },
          {
            src: 'img/projects/example-1/exportHumid.png',
            alt: 'Export or report humidity data.',
          },
          {
            src: 'img/projects/example-1/exportAlarm.png',
            alt: 'Export or report alarm history.',
          },
        ],
      },
      {
        id: 'config',
        sectionTitle: 'Device & network config',
        images: [
          {
            src: 'img/projects/example-1/configWifi.png',
            alt: 'Wi‑Fi configuration.',
          },
          {
            src: 'img/projects/example-1/netcfg.png',
            alt: 'Network / device configuration.',
          },
        ],
      },
      {
        id: 'device-management',
        sectionTitle: 'Add & share devices',
        images: [
          {
            src: 'img/projects/example-1/addDevice.png',
            alt: 'Add a new device to the account.',
          },
          {
            src: 'img/projects/example-1/shareDevice.png',
            alt: 'Share device access with other users.',
          },
        ],
      },
      {
        id: 'profile',
        sectionTitle: 'Profile',
        images: [
          {
            src: 'img/projects/example-1/editUser.png',
            alt: 'User profile / registration details.',
          },
          {
            src: 'img/projects/example-1/editPassword.png',
            alt: 'Change password.',
          },
          {
            src: 'img/projects/example-1/profile.png',
            alt: 'Account profile screen.',
          },
        ],
      },
    ],
    uiCarouselPrevAria: 'Previous image',
    uiCarouselNextAria: 'Next image',
    outcomeTitle: 'Outcome',
    outcomeBody:
      'The system was delivered and runs reliably on Android, iOS, and the web—24/7 temperature and humidity monitoring, proactive remote control, lower equipment risk, and reduced operating cost.',
  },
};
