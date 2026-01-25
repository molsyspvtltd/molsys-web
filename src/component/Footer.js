// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../style/Footer.css';
// import LogoMolsys from "../assets/LogoMolsys.png";
// import footer from '../assets/footer_makeachange.jpg';

// function Footer() {
//   return (
//     <section
//       id="footer"
//       className="section-1"
//       style={{ backgroundImage: `url(${footer})`, backgroundSize: "cover" }}
//     >
//       <div className="row text-center text-xs-center text-sm-left text-md-left mx-5">
//         <div className="col-xs-6 col-sm-3 col-md-3">
//           <h5 className="h5">
//             <small>
//               <b>Resources</b>
//             </small>
//           </h5>
//           <ul className="list-unstyled quick-links">
//             <li>
//               <Link to="/privacypolicy">
//                 <i className="fa fa-angle-double-right"></i>Privacy Policy
//               </Link>
//             </li>
//             <li>
//               <Link to="/register">
//                 <i className="fa fa-angle-double-right"></i>Sign Up
//               </Link>
//             </li>
//             <li>
//               <Link to="/privacypolicy">
//                 <i className="fa fa-angle-double-right"></i>FAQ's
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="col-xs-6 col-sm-3 col-md-3">
//           <h5 className="h5-1">
//             <small>
//               <b>About</b>
//             </small>
//           </h5>
//           <ul className="list-unstyled quick-links">
//             <li>
//               <Link to="/AboutUs">
//                 <i className="fa fa-angle-double-right"></i>Our Story
//               </Link>
//             </li>
//             <li>
//               <Link to="/contactUs">
//                 <i className="fa fa-angle-double-right"></i>Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/careers">
//                 <i className="fa fa-angle-double-right"></i>Careers
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="col-xs-12 col-sm-6 col-md-6 mt-4">
//           <img
//             src={LogoMolsys}
//             alt="New Image"
//             style={{ height: '130px', width: '220px' }}
//           />
//         </div>

//         <div className="col-xs-12 col-sm-6 col-md-6 mt-sm-4">
//           <ul className="list-unstyled list-inline social text-center">
//             <li className="list-inline-item mx-2">
//               <a href="https://www.linkedin.com/company/molsys/about/">
//                 <i className="fa fa-linkedin"></i>
//               </a>
//             </li>
//             <li className="list-inline-item mx-2">
//               <a href="https://www.facebook.com/molsys/">
//                 <i className="fa fa-facebook"></i>
//               </a>
//             </li>
//             <li className="list-inline-item mx-2">
//               <a href="https://twitter.com/molsys?lang=en">
//                 <i className="fa fa-twitter"></i>
//               </a>
//             </li>
//             <li className="list-inline-item mx-2">
//               <a href="https://www.instagram.com/molsys_scientific/?hl=en">
//                 <i className="fa fa-instagram"></i>
//               </a>
//             </li>
//             <div className="col text-center mt-3">
//               <input
//                 type="email"
//                 placeholder="Enter your mail"
//                 className="btn btn-outline-secondary"
//               />
//               <button
//                 type="submit"
//                 className="btn btn-    shadow btn-outline-secondary"
//               >
//                 Submit
//               </button>
//               <br />
//               <input
//                 type="checkbox"
//                 id="permission"
//                 name="permission"
//                 className="mt-3"
//               />
//               <label htmlFor="permission" className="mx-2">
//                 Allow access to data
//               </label>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;


// 

// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
import LogoMolsys from "../assets/LogoMolsys.png";
import footer from '../assets/footer_makeachange.jpg';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
                <Link to="/privacypolicy" className="footer-link" onClick={scrollToTop}>
                  <span className="link-arrow">→</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/register" className="footer-link" onClick={scrollToTop}>
                  <span className="link-arrow">→</span>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="footer-link" onClick={scrollToTop}>
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
                <Link to="/AboutUs" className="footer-link" onClick={scrollToTop}>
                  <span className="link-arrow">→</span>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="footer-link" onClick={scrollToTop}>
                  <span className="link-arrow">→</span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link" onClick={scrollToTop}>
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

