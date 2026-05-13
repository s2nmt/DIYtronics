import type { Lang } from '../i18n/translations';

export type TemperatureHumidityMonitoringUiGallerySection = {
  id: string;
  sectionTitle: string;
  images: { src: string; alt: string }[];
};

export type TemperatureHumidityMonitoringArticleCopy = {
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
  /** Grouped screenshots for app and web flows */
  uiGallerySections: TemperatureHumidityMonitoringUiGallerySection[];
  uiCarouselPrevAria: string;
  uiCarouselNextAria: string;
  outcomeTitle: string;
  outcomeBody: string;
  bottomImage?: { src: string; alt: string };
};

const temperatureHumidityMonitoringAppImage = (fileName: string) =>
  `img/projects/temperature-humidity-monitoring/app/${fileName}`;
const temperatureHumidityMonitoringWebImage = (fileName: string) =>
  `img/projects/temperature-humidity-monitoring/web/${fileName}`;
const temperatureHumidityMonitoringProjectImage = (fileName: string) =>
  `img/projects/temperature-humidity-monitoring/${fileName}`;

export const projectArticleTemperatureHumidityMonitoring: Record<Lang, TemperatureHumidityMonitoringArticleCopy> = {
  vi: {
    documentTitle: 'Giám sát & điều khiển nhiệt độ, độ ẩm từ xa | Gemify Projects',
    back: '← Quay lại Dự án',
    title: 'Giám sát & điều khiển nhiệt độ, độ ẩm từ xa',
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
    techTitle: '',
    techTags: [],
    techBody: '',
    uiTitle: 'Giao diện App & Web',
    uiBody:
      'Web: trang đăng nhập, dashboard với đồ thị nhiệt độ/độ ẩm theo thời gian, danh sách thiết bị, cài đặt ngưỡng và điều khiển relay. App: màn hình chính hiển thị các phòng/zone, chi tiết từng điểm đo và nút điều khiển nhanh.',
    uiGallerySections: [
      {
        id: 'app-auth',
        sectionTitle: 'App: Đăng nhập & đăng ký',
        images: [
          {
            src: temperatureHumidityMonitoringAppImage('login_app.jpg'),
            alt: 'Màn hình đăng nhập TTP Scada: email, mật khẩu, giao diện tối.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('register_app.jpg'),
            alt: 'Màn hình đăng ký TTP Scada: tên tài khoản, email, số điện thoại, mật khẩu.',
          },
        ],
      },
      {
        id: 'app-user',
        sectionTitle: 'App: Người dùng',
        images: [
          {
            src: temperatureHumidityMonitoringAppImage('home_app.jpg'),
            alt: 'Màn hình chính TTP Scada: tổng quan thiết bị và dữ liệu.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('menu_home_app.jpg'),
            alt: 'Menu điều hướng trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('home_ota_app.jpg'),
            alt: 'Màn hình trang chủ với tính năng OTA trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('temp_detail_app.jpg'),
            alt: 'Chi tiết nhiệt độ / cảm biến.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('humid_app.jpg'),
            alt: 'Chi tiết độ ẩm trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('chart_detail_app.jpg'),
            alt: 'Biểu đồ chi tiết dữ liệu trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('button_app.jpg'),
            alt: 'Điều khiển nhanh (nút bật/tắt thiết bị).',
          },
          {
            src: temperatureHumidityMonitoringAppImage('lamp_app.jpg'),
            alt: 'Điều khiển đèn / relay trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('notification_app.jpg'),
            alt: 'Danh sách thông báo trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('alarm_app.jpg'),
            alt: 'Màn hình cảnh báo trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('set_threshold_app.jpg'),
            alt: 'Cài đặt ngưỡng cảnh báo trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('setting_app.jpg'),
            alt: 'Màn hình cài đặt trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('infor_app.jpg'),
            alt: 'Thông tin tài khoản trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('password_app.jpg'),
            alt: 'Đổi mật khẩu trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('ota_app.jpg'),
            alt: 'Cập nhật OTA thiết bị trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('config_app.jpg'),
            alt: 'Cấu hình thiết bị trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('share_device_app.jpg'),
            alt: 'Chia sẻ quyền truy cập thiết bị cho người dùng khác.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('unregister_app.jpg'),
            alt: 'Hủy đăng ký / gỡ thiết bị khỏi tài khoản.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('export_data_app.jpg'),
            alt: 'Xuất dữ liệu từ app.',
          },
        ],
      },
      {
        id: 'app-add-device',
        sectionTitle: 'App: Thêm thiết bị mới',
        images: [
          {
            src: temperatureHumidityMonitoringAppImage('config_wifi_app.jpg'),
            alt: 'Cấu hình Wi‑Fi trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('scan_wifi_app.jpg'),
            alt: 'Quét mạng Wi‑Fi trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('list_wifi_app.jpg'),
            alt: 'Danh sách Wi‑Fi trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('connect_wifi_app.jpg'),
            alt: 'Kết nối Wi‑Fi trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('connect_device_app.jpg'),
            alt: 'Kết nối thiết bị với app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('add_device_app.jpg'),
            alt: 'Bắt đầu thêm thiết bị mới trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('add_name_app.jpg'),
            alt: 'Đặt tên thiết bị khi thêm mới trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('add_device_to_server.jpg'),
            alt: 'Thêm thiết bị lên server từ app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('add_success_return_home.jpg'),
            alt: 'Thêm thiết bị thành công và quay về trang chủ.',
          },
        ],
      },
      {
        id: 'app-alarm',
        sectionTitle: 'App: Cảnh báo',
        images: [
          {
            src: temperatureHumidityMonitoringAppImage('home_alarm_app.jpg'),
            alt: 'Màn hình trang chủ với trạng thái cảnh báo trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('notification_in_app.jpg'),
            alt: 'Chi tiết thông báo trong app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('alarm_popup_app.jpg'),
            alt: 'Cửa sổ cảnh báo bật lên trên app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('email_alarm_app.jpg'),
            alt: 'Cài đặt cảnh báo qua email trên app.',
          },
        ],
      },
      {
        id: 'web-auth',
        sectionTitle: 'Web: Đăng nhập & đăng ký',
        images: [
          {
            src: temperatureHumidityMonitoringWebImage('web_login.png'),
            alt: 'Màn hình đăng nhập trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('register.png'),
            alt: 'Màn hình đăng ký trên web.',
          },
        ],
      },
      {
        id: 'web-user',
        sectionTitle: 'Web: Người dùng',
        images: [
          {
            src: temperatureHumidityMonitoringWebImage('home_user.jpg'),
            alt: 'Dashboard người dùng trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('update_user.png'),
            alt: 'Trang cap nhat OTA thiet bi tren web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('temp_detail.jpg'),
            alt: 'Chi tiết nhiệt độ trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('humid_detail.jpg'),
            alt: 'Chi tiết độ ẩm trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('export_detail.jpg'),
            alt: 'Xuất dữ liệu / báo cáo trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('setthreshold.jpg'),
            alt: 'Thiết lập ngưỡng cảnh báo trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('alarm.jpg'),
            alt: 'Trang cảnh báo trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('button_detail.jpg'),
            alt: 'Chi tiết nút điều khiển trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('lamp_detail.jpg'),
            alt: 'Chi tiết đèn / relay trên web.',
          },

          {
            src: temperatureHumidityMonitoringWebImage('setting_detail.jpg'),
            alt: 'Chi tiết cài đặt trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('notification_user.jpg'),
            alt: 'Trang thong bao cua nguoi dung tren web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('information_user.jpg'),
            alt: 'Trang thong tin tai khoan cua nguoi dung tren web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('menu_user.jpg'),
            alt: 'Menu người dùng trên web.',
          },
        ],
      },
      {
        id: 'web-admin',
        sectionTitle: 'Web: Quản trị',
        images: [
          {
            src: temperatureHumidityMonitoringWebImage('menu_admin.jpg'),
            alt: 'Menu quản trị trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_home.jpg'),
            alt: 'Trang tổng quan quản trị trên web.',
          },
          
          {
            src: temperatureHumidityMonitoringWebImage('admin_device.jpg'),
            alt: 'Trang thiết bị trong khu vực quản trị.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_device_detail.jpg'),
            alt: 'Chi tiết thiết bị trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_device_alarm_content.jpg'),
            alt: 'Nội dung cảnh báo của thiết bị trên web.',
          },

          {
            src: temperatureHumidityMonitoringWebImage('admin_seting.jpg'),
            alt: 'Trang cài đặt quản trị trên web.',
          },

          {
            src: temperatureHumidityMonitoringWebImage('admin_manage_device.jpg'),
            alt: 'Danh sách quản lý thiết bị trên web.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_device_inffo.jpg'),
            alt: 'Thông tin thiết bị trên web.',
          },
        ],
      },
    ],
    uiCarouselPrevAria: 'Ảnh trước',
    uiCarouselNextAria: 'Ảnh sau',
    outcomeTitle: 'Kết quả',
    outcomeBody:
      'Hệ thống đã được bàn giao và vận hành ổn định trên Android, iOS và web, giúp khách hàng theo dõi nhiệt độ – độ ẩm 24/7, chủ động điều khiển thiết bị từ xa, hạn chế hư hỏng và tiết kiệm chi phí vận hành.',
    bottomImage: {
      src: temperatureHumidityMonitoringProjectImage('realdevice.png'),
      alt: 'Thiết bị thực tế đang hoạt động cùng app giám sát nhiệt độ và độ ẩm.',
    },
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
    techTitle: '',
    techTags: [],
    techBody: '',
    uiTitle: 'App & web UI',
    uiBody:
      'Web: sign-in, dashboard with temperature/humidity trends over time, device list, threshold settings, and relay control. App: home view by room or zone, per-sensor detail, and quick control actions.',
    uiGallerySections: [
      {
        id: 'app-auth',
        sectionTitle: 'App: Login & register',
        images: [
          {
            src: temperatureHumidityMonitoringAppImage('login_app.jpg'),
            alt: 'TTP Scada login screen: email, password, dark theme.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('register_app.jpg'),
            alt: 'TTP Scada registration: username, email, phone, password fields.',
          },
        ],
      },
      {
        id: 'app-user',
        sectionTitle: 'App: User',
        images: [
          {
            src: temperatureHumidityMonitoringAppImage('home_app.jpg'),
            alt: 'TTP Scada home: device overview and readings.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('menu_home_app.jpg'),
            alt: 'App navigation menu.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('home_ota_app.jpg'),
            alt: 'Home screen showing OTA features in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('temp_detail_app.jpg'),
            alt: 'Temperature / sensor detail view.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('humid_app.jpg'),
            alt: 'Humidity detail view in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('chart_detail_app.jpg'),
            alt: 'Detailed data chart in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('button_app.jpg'),
            alt: 'Quick control (device on/off).',
          },
          {
            src: temperatureHumidityMonitoringAppImage('lamp_app.jpg'),
            alt: 'Lamp or relay control in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('setting_app.jpg'),
            alt: 'Settings screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('infor_app.jpg'),
            alt: 'Account information screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('password_app.jpg'),
            alt: 'Change password screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('ota_app.jpg'),
            alt: 'OTA device update screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('notification_app.jpg'),
            alt: 'Notification list in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('alarm_app.jpg'),
            alt: 'Alarm screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('set_threshold_app.jpg'),
            alt: 'Threshold settings in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('config_app.jpg'),
            alt: 'Device configuration screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('share_device_app.jpg'),
            alt: 'Share device access with another user from the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('unregister_app.jpg'),
            alt: 'Unregister or remove a device from the account.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('export_data_app.jpg'),
            alt: 'Export data from the app.',
          },
        ],
      },
      {
        id: 'app-add-device',
        sectionTitle: 'App: Add new device',
        images: [
          {
            src: temperatureHumidityMonitoringAppImage('config_wifi_app.jpg'),
            alt: 'Wi-Fi setup screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('scan_wifi_app.jpg'),
            alt: 'Wi-Fi scanning screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('list_wifi_app.jpg'),
            alt: 'Wi-Fi list screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('connect_wifi_app.jpg'),
            alt: 'Wi‑Fi connection screen in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('connect_device_app.jpg'),
            alt: 'Connect device flow in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('add_device_app.jpg'),
            alt: 'Start adding a new device in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('add_name_app.jpg'),
            alt: 'Set the device name while adding it in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('add_device_to_server.jpg'),
            alt: 'Add the device to the server from the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('add_success_return_home.jpg'),
            alt: 'Device added successfully and returned to the home screen.',
          },
        ],
      },
      {
        id: 'app-alarm',
        sectionTitle: 'App: Alarm',
        images: [
          {
            src: temperatureHumidityMonitoringAppImage('home_alarm_app.jpg'),
            alt: 'Home screen showing device alarm status in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('notification_in_app.jpg'),
            alt: 'Notification detail inside the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('alarm_popup_app.jpg'),
            alt: 'Alarm popup in the app.',
          },
          {
            src: temperatureHumidityMonitoringAppImage('email_alarm_app.jpg'),
            alt: 'Email alarm settings in the app.',
          },
        ],
      },
      {
        id: 'web-auth',
        sectionTitle: 'Web: Login & register',
        images: [
          {
            src: temperatureHumidityMonitoringWebImage('web_login.png'),
            alt: 'Web login screen.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('register.png'),
            alt: 'Web registration screen.',
          },
        ],
      },
      {
        id: 'web-user',
        sectionTitle: 'Web: User',
        images: [
          {
            src: temperatureHumidityMonitoringWebImage('home_user.jpg'),
            alt: 'User dashboard on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('update_user.png'),
            alt: 'OTA device update page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('temp_detail.jpg'),
            alt: 'Temperature detail view on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('humid_detail.jpg'),
            alt: 'Humidity detail view on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('export_detail.jpg'),
            alt: 'Export or reporting page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('setthreshold.jpg'),
            alt: 'Threshold setup page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('alarm.jpg'),
            alt: 'Alarm page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('button_detail.jpg'),
            alt: 'Button control detail on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('lamp_detail.jpg'),
            alt: 'Lamp or relay control detail on the web app.',
          },

          {
            src: temperatureHumidityMonitoringWebImage('setting_detail.jpg'),
            alt: 'Settings detail page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('notification_user.jpg'),
            alt: 'User notifications page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('information_user.jpg'),
            alt: 'User account information page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('menu_user.jpg'),
            alt: 'User menu on the web app.',
          },
        ],
      },
      {
        id: 'web-admin',
        sectionTitle: 'Web: Admin',
        images: [
          {
            src: temperatureHumidityMonitoringWebImage('menu_admin.jpg'),
            alt: 'Admin menu on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_home.jpg'),
            alt: 'Admin dashboard home page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_device.jpg'),
            alt: 'Admin device page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_device_detail.jpg'),
            alt: 'Device detail page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_device_alarm_content.jpg'),
            alt: 'Device alarm content page on the web app.',
          },

          {
            src: temperatureHumidityMonitoringWebImage('admin_seting.jpg'),
            alt: 'Admin settings page on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_manage_device.jpg'),
            alt: 'Device management list on the web app.',
          },
          {
            src: temperatureHumidityMonitoringWebImage('admin_device_inffo.jpg'),
            alt: 'Device information page on the web app.',
          },
        ],
      },
    ],
    uiCarouselPrevAria: 'Previous image',
    uiCarouselNextAria: 'Next image',
    outcomeTitle: 'Outcome',
    outcomeBody:
      'The system was delivered and runs reliably on Android, iOS, and the web—24/7 temperature and humidity monitoring, proactive remote control, lower equipment risk, and reduced operating cost.',
    bottomImage: {
      src: temperatureHumidityMonitoringProjectImage('realdevice.png'),
      alt: 'Real device running alongside the temperature and humidity monitoring app.',
    },
  },
};

