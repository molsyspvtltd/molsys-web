// import React from "react";
// import Teambg from '../assets/teambgmain.jpg'
// import Vision from '../assets/visionbg.jpg';
// import mission from '../assets/mission.jpg';
// import mission1 from '../assets/mission1.jpg';
// import vision1 from '../assets/vision1.jpg';
// import CoreValues from '../assets/CoreValues.jpg'
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import MailIcon from '@material-ui/icons/Mail';
// import '../style/About.css';

// import GauravBanerje from '../assets/gaurab.jpeg'
// import GaurabBanerjee from "../assets/gaurabsir1.png"
// import Anuraj from "../assets/anuraj1.png"
// import Nishanth from '../assets/Nishant.jpg'
// import None from '../assets/karthik.jpg'
// import melbin from '../assets/melbin.jpg'
// import madhurima from '../assets/madhurima.jpg'
// import keshav from '../assets/keshava.jpg'
// import shreya from '../assets/shreyashri.png'
// import AnimatedStatsSection from '../helpers/AnimatedStatsSection'
// // import GoogleIcon from '@material-ui/icons/Google';




// function AboutUs() {

// 	const paragraphStyle = {
// 		textAlign: 'justify',
// 	  };

//   return (

//     <section id="team" class="team section-padding fade-in">
//     <div className="container-fluid">
//     <section className='section-fluid mt-5 pt-2' style={{backgroundImage: `url(${Vision})`, height: '95vh' , backgroundSize: "cover"} } >
//     <div className="container-fluid " >


//         <div className="row-fluid "  >
//           <div className="col-md-6 mt-5 pt-5 ms-5 ps-5 " >
//             <div className="about-us-text mt-5 pt-5">
//               <h1>Molsys scientific (Molsys Private Limited) is a Biotechnology startup set up in December 2017 and officially incorporated in June 2018.</h1>
//               <hr className=" me-5 ps-5 pe-5  w-100" />
//               <h5>
//               Founded by Anupam J Das and Gaurab Banerjee.
//               </h5>
//             </div>
//           </div>
//         </div>

//       </div>

// 	  <AnimatedStatsSection />

//     </section>

//     {/* Core Values */}

// 	<section className="section mt-5 pt-5" style={{ marginTop: '100px' }}>
//   <div className="container-fluid" style={{ backgroundImage: `url(${CoreValues})`, backgroundSize: "cover" }}>
//     <div className="row">
//       <div className="col-12">
//         <h4 className="p-5 text-center">&#10148; Core Values</h4>
//       </div>
//     </div>
//     <div className="m-auto">
//       <div className="row">
//         <div className="col-md-2 d-none d-md-block">
//           {/* This column will be hidden on mobile screens */}
//           <div className="p-5 m-3"></div>
//         </div>
//         <div className="col-12 col-md-4">
//           <div className="card shadow-lg p-5 m-3" style={{ opacity: 0.9 }}>
//             <h5>Intergrity</h5>
//             <p className="mt-3 lead"><small>High principles are not negotiable. We do the right thing at all turns, even when no one is looking with the right Intentions and with Honesty.</small></p>
//           </div>
//         </div>
//         <div className="col-12 col-md-4">
//           <div className="card shadow-lg p-5 m-3" style={{ opacity: 0.9 }}>
//             <h5>Nurturing Work Environment</h5>
//             <p className="mt-3 lead"><small>We provide a safe, empathetic and nurturing workplace environment. We promote and appreciate the contributions of everyone on the team.</small></p>
//           </div>
//         </div>
//         <div className="col-md-2 d-none d-md-block">
//           {/* This column will be hidden on mobile screens */}
//           <div className="p-5 m-3"></div>
//         </div>
// 		<div className="col-md-2 d-none d-md-block">
//           {/* This column will be hidden on mobile screens */}
//           <div className="p-5 m-3"></div>
//         </div>
//         <div className="col-12 col-md-4">
//           <div className="card shadow-lg p-5 m-3 mb-5 pb-5" style={{ opacity: 0.9 }}>
//             <h5>High Performance</h5>
//             <p className="mt-3 lead"><small>We focus on devising creative & ground-breaking solutions to problems related to Omics Research, Clinical Genomics, Personalised Medicine etc.</small></p>
//           </div>
//         </div>
//         <div className="col-12 col-md-4">
//           <div className="card shadow-lg p-5 m-3 mb-5 pb-5" style={{ opacity: 0.9 }}>
//             <h5>Collaboration</h5>
//             <p className="mt-3 lead"><small>We Promote and Emphasise on active client's participation on every Project, Ensuring a transparent knowledge transfer to our Client's.</small></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// 	{/* vision */}

