// COMMENTED OUT - Previous Omicsworkshop implementation
/*
import React, { useState, useEffect } from "react";
import "./Omics.css";
import { useHistory } from "react-router-dom";

function Omics() {
  const [openWeek, setOpenWeek] = useState(null);
  const history = useHistory();

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  useEffect(() => {
    // Create particles animation
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;

      particlesContainer.innerHTML = '';

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particlesContainer.appendChild(particle);
      }
    };

    // Create pulse circles animation
    const createPulseCircles = () => {
      const circlesContainer = document.getElementById('pulseCircles');
      if (!circlesContainer) return;

      circlesContainer.innerHTML = '';

      for (let i = 0; i < 8; i++) {
        const circle = document.createElement('div');
        circle.className = 'pulse-circle';
        circle.style.width = `${Math.random() * 300 + 100}px`;
        circle.style.height = circle.style.width;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.animationDelay = `${Math.random() * 4}s`;
        circle.style.borderColor = `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`;
        circlesContainer.appendChild(circle);
      }
    };

    createParticles();
    createPulseCircles();

    // Recreate animations on window resize
    const handleResize = () => {
      createParticles();
      createPulseCircles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRegisterClick = () => {
    history.push("/OmicsRegistration");
  };

  return (
    <div className="App">
      {/* Header Section */ /*}
      <header class="header">
        <div class="particles" id="particles"></div>
        <div class="pulse-circles" id="pulseCircles"></div>

        <div class="container">
          <div class="logo-section">
            <h1>MOLSYS PVT LTD</h1>
          </div>
          <div class="hero">
            <h2>AI-DRIVEN OMICS WORKSHOP:</h2>
            <h3>POWERING THE NEXT ERA OF BIOLOGICAL RESEARCH</h3>
            <p>A 5-WEEK Intensive Program to Decode Genomics with AI & ML</p>
            <button
              class="cta-button"
              onClick={() => history.push("/OmicsRegistration")}
            >
              Register Now
            </button>

            <div class="pricing-section">
              <div class="pricing-option">
                <h4>Genomics Workshop + Capstone Project (2 weeks)</h4>
                <p class="price">₹10,000 + GST</p>
              </div>
              <div class="pricing-option">
                <h4>Advanced AI in Lifesciences + Capstone Project (3 weeks)</h4>
                <p class="price">₹15,000 + GST</p>
              </div>
              <div class="pricing-option highlight">
                <h4>Complete Program (5 weeks)</h4>
                <p class="price">₹25,000 + GST</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */ /*}
      <section className="about">
        <div className="container">
          <h2>Molsys: Your Partner in AI-Driven Genomics</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">⭜</div>
              <h4>7+ years of expertise</h4>
              <p>
                Molsys has a rich history in contract research, with over 850
                successful projects for more than 500 clients.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">🧬</div>
              <h4>Legacy</h4>
              <p>
                Molsys specialises in AI-driven genomics, bioinformatics, and
                multi-omics data analysis.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h4>Our Goal</h4>
              <p>
                To accelerate scientific discovery and enhance research
                efficiency.
              </p>
            </div>
          </div>
          <div className="mission">
            <p>
              Delivering reliable, AI-driven omics solutions and training that
              bridge academic, industry, and innovation
            </p>
            <p>
              Empowering global research and healthcare with next-generation
              multi-omics insights
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */ /*}
      <section className="problem">
        <div className="container">
          <h2>THE PROBLEM WE ARE TRYING TO SOLVE</h2>
          <div className="problem-content">
            <div className="problem-text">
              <p>
                The <strong>exponential growth of omics</strong> data has
                fundamentally reshaped biological research, yet{" "}
                <strong>
                  traditional analytical methods have not kept pace.
                </strong>
              </p>
              <p>
                This has created a significant <strong>skills gap</strong>,
                leaving many biological researchers at a bottleneck.
              </p>
            </div>
            <div className="problem-visual">
              <div className="data-growth-chart">
                <div className="chart-bar" style={{ height: "80%" }}>
                  <span>Omics Data Growth</span>
                </div>
                <div className="chart-bar" style={{ height: "30%" }}>
                  <span>Analysis Capabilities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="solution">
            <p>
              This <strong>workshop directly addresses this gap</strong>,
              providing essential skills in AI and Machine Learning to navigate
              the "data explosion"
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */ /*}
      <section className="challenge">
        <div className="container">
          <h2>THE GENOMICS DATA CHALLENGE</h2>
          <div className="challenge-points">
            <div className="point">
              <div className="point-number">01</div>
              <h4>Genomics is changing</h4>
              <p>
                Biological research is being transformed by the massive amount
                of data now available.
              </p>
            </div>
            <div className="point">
              <div className="point-number">02</div>
              <h4>The bottleneck</h4>
              <p>
                Traditional methods can't keep up. They are slow and need
                specialised skills.
              </p>
            </div>
            <div className="point">
              <div className="point-number">03</div>
              <h4>The impact</h4>
              <p>This bottleneck is slowing down scientific discovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */ /*}
      <section className="expertise">
        <div className="container">
          <h2>Molsys and its expertise</h2>
          <div className="expertise-content">
            <div className="expertise-stats">
              <div className="stat">
                <h3>7+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat">
                <h3>850+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Clients Served</p>
              </div>
            </div>
            <div className="expertise-areas">
              <div className="expertise-area">
                <h4>Specializations</h4>
                <ul>
                  <li>Multi-omics</li>
                  <li>Genomics</li>
                  <li>Proteomics</li>
                  <li>Bioinformatics</li>
                  <li>Nutrigenomics</li>
                </ul>
              </div>
              <div className="expertise-area">
                <h4>Brand Products</h4>
                <ul>
                  <li>slimKr</li>
                  <li>fitKr</li>
                  <li>herKr</li>
                  <li>kinKr</li>
                  <li>gutKr</li>
                </ul>
              </div>
              <div className="expertise-area">
                <h4>Team Expertise</h4>
                <ul>
                  <li>Geneticists</li>
                  <li>Bioinformaticians</li>
                  <li>AI Engineers</li>
                  <li>Clinicians</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */ /*}
      <section className="timeline-section">
        <div className="container">
          <h2>Workshop Timeline</h2>
          <div className="timeline">
            {[1, 2, 3, 4, 5].map((week) => (
              <div
                key={week}
                className={`timeline-week ${openWeek === week ? "open" : ""}`}
              >
                <div className="week-header" onClick={() => toggleWeek(week)}>
                  <h3>Week {week}</h3>
                  <span className="toggle-icon">
                    {openWeek === week ? "−" : "+"}
                  </span>
                </div>
                {openWeek === week && (
                  <div className="week-content">
                    {week === 1 && (
                      <>
                        <p>Foundations of Omics & Computational Biology</p>
                        <div className="week-days">
                          <div className="day">
                            <h4>Day 1</h4>
                            <p>Introduction to Omics and NGS technologies</p>
                          </div>
                          <div className="day">
                            <h4>Day 2</h4>
                            <p>Overview of Computational Biology Techniques</p>
                          </div>
                          <div className="day">
                            <h4>Day 3</h4>
                            <p>
                              Public Data Repositories
                            </p>
                          </div>
                          <div className="day">
                            <h4>Day 4</h4>
                            <p>Omics Use Case</p>
                          </div>
                          <div className="day">
                            <h4>Day 5</h4>
                            <p>Review + Hands-on Practice</p>
                          </div>
                        </div>
                      </>
                    )}
                    {week === 2 && (
                      <>
                        <p>Data Processing & Quality Control</p>
                        <div className="week-days">
                          <div className="day">
                            <h4>Day 6</h4>
                            <p>Data Quality Issues</p>
                          </div>
                          <div className="day">
                            <h4>Day 7</h4>
                            <p>FastQC Hands-on</p>
                          </div>
                          <div className="day">
                            <h4>Day 8</h4>
                            <p>Trimming & Filtering</p>
                          </div>
                          <div className="day">
                            <h4>Day 9</h4>
                            <p>Data Wrangling for Omics</p>
                          </div>
                          <div className="day">
                            <h4>Day 10</h4>
                            <p>Exome Analysis Intro</p>
                          </div>
                        </div>
                      </>
                    )}
                    {week === 3 && (
                      <>
                        <p>Core NGS Pipelines + AI/ML Basics</p>
                        <div className="week-days">
                          <div className="day">
                            <h4>Day 11</h4>
                            <p>Read Alignment</p>
                          </div>
                          <div className="day">
                            <h4>Day 12</h4>
                            <p>Variant Calling</p>
                          </div>
                          <div className="day">
                            <h4>Day 13</h4>
                            <p>Annotation</p>
                          </div>
                          <div className="day">
                            <h4>Day 14</h4>
                            <p>AI/ML Fundamentals</p>
                          </div>
                          <div className="day">
                            <h4>Day 15</h4>
                            <p>NLP on Omics</p>
                          </div>
                        </div>
                      </>
                    )}
                    {week === 4 && (
                      <>
                        <p>AI Application in Omics</p>
                        <div className="week-days">
                          <div className="day">
                            <h4>Day 16</h4>
                            <p>Transcriptome Analysis</p>
                          </div>
                          <div className="day">
                            <h4>Day 17</h4>
                            <p>Diffrential Expression Analysis</p>
                          </div>
                          <div className="day">
                            <h4>Day 18</h4>
                            <p>Metabolomics Analysis</p>
                          </div>
                          <div className="day">
                            <h4>Day 19</h4>
                            <p>Multi-omics Integration</p>
                          </div>
                          <div className="day">
                            <h4>Day 20</h4>
                            <p>Foundation Models & Human-AI Collaboration</p>
                          </div>
                        </div>
                      </>
                    )}
                    {week === 5 && (
                      <>
                        <p>Advanced Topics, Ethics, & Integration</p>
                        <div className="week-days">
                          <div className="day">
                            <h4>Day 21</h4>
                            <p>Cloud Computing </p>
                          </div>
                          <div className="day">
                            <h4>Day 22</h4>
                            <p>Containerization</p>
                          </div>
                          <div className="day">
                            <h4>Day 23</h4>
                            <p>Workflow Management</p>
                          </div>
                          <div className="day">
                            <h4>Day 24</h4>
                            <p>Ethical AI in Genomics</p>
                          </div>
                          <div className="day">
                            <h4>Day 25</h4>
                            <p>Final project</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */ /*}
      <section className="tools">
        <div className="container">
          <h2>Key Tools and Platforms</h2>
          <div className="tools-grid">
            <div className="tool-category">
              <h3>Data Processing</h3>
              <ul>
                <li>FastQC</li>
                <li>BWA</li>
                <li>Bowtie</li>
              </ul>
            </div>
            <div className="tool-category">
              <h3>Variant Calling</h3>
              <ul>
                <li>GATK</li>
                <li>SAMtools</li>
              </ul>
            </div>
            <div className="tool-category">
              <h3>Programming</h3>
              <ul>
                <li>Python</li>
                <li>R</li>
                <li>Bash</li>
                <li>React</li>
                <li>Node JS</li>
                <li>SQL</li>
                <li>Mongo DB</li>
              </ul>
            </div>
            <div className="tool-category">
              <h3>AI/ML</h3>
              <ul>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>AlphaFold</li>
                <li>BERT</li>
                <li>GPT's</li>
                <li>Fine Tuning</li>
                <li>Training</li>
              </ul>
            </div>
            <div className="tool-category">
              <h3>Workflow Management</h3>
              <ul>
                <li>Snakemake</li>
                <li>Nextflow</li>
              </ul>
            </div>
            <div className="tool-category">
              <h3>Cloud & Containers</h3>
              <ul>
                <li>AWS</li>
                <li>Docker</li>
                <li>Singularity</li>
              </ul>
            </div>
            <div className="tool-category">
              <h3>NGS</h3>
              <ul>
                <li>Transcriptome</li>
                <li>Metagenomics</li>
                <li>Exome Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */ /*}
      <section className="outcomes">
        <div className="container">
          <h2>Expected Outcomes</h2>
          <div className="outcomes-content">
            <div className="outcome-chart">
              <div className="chart-item">
                <div className="chart-bar" style={{ width: "95%" }}>
                  <span>Technical Proficiency</span>
                </div>
              </div>
              <div className="chart-item">
                <div className="chart-bar" style={{ width: "90%" }}>
                  <span>Practical Application</span>
                </div>
              </div>
              <div className="chart-item">
                <div className="chart-bar" style={{ width: "85%" }}>
                  <span>Critical Thinking</span>
                </div>
              </div>
              <div className="chart-item">
                <div className="chart-bar" style={{ width: "88%" }}>
                  <span>Career Advancement</span>
                </div>
              </div>
            </div>
            <div className="outcome-details">
              <div className="outcome-item">
                <h4>Technical Proficiency</h4>
                <p>
                  Mastery of core NGS pipelines, AI/ML techniques, and
                  multi-omics data integration.
                </p>
              </div>
              <div className="outcome-item">
                <h4>Practical Application</h4>
                <p>
                  Confidence to apply AI-driven methods to real-world biological
                  questions.
                </p>
              </div>
              <div className="outcome-item">
                <h4>Critical Thinking</h4>
                <p>
                  Understanding of ethical considerations in AI and genomics.
                </p>
              </div>
              <div className="outcome-item">
                <h4>Career Advancement</h4>
                <p>
                  Preparation for roles in bioinformatics, computational
                  biology, and data science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Omics;
*/

