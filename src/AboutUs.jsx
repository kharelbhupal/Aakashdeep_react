import { useState } from "react";
import {
  aboutLosses,
  whyAakashdeep,
  missions,
  leadershipTeam,
  engineeringTeam,
} from "./data/ABOUT_DATA";

import "./about.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTeamCard = (member) => (
    <div className="team-card-large animate-on-scroll">
      <img src={member.img} alt={member.alt} className="team-avatar-large" />

      <h3>{member.name}</h3>

      <div className="team-role-large">{member.role}</div>

      <div className="expertise-tags">
        {member.tags.map((tag, index) => (
          <span className="expertise-tag" key={index}>
            {tag}
          </span>
        ))}
      </div>

      <p className="text-muted">{member.text}</p>

      <div className="team-social">
        <a href="#" className="team-social-link">
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a href="#" className="team-social-link">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Page Header */}

      <section className="page-header">
        <div className="container">
          <div className="kicker">Who We Are</div>

          <h1>About Aakashdeep</h1>

          <p>
            Building Nepal's future with innovative engineering solutions,
            sustainable practices, and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Filters */}

      <div className="container">
        <div className="about-filters animate-on-scroll">
          {[
            ["team", "Our Team"],
            ["profile", "Company Profile"],

            ["careers", "Careers"],
          ].map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <section
        className="section"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="container">
          {/* ================= PROFILE ================= */}

          {activeTab === "profile" && (
            <div className="about-content active">
              <div className="company-profile-container">
                {/* Losses */}

                <div className="losses-section animate-on-scroll">
                  <h3>
                    <i className="fas fa-exclamation-triangle"></i>
                    What Are The Losses Without Structural and Architecture
                    Service?
                  </h3>

                  <div className="losses-grid">
                    {aboutLosses.map((item, index) => (
                      <div className="loss-item" key={index}>
                        <i className={item.icon}></i>

                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Aakashdeep */}

                <div className="why-section animate-on-scroll">
                  <h3>
                    <i className="fas fa-star"></i>
                    Why Aakashdeep?
                  </h3>

                  <div className="why-grid">
                    {whyAakashdeep.map((item, index) => (
                      <div className="why-item" key={index}>
                        <i className={item.icon}></i>

                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vision Mission */}

                <div className="vision-mission">
                  <div className="vision-card animate-on-scroll">
                    <h3>
                      <i className="fas fa-eye"></i>
                      Our Vision
                    </h3>

                    <p>
                      To be a leading civil construction company in Nepal,
                      recognized for delivering innovative, sustainable, and
                      high-quality residential, commercial, and industrial
                      projects that shape modern communities and support
                      national development.
                    </p>
                  </div>

                  <div className="mission-card animate-on-scroll">
                    <h3>
                      <i className="fas fa-bullseye"></i>
                      Our Mission
                    </h3>

                    <ul className="mission-list">
                      {missions.map((mission, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle"></i>

                          {mission}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TEAM ================= */}

          {activeTab === "team" && (
            <div className="about-content active">
              <div className="team-section">
                <div className="leadership-section animate-on-scroll">
                  <div className="section-header">
                    <div className="section-subtitle">Leadership</div>

                    <h2>Executive Team</h2>

                    <p>
                      Seasoned professionals guiding our vision and ensuring
                      technical excellence across all projects.
                    </p>
                  </div>

                  {/* CEO */}

                  <div className="ceo">
                    <div className="team-card-large">
                      <img
                        src="/team/hemraj.png"
                        alt="Hemraj Bhattarai"
                        className="team-avatar-large"
                      />

                      <h3>Er. Hemraj Bhattarai</h3>

                      <div className="team-role-large">CEO</div>

                      <div className="expertise-tags">
                        <span className="expertise-tag">
                          Hydropower Developer
                        </span>

                        <span className="expertise-tag">
                          Project Management
                        </span>
                      </div>

                      <p className="text-muted">
                        As Chief Executive Officer, Mr. Bhattarai provides
                        strategic leadership and overall direction for the
                        company with focus on hydropower and renewable energy
                        projects.
                      </p>
                    </div>
                  </div>

                  <div className="leadership-grid">
                    {leadershipTeam.map((member, index) => (
                      <div key={index}>{renderTeamCard(member)}</div>
                    ))}
                  </div>
                </div>
                {/* Engineering Team */}

                <div className="animate-on-scroll">
                  <div className="section-header">
                    <div className="section-subtitle">Our Engineers</div>

                    <h2>Technical Experts</h2>

                    <p>
                      Dedicated professionals delivering excellence across all
                      engineering disciplines.
                    </p>
                  </div>
                </div>

                <div className="team-grid-expanded">
                  {engineeringTeam.map((member, index) => (
                    <div key={index}>{renderTeamCard(member)}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= CAREERS ================= */}

          {activeTab === "careers" && (
            <div className="about-content active">
              <div className="careers-container">
                <div className="coming-soon-card animate-on-scroll">
                  <i className="fas fa-briefcase"></i>

                  <h3>Careers at Aakashdeep</h3>

                  <p>
                    Join a team that's building Nepal's future with innovation,
                    excellence, and integrity.
                  </p>

                  <p className="text-muted">
                    We're always looking for talented individuals who share our
                    passion for engineering excellence.
                  </p>

                  <div className="job-alert">
                    <i className="fas fa-envelope"></i>

                    <h4>Stay Updated</h4>

                    <p className="text-muted">
                      Current job openings will be posted here soon. Subscribe
                      to our newsletter to get notified when positions become
                      available.
                    </p>
                  </div>

                  <div className="career-contact">
                    <p>
                      <strong>Interested in joining our team?</strong>
                    </p>

                    <p className="text-muted">Send your CV and portfolio to:</p>

                    <p>
                      <i
                        className="fas fa-envelope"
                        style={{
                          color: "var(--accent)",
                        }}
                      ></i>

                      <br />

                      <strong>careersadcc2063@gmail.com</strong>
                    </p>

                    <p className="text-muted">
                      We'll keep your information on file for future
                      opportunities.
                    </p>
                  </div>

                  <div>
                    <a href="/#contact" className="btn-primary">
                      <i className="fas fa-paper-plane"></i>
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
