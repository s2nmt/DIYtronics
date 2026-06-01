import type { Lang } from '../i18n/translations';
import type { ProductDetailStrings } from './productDetailStrings';

export const beagleboneBlackCapeProduct: Record<Lang, ProductDetailStrings> = {
  en: {
    documentTitle: 'BeagleBone Black Cape | Gemify',
    productTitle: 'BeagleBone Black Cape',
    introHeading: 'Introduction',
    introBody:
      'An educational research project combining a custom BeagleBone Black expansion cape with embedded Linux built using the Yocto Project. The cape adds a TFT7789 display, momentary push switches (press & release), LEDs, a DHT11 sensor, an MPU6050 IMU, and two UART ports—so you can practice drivers, device tree, and userspace apps on real peripherals.',
    specsHeading: 'Hardware & platform',
    specLines: [
      'Display: TFT7789 (SPI)',
      'Input: Momentary push switches (press & release)',
      'Indicators: LEDs',
      'Temperature & humidity: DHT11',
      'Motion sensor: MPU6050 (6-axis IMU, I2C)',
      'Serial: 2× UART',
      'Host board: BeagleBone Black (AM335x)',
      'OS build: Yocto Project / Poky (custom image)',
    ],
    detailsHeading: 'Project details',
    detailsBody:
      'This is a hands-on learning project for embedded Linux and Yocto—not a commercial product. Work includes cape schematic/PCB design, device tree overlays for the TFT7789 panel, DHT11, MPU6050, momentary switch GPIO/LEDs, and UART nodes, plus building a minimal Linux image and demo apps (UI on the display, sensor readouts, UART tests). Documentation is shared for students and makers learning BSP bring-up on BeagleBone.',
    galleryHeading: 'Gallery',
    sidebarTitle: 'Gemify',
    sidebarDesc:
      'Handcrafted electronics, IoT & embedded systems for makers and engineers. Sharing open-source projects and tutorials.',
    sidebarAbout: 'About Gemify',
  },
  vi: {
    documentTitle: 'BeagleBone Black Cape | Gemify',
    productTitle: 'BeagleBone Black Cape',
    introHeading: 'Giới thiệu',
    introBody:
      'Dự án nghiên cứu học tập kết hợp cape mở rộng tự thiết kế cho BeagleBone Black với embedded Linux xây dựng bằng Yocto Project. Cape tích hợp màn hình TFT7789, công tắc nhấn nhả, LED, cảm biến DHT11, IMU MPU6050 và 2 cổng UART—phù hợp để thực hành driver, device tree và ứng dụng userspace trên phần cứng thật.',
    specsHeading: 'Phần cứng & nền tảng',
    specLines: [
      'Màn hình: TFT7789 (SPI)',
      'Nút nhấn: Công tắc nhấn nhả (momentary)',
      'Đèn báo: LED',
      'Nhiệt độ & độ ẩm: DHT11',
      'Cảm biến chuyển động: MPU6050 (IMU 6 trục, I2C)',
      'Giao tiếp: 2× UART',
      'Board chính: BeagleBone Black (AM335x)',
      'Hệ điều hành: Yocto Project / Poky (image tùy chỉnh)',
    ],
    detailsHeading: 'Chi tiết dự án',
    detailsBody:
      'Đây là dự án học tập về embedded Linux và Yocto, không phải sản phẩm thương mại. Nội dung gồm thiết kế schematic/PCB cape, device tree overlay cho màn TFT7789, DHT11, MPU6050, công tắc nhấn nhả/LED GPIO và UART, build image Linux tối giản cùng app demo (giao diện trên màn hình, đọc cảm biến, thử UART). Tài liệu được chia sẻ cho sinh viên và maker làm quen BSP bring-up trên BeagleBone.',
    galleryHeading: 'Thư viện ảnh',
    sidebarTitle: 'Gemify',
    sidebarDesc:
      'Gemify Technology, IoT & hệ thống nhúng cho người dùng và developer. Chia sẻ dự án mã nguồn mở và hướng dẫn sử dụng.',
    sidebarAbout: 'Về Gemify',
  },
};
