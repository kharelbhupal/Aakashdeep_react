import Logo from "./assets/logo.svg";

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

              <a href="#">Highway Design</a>
              <a href="#">Bridge Engineering</a>
              <a href="#">Drainage Solutions</a>
              <a href="#">Geotechnical Engineering</a>
              <a href="#">BIM & Digital Twins</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>

              <a href="#about">About Us</a>
              <a href="#projects">Projects</a>
              <a href="#team">Our Team</a>
              <a href="#contact">Contact</a>
              <a href="#">Careers</a>
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
