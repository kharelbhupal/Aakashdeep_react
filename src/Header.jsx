import Logo from "./assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const link = [
    { label: "Portfolio", link: "/portfolio" },
    { label: "Services", link: "/services" },
    { label: "About Us", link: "/about-us" },
    { label: "Info", link: "/info" },
  ];

  const linkElement = link.map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <Link to={item.link}>{item.label}</Link>
      </li>
    );
  });

  return (
    <div className="header-container">
      {/* Logo */}
      <div className="navbar-container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <div className="text-group">
            <Link to={"/"}>
              <span>AAKASHDEEP</span>
              <h2>CONSTRUCTION & ENGINEERING</h2>
            </Link>
          </div>
        </div>

        {/* Hidden Checkbox for Hamburger Toggle */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

        {/* Hamburger Icon - Label */}
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        {/* Navigation */}
        <div className="navigation-group">
          <ul className="link-container">{linkElement}</ul>
          <button className="contact-button">
            <a href="/#contact">Contact Us</a>
          </button>
        </div>
      </div>

      {/* Optional: Overlay to close menu when clicking outside */}
      <label htmlFor="nav-toggle" className="nav-overlay"></label>
    </div>
  );
}
