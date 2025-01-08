import React from "react";
import Teambg from '../assets/teambgmain.jpg'
import Vision from '../assets/visionbg.jpg';
import mission from '../assets/mission.jpg';
import mission1 from '../assets/mission1.jpg';
import vision1 from '../assets/vision1.jpg';
import CoreValues from '../assets/CoreValues.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import '../style/About.css';

import GauravBanerje from '../assets/gaurab.jpeg'
import Nishanth from '../assets/Nishant.jpg'
import None from '../assets/karthik.jpg'
import melbin from '../assets/melbin.jpg'
import madhurima from '../assets/madhurima.jpg'
import keshav from '../assets/keshava.jpg'
import shreya from '../assets/shreyashri.png'
import AnimatedStatsSection from '../helpers/AnimatedStatsSection'
// import GoogleIcon from '@material-ui/icons/Google';




function AboutUs() {

	const paragraphStyle = {
		textAlign: 'justify',
	  };

  return (

    <section id="team" class="team section-padding fade-in">
    <div className="container-fluid">
    <section className='section-fluid mt-5 pt-2' style={{backgroundImage: `url(${Vision})`, height: '95vh' , backgroundSize: "cover"} } >
    <div className="container-fluid " >
        
    
        <div className="row-fluid "  >
          <div className="col-md-6 mt-5 pt-5 ms-5 ps-5 " >
            <div className="about-us-text mt-5 pt-5">
              <h1>Molsys scientific (Molsys Private Limited) is a Biotechnology startup set up in December 2017 and officially incorporated in June 2018.</h1>
              <hr className=" me-5 ps-5 pe-5  w-100" />
              <h5>
              Founded by Anupam J Das and Gaurab Banerjee.
              </h5>
            </div>
          </div>
        </div>

      </div>

	  <AnimatedStatsSection />
	  
    </section>

    {/* Core Values */}

	<section className="section mt-5 pt-5" style={{ marginTop: '100px' }}>
  <div className="container-fluid" style={{ backgroundImage: `url(${CoreValues})`, backgroundSize: "cover" }}>
    <div className="row">
      <div className="col-12">
        <h4 className="p-5 text-center">&#10148; Core Values</h4>
      </div>
    </div>
    <div className="m-auto">
      <div className="row">
        <div className="col-md-2 d-none d-md-block">
          {/* This column will be hidden on mobile screens */}
          <div className="p-5 m-3"></div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow-lg p-5 m-3" style={{ opacity: 0.9 }}>
            <h5>Intergrity</h5>
            <p className="mt-3 lead"><small>High principles are not negotiable. We do the right thing at all turns, even when no one is looking with the right Intentions and with Honesty.</small></p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow-lg p-5 m-3" style={{ opacity: 0.9 }}>
            <h5>Nurturing Work Environment</h5>
            <p className="mt-3 lead"><small>We provide a safe, empathetic and nurturing workplace environment. We promote and appreciate the contributions of everyone on the team.</small></p>
          </div>
        </div>
        <div className="col-md-2 d-none d-md-block">
          {/* This column will be hidden on mobile screens */}
          <div className="p-5 m-3"></div>
        </div>
		<div className="col-md-2 d-none d-md-block">
          {/* This column will be hidden on mobile screens */}
          <div className="p-5 m-3"></div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow-lg p-5 m-3 mb-5 pb-5" style={{ opacity: 0.9 }}>
            <h5>High Performance</h5>
            <p className="mt-3 lead"><small>We focus on devising creative & ground-breaking solutions to problems related to Omics Research, Clinical Genomics, Personalised Medicine etc.</small></p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow-lg p-5 m-3 mb-5 pb-5" style={{ opacity: 0.9 }}>
            <h5>Collaboration</h5>
            <p className="mt-3 lead"><small>We Promote and Emphasise on active client's participation on every Project, Ensuring a transparent knowledge transfer to our Client's.</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


	{/* vision */}

	<section style={{ backgroundImage: `url(${mission})`, backgroundSize: "cover" }}>
  <div className="container-fluid card" style={{ opacity: 0.8 }}>
    <div className="row">
      <div className="col-md-6">
        <div>
          <h4 className="p-5 text-center">&#10148; Our Vision</h4>
          <hr className="underLine mx-auto" />
          <h3 className="text-center">Empowering India and the World With Personalized Medicine.</h3>
        </div>
      </div>
      <div className="col-md-6 p-3">
        <img src={vision1} alt="about" className="rounded d-none d-md-block" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }} />
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 p-3">
        <img src={mission1} alt="about" className="rounded d-none d-md-block" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }} />
      </div>
      <div className="col-md-6">
        <div>
          <h4 className="p-5 text-center">&#10148; Our Mission</h4>
          <hr className="underLine mx-auto" />
          <h5 style={paragraphStyle}>
            To Concretize the roadmap to Indian personalized medicine by introducing cutting edge Omics and Data Analytics Solutions.
            <br />
            <br />
            Molsys envisions to create the future workforce for India skilled in Genomics Data Sciences and Data Management. Our aim is to equip the future generation of Scientists, Researchers, and students with advanced Data Management skills and enable the implementation of such skills in research.
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
{`
  @media (min-width: 768px) {
    /* Apply styles for screens larger than or equal to 768px width (tablets and desktops) */
    section {
      background-size: cover;
    }
  }

  @media (max-width: 767px) {
    /* Apply styles for screens smaller than 768px width (mobile devices) */
    .col-6 {
      /* Hide the second column with the images on mobile view */
      display: none;
    }
  }
  `}