// NEW IMPLEMENTATION - SynthMind Bootcamp
import React, { useState } from "react";
import "./Omics.css";
import flyerImage from "../assets/IMG_1047.png";
import SynthMindModal from "../components/SynthMindModal";

function Omics() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    college: "",
    degree: "",
    yearOfStudy: "",
    city: "",
    state: "",
    linkedin: "",
    github: "",
    areaOfInterest: "",
    goals: "",
    selectedTier: "",
    couponCode: "",
    registrationId: "",
    timestamp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate unique registration ID
  const generateRegistrationId = () => {
    const prefix = "SM";
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.selectedTier) {
      alert("Please select a registration tier!");
      return;
    }

    setIsSubmitting(true);

    try {
      const registrationId = generateRegistrationId();
      const timestamp = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });

      const params = new URLSearchParams({
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        college: formData.college,
        degree: formData.degree,
        yearOfStudy: formData.yearOfStudy,
        city: formData.city,
        state: formData.state,
        linkedin: formData.linkedin || "N/A",
        github: formData.github || "N/A",
        areaOfInterest: formData.areaOfInterest,
        goals: formData.goals,
        selectedTier: formData.selectedTier,
        couponCode: formData.couponCode || "N/A",
        registrationId: registrationId,
        timestamp: timestamp,
      });

      // Google Apps Script URL for form submission (Production - info@molsys.in)
      await fetch(
        "https://script.google.com/macros/s/AKfycbzIQpF-IRlAysFptVuk9ZipUPoRl8HS_0hNechr1GpYOAhGHCwHDmkfUv6apNOCPcC3/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: params,
        },
      );

      // Show success message with registration ID
      alert(
        `✅ Registration Successful!\n\nYour Registration ID: ${registrationId}\n\nPlease save this ID for future reference.\n\nA confirmation email has been sent to ${formData.email}`,
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        college: "",
        degree: "",
        yearOfStudy: "",
        city: "",
        state: "",
        linkedin: "",
        github: "",
        areaOfInterest: "",
        goals: "",
        selectedTier: "",
        couponCode: "",
        registrationId: "",
        timestamp: "",
      });
    } catch (err) {
      alert("Error submitting registration! Please try again.");
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tiers = [
    {
      name: "Foundation Bootcamp",
      price: "₹1,249",
      tier: "tier1",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      popular: true,
      features: [
        "AI Agents",
        "Bioinformatics Workflows",
        "Research Automation Tools",
        "Data Science & Analytics",
        "Vibe Coding",
        "Open Source AI",
        "Industry-Ready Projects",
        "GitHub Showcase",
        "Portfolio Building",
        "Community Access",
        "Certificate of Completion",
      ],
    },
    {
      name: "Elite Program",
      price: "₹7,999",
      tier: "tier2",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: [
        "Everything in Foundation Bootcamp",
        "Build AI SaaS Products",
        "Build AI Agents",
        "Client Project Exposure",
        "Advanced Mentorship",
        "Interview Preparation",
        "Internship Opportunities",
        "One-on-One Mentorship Sessions",
        "Career Guidance",
      ],
    },
    {
      name: "Transformation Program",
      price: "₹50,000",
      tier: "tier3",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: [
        "Everything in Elite Program",
        "Startup Incubation & Venture Guidance",
        "Startup-Ready AI Product Development",
        "Advanced Mentorship Program",
        "AI Agent Development",
        "Real Client Projects",
        "Internship Opportunities",
        "5+ Portfolio Projects",
        "Community Access",
        "Live Interactive Sessions",
        "AI Toolkit & Resources",
        "Prompt Engineering Mini Course",
        "Cheat Sheets & Templates",
        "Research & Industry Project Support",
        "Long-Term Career Roadmap",
      ],
    },
  ];

  const areasOfInterest = [
    "AI / Machine Learning",
    "Data Science",
    "Bioinformatics",
    "AI Agents",
    "Research",
    "Full Stack Development",
    "Other",
  ];

  return (
    <div style={{ background: "#f7fafc", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "60px 20px 80px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: "bold",
              marginBottom: "16px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            SynthMind Bootcamp
          </h1>
          <h2
            style={{
              fontSize: "clamp(20px, 4vw, 32px)",
              marginBottom: "12px",
              opacity: 0.95,
            }}
          >
            AI × Biology × Agents
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 3vw, 20px)",
              maxWidth: "800px",
              margin: "0 auto 40px",
              opacity: 0.9,
              lineHeight: "1.6",
            }}
          >
            Master AI, Biology & Agentic Workflows — Build an Industry-Ready
            Portfolio in Just 3 Days
          </p>
        </div>
      </div>

      {/* Flyer Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "-60px auto 60px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          <img
            src={flyerImage}
            alt="SynthMind Bootcamp"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* About Section */}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "48px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#2d3748",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            🚀 About SynthMind Bootcamp
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#4a5568",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            SynthMind is an intensive bootcamp designed to bridge the gap
            between AI, Biology, and Agentic Workflows. Whether you're a
            student, researcher, or professional, this program will equip you
            with cutting-edge skills to build industry-ready AI products and
            automate complex biological research workflows.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {[
              {
                icon: "🤖",
                title: "AI Agents",
                desc: "Build intelligent agents",
              },
              {
                icon: "🧬",
                title: "Bio Informatics",
                desc: "Master genomic workflows",
              },
              {
                icon: "📊",
                title: "Data Science",
                desc: "Analyze complex datasets",
              },
              {
                icon: "🌐",
                title: "Open Source",
                desc: "Contribute to open source",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: "center",
                  padding: "24px",
                  background: "#f7fafc",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#718096" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div style={{ marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#2d3748",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            💎 Choose Your Path
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {tiers.map((tier, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "40px",
                  boxShadow: tier.popular
                    ? "0 20px 60px rgba(102, 126, 234, 0.3)"
                    : "0 10px 40px rgba(0,0,0,0.08)",
                  border: tier.popular ? "3px solid #667eea" : "none",
                  position: "relative",
                  transform: tier.popular ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              >
                {tier.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#667eea",
                      color: "white",
                      padding: "8px 24px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <h3
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#2d3748",
                      marginBottom: "16px",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <div
                    style={{
                      fontSize: "48px",
                      fontWeight: "bold",
                      background: tier.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "8px",
                    }}
                  >
                    {tier.price}
                  </div>
                  <p style={{ fontSize: "14px", color: "#718096" }}>
                    One-time payment
                  </p>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "32px",
                  }}
                >
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "12px",
                        fontSize: "15px",
                        color: "#4a5568",
                      }}
                    >
                      <span
                        style={{
                          color: "#48bb78",
                          marginRight: "12px",
                          fontSize: "18px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    setFormData({ ...formData, selectedTier: tier.name })
                  }
                  style={{
                    width: "100%",
                    padding: "16px",
                    background:
                      formData.selectedTier === tier.name
                        ? tier.gradient
                        : "#e2e8f0",
                    color:
                      formData.selectedTier === tier.name ? "white" : "#4a5568",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (formData.selectedTier !== tier.name) {
                      e.target.style.background = "#cbd5e0";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (formData.selectedTier !== tier.name) {
                      e.target.style.background = "#e2e8f0";
                    }
                  }}
                >
                  {formData.selectedTier === tier.name
                    ? "✓ Selected"
                    : "Select Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "48px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              id="registration-form"
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#2d3748",
                marginBottom: "12px",
              }}
            >
              📝 Registration Form
            </h2>
            <p style={{ fontSize: "16px", color: "#718096" }}>
              Fill in your details to secure your spot
            </p>
          </div>

          {/* Email Notice */}
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "32px",
              color: "white",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
            }}
          >
            <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
              <div style={{ fontSize: "24px" }}>📧</div>
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "8px",
                    margin: "0 0 8px 0",
                  }}
                >
                  Important: Email Confirmation
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", margin: "0" }}>
                  After registration, you will receive a confirmation email from{" "}
                  <strong
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    info@molsys.in
                  </strong>
                  <br />
                  Please only respond to emails from this address. Do not trust
                  emails from other addresses.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "8px",
                }}
              >
                Full Name <span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Email & Mobile */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  Email Address <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  Mobile Number <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
            </div>

            {/* College & Degree */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  College / Organization{" "}
                  <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Your institution name"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  Degree / Qualification{" "}
                  <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder="B.Tech, M.Sc, Ph.D, etc."
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
            </div>

            {/* Year of Study */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "8px",
                }}
              >
                Year of Study / Experience Level{" "}
                <span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <input
                type="text"
                name="yearOfStudy"
                value={formData.yearOfStudy}
                onChange={handleChange}
                placeholder="e.g., 2nd Year, 5 years experience"
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* City & State */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  City <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  State <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Your state"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
            </div>

            {/* LinkedIn & GitHub */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  GitHub Profile (Optional)
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/yourusername"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
            </div>

            {/* Area of Interest */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "8px",
                }}
              >
                Area of Interest <span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <select
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "white",
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "20px",
                  paddingRight: "40px",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              >
                <option value="" style={{ color: "#a0aec0" }}>
                  Select your area of interest
                </option>
                {areasOfInterest.map((area, idx) => (
                  <option
                    key={idx}
                    value={area}
                    style={{ color: "#2d3748", padding: "10px" }}
                  >
                    {area}
                  </option>
                ))}
              </select>
            </div>

            {/* Goals */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "8px",
                }}
              >
                What do you want to achieve from this bootcamp?{" "}
                <span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                placeholder="Share your goals and expectations..."
                required
                rows="4"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: "none",
                  resize: "vertical",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Coupon Code */}
            <div style={{ marginBottom: "32px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "8px",
                }}
              >
                🎟️ Coupon Code (Optional)
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  name="couponCode"
                  value={formData.couponCode}
                  onChange={handleChange}
                  placeholder="Enter your coupon code"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    textTransform: "uppercase",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
                {formData.couponCode && (
                  <div
                    style={{
                      marginTop: "8px",
                      padding: "8px 12px",
                      background: "#f0fff4",
                      border: "1px solid #9ae6b4",
                      borderRadius: "6px",
                      fontSize: "14px",
                      color: "#2f855a",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>✓</span>
                    <span>
                      Coupon code applied:{" "}
                      <strong>{formData.couponCode}</strong>
                    </span>
                  </div>
                )}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#718096",
                  marginTop: "8px",
                }}
              >
                Have a discount code? Enter it here to avail special offers
              </p>
            </div>

            {/* Selected Tier Display */}
            {formData.selectedTier && (
              <div
                style={{
                  background: "#f0fff4",
                  border: "2px solid #48bb78",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "32px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#2f855a",
                    marginBottom: "4px",
                  }}
                >
                  Selected Plan:
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#22543d",
                  }}
                >
                  {formData.selectedTier}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.selectedTier}
              style={{
                width: "100%",
                padding: "18px",
                background:
                  !formData.selectedTier || isSubmitting
                    ? "#cbd5e0"
                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "12px",
                cursor:
                  !formData.selectedTier || isSubmitting
                    ? "not-allowed"
                    : "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (formData.selectedTier && !isSubmitting) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 10px 30px rgba(102, 126, 234, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {isSubmitting
                ? "Submitting..."
                : !formData.selectedTier
                  ? "Please Select a Tier Above"
                  : "🚀 Register Now"}
            </button>

            {!formData.selectedTier && (
              <p
                style={{
                  textAlign: "center",
                  marginTop: "16px",
                  fontSize: "14px",
                  color: "#e53e3e",
                  fontWeight: "600",
                }}
              >
                ⚠️ Please select a registration tier from the pricing section
                above
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "40px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "8px" }}>
          🎯 Limited Seats Available!
        </p>
        <p style={{ fontSize: "14px", opacity: 0.9 }}>
          Questions? Contact us at info@molsys.in
        </p>
      </div>

      {/* SynthMind Bootcamp Promotion Modal */}
      <SynthMindModal />
    </div>
  );
}

export default Omics;
