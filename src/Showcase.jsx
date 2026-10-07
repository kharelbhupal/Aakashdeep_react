import { useState, useMemo } from "react";
import showCaseData from "../src/data/SHOWCASE.JS";
import "./showcase.css";

export default function Showcase() {
  const [previewImage, setPreviewImage] = useState(null);

  const randomImages = useMemo(() => {
    return [...showCaseData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 20);
  }, []);

  return (
    <section className="project-gallery">
      <div className="gallery-header">
        <h2>Project Showcase</h2>
        <p>
          Explore our collection of Residential, Commercial, and architectural
          Designs.
        </p>
      </div>

      <div className="gallery-grid">
        {randomImages.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={`House ${item.id}`}
            className="gallery-photo"
            onClick={() => setPreviewImage(item.img)}
          />
        ))}
      </div>

      {previewImage && (
        <div className="preview-modal" onClick={() => setPreviewImage(null)}>
          <button
            className="close-button"
            onClick={() => setPreviewImage(null)}
          >
            ×
          </button>
          <img
            src={previewImage}
            alt="Preview"
            className="preview-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
