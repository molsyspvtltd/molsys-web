import React, { Component, useState, useEffect, useNavigate } from 'react';
import '../style/Home.css'
import * as Icon from 'react-bootstrap-icons';

import Dna from "../assets/biotDna.png";
import Sequencingservice from "../assets/sequnceserive.jpg";
import Genomdata from "../assets/genomdata.jpg";
import ResearAndDevelop from "../assets/research&dev.jpg";
import EducationDevelopment from "../assets/education&emp.jpg";
import Molsys from "../assets/Removal-240.jpg";
import Img1 from "../assets/science_FILL0_wght400_GRAD0_opsz24.png";
import Img2 from "../assets/genetics.png";
import Img3 from "../assets/summarize_FILL0_wght400_GRAD0_opsz24.png";
import Img4 from "../assets/manage_history_FILL0_wght400_GRAD0_opsz24.png";
import Img5 from "../assets/reserach.png";
import Img6 from "../assets/analisys.png";
import ImageContainer from '../component/ImageContainer';
import logo from '../assets/logo.png';
import wadhwani from '../assets/wadhwani_logo.png';
import yti from '../assets/yenTI_nobg.png';



import { Link } from 'react-router-dom'
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

// Publications data
const publications = [
  {
    title: "Biocompatible silver nanoparticles as nanopriming mediators for improved rice germination and root growth: A transcriptomic perspective",
    meta: "(Acknowledged) (2024)",
    link: "https://pubmed.ncbi.nlm.nih.gov/38663266/"
  },
  {
    title: "A multicentre, double-blind, placebo-controlled randomized trial of Mycobacterium w in critically ill patients with COVID-19 (ARMY-2)",
    meta: "(Co-Authored) (2024)",
    link: "https://pubmed.ncbi.nlm.nih.gov/38700400/"
  },
  {
    title: "Renuka Ravinath et al. Targeted metagenome sequencing reveals the abundance of Planctomycetes and Bacteroidetes in the rhizosphere of pomegranate",
    meta: "Archives of Microbiology (204): 8(2022)",
    link: "https://pubmed.ncbi.nlm.nih.gov/35834016/"
  },
  {
    title: "Talambedu Usha et al, Hybrid Assembly and Annotation of the Genome of the Indian Punica granatum, a Superfood",
    meta: "Frontiers in Genetics(13): 786825 (2022)",
    link: "https://pubmed.ncbi.nlm.nih.gov/35646087/"
  },
  {
    title: "Prasannakumar MK et al., Comparative metagenomic analysis of rice soil samples revealed the diverse microbial population and biocontrol organisms against plant pathogenic fungus Magnaporthe oryzae",
    meta: "3 Biotech (11): 245 (2021)",
    link: "https://pubmed.ncbi.nlm.nih.gov/33968588/"
  },
  {
    title: "Das AJ et al.,Microbiomics and cloud-based analytics advance sustainable soil management",
    meta: "Frontiers in Bioscience (Landmark Edition) 1(26):478-495 (2021)",
    link: "https://pubmed.ncbi.nlm.nih.gov/33049679/"
  },
  {
    title: "Muliyar RK et al., Assembly and Annotation of the Nuclear and Organellar Genomes of a Dwarf Coconut (Chowghat Green Dwarf) Possessing Enhanced Disease Resistance",
    meta: "OMICS: A Journal of Integrative Biology 24(12) (2020)",
    link: "https://pubmed.ncbi.nlm.nih.gov/33170083/"
  }
];

