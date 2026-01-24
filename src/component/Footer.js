// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
import LogoMolsys from "../assets/LogoMolsys.png";
import footer from '../assets/footer_makeachange.jpg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      {/* Background Image with Overlay */}
      <div 
        className="footer-background"
        style={{ backgroundImage: `url(${footer})` }}
      />
      
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          
          {/* Logo & Company Info */}
          <div className="footer-brand">
            <img
              src={LogoMolsys}
              alt="Molsys Logo"
              className="footer-logo"
            />
            <p className="footer-description">
              Join us, make a change. Transforming science and innovation for a better tomorrow.
            </p>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="footer-heading">
              Resources
            </h3>
            <ul className="footer-links">
              <li>
                <Link to="/privacypolicy" className="footer-link">
                  <span className="link-arrow">→</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/register" className="footer-link">
                  <span className="link-arrow">→</span>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="footer-link">
                  <span className="link-arrow">→</span>
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-section">
            <h3 className="footer-heading">
              About
            </h3>
            <ul className="footer-links">
              <li>
                <Link to="/AboutUs" className="footer-link">
                  <span className="link-arrow">→</span>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="footer-link">
                  <span className="link-arrow">→</span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  <span className="link-arrow">→</span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="footer-section">
            <h3 className="footer-heading">
              Stay Connected
            </h3>
            
            {/* Social Media Icons */}
            <div className="social-icons">
              <a 
                href="https://www.linkedin.com/company/molsys/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a 
                href="https://www.facebook.com/molsys/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a 
                href="https://twitter.com/molsys?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a 
                href="https://www.instagram.com/molsys_scientific/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>

            {/* Newsletter Form */}
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button
                type="submit"
                className="newsletter-button"
              >
                Subscribe
              </button>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="permission"
                  className="footer-checkbox"
                />
                <label htmlFor="permission" className="checkbox-label">
                  Allow access to data
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} All copyright belongs to{' '}
            <a
              href="https://molsys.in"
              target="_blank"
              rel="noopener noreferrer"
              className="copyright-link"
            >
              molsys.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
