import TEAM from "./data/TEAM";
import { Link } from "react-router-dom";

export default function Team() {
  const teamElements = TEAM.map((member, index) => (
    <div key={index} className={`team-card ${index === 0 ? "ceo-card" : ""}`}>
      <img src={member.image} alt={member.name} className="team-avatar" />
      <h3>{member.name}</h3>
      <span className="team-role">{member.role}</span>
      <p>{member.description}</p>
    </div>
  ));

  return (
    <section className="team-container" id="team">
      <div className="team-wrapper">
        <div className="team-text">
          <span className="section-badge">Our Experts</span>

          <h2>Meet Our Engineering Team</h2>

          <p>
            Our team of chartered engineers combines decades of experience with
            innovative thinking to deliver exceptional results.
          </p>
          <Link to={"/about-us"}>
            <button className="view-team">View All Team Members</button>
          </Link>
        </div>

        <div className="team-grid">{teamElements}</div>
      </div>
    </section>
  );
}
