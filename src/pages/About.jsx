import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are committed to providing the best healthcare solutions and
          services with care and compassion.
        </p>
      </section>

      <section className="about-sections">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To provide world-class healthcare and improve the quality of life
            of our patients with integrity and dedication.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To be a leading healthcare provider recognized for innovation,
            excellence, and patient-centered care.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Values</h2>
          <p>
            Compassion, Integrity, Excellence, Teamwork, and Innovation drive
            everything we do.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Dr. Jane Doe"
            />
            <h3>Dr. Jane Doe</h3>
            <p>Chief Medical Officer</p>
          </div>
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="Dr. John Smith"
            />
            <h3>Dr. John Smith</h3>
            <p>Head of Surgery</p>
          </div>
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/women/50.jpg"
              alt="Dr. Emily Clark"
            />
            <h3>Dr. Emily Clark</h3>
            <p>Head of Pediatrics</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