// 	<section style={{ backgroundImage: `url(${mission})`, backgroundSize: "cover" }}>
//   <div className="container-fluid card" style={{ opacity: 0.8 }}>
//     <div className="row">
//       <div className="col-md-6">
//         <div>
//           <h4 className="p-5 text-center">&#10148; Our Vision</h4>
//           <hr className="underLine mx-auto" />
//           <h3 className="text-center">Empowering India and the World With Personalized Medicine.</h3>
//         </div>
//       </div>
//       <div className="col-md-6 p-3">
//         <img src={vision1} alt="about" className="rounded d-none d-md-block" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }} />
//       </div>
//     </div>

//     <div className="row">
//       <div className="col-md-6 p-3">
//         <img src={mission1} alt="about" className="rounded d-none d-md-block" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }} />
//       </div>
//       <div className="col-md-6">
//         <div>
//           <h4 className="p-5 text-center">&#10148; Our Mission</h4>
//           <hr className="underLine mx-auto" />
//           <h5 style={paragraphStyle}>
//             To Concretize the roadmap to Indian personalized medicine by introducing cutting edge Omics and Data Analytics Solutions.
//             <br />
//             <br />
//             Molsys envisions to create the future workforce for India skilled in Genomics Data Sciences and Data Management. Our aim is to equip the future generation of Scientists, Researchers, and students with advanced Data Management skills and enable the implementation of such skills in research.
//           </h5>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <style>
// {`
//   @media (min-width: 768px) {
//     /* Apply styles for screens larger than or equal to 768px width (tablets and desktops) */
//     section {
//       background-size: cover;
//     }
//   }

//   @media (max-width: 767px) {
//     /* Apply styles for screens smaller than 768px width (mobile devices) */
//     .col-6 {
//       /* Hide the second column with the images on mobile view */
//       display: none;
//     }
//   }
//   `}
// </style>



//    {/* Team */}

