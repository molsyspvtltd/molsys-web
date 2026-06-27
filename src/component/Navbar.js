import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".navbar");
      if (navbar && !navbar.contains(event.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Molsys Logo" />
        </Link>

        {/* Hamburger Icon */}
        <button
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/aboutUs" className="navbar-link" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/market" className="navbar-link" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contactUs" className="navbar-link" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="#" className="navbar-link" onClick={closeMobileMenu}>
              MolsysT
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pms" className="navbar-link" onClick={closeMobileMenu}>
              PMS
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/g-cell" className="navbar-link" onClick={closeMobileMenu}>
              G-Cell
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Omicsworkshop" className="navbar-link" onClick={closeMobileMenu}>
              Workshops
            </Link>
          </li>
          <li className="navbar-item">
            <a
              href="https://dnalyst.in"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              Danalyst
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
