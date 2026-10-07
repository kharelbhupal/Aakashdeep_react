import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import allButtonCategories from "./data/ALLSERVICES_BUTTON.JS";
import companyLinks from "./data/FOOTER_COMPANY_LINKS.JS";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="logo">
              <img
                src={Logo}
                alt="Aakashdeep Logo"
                className="footer-logo-img"
              />

              <div>
                <h3>Aakashdeep</h3>
                <span>Construction & Engineering</span>
              </div>
            </div>

            <p>
              Innovative civil engineering solutions for tomorrow's
              infrastructure challenges.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>

              {allButtonCategories.map((item) => (
                <a key={item.id} href={`/services#${item.value}`}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer-column">
              <h4>Company</h4>

              {companyLinks.map((item) => (
                item.link.startsWith("/#") ? (
                  <a key={item.id} href={item.link}>
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.id} to={item.link}>
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <div className="footer-column">
              <h4>Resources</h4>

              <a href="#">Case Studies</a>
              <a href="#">White Papers</a>
              <a href="#">Blog</a>
              <a href="#">News & Events</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {year} Aakashdeep Construction & Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