class Home extends React.Component {
  render() {

    return (
      <div className="container-fluid fade-in">

        {/*Section1 - Molsys */}

        <section className='section-fluid'>
          <div className="container-fluid">
            <div className="row mt-5 text-center align-items-center">
              <div className="col-md-6 ml-5 pt-5 pl-5 mt-5 d-none d-sm-block">
                <div className='mb-4'>
                  <img src={logo} className="img-fluid" alt="logo" style={{ height: '90px', width: '350px' }} />
                </div>
                <h1>FOSTERING SMART SCIENCE</h1>
                <hr className="ms-5 me-5 ps-5 pe-5 w-70" />
                <p className='mx-5 ml-5'>Providing Quality Analysis Services In The World Class Standard</p>
                <Link to="/market">
                  <button type="button" className="btn btn-dark shadow mt-4 mb-4">Explore Our Science</button>
                </Link>
              </div>
              <div className="col-md-6 text-center d-none d-sm-block">
                <img
                  src={Dna}
                  className="img-fluid"
                  alt="Responsive image"
                  style={{ height: "650px" }}
                />
              </div>
              <div className="col-12 text-center d-sm-none position-relative mt-5">
                <div className='mb-4 mt-3'>
                  <img src={logo} className="img-fluid" alt="logo" style={{ height: '90px', width: '350px' }} />
                </div>
                <div className="mobile-content">
                  <h1>FOSTERING SMART SCIENCE</h1>
                  <hr className="ms-5 me-5 ps-5 pe-5 w-70" />
                  <p className="text-dark mt-4"><b>Providing Quality Analysis Services In The World Class Standard</b></p>
                  <Link to="/market">
                    <button type="button" className="btn btn-dark shadow mt-4 mb-4">Explore Our Science</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/*Section2 - Why Molsys */}

        <section className='section2 rounded shadow-lg' style={{ backgroundImage: `url(${Molsys})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container">
            <div className="row mt-3 p-5">
              <div className="col-md-12 text-center">
                <h2>WHY MOLSYS?</h2>
                <div className='underline mx-auto'></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center align-items-center ">

              </div>
              <div className="col-md-6 pb-5 mb-5 ">
                <div className="row ">
                  <div className="col-md-6 mt-5 mb-4 text-center shadow ">
                    <img src={Img1} alt="Image" className="img-fluid mt-2" />
                    <h6 className='mt-2'>Expert Team Of Scientists</h6>
                  </div>
                  <div className="col-md-6 mt-5 mb-4 text-center  shadow">
                    <img src={Img2} alt="Image" className="img-fluid mt-2" />
                    <h6 className='mt-2'>Next Generation Sequencing Service</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-5 mb-4 text-center shadow">
                    <img src={Img3} alt="Image" className="img-fluid mt-2" />
                    <h6 className='mt-2'>Comprehensive Reporting</h6>
                  </div>
                  <div className="col-md-6 mt-5 mb-4 text-center  shadow">
                    <img src={Img4} alt="Image" className="img-fluid mt-2" />
                    <h6 className='mt-2'>Efficient Trunaround and Management</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-5 text-center shadow">
                    <img src={Img5} alt="Image" className="img-fluid mt-2" />
                    <h6 className='mt-2'>Complete Reserach Solution</h6>
                  </div>
                  <div className="col-md-6 mt-5 text-center shadow">
                    <img src={Img6} alt="Image" className="img-fluid mt-2" />
                    <h6 className='mt-2'>Customized BioInfomatics Analysis</h6>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6 mt-5 text-center shadow">
                    <Icon.CodeSquare alt="Image" style={{ width: '20px' }} className="img-fluid mt-2 mb-1" />
                    <h6 className='mt-2'>Custom Software Solutions</h6>
                  </div>
                  <div className="col-md-6 mt-5 text-center shadow">
                    <Icon.DatabaseFill alt="Image" style={{ width: '20px' }} className="img-fluid mt-2 mb-1" />
                    <h6 className='mt-2'>Custom database Solutions</h6>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6 mt-5 text-center shadow">
                    <Icon.KanbanFill alt="Image" style={{ width: '20px' }} className="img-fluid mt-2 mb-1" />
                    <h6 className='mt-2'>Project Consulting Services</h6>
                  </div>
                  <div className="col-md-6 mt-5 text-center shadow">
                    <Icon.Diagram3Fill alt="Image" style={{ width: '20px' }} className="img-fluid mt-2 mb-1" />
                    <h6 className='mt-2'>Capacity Consulting Services</h6>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>




        {/* Section3 - Categories */}
        <section className='categories-section'>
          <div className="container-fluid categories-container">
            <div className="text-center">
              <h2 className="categories-title">CATEGORIES</h2>
              <div className="title-underline"></div>
            </div>

            <div className="categories-grid">
              {/* Data Generation Services */}
              <div className="category-card">
                <div className="category-content">
                  <h3 className="category-title">DATA GENERATION SERVICES</h3>
                  <p className="category-description">Molsys Private Limited (Molsys Scientific) offers services for High-Throughput technologies including genomics, transcriptomics, epigenomics, genotyping and metagenomics with large scale primary and secondary analysis.</p>
                  <Link to="/market" className="category-link">
                    <button type="button" className="category-btn">Read More</button>
                  </Link>
                </div>
                <div className="category-image">
                  <img src={Sequencingservice} alt="Data Generation Services" className="img-fluid" />
                </div>
              </div>

              {/* Genome Data Analytics */}
              <div className="category-card reverse">
                <div className="category-content">
                  <h3 className="category-title">GENOME DATA ANALYTICS</h3>
                  <p className="category-description">Dedicated to assisting clinicians and scientists to unlock the mysteries hidden in the genome.</p>
                  <Link to="/market" className="category-link">
                    <button type="button" className="category-btn">Read More</button>
                  </Link>
                </div>
                <div className="category-image">
                  <img src={Genomdata} alt="Genome Data Analytics" className="img-fluid" />
                </div>
              </div>

              {/* Contract R&D */}
              <div className="category-card">
                <div className="category-content">
                  <h3 className="category-title">CONTRACT R&D</h3>
                  <p className="category-description">Our Research Scientists are involved in cutting edge research to develop novel, highly specific and efficacious anti-cancer molecules.</p>
                  <Link to="/market" className="category-link">
                    <button type="button" className="category-btn">Read More</button>
                  </Link>
                </div>
                <div className="category-image">
                  <img src={ResearAndDevelop} alt="Contract R&D" className="img-fluid" />
                </div>
              </div>

              {/* Education and Empowerment */}
              <div className="category-card reverse">
                <div className="category-content">
                  <h3 className="category-title">EDUCATION AND EMPOWERMENT</h3>
                  <p className="category-description">The most critical information is obtained from the DNA sequence and thus generating unprecedented amounts of data with regards to genetic information.</p>
                  <Link to="/g-cell" className="category-link">
                    <button type="button" className="category-btn">Read More</button>
                  </Link>
                </div>
                <div className="category-image">
                  <img src={EducationDevelopment} alt="Education and Empowerment" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 3 publications */}

        <section className="publications-section">
          <div className="container">
            <div className="publications-container">
              <h2 className="section-title">PUBLICATIONS</h2>
              <div className="publications-list">
                {publications.map((pub, index) => (
                  <div className="publication-item" key={index}>
                    <a href={pub.link} className="publication-link" target="_blank" rel="noopener noreferrer">
                      <span className="publication-title">{pub.title}</span>
                      <span className="publication-meta">{pub.meta}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* section4 - Trusted Clients */}
        <section className='section2 me-5 ms-5 mt-5 pt-3'>
          <div className="container-fluid mt-5 mb-5 text-center">
            <h2>TRUSTED CLIENTELLE</h2>
            <div className='underline mx-auto mb-4'></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <ImageContainer />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='accelerators-mentors-section'>
          <div className="container-fluid text-center">
            <h2>ACCELERATORS & MENTORS</h2>
            <div className='underline mx-auto'></div>
            <div className="mentors-container">
              <div className="mentor-image-container">
                <img src={wadhwani} alt="Wadhwani Foundation" className="mentor-image" />
              </div>
              <div className="mentor-image-container">
                <img src={yti} alt="Yenepoya TI" className="mentor-image" />
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
export default Home


