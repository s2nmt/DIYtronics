import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BlogLayout from "./pages/BlogLayout.jsx";
import Blog from "./pages/Blog.jsx";
import ArticlePostPage from "./pages/ArticlePostPage.jsx";
import ArticleSeriesPage from "./pages/ArticleSeriesPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

const rawBase = import.meta.env.BASE_URL || "/";
const routerBasename = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
        </Route>

        <Route element={<BlogLayout />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/series/:seriesSlug" element={<ArticleSeriesPage />} />
          <Route path="/articles/:slug" element={<ArticlePostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