//    <section id="team" class="team_member section-padding" style={{backgroundImage: `url(${Teambg})`, backgroundSize: "cover"} }>
//     <div class="container mt-5 pt-5">				
//       <div class="section-title text-center">
// 			<h1>MEET OUR TEAM</h1>
// 			{/* <p>Empowering India and the world with personalized medicine.</p> */}
// 		</div>				
// 		<div class="row text-center mt-5">
//     <div class="col-md-1 col-sm-6 col-xs-12"></div>
// 			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
// 				<div class="our-team">
// 					<div class="team_img">
// 						<img src={GaurabBanerjee} alt="team-image" style={{height: 300}}/>
// 						<ul class="social">
// 							<li><a href="https://twitter.com/insanuation"><i ><TwitterIcon/></i></a></li>
// 							<li><a href="mailto:gaurab.banerjee@molsys.in"><i ><MailIcon/></i></a></li>
// 							<li><a href="https://www.linkedin.com/in/gaurab-banerjee-8961b927/"><i ><LinkedInIcon/></i></a></li>
// 						</ul>
// 					</div>
// 					<div class="team-content">
// 						<h3 class="title">Gaurab Banerjee</h3>
// 						<span class="post">CEO & Co-Founder</span>
// 					</div>
// 				</div>
// 			</div>	
//       <div class="col-md-1 col-sm-6 col-xs-12"></div>												
// 			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
// 				<div class="our-team">
// 					<div class="team_img">
// 					<img src={Nishanth} alt="team-image" style={{height: 300}}/>
// 						<ul class="social">
//                             <li><a href="#"><i ><TwitterIcon/></i></a></li>
// 							<li><a href="mailto:nishant.sharma@molsys.in"><i ><MailIcon/></i></a></li>
// 							<li><a href="https://www.linkedin.com/in/nishant-sharma-672194b6/"><i ><LinkedInIcon/></i></a></li>
// 						</ul>
// 					</div>
// 					<div class="team-content">
// 						<h3 class="title">Nishant Sharma</h3>
// 						<span class="post">General Manager<br></br>M.Sc. Biotechnology</span>
// 					</div>
// 				</div>
// 			</div>
//       <div class="col-md-1 col-sm-6 col-xs-12 "></div>
// 	 		 <div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
// 			  <div class="our-team">
// 					<div class="team_img">
// 						<img src={madhurima} alt="team-image" style={{height: 300}}/>
// 						<ul class="social">
//                             <li><a href="#"><i ><TwitterIcon/></i></a></li>
// 							<li><a href="mailto:madhurima.mukherjee@molsys.in"><i ><MailIcon/></i></a></li>
// 							<li><a href="https://www.linkedin.com/in/madhurima-mukherjee-4256b6127/"><i ><LinkedInIcon/></i></a></li>
// 						</ul>
// 					</div>
// 					<div class="team-content ">
// 						<h3 class="title">Madhurima Mukherjee</h3>
// 						<span class="post">VP- Strategy and Product Development<br></br>M.Sc. (Human Physiology), Advanced General Management- IMT Ghaziabad</span>
// 					</div>
// 				</div>
// 			</div>
// 			<div class="col-md-1 col-sm-6 col-xs-12 "></div>
// 			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
// 			<div class="our-team">
// 					<div class="team_img">
// 						<img src={melbin} alt="team-image" style={{height: 300}}/>
// 						<ul class="social">
// 						<li><a href="https://twitter.com/melbin23george"><i ><TwitterIcon/></i></a></li>
// 							<li><a href="mailto:melbin.molsys@gmail.com"><i ><MailIcon/></i></a></li>
// 							<li><a href="https://www.linkedin.com/in/melbin-george/"><i ><LinkedInIcon/></i></a></li>
// 						</ul>
// 					</div>
// 					<div class="team-content">
// 						<h3 class="title">Melbin George</h3>
// 						<span class="">Full Stack Developer<br></br>B.E Computer Science</span>
// 					</div>
// 				</div>
// 			</div>
// 			<div class="col-md-1 col-sm-6 col-xs-12 "></div>
// 			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
// 				<div class="our-team">
// 					<div class="team_img">
// 					<img src={Anuraj} alt="team-image" style={{height: 300}}/>
// 						<ul class="social">
//                             <li><a href="https://twitter.com/melbin23george"><i ><TwitterIcon/></i></a></li>
// 							<li><a href="mailto:melbin.molsys@gmail.com"><i ><MailIcon/></i></a></li>
// 							<li><a href="https://www.linkedin.com/in/melbin-george/"><i ><LinkedInIcon/></i></a></li>
// 						</ul>
// 					</div>
// 					<div class="team-content">
// 						<h3 class="title">Anuraj O P</h3>
// 						<span class="post">Data Analyst<br></br>B.Sc. Biotechnology, M.Sc. Bioinformatics</span>
// 					</div>
// 				</div>
// 			</div>
// 			{/* <div class="col-md-3 col-sm-6 col-xs-12">
// 			</div> */}
// 			<div class="col-md-1 col-sm-6 col-xs-12 "></div>
// 			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" data-wow-offset="0">
// 			<div class="our-team">
// 					<div class="team_img">
// 					<img src={None} alt="team-image" style={{height: 300}}/>
// 						<ul class="social">
//                             <li><a href="#"><i ><TwitterIcon/></i></a></li>
// 							<li><a href="mailto:solutions@molsys.in"><i ><MailIcon/></i></a></li>
// 							<li><a href="https://www.linkedin.com/in/dr-shrayashi-biswas-96692821/"><i ><LinkedInIcon/></i></a></li>
// 						</ul>
// 					</div>
// 					<div class="team-content">
// 						<h3 class="title">Dr. Shrayashi Biswas</h3>
// 						<span class="post">Senior Consultant Genomics Informatics   <br></br>B.Tech, M.Tech Bio Tech, PH.d(NIBMG)</span>
// 					</div>
// 				</div>
// 			</div>


