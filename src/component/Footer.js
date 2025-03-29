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


import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
import LogoMolsys from "../assets/LogoMolsys.png";
import footer from '../assets/footer_makeachange.jpg';

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="section-1"
      style={{ backgroundImage: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div className="row text-center text-xs-center text-sm-left text-md-left mx-5">
        <div className="col-xs-6 col-sm-3 col-md-3">
          <h5 className="h5">
            <small>
              <b>Resources</b>
            </small>
          </h5>
          <ul className="list-unstyled quick-links">
            <li>
              <Link to="/privacypolicy">
                <i className="fa fa-angle-double-right"></i>Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="fa fa-angle-double-right"></i>Sign Up
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy">
                <i className="fa fa-angle-double-right"></i>FAQ's
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-xs-6 col-sm-3 col-md-3">
          <h5 className="h5-1">
            <small>
              <b>About</b>
            </small>
          </h5>
          <ul className="list-unstyled quick-links">
            <li>
              <Link to="/AboutUs">
                <i className="fa fa-angle-double-right"></i>Our Story
              </Link>
            </li>
            <li>
              <Link to="/contactUs">
                <i className="fa fa-angle-double-right"></i>Contact Us
              </Link>
            </li>
            <li>
              <Link to="/careers">
                <i className="fa fa-angle-double-right"></i>Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 mt-4">
          <img
            src={LogoMolsys}
            alt="New Image"
            style={{ height: '130px', width: '220px' }}
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 mt-sm-4">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item mx-2">
              <a href="https://www.linkedin.com/company/molsys/about/">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://www.facebook.com/molsys/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://twitter.com/molsys?lang=en">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://www.instagram.com/molsys_scientific/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <div className="col text-center mt-3">
              <input
                type="email"
                placeholder="Enter your mail"
                className="btn btn-outline-secondary"
              />
              <button
                type="submit"
                className="btn btn-    shadow btn-outline-secondary"
              >
                Submit
              </button>
              <br />
              <input
                type="checkbox"
                id="permission"
                name="permission"
                className="mt-3"
              />
              <label htmlFor="permission" className="mx-2">
                Allow access to data
              </label>
            </div>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-3" style={{ backgroundColor: 'white' }}>
        <small>
          &copy; {currentYear} All copyright belongs to{' '}
          <a
            href="https://molsys.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
            onMouseOver={(e) => (e.target.style.color = '#007bff')} // Hover effect
            onMouseOut={(e) => (e.target.style.color = 'inherit')} // Reset color on mouse out
          >
            molsys.in
          </a>
        </small>
      </div>
    </section>
  );
}

export default Footer;