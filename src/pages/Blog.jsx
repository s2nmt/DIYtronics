import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { articleSeriesList } from "../content/articleSeries";
import {
  blogPosts,
  blogRecentSidebarCount,
  blogCategories,
  blogTags,
} from "../content/blogPosts";
import { assetPath } from "../utils/assetPath";
import "../styles/blog-page.css";

export default function Blog() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Gemify Blog";
  }, []);

  const feedItems = useMemo(() => {
    const series = articleSeriesList.map((s) => ({
      key: `series-${s.slug}`,
      href: `/blog/series/${s.slug}`,
      cover: s.cover,
      title: s.title,
      author: s.author,
      date: s.date,
      excerpt: s.description,
      isSeries: true,
    }));

    const posts = blogPosts.map((p) => ({
      key: p.href,
      href: `/${p.href}`,
      cover: p.cover,
      title: p.title,
      author: p.author,
      date: p.date,
      excerpt: p.excerpt,
      isSeries: false,
    }));

    return [...series, ...posts];
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return feedItems;
    return feedItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q)
    );
  }, [feedItems, q]);

  const recent = feedItems.slice(0, blogRecentSidebarCount);

  return (
    <div className="blog-page-root">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Gemify Blog</h1>
          <p>Technical notes on embedded systems, IoT, and Linux.</p>
        </div>
      </section>

      <section className="blog-page">
        <div className="blog-wrapper">
          <div className="blog-main">
            <div className="welcome-section">
              <h2>Latest articles & series</h2>
              <p>
                Deep-dive tutorials from the Gemify / DIYtronics archive — MQTT, ESP32 OTA,
                Yocto on BeagleBone Black, and STM32 bare-metal secure bootloaders.
              </p>
            </div>

            {filtered.map((item) => (
              <article key={item.key} className="blog-post">
                <Link to={item.href} className="blog-post-image-link">
                  <img
                    src={assetPath(item.cover)}
                    alt=""
                    className="blog-post-image"
                  />
                </Link>
                <div className="blog-post-content">
                  {item.isSeries ? (
                    <span className="blog-series-label">Series</span>
                  ) : null}
                  <h3 className="blog-post-title">
                    <Link to={item.href}>{item.title}</Link>
                  </h3>
                  <div className="blog-post-meta">
                    By {item.author} | {item.date}
                  </div>
                  <p className="blog-post-excerpt">{item.excerpt}</p>
                  <Link to={item.href} className="blog-read-more">
                    {item.isSeries ? "View all parts →" : "Read more →"}
                  </Link>
                </div>
              </article>
            ))}

            {filtered.length === 0 ? (
              <p className="blog-empty">No posts match your search.</p>
            ) : null}
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-widget">
              <h3>Recent posts</h3>
              {recent.map((item) => (
                <div key={item.key} className="recent-post">
                  <img src={assetPath(item.cover)} alt="" />
                  <div className="recent-post-content">
                    <h4>
                      <Link to={item.href}>{item.title}</Link>
                    </h4>
                    <div className="date">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sidebar-widget">
              <h3>Search</h3>
              <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search"
                />
                <button type="submit" aria-label="Search">
                  ⌕
                </button>
              </form>
            </div>

            <div className="sidebar-widget">
              <h3>Categories</h3>
              <ul className="categories-list">
                {blogCategories.map((cat) => (
                  <li key={cat}>
                    <button type="button" onClick={() => setQuery(cat)}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3>Tags</h3>
              <div className="tags-list">
                {blogTags.map((tag) => (
                  <button key={tag} type="button" onClick={() => setQuery(tag)}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
