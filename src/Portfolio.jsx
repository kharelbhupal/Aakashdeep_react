import React, { useState } from "react";
import projectFilters from "./data/PORTFOLIO_FILTERS.JS";
import ourExpert from "./data/PORTFOLIO_EXPERT.JS";
import portfolio from "./data/PORTFOLIO.JS";
import projectStats from "./data/PORT_STATS.JS";
import "./portfolio.css";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filter Portfolio
  const filteredPortfolio =
    selectedFilter === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === selectedFilter);

  // Filter Buttons
  const filterElement = projectFilters.map((item) => (
    <button
      key={item.id}
      className={`portfolio-filter-btn ${
        selectedFilter === item.value ? "active" : ""
      }`}
      onClick={() => setSelectedFilter(item.value)}
    >
      {item.label}
    </button>
  ));

  // Portfolio Cards
  const portFolioElement = filteredPortfolio.map((item) => (
    <div
      key={item.id}
      className="project-card animate-on-scroll"
      data-category={item.category}
    >
      <div className="project-image">
        <img src={item.image} alt={item.title} />
        <span className="concept-badge">{item.badge}</span>
      </div>

      <div className="project-content">
        <div className="project-tag">{item.tag}</div>

        <h4>{item.title}</h4>

        <p className="text-muted">{item.description}</p>

        <div className="project-details">
          {item.details.map((detail, index) => (
            <span key={index}>
              <i className={`fas ${detail.icon}`}></i> {detail.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  ));

  // Expertise
  const expertiseElement = ourExpert.map((item) => (
    <div className="expertise-item animate-on-scroll" key={item.id}>
      <i className={`fas ${item.icon}`}></i>
      <h5>{item.title}</h5>
      <p>{item.description}</p>
    </div>
  ));

  // Stats
  const statsElement = projectStats.map((item) => (
    <div className="stat-item" key={item.id}>
      <div className="stat-number">{item.number}</div>
      <div className="stat-label">{item.label}</div>
    </div>
  ));

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="kicker">Our Vision</div>

          <h1>Design Concepts & Future Projects</h1>

          <p>
            Explore our vision for modern, sustainable, and innovative
            engineering projects that will shape Nepal's future.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Project Filters */}
          <div className="project-filters animate-on-scroll">
            {filterElement}
          </div>

          {/* Projects */}
          <div
            className="projects-grid-expanded animate-on-scroll"
            id="projectsGrid"
          >
            {portFolioElement}
          </div>

          {/* Expertise */}
          <div className="top-line animate-on-scroll">
            <div className="section-header">
              <div className="section-subtitle">Our Capabilities</div>

              <h2>Areas of Expertise</h2>

              <p>
                We bring innovative design solutions across all project types,
                combining modern engineering with sustainable practices.
              </p>
            </div>

            <div className="expertise-grid">{expertiseElement}</div>
          </div>

          {/* Stats */}
          <div className="project-stats animate-on-scroll">
            <div className="stats-grid-large">{statsElement}</div>
          </div>

          {/* CTA */}
          <div className="cta-section animate-on-scroll">
            <h3>Ready to Bring Your Vision to Life?</h3>

            <p>
              Let's collaborate to create your dream project. Contact us for a
              free consultation.
            </p>

            <a href="/#contact" className="portfolio-btn-primary">
              <i className="fas fa-comment-dots"></i>
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
