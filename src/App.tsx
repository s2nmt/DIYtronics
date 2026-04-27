import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { RfidProductPage } from './pages/RfidProductPage';
import { ProjectArticleTemperatureHumidityMonitoringPage } from './pages/ProjectArticleTemperatureHumidityMonitoringPage';
import { ProjectArticleEnergyPage } from './pages/ProjectArticleEnergyPage';
import { ProjectArticleLivestockMonitoringControlPage } from './pages/ProjectArticleLivestockMonitoringControlPage';
import { ProjectArticleSmartAgricultureIotPage } from './pages/ProjectArticleSmartAgricultureIotPage';
import { MicromouseProductPage } from './pages/MicromouseProductPage';
import { TranslateProductPage } from './pages/TranslateProductPage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePostPage } from './pages/ArticlePostPage';
import { AdminHomePage } from './pages/AdminHomePage';
import { AdminDocumentsPage } from './pages/AdminDocumentsPage';
import { AdminPricingPage } from './pages/AdminPricingPage';
import { AdminDesignGalleryPage } from './pages/AdminDesignGalleryPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/articles/:slug" element={<ArticlePostPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/documents" element={<AdminDocumentsPage />} />
        <Route path="/admin/pricing" element={<AdminPricingPage />} />
        <Route path="/admin/design-gallery" element={<AdminDesignGalleryPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/projects/temperature-humidity-monitoring"
          element={<ProjectArticleTemperatureHumidityMonitoringPage />}
        />
        <Route path="/projects/energy-monitoring" element={<ProjectArticleEnergyPage />} />
        <Route
          path="/projects/livestock-monitoring-control"
          element={<ProjectArticleLivestockMonitoringControlPage />}
        />
        <Route path="/projects/smart-agriculture-iot" element={<ProjectArticleSmartAgricultureIotPage />} />
        <Route path="/products/micromouse" element={<MicromouseProductPage />} />
        <Route path="/products/translate" element={<TranslateProductPage />} />
        <Route path="/products/rfid" element={<RfidProductPage />} />
      </Route>
    </Routes>
  );
}
