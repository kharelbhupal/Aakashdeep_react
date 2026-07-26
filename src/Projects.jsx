import PROJECTS from "./data/PROJECTS.JS";

export default function Projects() {
  const projectElements = PROJECTS.map((project, index) => {
    if (index <= 4) {
      return (
        <div className="project-card" key={index}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-content">
            <span className="project-tag">{project.category}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>
          </div>
        </div>
      );
    }
  });

  return (
    <section className="projects-container" id="projects">
      <div className="project-wrapper">
        <div className="text-part">
          <span className="section-badge">Our Portfolio</span>

          <h2>Featured Engineering Projects</h2>

          <p>
            Explore some of our recent projects that showcase our innovative
            approach to complex engineering challenges.
          </p>

          <button className="view-projects">View All Projects</button>
        </div>

        <div className="projects-grid">{projectElements}</div>
      </div>
    </section>
  );
}
