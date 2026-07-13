import { useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import "../styles/products-page.css";

export default function ProductsPage() {
  useEffect(() => {
    document.title = "Products | Gemify";
  }, []);

  return (
    <div className="products-overview-root">
      <section className="products-overview-hero">
        <div className="container">
          <div className="products-overview-hero-content">
            <h1>Our products</h1>
            <p>
              Field-ready IoT systems for climate monitoring, remote relay control, and
              smart NFC/RFID — explore details or request a quote.
            </p>
          </div>
        </div>
      </section>

      <section className="products-overview-page">
        <div className="container">
          <div className="products-overview-welcome">
            <h2>Featured solutions</h2>
            <p>
              Buy off the shelf or customize sensors, enclosures, firmware, and cloud
              integration to match your deployment.
            </p>
          </div>

          <div className="products-overview-grid">
            {products.map((product) => (
              <article className="products-overview-card" key={product.slug}>
                <div className="products-overview-card-head">
                  <div className="products-overview-icon">{product.icon}</div>
                </div>
                <div className="products-overview-card-content">
                  <p className="products-overview-cat">{product.cat}</p>
                  <h3>{product.name}</h3>
                  <p>{product.shortDesc}</p>
                  <Link className="products-overview-read-more" to={`/products/${product.slug}`}>
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
