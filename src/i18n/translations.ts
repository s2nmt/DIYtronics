export type Lang = 'en' | 'vi';

/** Strings used by the React app only (legacy HTML keeps its own copy in script.js where needed). */
export const translations: Record<Lang, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'hero.title': 'Gemify Technology',
    'hero.subtitle':
      'Discover modern technology devices and AIoT systems, professionally customized for each customer with precision.',
    'products.title': 'Featured Products',
    'products.micromouse.title': 'Micromouse',
    'products.micromouse.desc': 'A compact and fast micromouse robot for maze solving competitions.',
    'products.micromouse.feature1': 'High-speed line following',
    'products.micromouse.feature2': 'Precise sensor array',
    'products.micromouse.feature3': 'Customizable firmware',
    'products.rfid.title': 'RFID & NFC Reader - IoT Device',
    'products.rfid.desc':
      'An IoT device for reading RFID and NFC tags, perfect for smart access and automation.',
    'products.rfid.feature1': 'Supports RFID & NFC',
    'products.rfid.feature2': 'WiFi connectivity',
    'products.rfid.feature3': 'Easy integration',
    'products.translate.title': 'Bilingual Book Reader  (Android)',
    'products.translate.desc':
      'A bilingual book-reading app that helps users read and understand books in two languages.',
    'products.buy': 'Buy Now',
    'rfid.productTitle': 'Smart RFID/NFC reader device',
    'rfid.introHeading': 'Introduction',
    'rfid.introBody':
      'This is the smart RFID/NFC reader device that sends data through WiFi and RS485—suitable for many applications.',
    'rfid.specsHeading': 'Technical Specifications',
    'rfid.labelProcessor': 'Processor',
    'rfid.labelConnectivity': 'Connectivity',
    'rfid.labelPower': 'Power',
    'rfid.labelDimensions': 'Dimensions',
    'rfid.powerValue': 'Adapter 12–24V',
    'rfid.detailsHeading': 'Project Details',
    'rfid.detailsBody':
      'This smart RFID/NFC reader sends data over WiFi and RS485. The device includes a reader, buzzer, and status LED. You can integrate it into your system easily.',
    'rfid.galleryHeading': 'Gallery',
    'rfid.sidebarTitle': 'Gemify',
    'rfid.sidebarDesc':
      'Handcrafted electronics, IoT & embedded systems for makers and engineers. Sharing open-source projects and tutorials.',
    'rfid.sidebarAbout': 'About Gemify',
    'about.title': 'About Gemify',
    'about.desc1':
      'We are passionate about creating modern technology products from hardware to software that combine functionality with customer-specific design. Each product is custom-designed and tested to ensure the highest quality.',
    'about.desc2':
      'From simple applications to complex AIoT systems, modern design that is easy to understand, easy to use, and expandable.',
    'about.stats.products': 'Products Created',
    'about.stats.support': 'Support',
    'services.title': 'Our Services',
    'services.hardware.title': 'Hardware Development',
    'services.hardware.desc':
      'Outsource hardware design and firmware development services for custom electronic devices and IoT solutions.',
    'services.software.title': 'IoT Software Design',
    'services.software.desc':
      'Outsource IoT software solutions including app, website, and server development.',
    'services.products.title': 'Technology Products & IoT Platforms',
    'services.products.desc': 'Providing technology products and IoT platforms for your business needs.',
    'services.viewProjects': "View the projects we've completed",
    'projects.pageTitle': 'Completed Projects',
    'projects.subtitle': "Projects we've delivered for our clients.",
    'projects.readMore': 'Read more →',
    'outsource.project1.title': 'Remote Temperature & Humidity Monitoring & Control',
    'outsource.project1.desc':
      'System for monitoring and controlling temperature and humidity remotely via mobile app and web dashboard. Real-time data, alerts and remote control.',
    'outsource.project2.title': 'Smart Access Control System',
    'outsource.project2.desc':
      'Mobile app and RFID/NFC readers for door access, visitor logs and remote management for offices and buildings.',
    'contact.desc':
      "Interested in a custom project or have questions about my products? I'd love to hear from you!",
    'footer.tagline': "Gemify Technology – Let's Build Something Amazing",
    'footer.follow': 'Follow Me',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Gemify. All rights reserved.',
  },
  vi: {
    'nav.home': 'Trang chủ',
    'nav.products': 'Sản phẩm',
    'nav.about': 'Giới thiệu',
    'nav.services': 'Dịch vụ',
    'nav.blog': 'Bài viết',
    'hero.title': 'Gemify Technology',
    'hero.subtitle':
      'Khám phá các thiết bị công nghệ, hệ thống AIoT hiện đại được thiết kế chuyên môn hóa đối với từng khách hàng với độ tỉ mỉ, chính xác cao.',
    'products.title': 'Sản phẩm nổi bật',
    'products.micromouse.title': 'Micromouse',
    'products.micromouse.desc': 'Robot micromouse nhỏ gọn và nhanh chóng cho các cuộc thi giải mê cung.',
    'products.micromouse.feature1': 'Theo dõi đường cao tốc',
    'products.micromouse.feature2': 'Mảng cảm biến chính xác',
    'products.micromouse.feature3': 'Firmware tùy chỉnh',
    'products.rfid.title': 'Máy đọc RFID & NFC - Thiết bị IoT',
    'products.rfid.desc':
      'Thiết bị IoT để đọc thẻ RFID và NFC, hoàn hảo cho truy cập thông minh và tự động hóa.',
    'products.rfid.feature1': 'Hỗ trợ RFID & NFC',
    'products.rfid.feature2': 'Kết nối WiFi',
    'products.rfid.feature3': 'Tích hợp dễ dàng',
    'products.translate.title': 'Ứng dụng Dịch thuật Mini (Android)',
    'products.translate.desc': 'Ứng dụng Android nhẹ cho dịch thuật tức thì khi di chuyển.',
    'products.buy': 'Mua ngay',
    'rfid.productTitle': 'Thiết bị đọc thẻ RFID/NFC thông minh',
    'rfid.introHeading': 'Giới thiệu',
    'rfid.introBody':
      'Đây là thiết bị đọc thẻ RFID/NFC thông minh gửi dữ liệu qua WiFi và RS485, phù hợp cho nhiều ứng dụng.',
    'rfid.specsHeading': 'Thông số kỹ thuật',
    'rfid.labelProcessor': 'Vi xử lý',
    'rfid.labelConnectivity': 'Kết nối',
    'rfid.labelPower': 'Nguồn điện',
    'rfid.labelDimensions': 'Kích thước',
    'rfid.powerValue': 'Adapter 12–24V',
    'rfid.detailsHeading': 'Chi tiết dự án',
    'rfid.detailsBody':
      'Thiết bị đọc RFID/NFC thông minh gửi dữ liệu qua WiFi và RS485. Gồm đầu đọc, buzzer và LED tín hiệu. Có thể tích hợp vào hệ thống của bạn dễ dàng.',
    'rfid.galleryHeading': 'Thư viện ảnh',
    'rfid.sidebarTitle': 'Gemify',
    'rfid.sidebarDesc':
      'Gemify Technology, IoT & hệ thống nhúng cho người dùng và developer. Chia sẻ dự án mã nguồn mở và hướng dẫn sử dụng.',
    'rfid.sidebarAbout': 'Về Gemify',
    'about.title': 'Giới thiệu Gemify',
    'about.desc1':
      'Chúng tôi đam mê tạo ra các sản phẩm công nghệ từ phần cứng đến phần mềm hiện đại kết hợp chức năng với thiết kế cụ thể hóa từng khách hàng. Mỗi sản phẩm được thiết kế riêng và kiểm tra để đảm bảo chất lượng cao nhất.',
    'about.desc2':
      'Từ các ứng dụng đơn giản đến hệ thống AIoT phức tạp, thiết kế hiện đại dễ hiểu dễ sử dụng và mở rộng.',
    'about.stats.products': 'Sản phẩm đã tạo',
    'about.stats.support': 'Hỗ trợ',
    'services.title': 'Các dịch vụ chúng tôi cung cấp',
    'services.hardware.title': 'Phát triển phần cứng',
    'services.hardware.desc':
      'Thiết kế phần cứng và phát triển firmware cho các thiết bị điện tử tùy chỉnh và giải pháp IoT.',
    'services.software.title': 'Thiết kế phần mềm IoT',
    'services.software.desc':
      'Giải pháp thiết kế, phát triển phần mềm IoT bao gồm app, website và server,..',
    'services.products.title': 'Sản phẩm công nghệ & Platform IoT',
    'services.products.desc': 'Cung cấp các sản phẩm công nghệ và các platform IoT cho nhu cầu của bạn.',
    'services.viewProjects': 'Xem các dự án đã hoàn thành',
    'projects.pageTitle': 'Dự án đã hoàn thành',
    'projects.subtitle': 'Các dự án chúng tôi đã bàn giao cho khách hàng.',
    'projects.readMore': 'Xem thêm →',
    'outsource.project1.title': 'Giám sát & điều khiển nhiệt độ, độ ẩm từ xa qua App & Website',
    'outsource.project1.desc':
      'Hệ thống giám sát và điều khiển nhiệt độ, độ ẩm từ xa thông qua app di động và website. Dữ liệu thời gian thực, cảnh báo và điều khiển từ xa.',
    'outsource.project2.title': 'Hệ thống kiểm soát ra vào thông minh',
    'outsource.project2.desc':
      'App di động và đầu đọc RFID/NFC cho cửa ra vào, nhật ký khách và quản lý từ xa cho văn phòng, tòa nhà.',
    'contact.desc':
      'Quan tâm đến một dự án tùy chỉnh hoặc có câu hỏi về sản phẩm của tôi? Tôi rất muốn nghe từ bạn!',
    'footer.tagline': 'Gemify Technology – Hãy cùng xây dựng điều gì đó tuyệt vời',
    'footer.follow': 'Theo dõi tôi',
    'footer.contact': 'Liên hệ',
    'footer.copyright': '© 2025 Gemify. Tất cả quyền được bảo lưu.',
  },
};
