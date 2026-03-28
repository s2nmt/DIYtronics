import type { Lang } from '../i18n/translations';

export type ProductDetailStrings = {
  documentTitle: string;
  productTitle: string;
  introHeading: string;
  introBody: string;
  specsHeading: string;
  specLines: string[];
  detailsHeading: string;
  detailsBody: string;
  galleryHeading: string;
  sidebarTitle: string;
  sidebarDesc: string;
  sidebarAbout: string;
};

export const micromouseProduct: Record<Lang, ProductDetailStrings> = {
  en: {
    documentTitle: 'Micromouse | Gemify',
    productTitle: 'Micromouse robot',
    introHeading: 'Introduction',
    introBody:
      'Micromouse is a small autonomous robot designed to solve mazes. It uses sensors to detect walls and algorithms to find the optimal path from start to finish. Perfect for robotics competitions and educational purposes.',
    specsHeading: 'Technical Specifications',
    specLines: [
      'Processor: ESP32',
      'Connectivity: WiFi, Bluetooth',
      'Display: fb7789',
      'Power: Rechargeable LiPo battery',
      'Dimensions: 50×50×20mm',
    ],
    detailsHeading: 'Project Details',
    detailsBody:
      'This product is developed for students to challenge themselves in science competitions. The micromouse robot features advanced maze-solving algorithms and precise sensor technology. Students can learn robotics, programming, and problem-solving skills while participating in competitions. Open-source code and detailed documentation are provided for educational purposes.',
    galleryHeading: 'Gallery',
    sidebarTitle: 'Gemify',
    sidebarDesc:
      'Handcrafted electronics, IoT & embedded systems for makers and engineers. Sharing open-source projects and tutorials.',
    sidebarAbout: 'About Gemify',
  },
  vi: {
    documentTitle: 'Micromouse | Gemify',
    productTitle: 'Micromouse robot',
    introHeading: 'Giới thiệu',
    introBody:
      'Micromouse là một robot tự động nhỏ được thiết kế để giải mê cung. Nó sử dụng các cảm biến để phát hiện tường và thuật toán để tìm đường đi tối ưu từ điểm bắt đầu đến đích. Hoàn hảo cho các cuộc thi robot và mục đích giáo dục.',
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
      'Sản phẩm này được phát triển cho học sinh sinh viên thử sức trong các cuộc thi khoa học. Robot micromouse có các thuật toán giải mê cung tiên tiến và công nghệ cảm biến chính xác. Học sinh có thể học về robot, lập trình và kỹ năng giải quyết vấn đề khi tham gia các cuộc thi. Mã nguồn mở và tài liệu chi tiết được cung cấp cho mục đích giáo dục.',
    galleryHeading: 'Thư viện ảnh',
    sidebarTitle: 'Gemify',
    sidebarDesc:
      'Gemify Technology, IoT & hệ thống nhúng cho người dùng và developer. Chia sẻ dự án mã nguồn mở và hướng dẫn sử dụng.',
    sidebarAbout: 'Về Gemify',
  },
};
