import React, { useState } from "react";
import allServiceItems from "./data/ALLSERVICE_ITEMS";
import allButtonCategories from "./data/ALLSERVICEs_BUTTON";
import "./allservice.css";
import Footer from "./Footer";
import Vastu from "./assets/Vastu.png";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("engineering");

  const currentCategory =
    allServiceItems.find((item) => item.category === activeCategory) ||
    allServiceItems[0];

  return (
    <>
      <section className="allservices-section">
        <div className="allservices-container">
          {/* Header */}
          <div className="allservices-page-header">
            <div className="allservices-kicker">What We Offer</div>
            <h1>Our Services</h1>
            <p>
              From concept to completion, we deliver innovative solutions across
              residential, commercial, industrial, engineering and
              infrastructure projects.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="allservices-filters">
            {allButtonCategories.map((item) => (
              <button
                key={item.id}
                className={`allservices-filter-btn ${
                  activeCategory === item.value ? "active" : ""
                }`}
                onClick={() => setActiveCategory(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Category Title & Services Grid */}
          <div className="allservices-grid-wrapper">
            <div className="allservices-category">
              <h3>
                <i
                  className={`fas ${currentCategory.icon}`}
                  style={{ marginRight: "1rem" }}
                ></i>
                {currentCategory.title}
              </h3>
            </div>

            {/* Vastu Layout */}
            {activeCategory === "vastu" ? (
              <div className="vastu-section">
                <div className="vastu-image">
                  <img src={Vastu} alt="Vastu Consultation" />
                </div>

                <div className="vastu-content">
                  <h2>वास्तुशास्त्र परामर्श</h2>
                  <h4>ॐ वास्तुपुरुषाय नमः ।</h4>
                  <p className="vastu-sloka">
                    धनधान्यसमृद्धिं देहि, शुभं भवतु सर्वदा ।
                  </p>
                  <p>
                    हाम्रो कम्पनीले प्राचीन वास्तुशास्त्रका सिद्धान्तहरूलाई उच्च
                    सम्मानका साथ अपनाउँछ । नेपालका धेरै घरधनी तथा व्यवसायिक
                    संस्थाहरूका लागि वास्तु अनुरूप भवन निर्माण गर्नु अत्यन्त
                    महत्वपूर्ण हुने भएकाले हामी यस विषयमा विशेष ध्यान दिन्छौं ।
                  </p>

                  <div className="vastu-features">
                    <div>
                      <i className="fas fa-compass"></i>
                      <span>दिशा अनुसार मुख्य प्रवेशद्वार</span>
                    </div>
                    <div>
                      <i className="fas fa-bed"></i>
                      <span>कोठाहरूको उचित व्यवस्थापन</span>
                    </div>
                    <div>
                      <i className="fas fa-sun"></i>
                      <span>प्राकृतिक प्रकाश र हावापानी</span>
                    </div>
                    <div>
                      <i className="fas fa-yin-yang"></i>
                      <span>पाँच तत्त्वहरूको सन्तुलन</span>
                    </div>
                  </div>

                  <p>
                    परम्परागत ज्ञान र आधुनिक निर्माण प्रविधिको संयोजनमार्फत हामी
                    सुरक्षित, सुन्दर, आरामदायी तथा आध्यात्मिक रूपमा सन्तुलित भवन
                    निर्माण गर्न प्रतिबद्ध छौं ।
                  </p>

                  <div className="vastu-chart">
                    <h3>Vastu Directions</h3>
                    <p>वास्तु दिशा चार्ट - सन्तुलित ऊर्जाका लागि</p>
                    <img
                      src="./img/vastu-direction-chart.jpg"
                      alt="Vastu Direction Chart"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Normal Cards */
              <div className="allservices-grid">
                {currentCategory.services.map((service) => (
                  <div className="allservices-card" key={service.id}>
                    <div className="allservices-card-image">
                      <img src={service.image} alt={service.title} />
                    </div>

                    <div className="allservices-card-content">
                      <div className="allservices-icon">
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <span className="allservices-tag">{service.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Process Section */}
          <div className="allservices-process-section">
            <div className="allservices-section-header">
              <div className="allservices-section-subtitle">How We Work</div>
              <h2>Our Design Process</h2>
              <p>
                A systematic approach ensuring quality, efficiency, and client
                satisfaction at every stage.
              </p>
            </div>

            <div className="allservices-process-steps">
              <div className="allservices-step-card">
                <div className="allservices-step-number">1</div>
                <h4>Consultation</h4>
                <p className="allservices-text-muted">
                  Understanding your requirements, budget, and vision for the
                  project.
                </p>
              </div>

              <div className="allservices-step-card">
                <div className="allservices-step-number">2</div>
                <h4>Concept Design</h4>
                <p className="allservices-text-muted">
                  Developing initial layouts and 3D concepts for your approval.
                </p>
              </div>

              <div className="allservices-step-card">
                <div className="allservices-step-number">3</div>
                <h4>Detailed Design</h4>
                <p className="allservices-text-muted">
                  Comprehensive drawings, specifications, and material
                  selection.
                </p>
              </div>

              <div className="allservices-step-card">
                <div className="allservices-step-number">4</div>
                <h4>Construction Support</h4>
                <p className="allservices-text-muted">
                  Site visits, contractor coordination, and quality assurance.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="allservices-cta-section">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Contact our team of expert designers and engineers to discuss your
              requirements and get a tailored solution.
            </p>
            <a href="/#contact" className="allservices-btn-primary">
              <i className="fas fa-paper-plane"></i> Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
