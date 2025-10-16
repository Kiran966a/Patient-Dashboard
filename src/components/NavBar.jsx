import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="nav-logo">JaruratCare</div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <FaBars />
      </button>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/patients" onClick={() => setIsOpen(false)}>Patients</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
