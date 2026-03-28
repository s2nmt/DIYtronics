import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { RfidProductPage } from './pages/RfidProductPage';
import { ProjectArticleExample1Page } from './pages/ProjectArticleExample1Page';
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
        <Route path="/projects/example-1" element={<ProjectArticleExample1Page />} />
        <Route path="/products/micromouse" element={<MicromouseProductPage />} />
        <Route path="/products/translate" element={<TranslateProductPage />} />
        <Route path="/products/rfid" element={<RfidProductPage />} />
      </Route>
    </Routes>
  );
}