</style>



   {/* Team */}

   <section id="team" class="team_member section-padding" style={{backgroundImage: `url(${Teambg})`, backgroundSize: "cover"} }>
    <div class="container mt-5 pt-5">				
      <div class="section-title text-center">
			<h1>MEET OUR TEAM</h1>
			{/* <p>Empowering India and the world with personalized medicine.</p> */}
		</div>				
		<div class="row text-center mt-5">
    {/* <div class="col-md-1 col-sm-6 col-xs-12"></div> */}
			<div class="col-md-4 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
				<div class="our-team">
					<div class="team_img">
						<img src={GauravBanerje} alt="team-image" style={{height: 300}}/>
						<ul class="social">
							<li><a href="https://twitter.com/insanuation"><i ><TwitterIcon/></i></a></li>
							<li><a href="mailto:gaurab.banerjee@molsys.in"><i ><MailIcon/></i></a></li>
							<li><a href="https://www.linkedin.com/in/gaurab-banerjee-8961b927/"><i ><LinkedInIcon/></i></a></li>
						</ul>
					</div>
					<div class="team-content">
						<h3 class="title">Gaurab Banerjee</h3>
						<span class="post">CEO & Co-Founder</span>
					</div>
				</div>
			</div>	
      <div class="col-md-1 col-sm-6 col-xs-12"></div>												
			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
				<div class="our-team">
					<div class="team_img">
					<img src={Nishanth} alt="team-image" style={{height: 300}}/>
						<ul class="social">
                            <li><a href="#"><i ><TwitterIcon/></i></a></li>
							<li><a href="mailto:nishant.sharma@molsys.in"><i ><MailIcon/></i></a></li>
							<li><a href="https://www.linkedin.com/in/nishant-sharma-672194b6/"><i ><LinkedInIcon/></i></a></li>
						</ul>
					</div>
					<div class="team-content">
						<h3 class="title">Nishant Sharma</h3>
						<span class="post">General Manager<br></br>M.Sc. Biotechnology</span>
					</div>
				</div>
			</div>
      <div class="col-md-1 col-sm-6 col-xs-12 "></div>
	 		 <div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
			  <div class="our-team">
					<div class="team_img">
						<img src={madhurima} alt="team-image" style={{height: 300}}/>
						<ul class="social">
                            <li><a href="#"><i ><TwitterIcon/></i></a></li>
							<li><a href="mailto:madhurima.mukherjee@molsys.in"><i ><MailIcon/></i></a></li>
							<li><a href="https://www.linkedin.com/in/madhurima-mukherjee-4256b6127/"><i ><LinkedInIcon/></i></a></li>
						</ul>
					</div>
					<div class="team-content ">
						<h3 class="title">Madhurima Mukherjee</h3>
						<span class="post">VP- Strategy and Product Development<br></br>M.Sc. (Human Physiology), Advanced General Management- IMT Ghaziabad</span>
					</div>
				</div>
			</div>
			<div class="col-md-1 col-sm-6 col-xs-12 "></div>
			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
			<div class="our-team">
					<div class="team_img">
						<img src={melbin} alt="team-image" style={{height: 300}}/>
						<ul class="social">
						<li><a href="https://twitter.com/melbin23george"><i ><TwitterIcon/></i></a></li>
							<li><a href="mailto:melbin.molsys@gmail.com"><i ><MailIcon/></i></a></li>
							<li><a href="https://www.linkedin.com/in/melbin-george/"><i ><LinkedInIcon/></i></a></li>
						</ul>
					</div>
					<div class="team-content">
						<h3 class="title">Melbin George</h3>
						<span class="">Full Stack Developer<br></br>B.E Computer Science</span>
					</div>
				</div>
			</div>
			<div class="col-md-1 col-sm-6 col-xs-12 "></div>
			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
				<div class="our-team">
					<div class="team_img">
					<img src={None} alt="team-image" style={{height: 300}}/>
						<ul class="social">
                            <li><a href="https://twitter.com/melbin23george"><i ><TwitterIcon/></i></a></li>
							<li><a href="mailto:melbin.molsys@gmail.com"><i ><MailIcon/></i></a></li>
							<li><a href="https://www.linkedin.com/in/melbin-george/"><i ><LinkedInIcon/></i></a></li>
						</ul>
					</div>
					<div class="team-content">
						<h3 class="title">Anuraj O P</h3>
						<span class="post">Data Analyst<br></br>B.Sc. Biotechnology, M.Sc. Informatics</span>
					</div>
				</div>
			</div>
			{/* <div class="col-md-3 col-sm-6 col-xs-12">
			</div> */}
			<div class="col-md-1 col-sm-6 col-xs-12 "></div>
			<div class="col-md-3 col-sm-6 col-xs-12 mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" data-wow-offset="0">
			<div class="our-team">
					<div class="team_img">
					<img src={None} alt="team-image" style={{height: 300}}/>
						<ul class="social">
                            <li><a href="#"><i ><TwitterIcon/></i></a></li>
							<li><a href="mailto:solutions@molsys.in"><i ><MailIcon/></i></a></li>
							<li><a href="https://www.linkedin.com/in/dr-shrayashi-biswas-96692821/"><i ><LinkedInIcon/></i></a></li>
						</ul>
					</div>
					<div class="team-content">
						<h3 class="title">Dr. Shrayashi Biswas</h3>
						<span class="post">Senior Consultant Genomics Informatics   <br></br>B.Tech, M.Tech Bio Tech, PH.d(NIBMG)</span>
					</div>
				</div>
			</div>
			
			
		</div>
	</div>			
  <div class="container mt-5 pt-5">				
      <div class="section-title text-center mt-4">
			<h1>SCIENTIFIC ADVISORY</h1>

      <div class="row text-center mt-5 pt-5">
				
			<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
				<div class="our-team">
					<div class="team_img">
					<img src={keshav} alt="team-image" style={{height: 300}}/>
						<ul class="social">
                            <li><a href="#"><i ><TwitterIcon/></i></a></li>
							<li><a href="mailto:soltions@molsys.in"><i ><MailIcon/></i></a></li>
							<li><a href="https://www.linkedin.com/in/t-s-keshava-prasad-b445b514/"><i ><LinkedInIcon/></i></a></li>
						</ul>
					</div>
					<div class="team-content">
						<h3 class="title">Dr. Keshava Prasad</h3>
						<span class="post">Omics Expert<br></br>Deputy Director, Yenepoya Research Centre, Yenepoya University, INDIA</span>
					</div>
				</div>
			</div>	
				
		</div>
      
      </div>
      </div>
</section>


    
    </div>

    
	</section>
   

  );
}

export default AboutUs;
