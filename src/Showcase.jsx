import showCaseData from "../src/data/SHOWCASE.JS";
import "./showcase.css";

export default function Showcase() {
  const randomImages = [...showCaseData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 20);

  return (
    <section className="project-gallery">
      <div className="gallery-header">
        <h2>Our Featured Projects</h2>
        <p>
          Explore a selection of homes and commercial spaces we've proudly
          built.
        </p>
      </div>

      <div className="gallery-grid">
        {randomImages.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={`House ${item.id}`}
            className="gallery-photo"
          />
        ))}
      </div>
    </section>
  );
}