// 		</div>
// 	</div>			
//   <div class="container mt-5 pt-5">				
//         <div class="section-title text-center">
//             <h1>SCIENTIFIC ADVISORY</h1>
//         </div>
//         <div class="row justify-content-center mt-5 pt-3"> {/* Added justify-content-center */}
//             <div class="col-md-6 col-lg-4 col-sm-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
//                 <div class="our-team">
//                     <div class="team_img">
//                         <img src={keshav} alt="team-image" style={{height: 300}}/>
//                         <ul class="social">
//                             <li><a href="#"><i><TwitterIcon/></i></a></li>
//                             <li><a href="mailto:soltions@molsys.in"><i><MailIcon/></i></a></li>
//                             <li><a href="https://www.linkedin.com/in/t-s-keshava-prasad-b445b514/"><i><LinkedInIcon/></i></a></li>
//                         </ul>
//                     </div>
//                     <div class="team-content" style={{
//     display: 'flex', 
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center'
// }}>
//     <h3 class="title" style={{width: '100%'}}>Dr. Keshava Prasad</h3>
//     <span class="post" style={{
//         width: '100%',
//         padding: '0 15px'
//     }}>Omics Expert<br></br>Deputy Director, Yenepoya Research Centre, Yenepoya University, INDIA</span>
// </div>
//                 </div>
//             </div>	
//         </div>
//         </div>
// </section>



//     </div>


// 	</section>


//   );
// }
// export default AboutUs;
import React from "react";
import Teambg from '../assets/teambgmain.jpg';
import Vision from '../assets/visionbg.jpg';
import mission from '../assets/mission.jpg';
import mission1 from '../assets/mission1.jpg';
import vision1 from '../assets/vision1.jpg';
import CoreValues from '../assets/CoreValues.jpg';
import '../style/About.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import GauravBanerje from '../assets/gaurab.jpeg';
import GaurabBanerjee from "../assets/gaurabsir1.png";
import Anuraj from "../assets/anuraj1.png";
import Nishanth from '../assets/Nishant.jpg';
import None from '../assets/karthik.jpg';
import melbin from '../assets/melbin.jpg';
import madhurima from '../assets/madhurima.jpg';
import keshav from '../assets/keshava.jpg';
import shreya from '../assets/shreyashri.png';
import AnimatedStatsSection from '../helpers/AnimatedStatsSection';

