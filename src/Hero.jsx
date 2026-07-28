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
        <button className="primary-btn">
          <Link to={"/portfolio"}> View Our Projects</Link>
        </button>
        <button className="secondary-btn">
          <a href="/#contact"> Contact Our Team</a>
        </button>
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
