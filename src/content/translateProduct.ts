import type { Lang } from '../i18n/translations';
import type { ProductDetailStrings } from './micromouseProduct';

export const translateProduct: Record<Lang, ProductDetailStrings> = {
  en: {
    documentTitle: 'Bilingual Book Reader | Gemify',
    productTitle: 'Bilingual Book Reader (Android)',
    introHeading: 'Introduction',
    introBody:
      'A bilingual book-reading app for Android that helps you read and compare two languages side by side—ideal for language learners and readers who work with translated editions.',
    specsHeading: 'Technical Specifications',
    specLines: [
      'Platform: Android',
      'Layout: Side-by-side bilingual reading',
      'Typography: Adjustable size and spacing',
      'Target: Language learners and dual-language readers',
      'Extensibility: Open components for developers',
    ],
    detailsHeading: 'Project Details',
    detailsBody:
      'Built for readers who want a compact, customizable experience. The app focuses on smooth navigation between languages and optional open components for developers who want to extend it.',
    galleryHeading: 'Gallery',
    sidebarTitle: 'Gemify',
    sidebarDesc:
      'Handcrafted electronics, IoT & embedded systems for makers and engineers. Sharing open-source projects and tutorials.',
    sidebarAbout: 'About Gemify',
  },
  vi: {
    documentTitle: 'Ứng dụng dịch | Gemify',
    productTitle: 'Ứng dụng dịch thông minh trên điện thoại android',
    introHeading: 'Giới thiệu',
    introBody:
      'Đây là một đồng hồ để bàn mini dùng để trang trí cho góc làm việc / học tập trên nên đẹp hơn. Sản phẩm dành cho người dùng thông thường hoặc có thể phát triển tùy ý với mã nguồn mở.',
    specsHeading: 'Thông số kỹ thuật',
    specLines: [
      'Vi xử lý: ESP32',
      'Kết nối: WiFi, Bluetooth',
      'Màn hình: fb7789',
      'Nguồn điện: Pin LiPo sạc lại được',
      'Kích thước: 50×50×20mm',
    ],
    detailsHeading: 'Chi tiết dự án',
    detailsBody:
      'Đây là một sản phẩm được tạo ra với mục đích trang trí góc làm việc/học tập. Thiết bị hiển thị thông tin về thời gian hiện tại và thời tiết theo khu vực bạn sinh sống. Người dùng có thể tùy chỉnh giao diện theo ý muốn. Ngoài ra, chúng tôi cung cấp mã nguồn mở để các nhà phát triển có thể sử dụng và phát triển trên nền tảng Arduino IDE.',
    galleryHeading: 'Thư viện ảnh',
    sidebarTitle: 'Gemify',
    sidebarDesc:
      'Gemify Technology, IoT & hệ thống nhúng cho người dùng và developer. Chia sẻ dự án mã nguồn mở và hướng dẫn sử dụng.',
    sidebarAbout: 'Về Gemify',
  },
};
