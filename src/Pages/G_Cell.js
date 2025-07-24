import React, { useState } from 'react';
import axios from 'axios';
import '../style/G_Cell.css';
import G_cell from '../assets/Gcell-tbg.png';
import gcellbg from '../assets/g_cellbg.jpg';
import emailjs from 'emailjs-com';
import videoBg from '../assets/gcell_ad.mp4';

function G_Cell() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    email: '',
    phone: '',
    referralCode: '',
    address: '',
    dob: '',
    university: '',
    institution: '',
    eduQualification: '',
    yrOfStudy: '',
    ccYearStd10: '',
    markStd10: '',
    ccYearStd12: '',
    markStd12: '',
    ccYearStdUG: '',
    markStdUG: '',
    ccYearStdPG: '',
    markStdPG: '',
    tenure: '',
    thematicArea: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://molsys.in:8080/api/students/register', student);
      alert(`Registration successful. Student ID: ${response.data}`);
    } catch (error) {
      alert('Registration failed. Please try again.');
      console.error('Error:', error);
    }

    setStudent({
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      email: '',
      phone: '',
      referralCode: '',
      address: '',
      dob: '',
      university: '',
      institution: '',
      eduQualification: '',
      yrOfStudy: '',
      ccYearStd10: '',
      markStd10: '',
      ccYearStd12: '',
      markStd12: '',
      ccYearStdUG: '',
      markStdUG: '',
      ccYearStdPG: '',
      markStdPG: '',
      tenure: '',
      thematicArea: '',
    });
  };

  return (
    <div className="g-cell-container">
      <header className="masthead mt-5 shadow-lg fade-in" style={{backgroundImage: `url(${gcellbg})`, backgroundSize: "cover"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 py-md-5 py-3 mt-md-5 pt-md-5 text-center text-md-start">
              <h1 className="mb-3">MOLSYS G-CELL</h1>
              <h2 className="mb-3">Welcome to Genomics Cell</h2>
              <p className="m-0">Explore Bio-clues Parameters with our Innovative Programs. Register now to unlock Valuable Insights. Join us on a journey of discovery and advancement in Biological Sciences. Ignite your Curiosity Today!</p>
            </div>
            
            <div className="col-md-6 col-12 py-md-5 py-3 px-4 text-center">
              <img src={G_cell} className="img-fluid g-cell-logo" alt="G-Cell Logo"/>
            </div>
          </div>
        </div>
      </header>

      <div className="video-container">
        <video className="video" src={videoBg} autoPlay loop playsInline />
      </div>

      <div className="container-xl px-3 px-md-4 mt-4">
        <div className="card mb-4 lead">
          <div className="card-header">Student Details</div>
          <div className="card-body">
            <form>
              <div className="row gx-3 mb-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputFirstName">First name *</label>
                  <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" name="firstName" value={student.firstName} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputLastName">Last name *</label>
                  <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" name="lastName" value={student.lastName} onChange={handleInputChange} required/>
                </div>
              </div>
              
              <div className="row gx-3 mb-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputAge">Age *</label>
                  <input className="form-control" id="inputAge" type="text" placeholder="Enter your age" name="age" value={student.age} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputGender">Gender *</label>
                  <select className="form-control" id="inputGender" name="gender" value={student.gender} onChange={handleInputChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputEmailAddress">Email address *</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" name="email" value={student.email} onChange={handleInputChange} required/>
              </div>
              
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputPatientAddress">Address *</label>
                <input className="form-control" id="inputPatientAddress" type="address" placeholder="Enter the address" name="address" value={student.address} onChange={handleInputChange} required/>
              </div>
              
              <div className="row gx-3 mb-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputPhone">Phone number *</label>
                  <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" name="phone" value={student.phone} onChange={handleInputChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputBirthday">Date of Birth</label>
                  <input className="form-control" id="inputBirthday" type="date" name="dob" placeholder="Enter your Date of Birth" value={student.dob} onChange={handleInputChange} />
                </div>
              </div>
              
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputReferal">Referal Code</label>
                <input className="form-control" id="inputReferal" type="text" placeholder="Enter the Referal Code" name="referralCode" value={student.referralCode} onChange={handleInputChange}/>
              </div>
              
              <div className="card-header mt-4">Student Academic Details</div>
              
              <div className="row gx-3 mb-3 mt-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputUniversity">University *</label>
                  <input className="form-control" id="inputUniversity" type="text" placeholder="Enter the Institution name" name="university" value={student.university} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputInstitution">Institution *</label>
                  <input className="form-control" id="inputInstitution" type="text" placeholder="Enter the Institution name" name="institution" value={student.institution} onChange={handleInputChange} required/>
                </div>
              </div>
              
              <div className="row gx-3 mb-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputEduQuali">Educational Qualification *</label>
                  <select className="form-control" id="inputEduQuali" name="eduQualification" value={student.eduQualification} onChange={handleInputChange} required>
                    <option value="">Choose</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="PhD">PhD</option>
                    <option value="MBBS">MBBS</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputYear">Year Of Study *</label>
                  <select className="form-control" id="inputYear" name="yrOfStudy" value={student.yrOfStudy} onChange={handleInputChange} required>
                    <option value="">Choose</option>
                    <option value="1">1st year</option>
                    <option value="2">2nd year</option>
                    <option value="3">3rd year</option>
                    <option value="4">4th year</option>
                    <option value="5">5th year</option>
                    <option value="Course">Course Completed</option>
                  </select>
                </div>
              </div>
              
              <div className="row gx-3 mb-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputten">Year Of Course Completion Std: 10 *</label>
                  <input className="form-control" id="inputten" type="text" placeholder="Enter the year completion" name="ccYearStd10" value={student.ccYearStd10} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputMarks">Marks Obtained *</label>
                  <input className="form-control" id="inputMarks" type="text" placeholder="Enter your Marks obtained in CGPA / %" name="markStd10" value={student.markStd10} onChange={handleInputChange} required/>
                </div>
              </div>
              
              <div className="row gx-3 mb-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputtwo">Year Of Course Completion Std:12 *</label>
                  <input className="form-control" id="inputtwo" type="text" placeholder="Enter the year completion" name="ccYearStd12" value={student.ccYearStd12} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputMarks">Marks Obtained *</label>
                  <input className="form-control" id="inputMarks" type="text" placeholder="Enter your Marks obtained in CGPA / %" name="markStd12" value={student.markStd12} onChange={handleInputChange} required/>
                </div>
              </div>
              
              <div className="row gx-3 mb-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputUg">Year Of Course Completion UG</label>
                  <input className="form-control" id="inputUg" type="text" placeholder="Enter the year completion" name="ccYearStdUG" value={student.ccYearStdUG} onChange={handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputMarks">Marks Obtained</label>
                  <input className="form-control" id="inputMarks" type="text" placeholder="Enter your Marks obtained in CGPA / %" name="markStdUG" value={student.markStdUG} onChange={handleInputChange} />
                </div>
              </div>
              
              <div className="row gx-3 mb-3">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputPg">Year Of Course Completion PG</label>
                  <input className="form-control" id="inputPg" type="text" placeholder="Enter the year completion" name="ccYearStdPG" value={student.ccYearStdPG} onChange={handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputMarks">Marks Obtained</label>
                  <input className="form-control" id="inputMarks" type="text" placeholder="Enter your Marks obtained in CGPA / %" name="markStdPG" value={student.markStdPG} onChange={handleInputChange} />
                </div>
              </div>
              
              <div className="row gx-3 mb-4">
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputTenure">Tenure of Training and Internship *</label>
                  <select className="form-control" id="inputTenure" name="tenure" value={student.tenure} onChange={handleInputChange} required>
                    <option value="">Choose</option>
                    <option value="3 Months">3 Months</option>
                    <option value="5 Months">5 Months</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="small mb-1" htmlFor="inputThematic">Thematic Area *</label>
                  <select className="form-control" id="inputThematic" name="thematicArea" value={student.thematicArea} onChange={handleInputChange} required>
                    <option value="">Choose</option>
                    <option value="Multi-Omics">Multi-Omics</option>
                    <option value="Pharmacogenomics">Pharmacogenomics</option>
                    <option value="Clinical Genomics">Clinical Genomics</option>
                    <option value="Agri Genomics">Agri Genomics</option>
                    <option value="Microbiomics">Microbiomics</option>        
                  </select>
                </div>
              </div>
              
              <button className="btn btn-primary w-100" type="button" onClick={handleSubmit}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default G_Cell;