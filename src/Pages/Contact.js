// import React from 'react';
// import ConatctImg from '../assets/ReadyWhenYouAre.png';
// import MailGif from '../assets/mailbox.gif';
// import World from '../assets/world.jpg';
// import * as Icon from "react-bootstrap-icons";


// function Contact() {

//   return (
  
//     <section id="team" class="team_member section-padding fade-in">
//     <div class="box">
//     <figure>
//       <img src={ConatctImg} class="img-fluid mt-5 w-100" alt="profile cover"/>
//     </figure>
//   <div className="row text-center mt-5">
//     <div className='col-12 col-md-2 mx-3 mb-3'>
//       <img src={MailGif} height={100} alt="Mail Icon" />
//     </div>

//     <div className="col-12 col-md-3 mb-3">
//       <div className="p-3 btn shadow-lg">
//         <h5>&#10148; General Enquiries</h5>
//         <a href="mailto:info@molsys.in" className="link-dark link-offset-2 link-underline link-underline-opacity-0">info@molsys.in</a>
//       </div>
//     </div>
   
//     {/* <div className="col-12 col-md-3 mb-3">
//       <div className="p-3 btn shadow">
//         <h5>&#10148; Admissions</h5>
//         <a href="mailto:admissions@molsys.in" className="link-dark link-offset-2 link-underline link-underline-opacity-0">admissions@molsys.in</a>
//       </div>
//     </div> */}

//     <div className="col-12 col-md-3 mb-3">
//       <div className="p-3 btn shadow">
//         <h5>&#10148; Services</h5>
//         <a href="mailto:solutions@molsys.in" className="link-dark link-offset-2 link-underline link-underline-opacity-0">solutions@molsys.in</a>
//       </div>
//     </div>
//   </div>

//     <div class="container mt-5">
//       <div class="row">
          
//           <div class="col-md-6 ">
              
//               {/* <div class="row mt-3">
//                   <div class="col m-5 p-2" >
//                       <a href="https://maps.google.com/?q=Your+Address+Here" target="_blank" class="btn btn shadow">
//                           <div class="card-body">
//                               <h5 >Banglore</h5>
//                               <h6>Molsys Private Limited - Registered Office</h6>
//                               <p class="card-text"><small>1st floor, #524, 23rd cross, 13th main , Judicial Layout, Yelahanka, Bangalore, Karnataka 560 065 INDIA <br/>Tel: +91 8884229559,  +91 9620279341</small></p>
//                           </div>
//                       </a>
//                   </div>
//               </div> */}
              
//               <div class="row">
//                   <div class="col m-5 p-2">
//                       <a href="https://maps.app.goo.gl/2c4N3YT3DeqehxN28" target="_blank" class="btn btn shadow">
//                           <div class="card-body">
//                           <h5 >Mangaluru</h5>
//                               <h6>Molsys Private Limited - R&D Unit </h6>
//                               <p class="card-text"><small> Yenepoya Technology Incubator ,University Road, Deralakatte, Ullal, Karnataka 575022 <br/>Tel: 08069328714</small></p>
//                           </div>
//                       </a>
//                   </div>
//               </div>
//           </div>
          
//           <div class="col-md-6 mt-5  ">
              
//           <img src={World} className="img-fluid shadow rounded mt-5" />
//           </div>
//       </div>
//   </div>

//   </div>

// </section>
//   )
// }

// export default Contact;








import React from 'react';
import ConatctImg from '../assets/ReadyWhenYouAre.png';
import MailGif from '../assets/mailbox.gif';
import World from '../assets/world.jpg';
import * as Icon from "react-bootstrap-icons";

function Contact() {
  return (
    <section id="contact" className="contact-section fade-in bg-light">
      {/* Hero Image (unchanged as requested) */}
      <div className="container-fluid px-0">
        <figure className="mb-0">
          <img src={ConatctImg} className="img-fluid w-100" alt="Ready When You Are" />
        </figure>
      </div>

      {/* Email Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
            <p className="lead text-muted">We're here to answer your questions and discuss how we can work together.</p>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-md-1 d-flex align-items-center justify-content-center">
            <img src={MailGif} height={80} alt="Mail Icon" className="img-fluid" />
          </div>

          <div className="col-md-5">
            <div className="p-4 h-100 bg-white rounded-4 shadow-sm transition-all hover:shadow-lg border border-light">
              <div className="d-flex align-items-center mb-3">
                <Icon.EnvelopeOpen className="text-primary me-2" size={24} />
                <h5 className="mb-0 text-dark">General Enquiries</h5>
              </div>
              <a href="mailto:info@molsys.in" className="text-decoration-none">
                <p className="mb-0 text-primary d-flex align-items-center">
                  <Icon.ArrowRightShort size={24} className="me-1" />
                  info@molsys.in
                </p>
              </a>
            </div>
          </div>

          <div className="col-md-5">
            <div className="p-4 h-100 bg-white rounded-4 shadow-sm transition-all hover:shadow-lg border border-light">
              <div className="d-flex align-items-center mb-3">
                <Icon.Briefcase className="text-primary me-2" size={24} />
                <h5 className="mb-0 text-dark">Services</h5>
              </div>
              <a href="mailto:solutions@molsys.in" className="text-decoration-none">
                <p className="mb-0 text-primary d-flex align-items-center">
                  <Icon.ArrowRightShort size={24} className="me-1" />
                  solutions@molsys.in
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="container-fluid bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="p-4 p-lg-5 bg-light rounded-4 shadow-sm h-100">
                <h3 className="fw-bold mb-4 text-dark">Our Locations</h3>
                
                <div className="mb-4">
                  <a href="https://maps.app.goo.gl/2c4N3YT3DeqehxN28" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="p-4 rounded-4 bg-white shadow-sm transition-all hover:shadow-lg border border-light">
                      <div className="d-flex align-items-start mb-2">
                        <Icon.Building className="text-primary mt-1 me-3" size={20} />
                        <div>
                          <h5 className="mb-1 text-dark">Mangaluru</h5>
                          <h6 className="text-muted small">Molsys Private Limited - R&D Unit</h6>
                        </div>
                      </div>
                      <p className="mb-0 text-muted small ps-4">
                        Yenepoya Technology Incubator, University Road, Deralakatte, Ullal, Karnataka 575022
                        <br />
                        <Icon.Telephone className="me-2" size={14} />
                        +91 8069328714
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>


          <div className="col-lg-6">
  <div className="position-relative overflow-hidden rounded-4 shadow-lg h-100">
    <div className="ratio ratio-16x9">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4861701399163!2d74.8798776!3d12.8118298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35fc710e7c9e3%3A0x230582ca407a47e!2sYenepoya%20Technology%20Incubator!5e0!3m2!1sen!2sin!4v1753165937353!5m2!1sen!2sin" 
        className="rounded-4"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Molsys Location Map"
      ></iframe>
    </div>
    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center pointer-events-none">
     
    </div>
  </div>
</div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
