import "./BlogFooter.css";

export default function BlogFooter() {
  return (
    <footer className="blog-chrome-footer">
      <div className="blog-chrome-footer__inner">
        <p>© {new Date().getFullYear()} Gemify Blog — technical notes & tutorials.</p>
        <a href="/">← Back to gemify.vn</a>
      </div>
    </footer>
  );
}
