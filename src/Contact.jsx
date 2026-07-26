import QR from "./assets/social/aakashdeep.png";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        {/* Left Side */}
        <div className="contact-left">
          <span className="section-badge">Get In Touch</span>

          <h2>Start Your Project With Us</h2>

          <p>
            Tell us about your engineering challenge. We'll respond within 24
            hours with initial thoughts and a proposed approach.
          </p>

          <form className="contact-form">
            <input
              type="hidden"
              name="access_key"
              value="8f6dee23-5f8c-4d73-bdcd-ea5bfd1e723b"
            />

            <input type="text" name="name" placeholder="Full Name" required />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company (Optional)"
            />

            <select name="service" required>
              <option value="">Select Service Required</option>
              <option value="highways">Highway & Road Design</option>
              <option value="bridges">Bridge Engineering</option>
              <option value="drainage">Drainage & Flood Mitigation</option>
              <option value="geotechnical">Geotechnical Solutions</option>
              <option value="bim">BIM & Digital Engineering</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              rows="6"
              placeholder="Project Description"
              required
            />

            {/* hCaptcha */}
            <div
              className="h-captcha"
              data-captcha="true"
              data-theme="dark"
            ></div>

            <button type="submit" className="send-btn">
              Send Message
            </button>

            <div className="form-status"></div>
          </form>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <div className="contact-card">
            <h3>Contact Us</h3>

            <p className="phone">+977-9840464948</p>
            <p className="phone">01-5314948</p>

            <img src={QR} alt="WhatsApp QR" className="qr-image" />
          </div>

          <div className="contact-card">
            <h3>Our Office</h3>

            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d220.81707007774025!2d85.33349986343552!3d27.68413481688707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQxJzAzLjAiTiA4NcKwMjAnMDAuOSJF!5e0!3m2!1sen!2snp!4v1780762508600!5m2!1sen!2snp"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="address">
              Shankamul, Baneshwor
              <br />
              Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
