import { useEffect } from "react";
import { hardware } from "../data/hardware";
import { assetPath } from "../utils/assetPath";
import "../styles/products-page.css";

export default function ProductsPage() {
  useEffect(() => {
    document.title = "Hardware | Gemify";
  }, []);

  return (
    <div className="products-overview-root">
      <section
        className="products-overview-hero"
        style={{ "--products-hero-image": `url("${assetPath("images/product-control.jpg")}")` }}
      >
        <div className="container">
          <div className="products-overview-hero-content">
            <h1>Hardware</h1>
            <p>Sensors, controllers, meters, and autonomous vehicles.</p>
          </div>
        </div>
      </section>

      <section className="products-overview-page">
        <div className="container">
          <div className="products-overview-grid">
            {hardware.map((product) => (
              <article className="products-overview-card" key={product.slug}>
                <div className="products-overview-card-media">
                  <img
                    src={assetPath(product.image)}
                    alt={product.imageAlt}
                    width="1280"
                    height="720"
                    loading="lazy"
                  />
                </div>
                <div className="products-overview-card-content">
                  <p className="products-overview-cat">{product.cat}</p>
                  <h3>{product.name}</h3>
                  <p>{product.shortDesc}</p>
                  <a className="products-overview-read-more" href="/#contact">
                    Request a quote →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
