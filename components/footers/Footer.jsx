export default function Footer() {
  return (
    <footer className="eschool-footer">
      <div className="tf-container">
        <div className="eschool-footer-subscribe">
          <div className="subscribe-content">
            <h2>
              Subscribe
              <br />
              For Update
            </h2>

            <p>Stay in touch with us to get latest news</p>
          </div>

          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email address..." />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="eschool-footer-divider"></div>

        <div className="eschool-footer-main">
          <div className="footer-logo-box">
            <img src="/escience-logo.svg" alt="eScience Academy" />
          </div>

          <div className="footer-links-box">
            <h4>Explore Links</h4>

            <ul>
              <li>
                <a href="#">CAIE Registration</a>
              </li>
            </ul>
          </div>

          <div className="footer-connect-box">
            <h4>Connect</h4>

            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-icon">☎</span>
                <a href="tel:03121234567">0312-1234567</a>
              </li>

              <li>
                <span className="footer-contact-icon">✉</span>
                <a href="mailto:info@escienceacademy.com">
                  info@escienceacademy.com
                </a>
              </li>
            </ul>

            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <span>◎</span>
              </a>

              <a href="#" aria-label="Facebook">
                <span>f</span>
              </a>

              <a href="#" aria-label="YouTube">
                <span>▶</span>
              </a>

              <a href="#" aria-label="LinkedIn">
                <span>in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/923121234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="eschool-whatsapp"
      >
        ☎
      </a>
    </footer>
  );
}