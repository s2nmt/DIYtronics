import { useLanguage } from '../context/LanguageContext';
import { ProductDetailTemplate } from '../components/ProductDetailTemplate';
import { translateProduct } from '../content/translateProduct';

export function TranslateProductPage() {
  const { language } = useLanguage();
  return (
    <ProductDetailTemplate
      strings={translateProduct[language]}
      introImage={{ src: 'img/translate.jpg', width: 'third' }}
      gallery={{ kind: 'video', src: 'img/translatevideo.mp4' }}
    />
  );
}
