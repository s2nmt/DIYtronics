import { useLanguage } from '../context/LanguageContext';
import { ProductDetailTemplate } from '../components/ProductDetailTemplate';
import { micromouseProduct } from '../content/micromouseProduct';

export function MicromouseProductPage() {
  const { language } = useLanguage();
  return (
    <ProductDetailTemplate
      strings={micromouseProduct[language]}
      introImage={{ src: 'img/micromouse.jpg', width: 'half' }}
      gallery={null}
    />
  );
}
