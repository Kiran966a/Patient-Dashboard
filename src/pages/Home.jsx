import React, { useState, useEffect } from "react";
import "./Home.css";
import heroImage from "../assets/hero-patient.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [showContact, setShowContact] = useState(false);

  // Typing effect
  const [typedText, setTypedText] = useState("");
  const fullText = "Jarurat Care";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-hero">
      <div className="hero-left">
        <h2>Welcome to</h2>
        <h1 className="hero-title">{typedText}</h1>

        <p>
          Manage patient records effortlessly — track appointments, monitor health
          status, and access detailed insights with just one click.
        </p>

        <div className="hero-btns">
          <button onClick={() => navigate("/patients")}>View Patients</button>
          <button className="contact-btn" onClick={() => setShowContact(true)}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="patients illustration" />
      </div>

      {showContact && (
        <div className="contact-modal">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <div className="form-buttons">
                <button type="submit">Send</button>
                <button type="button" onClick={() => setShowContact(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
