import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BlogLayout from "./pages/BlogLayout.jsx";
import Blog from "./pages/Blog.jsx";
import ArticlePostPage from "./pages/ArticlePostPage.jsx";
import ArticleSeriesPage from "./pages/ArticleSeriesPage.jsx";

const rawBase = import.meta.env.BASE_URL || "/";
const routerBasename = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Navigate to="/#hardware" replace />} />
          <Route path="/products/:slug" element={<Navigate to="/#hardware" replace />} />
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
