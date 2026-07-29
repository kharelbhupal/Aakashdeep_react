import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-container">
      <span className="kicker">Innovating Since 2007</span>

      <h1>
        Elegant <span>Luxury Living</span>
      </h1>

      <p>
        We design resilient bridges, highways, drainage and geotechnical
        solutions using cutting-edge BIM technology, delivering projects on
        time, within budget, and beyond expectations.
      </p>

      <div className="two-buttons">
        <Link to={"/portfolio"}>
          <button className="primary-btn">View Our Projects</button>
        </Link>
        <a href="/#contact">
          <button className="secondary-btn">Contact Our Team</button>
        </a>
      </div>

      <div className="showcase">
        <div>
          <h3>128+</h3>
          <span>Projects Delivered</span>
        </div>

        <div>
          <h3>42</h3>
          <span>Bridges Engineered</span>
        </div>

        <div>
          <h3>90+</h3>
          <span>BIM Models Created</span>
        </div>
      </div>
    </section>
  );
}
