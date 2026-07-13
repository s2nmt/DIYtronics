import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import CoverArt from "../components/CoverArt";
import { getProductBySlug } from "../data/products";
import "../styles/products-page.css";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  useEffect(() => {
    if (product) document.title = `${product.name} | Gemify`;
  }, [product]);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <main className="product-detail-page">
      <div className="product-layout">
        <aside className="sidebar-diy">
          <div className="sidebar-diy__icon">{product.icon}</div>
          <h2>{product.sidebarTitle}</h2>
          <p className="desc">{product.sidebarDesc}</p>
          <Link to="/#contact" className="about-btn">
            Request a quote
          </Link>
          <Link to="/products" className="sidebar-back">
            ← All products
          </Link>
        </aside>

        <div className="main-content">
          <section className="product-section">
            <h1 className="product-title">{product.name}</h1>
            <div className="intro-img">
              <CoverArt type={product.art} />
            </div>
            <h2>{product.introHeading}</h2>
            <p>{product.introBody}</p>
          </section>

          <section className="product-section">
            <h2>{product.specsHeading}</h2>
            <ul>
              {product.specLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="product-section">
            <h2>{product.detailsHeading}</h2>
            <p>{product.detailsBody}</p>
          </section>

          <section className="product-section product-section--cta">
            <Link to="/#contact" className="btn btn--primary">
              Talk to sales
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
