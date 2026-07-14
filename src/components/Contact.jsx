import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="cta">
        <div className="container cta__content">
          <h2 className="cta__title">Ready to start your IoT project?</h2>
          <p className="cta__text">
            Tell us about platform outsourcing, PCB & firmware, or mechanical design —
            we reply within one business day.
          </p>
          <div className="cta__actions">
            <a href="#contact-form" className="btn btn--primary">
              Get a consultation
            </a>
            <a href="#products" className="btn btn--outline">
              Browse products
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="section-subtitle">Contact</p>
            <h2 className="section-title" style={{ maxWidth: "14ch" }}>
              Start your project with Gemify
            </h2>
            <p>
              Briefly describe your need — platform outsourcing, PCB & firmware, or
              mechanical design — and our team will follow up soon.
            </p>

            <dl className="contact-details">
              <div>
                <dt>Email</dt>
                <dd>hello@gemify.vn</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>+84 28 7300 8868</dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd>District 7, Ho Chi Minh City</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            {sent ? (
              <p className="form-success" role="status">
                Request received. The Gemify team will get back to you soon.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-row">
                  <label>
                    Full name
                    <input name="name" type="text" required placeholder="Jane Doe" />
                  </label>
                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <label>
                  Interest
                  <select name="need" defaultValue="platform">
                    <option value="platform">IoT platform outsourcing</option>
                    <option value="hardware">PCB & firmware</option>
                    <option value="mechanical">Mechanical design</option>
                    <option value="climate">Temp / humidity monitoring</option>
                    <option value="relay">Remote relay control</option>
                    <option value="rfid">NFC / RFID readers</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label>
                  Project details
                  <textarea
                    name="message"
                    required
                    placeholder="Scale, timeline, technical requirements..."
                  />
                </label>

                <button type="submit" className="btn btn--primary">
                  Send consultation request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
