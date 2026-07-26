import Logo from "./assets/logo.svg";

export default function Header() {
  const link = ["Portfolio", "Services", "About Us", "Info"];

  // Cleaned inline styles entirely to let CSS handle layouts
  const linkElement = link.map((item, index) => {
    return (
      <li key={index} className="nav-item">
        {item}
      </li>
    );
  });

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
        <div className="text-group">
          <span>AAKASHDEEP</span>
          <h2> CONSTRUCTION & ENGINEERING</h2>
        </div>
      </div>

      <div className="navigation-group">
        <ul className="link-container">{linkElement}</ul>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}
