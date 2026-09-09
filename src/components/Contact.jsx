import { assetPath } from "../utils/assetPath";

export default function Contact() {
  return (
    <section
      className="cta cta--photo"
      style={{ "--cta-image": `url("${assetPath("images/hero-control.jpg")}")` }}
    >
      <div className="container cta__content">
        <h2 className="cta__title">Ready to digitize sites, energy, and vehicles?</h2>
        <p className="cta__text">
          Tell us about your farm, barn, or plant — we reply within one business
          day.
        </p>
        <div className="cta__actions">
          <a href="#contact" className="btn btn--primary">
            Talk to us
          </a>
          <a href="#hardware" className="btn btn--outline">
            Browse hardware
          </a>
        </div>
      </div>
    </section>
  );
}
