import React, { useState } from "react";
import "./Omics.css";
import { useHistory } from "react-router-dom";

function Omics() {
  const [openWeek, setOpenWeek] = useState(null);
  const history = useHistory();

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <h1>MOLSYS SCIENTIFIC</h1>
          </div>
          <div className="hero">
            <h2>AI-DRIVEN OMICS WORKSHOP:</h2>
            <h3>POWERING THE NEXT ERA OF BIOLOGICAL RESEARCH</h3>
            <p>A 5-WEEK Intensive Program to Decode Genomics with AI & ML</p>
            <button
              className="cta-button"
              onClick={() => history.push("/OmicsRegistration")}
            >
              Register Now
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
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

      {/* Problem Statement Section */}
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

      {/* Challenge Section */}
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

      {/* Expertise Section */}
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
                  <li>Bioinformatics</li>
                  <li>Nutrigenomics</li>
                </ul>
              </div>
              <div className="expertise-area">
                <h4>Brand Products</h4>
                <ul>
                  <li>SlimCare</li>
                  <li>FitCare</li>
                  <li>HerCare</li>
                  <li>KinCare</li>
                  <li>GutCare</li>
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

      {/* Timeline Section */}
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
                          {[1, 2, 3, 4, 5].map((day) => (
                            <div key={day} className="day">
                              <h4>Day {day}</h4>
                              <p>Introduction to Omics and NGS technologies</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {week === 2 && (
                      <>
                        <p>Data Processing & Quality Control</p>
                        <div className="week-days">
                          {[6, 7, 8, 9, 10].map((day) => (
                            <div key={day} className="day">
                              <h4>Day {day}</h4>
                              <p>Data quality assessment and preprocessing</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {week === 3 && (
                      <>
                        <p>Core NGS Pipelines + AI/ML Basics</p>
                        <div className="week-days">
                          {[11, 12, 13, 14, 15].map((day) => (
                            <div key={day} className="day">
                              <h4>Day {day}</h4>
                              <p>
                                Read alignment, variant calling, and AI
                                fundamentals
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {week === 4 && (
                      <>
                        <p>AI Application in Omics</p>
                        <div className="week-days">
                          {[16, 17, 18, 19, 20].map((day) => (
                            <div key={day} className="day">
                              <h4>Day {day}</h4>
                              <p>
                                Transcriptome analysis and multi-omics
                                integration
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {week === 5 && (
                      <>
                        <p>Advanced Topics, Ethics, & Integration</p>
                        <div className="week-days">
                          {[21, 22, 23, 24, 25].map((day) => (
                            <div key={day} className="day">
                              <h4>Day {day}</h4>
                              <p>
                                Cloud computing, containerization, and ethical
                                AI
                              </p>
                            </div>
                          ))}
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

      {/* Tools Section */}
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
                <li>Jupyter</li>
              </ul>
            </div>
            <div className="tool-category">
              <h3>AI/ML</h3>
              <ul>
                <li>TensorFlow</li>
                <li>WEKA</li>
                <li>AlphaFold</li>
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
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
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
