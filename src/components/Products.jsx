import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CoverArt from "./CoverArt";
import { products } from "../data/products";

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Product catalog</p>
          <h2 className="section-title">Our products</h2>
          <p className="section-description">
            Field-ready systems for remote climate monitoring, relay control, and smart
            NFC/RFID — buy off the shelf or customize to your specs.
          </p>
        </div>

        <div className="cards-grid">
          {products.map((p, i) => (
            <motion.article
              key={p.slug}
              className="card card--product"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link to={`/products/${p.slug}`} className="card__media">
                <CoverArt type={p.art} />
              </Link>
              <div className="card__body">
                <p className="card__cat">{p.cat}</p>
                <h3 className="card__title">
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className="card__desc">{p.shortDesc}</p>
                <ul className="card__features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="card__meta">
                  <span className="card__price">{p.price}</span>
                  <Link to={`/products/${p.slug}`} className="card__link">
                    Details →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/products" className="btn btn--outline">
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
