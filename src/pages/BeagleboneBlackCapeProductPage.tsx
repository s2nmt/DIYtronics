import { useLanguage } from '../context/LanguageContext';
import { ProductDetailTemplate } from '../components/ProductDetailTemplate';
import { beagleboneBlackCapeProduct } from '../content/beagleboneBlackCapeProduct';

export function BeagleboneBlackCapeProductPage() {
  const { language } = useLanguage();
  return (
    <ProductDetailTemplate
      strings={beagleboneBlackCapeProduct[language]}
      introImage={{ src: 'img/projects/beaglebone-black-cape/cover.png', width: 'full' }}
      gallery={null}
      sidebarIcon="fab fa-linux"
    />
  );
}
