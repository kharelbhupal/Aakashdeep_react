import React, { useState } from "react";

import infoCenterData from "./data/INFO_DATA.JS";

import "./infoCenter.css";

export default function InfoCenter() {
  const [activeTab, setActiveTab] = useState("faq");

  const tabs = [
    {
      id: "faq",
      label: "F.A.Q",
    },
    {
      id: "drawings",
      label: "Technical Drawing List",
    },
    {
      id: "tips",
      label: "Tips",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="kicker">Technical Information</div>

          <h1>Info Center</h1>

          <p>
            Essential technical information, FAQs, and drawing lists for your
            construction and engineering projects.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container">
        <div className="project-filters animate-on-scroll">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* FAQ */}
          {activeTab === "faq" && (
            <div className="info-content active">
              <SectionHeader
                subtitle="Common Questions"
                title="Frequently Asked Questions"
                description="Find answers to common questions about our services, process, and technical requirements."
              />

              <div className="faq-container animate-on-scroll">
                {infoCenterData.faq.map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <div className="faq-question">
                      <span>{faq.question}</span>

                      <i className="fas fa-chevron-down"></i>
                    </div>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DRAWINGS */}

          {activeTab === "drawings" && (
            <div className="info-content active">
              <SectionHeader
                subtitle="Documentation"
                title="Technical Drawing List"
                description="Comprehensive list of technical drawings required for complete house design and construction planning."
              />

              <div className="drawing-list">
                {infoCenterData.drawings.map((drawing, index) => (
                  <div className="drawing-card animate-on-scroll" key={index}>
                    <div className="drawing-icon">
                      <i className={drawing.icon}></i>
                    </div>

                    <h3>{drawing.title}</h3>

                    <p>{drawing.description}</p>

                    <ul>
                      {drawing.points.map((point, i) => (
                        <li key={i}>
                          <i className="fas fa-check"></i>

                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div
                className="animate-on-scroll"
                style={{
                  textAlign: "center",
                  margin: "4rem 0 2rem",
                }}
              >
                <p
                  style={{
                    marginBottom: "2rem",
                    maxWidth: "800px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Need a complete set of technical drawings for your project?
                  Contact our team for professional drafting services.
                </p>

                <a href="/#contact" className="btn-primary">
                  <i className="fas fa-paper-plane"></i>
                  Request Drawing Package
                </a>
              </div>
            </div>
          )}

          {/* TIPS */}

          {activeTab === "tips" && (
            <div className="info-content active">
              <SectionHeader
                subtitle="Expert Advice"
                title="Construction Tips & Guidelines"
                description="निर्माण सम्बन्धी विशेष सुझाव र जानकारीहरू"
              />

              <div className="tips-container">
                {infoCenterData.tips.map((tip, index) => (
                  <div className="tip-card animate-on-scroll" key={index}>
                    <div className="tip-header">
                      <h3>{tip.title}</h3>
                    </div>

                    <div className="tip-content nepali-text">
                      {tip.content.map((item, i) =>
                        item.type === "heading" ? (
                          <h4 key={i}>{item.text}</h4>
                        ) : (
                          <p key={i}>{item.text}</p>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STATS */}

          <div
            className="project-stats animate-on-scroll"
            style={{
              marginTop: "4rem",
            }}
          >
            <div className="stats-grid-large">
              {infoCenterData.stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-number">{stat.number}</div>

                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="section-header animate-on-scroll">
      <div className="section-subtitle">{subtitle}</div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}