function AboutUs() {
  const paragraphStyle = {
    textAlign: 'justify',
  };

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Vision})` }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Molsys Scientific</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">
              A Biotechnology startup established in December 2017 and officially incorporated in June 2018.
            </p>
            <p className="hero-founders">
              Founded by Anupam J Das and Gaurab Banerjee
            </p>
          </div>
        </div>
        <AnimatedStatsSection />
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="section-divider"></div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Integrity</h3>
              <p>High principles are not negotiable. We do the right thing at all turns, even when no one is looking with the right Intentions and with Honesty.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Nurturing Work Environment</h3>
              <p>We provide a safe, empathetic and nurturing workplace environment. We promote and appreciate the contributions of everyone on the team.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>High Performance</h3>
              <p>We focus on devising creative & ground-breaking solutions to problems related to Omics Research, Clinical Genomics, Personalised Medicine etc.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Collaboration</h3>
              <p>We Promote and Emphasise on active client's participation on every Project, Ensuring a transparent knowledge transfer to our Client's.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-row">
            <div className="vm-content">
              <div className="section-header">
                <h2>Our Vision</h2>
                <div className="section-divider"></div>
              </div>
              <h3>Empowering India and the World With Personalized Medicine.</h3>
            </div>
            <div className="vm-image">
              <img src={vision1} alt="Vision illustration" />
            </div>
          </div>

          <div className="vm-row reverse">
            <div className="vm-content">
              <div className="section-header">
                <h2>Our Mission</h2>
                <div className="section-divider"></div>
              </div>
              <p style={paragraphStyle}>
                To Concretize the roadmap to Indian personalized medicine by introducing cutting edge Omics and Data Analytics Solutions.
                <br /><br />
                Molsys envisions to create the future workforce for India skilled in Genomics Data Sciences and Data Management. Our aim is to equip the future generation of Scientists, Researchers, and students with advanced Data Management skills and enable the implementation of such skills in research.
              </p>
            </div>
            <div className="vm-image">
              <img src={mission1} alt="Mission illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Teambg})` }}>
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <div className="section-divider"></div>
          </div>

          <div className="team-grid">
            {/* Team Member 1 */}
            <div className="team-card">
              <div className="team-image">
                <img src={GaurabBanerjee} alt="Gaurab Banerjee" />
                <div className="team-social">
                  <a href="https://twitter.com/insanuation"><TwitterIcon /></a>
                  <a href="mailto:gaurab.banerjee@molsys.in"><MailIcon /></a>
                  <a href="https://www.linkedin.com/in/gaurab-banerjee-8961b927/"><LinkedInIcon /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Gaurab Banerjee</h3>
                <p className="position">CEO & Co-Founder</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-card">
              <div className="team-image">
                <img src={Nishanth} alt="Nishant Sharma" />
                <div className="team-social">
                  <a href="#"><TwitterIcon /></a>
                  <a href="mailto:nishant.sharma@molsys.in"><MailIcon /></a>
                  <a href="https://www.linkedin.com/in/nishant-sharma-672194b6/"><LinkedInIcon/></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Nishant Sharma</h3>
                <p className="position">General Manager<br />M.Sc. Biotechnology</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-card">
              <div className="team-image">
                <img src={madhurima} alt="Madhurima Mukherjee" />
                <div className="team-social">
                  <a href="#"><TwitterIcon /></a>
                  <a href="mailto:madhurima.mukherjee@molsys.in"><MailIcon /></a>
                  <a href="https://www.linkedin.com/in/madhurima-mukherjee-4256b6127/"><LinkedInIcon /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Madhurima Mukherjee</h3>
                <p className="position">VP- Strategy and Product Development<br />M.Sc. (Human Physiology), Advanced General Management- IMT Ghaziabad</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="team-card">
              <div className="team-image">
                <img src={melbin} alt="Melbin George" />
                <div className="team-social">
                  <a href="https://twitter.com/melbin23george"><TwitterIcon /></a>
                  <a href="mailto:melbin.molsys@gmail.com"><MailIcon /></a>
                  <a href="https://www.linkedin.com/in/melbin-george/"><LinkedInIcon /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Melbin George</h3>
                <p className="position">Full Stack Developer<br />B.E Computer Science</p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="team-card">
              <div className="team-image">
                <img src={Anuraj} alt="Anuraj O P" />
                <div className="team-social">
                  <a href="#"><TwitterIcon /></a>
                  <a href="mailto:solutions@molsys.in"><MailIcon /></a>
                  <a href="#"><LinkedInIcon /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Anuraj O P</h3>
                <p className="position">Data Analyst<br />B.Sc. Biotechnology, M.Sc. Bioinformatics</p>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="team-card">
              <div className="team-image">
                <img src={None} alt="Dr. Shrayashi Biswas" />
                <div className="team-social">
                  <a href="#"><TwitterIcon /></a>
                  <a href="mailto:solutions@molsys.in"><MailIcon /></a>
                  <a href="https://www.linkedin.com/in/dr-shrayashi-biswas-96692821/"><LinkedInIcon /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Dr. Shrayashi Biswas</h3>
                <p className="position">Senior Consultant Genomics Informatics<br />B.Tech, M.Tech Bio Tech, PH.d(NIBMG)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Advisory Section */}
      <section className="advisory-section">
        <div className="container">
          <div className="section-header">
            <h2>Scientific Advisory</h2>
            <div className="section-divider"></div>
          </div>

          <div className="advisory-card">
            <div className="advisor-image">
              <img src={keshav} alt="Dr. Keshava Prasad" />
              <div className="advisor-social">
                <a href="#"><TwitterIcon /></a>
                <a href="mailto:soltions@molsys.in"><MailIcon /></a>
                <a href="https://www.linkedin.com/in/t-s-keshava-prasad-b445b514/"><LinkedInIcon /></a>
              </div>
            </div>
            <div className="advisor-info">
              <h3>Dr. Keshava Prasad</h3>
              <p className="position">Omics Expert</p>
              <p className="institution">Deputy Director, Yenepoya Research Centre, Yenepoya University, INDIA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;