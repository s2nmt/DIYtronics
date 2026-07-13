import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";
import "./BlogLayout.css";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function BlogLayout() {
  return (
    <div className="blog-shell">
      <ScrollTop />
      <BlogHeader />
      <main className="blog-shell__main">
        <Outlet />
      </main>
      <BlogFooter />
    </div>
  );
}
