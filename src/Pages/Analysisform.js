// import React, { useState } from 'react';
// import './Analysisform.css';



// const DataAnalysisForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     address: '',
//     applicationType: 'rna-sequencing',
//     otherApplication: '',
//     organism: '',
//     otherOrganism1: '',
//     otherOrganism2: '',
//     sampleNumber: '',
//     millionReads: '',
//     agreedToTerms: false
//   });

//   const [file, setFile] = useState(null);
//   const [errors, setErrors] = useState({});

//   const organismOptions = [
//     'Human', 'Mouse', 'Rat', 'Zebrafish', 'Drosophila', 
//     'C. elegans', 'Arabidopsis', 'E. coli', 'Yeast', 
//     'Chicken', 'Cow', 'Pig', 'Sheep', 'Dog', 'Cat',
//     'Monkey', 'Xenopus', 'Salmon', 'Rice', 'Wheat', 'Maize', 'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (formData.applicationType === 'other' && !formData.otherApplication.trim()) 
//       newErrors.otherApplication = 'Please specify application';
//     if (!formData.organism) newErrors.organism = 'Organism is required';
//     if (formData.organism === 'Other' && (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim())) 
//       newErrors.otherOrganism = 'Please specify organism details';
//     if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
//     if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Form submission logic here
//       console.log('Form submitted:', { ...formData, file });
//       alert('Form submitted successfully!');
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-header">
//         <h1>Data Analysis Offer</h1>
//         <p>Please fill out the form below to request our data analysis services</p>
//       </div>

//       <form onSubmit={handleSubmit} className="analysis-form">
//         <div className="form-section">
//           <h2 className="section-title">Personal Information</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.name ? 'error' : ''}`}>
//               <label htmlFor="name">Full Name*</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//               />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className={`form-group ${errors.organization ? 'error' : ''}`}>
//               <label htmlFor="organization">Organization*</label>
//               <input
//                 type="text"
//                 id="organization"
//                 name="organization"
//                 value={formData.organization}
//                 onChange={handleChange}
//                 placeholder="Enter your organization"
//               />
//               {errors.organization && <span className="error-message">{errors.organization}</span>}
//             </div>

//             <div className={`form-group ${errors.email ? 'error' : ''}`}>
//               <label htmlFor="email">Email ID*</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className={`form-group ${errors.phone ? 'error' : ''}`}>
//               <label htmlFor="phone">Contact Phone Number*</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your phone number"
//               />
//               {errors.phone && <span className="error-message">{errors.phone}</span>}
//             </div>

//             <div className={`form-group ${errors.address ? 'error' : ''}`}>
//               <label htmlFor="address">Address*</label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Enter your address"
//                 rows="3"
//               />
//               {errors.address && <span className="error-message">{errors.address}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2 className="section-title">Analysis Details</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.applicationType ? 'error' : ''}`}>
//               <label>Application Type*</label>
//               <div className="radio-group">
//                 <label className="radio-option">
//                   <input
//                     type="radio"
//                     name="applicationType"
//                     value="rna-sequencing"
//                     checked={formData.applicationType === 'rna-sequencing'}
//                     onChange={handleChange}
//                   />
//                   <span className="radio-custom"></span>
//                   RNA Sequencing Analysis
//                 </label>
//                 <label className="radio-option">
//                   <input
//                     type="radio"
//                     name="applicationType"
//                     value="other"
//                     checked={formData.applicationType === 'other'}
//                     onChange={handleChange}
//                   />
//                   <span className="radio-custom"></span>
//                   Other
//                 </label>
//               </div>
//               {formData.applicationType === 'other' && (
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="otherApplication"
//                     value={formData.otherApplication}
//                     onChange={handleChange}
//                     placeholder="Please specify NGS application"
//                     className="full-width"
//                   />
//                   {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.organism ? 'error' : ''}`}>
//               <label htmlFor="organism">Organism*</label>
//               <select
//                 id="organism"
//                 name="organism"
//                 value={formData.organism}
//                 onChange={handleChange}
//               >
//                 <option value="">Select an organism</option>
//                 {organismOptions.map((org, index) => (
//                   <option key={index} value={org}>{org}</option>
//                 ))}
//               </select>
//               {errors.organism && <span className="error-message">{errors.organism}</span>}
//               {formData.organism === 'Other' && (
//                 <div className="other-organism-fields">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="otherOrganism1"
//                       value={formData.otherOrganism1}
//                       onChange={handleChange}
//                       placeholder="Organism Scientific name"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="otherOrganism2"
//                       value={formData.otherOrganism2}
//                       onChange={handleChange}
//                       placeholder="NCBI Accession Number"
//                     />
//                   </div>
//                   {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
//               <label htmlFor="sampleNumber">Sample Number*</label>
//               <input
//                 type="number"
//                 id="sampleNumber"
//                 name="sampleNumber"
//                 value={formData.sampleNumber}
//                 onChange={handleChange}
//                 placeholder="Enter number of samples"
//                 min="1"
//               />
//               {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
//               <input
//                 type="number"
//                 id="millionReads"
//                 name="millionReads"
//                 value={formData.millionReads}
//                 onChange={handleChange}
//                 placeholder="Enter million reads"
//                 min="0"
//                 step="0.1"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2 className="section-title">File Upload</h2>
//           <div className="form-group">
//             <label htmlFor="file">Upload File (optional)</label>
//             <div className="file-upload">
//               <input
//                 type="file"
//                 id="file"
//                 onChange={handleFileChange}
//                 className="file-input"
//               />
//               <label htmlFor="file" className="file-label">
//                 {file ? file.name : 'Choose a file...'}
//                 <span className="file-button">Browse</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
//           <label className="checkbox-option">
//             <input
//               type="checkbox"
//               name="agreedToTerms"
//               checked={formData.agreedToTerms}
//               onChange={handleChange}
//             />
//             <span className="checkbox-custom"></span>
//             I agree to the Terms and Conditions*
//           </label>
//           {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
//         </div>

//         <div className="form-actions">
//           <button type="submit" className="submit-button">
//             Submit Request
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DataAnalysisForm;


// import React, { useState } from 'react';
// import './Analysisform.css';
// import emailjs from 'emailjs-com';

// const DataAnalysisForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     address: '',
//     applicationType: 'rna-sequencing',
//     otherApplication: '',
//     organism: '',
//     otherOrganism1: '',
//     otherOrganism2: '',
//     sampleNumber: '',
//     millionReads: '',
//     agreedToTerms: false
//   });

//   const [file, setFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [fileError, setFileError] = useState('');
//   const [loading, setLoading] = useState(false);




//   const organismOptions = [
//     'Human', 'Mouse', 'Rat', 'Zebrafish', 'Drosophila', 
//     'C. elegans', 'Arabidopsis', 'E. coli', 'Yeast', 
//     'Chicken', 'Cow', 'Pig', 'Sheep', 'Dog', 'Cat',
//     'Monkey', 'Xenopus', 'Salmon', 'Rice', 'Wheat', 'Maize', 'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };



//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (formData.applicationType === 'other' && !formData.otherApplication.trim()) 
//       newErrors.otherApplication = 'Please specify application';
//     if (!formData.organism) newErrors.organism = 'Organism is required';
//     if (formData.organism === 'Other' && (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim())) 
//       newErrors.otherOrganism = 'Please specify organism details';
//     if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
//     if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0 && !fileError;
//   };


// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (validateForm()) {
//     const templateParamsToAdmin = {
//       user_name: formData.name,
//       user_email: formData.email,
//       organization: formData.organization,
//       phone: formData.phone,
//       address: formData.address,
//       applicationType: formData.applicationType === 'other' ? formData.otherApplication : formData.applicationType,
//       organism: formData.organism === 'Other' 
//         ? `${formData.otherOrganism1} - ${formData.otherOrganism2}` 
//         : formData.organism,
//       sampleNumber: formData.sampleNumber,
//       millionReads: formData.millionReads || 'Not Provided',
//     };

//     const SERVICE_ID = 'service_m04jave';               // Example: 'service_xxxx123'
//     const ADMIN_TEMPLATE_ID = 'template_z801jx2'; // Example: 'template_admin123'
//     const USER_TEMPLATE_ID = 'template_4gv6nxn';   // Example: 'template_thankyou456'
//     const PUBLIC_KEY = 'vNK8H8pIP5nC4I1cq';               // Example: 'ABC123abc456'

//     // Send email to Admin
//     emailjs
//       .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParamsToAdmin, PUBLIC_KEY)
//       .then((response) => {
//         console.log('Admin Email Sent!', response.status, response.text);

//         // Send thank-you email to the user
//         const templateParamsToUser = {
//           user_name: formData.name,
//           user_email: formData.email,
//         };

//         emailjs
//           .send(SERVICE_ID, USER_TEMPLATE_ID, templateParamsToUser, PUBLIC_KEY)
//           .then((res) => {
//             console.log('User Thank You Email Sent!', res.status, res.text);
//             alert('Form submitted successfully! A confirmation email has been sent to your email address.');
//           })
//           .catch((err) => {
//             console.error('Error sending thank-you email:', err);
//             alert('Form submitted, but failed to send confirmation email to user.');
//           });
//       })
//       .catch((err) => {
//         console.error('Error sending admin email:', err);
//         alert('Failed to submit the form. Please try again.');
//       });
//   }
// };
// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (validateForm()) {
//     setLoading(true); // Show loading spinner

//     const templateParamsToAdmin = {
//       user_name: formData.name,
//       user_email: formData.email,
//       organization: formData.organization,
//       phone: formData.phone,
//       address: formData.address,
//       applicationType: formData.applicationType === 'other' ? formData.otherApplication : formData.applicationType,
//       organism: formData.organism === 'Other' 
//         ? `${formData.otherOrganism1} - ${formData.otherOrganism2}` 
//         : formData.organism,
//       sampleNumber: formData.sampleNumber,
//       millionReads: formData.millionReads || 'Not Provided',
//     };

//     const SERVICE_ID = 'service_m04jave';
//     const ADMIN_TEMPLATE_ID = 'template_z801jx2';
//     const USER_TEMPLATE_ID = 'template_4gv6nxn';
//     const PUBLIC_KEY = 'vNK8H8pIP5nC4I1cq';

//     emailjs
//       .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParamsToAdmin, PUBLIC_KEY)
//       .then((response) => {
//         console.log('Admin Email Sent!', response.status, response.text);

//         const templateParamsToUser = {
//           user_name: formData.name,
//           user_email: formData.email,
//         };

//         return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParamsToUser, PUBLIC_KEY);
//       })
//       .then((res) => {
//         console.log('User Thank You Email Sent!', res.status, res.text);
//         alert('Form submitted successfully! A confirmation email has been sent.');

//         // Reset form
//         setFormData({
//           name: '',
//           organization: '',
//           email: '',
//           phone: '',
//           address: '',
//           applicationType: 'rna-sequencing',
//           otherApplication: '',
//           organism: '',
//           otherOrganism1: '',
//           otherOrganism2: '',
//           sampleNumber: '',
//           millionReads: '',
//           agreedToTerms: false
//         });
//         setErrors({});
//         setFile(null);
//         setFileError('');
//       })
//       .catch((err) => {
//         console.error('Submission error:', err);
//         alert('Submission failed. Please try again.');
//       })
//       .finally(() => {
//         setLoading(false); // Hide spinner
//       });
//   }
// };



//   return (
//     <div className="form-container">
//       <div className="form-header">
//         <h1>Data Analysis Offer</h1>
//         <p>Please fill out the form below to request our data analysis services</p>
//       </div>

//       <form onSubmit={handleSubmit} className="analysis-form">
//         <div className="form-section">
//           <h2 className="section-title">Personal Information</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.name ? 'error' : ''}`}>
//               <label htmlFor="name">Full Name*</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//               />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className={`form-group ${errors.organization ? 'error' : ''}`}>
//               <label htmlFor="organization">Organization*</label>
//               <input
//                 type="text"
//                 id="organization"
//                 name="organization"
//                 value={formData.organization}
//                 onChange={handleChange}
//                 placeholder="Enter your organization"
//               />
//               {errors.organization && <span className="error-message">{errors.organization}</span>}
//             </div>

//             <div className={`form-group ${errors.email ? 'error' : ''}`}>
//               <label htmlFor="email">Email ID*</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className={`form-group ${errors.phone ? 'error' : ''}`}>
//               <label htmlFor="phone">Contact Phone Number*</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your phone number"
//               />
//               {errors.phone && <span className="error-message">{errors.phone}</span>}
//             </div>

//             <div className={`form-group ${errors.address ? 'error' : ''}`}>
//               <label htmlFor="address">Address*</label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Enter your address"
//                 rows="3"
//               />
//               {errors.address && <span className="error-message">{errors.address}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2 className="section-title">Analysis Details</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.applicationType ? 'error' : ''}`}>
//               <label>Application Type*</label>
//               <div className="radio-group">
//                 <label className="radio-option">
//                   <input
//                     type="radio"
//                     name="applicationType"
//                     value="rna-sequencing"
//                     checked={formData.applicationType === 'rna-sequencing'}
//                     onChange={handleChange}
//                   />
//                   <span className="radio-custom"></span>
//                   RNA Sequencing Analysis
//                 </label>
//                 <label className="radio-option">
//                   <input
//                     type="radio"
//                     name="applicationType"
//                     value="other"
//                     checked={formData.applicationType === 'other'}
//                     onChange={handleChange}
//                   />
//                   <span className="radio-custom"></span>
//                   Other
//                 </label>
//               </div>
//               {formData.applicationType === 'other' && (
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="otherApplication"
//                     value={formData.otherApplication}
//                     onChange={handleChange}
//                     placeholder="Please specify NGS application"
//                     className="full-width"
//                   />
//                   {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.organism ? 'error' : ''}`}>
//               <label htmlFor="organism">Organism*</label>
//               <select
//                 id="organism"
//                 name="organism"
//                 value={formData.organism}
//                 onChange={handleChange}
//               >
//                 <option value="">Select an organism</option>
//                 {organismOptions.map((org, index) => (
//                   <option key={index} value={org}>{org}</option>
//                 ))}
//               </select>
//               {errors.organism && <span className="error-message">{errors.organism}</span>}
//               {formData.organism === 'Other' && (
//                 <div className="other-organism-fields">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="otherOrganism1"
//                       value={formData.otherOrganism1}
//                       onChange={handleChange}
//                       placeholder="Organism Scientific name"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="otherOrganism2"
//                       value={formData.otherOrganism2}
//                       onChange={handleChange}
//                       placeholder="NCBI Accession Number"
//                     />
//                   </div>
//                   {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
//               <label htmlFor="sampleNumber">Sample Number*</label>
//               <input
//                 type="number"
//                 id="sampleNumber"
//                 name="sampleNumber"
//                 value={formData.sampleNumber}
//                 onChange={handleChange}
//                 placeholder="Enter number of samples"
//                 min="1"
//               />
//               {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
//               <input
//                 type="number"
//                 id="millionReads"
//                 name="millionReads"
//                 value={formData.millionReads}
//                 onChange={handleChange}
//                 placeholder="Enter million reads"
//                 min="0"
//                 step="0.1"
//               />
//             </div>
//           </div>
//         </div>

        

//         <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
//           <label className="checkbox-option">
//             <input
//               type="checkbox"
//               name="agreedToTerms"
//               checked={formData.agreedToTerms}
//               onChange={handleChange}
//             />
//             <span className="checkbox-custom"></span>
//             I agree to the Terms and Conditions*
//           </label>
//           {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
//         </div>

//         <div className="form-actions">
//           {/* <button type="submit" className="submit-button">
//             Submit Request
//           </button> */}
//           <button type="submit" className="submit-button" disabled={loading}>
//                 {loading ? 'Submitting...' : 'Submit Request'}
//           </button>

//         </div>
//       </form>
//     </div>
//   );
// };

// export default DataAnalysisForm;





// import React, { useState } from 'react';
// import './Analysisform.css';
// import emailjs from 'emailjs-com';
// import  image './assets/image.jpg';


// const DataAnalysisForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     address: '',
//     applicationType: 'rna-sequencing',
//     otherApplication: '',
//     organism: '',
//     otherOrganism1: '',
//     otherOrganism2: '',
//     sampleNumber: '',
//     millionReads: '',
//     agreedToTerms: false,
//   });

//   const [file, setFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [fileError, setFileError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const organismOptions = [
//     'Human', 'Mouse', 'Rat', 'Zebrafish', 'Drosophila',
//     'C. elegans', 'Arabidopsis', 'E. coli', 'Yeast',
//     'Chicken', 'Cow', 'Pig', 'Sheep', 'Dog', 'Cat',
//     'Monkey', 'Xenopus', 'Salmon', 'Rice', 'Wheat', 'Maize', 'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (formData.applicationType === 'other' && !formData.otherApplication.trim())
//       newErrors.otherApplication = 'Please specify application';
//     if (!formData.organism) newErrors.organism = 'Organism is required';
//     if (formData.organism === 'Other' &&
//       (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim()))
//       newErrors.otherOrganism = 'Please specify organism details';
//     if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
//     if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0 && !fileError;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setLoading(true);

//       const templateParamsToAdmin = {
//         user_name: formData.name,
//         user_email: formData.email,
//         organization: formData.organization,
//         phone: formData.phone,
//         address: formData.address,
//         applicationType: formData.applicationType === 'other' ? formData.otherApplication : formData.applicationType,
//         organism: formData.organism === 'Other'
//           ? `${formData.otherOrganism1} - ${formData.otherOrganism2}`
//           : formData.organism,
//         sampleNumber: formData.sampleNumber,
//         millionReads: formData.millionReads || 'Not Provided',
//       };

//       const SERVICE_ID = 'service_m04jave';
//       const ADMIN_TEMPLATE_ID = 'template_z801jx2';
//       const USER_TEMPLATE_ID = 'template_4gv6nxn';
//       const PUBLIC_KEY = 'vNK8H8pIP5nC4I1cq';

//       emailjs
//         .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParamsToAdmin, PUBLIC_KEY)
//         .then((response) => {
//           console.log('Admin Email Sent!', response.status, response.text);

//           const templateParamsToUser = {
//             user_name: formData.name,
//             user_email: formData.email,
//           };

//           return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParamsToUser, PUBLIC_KEY);
//         })
//         .then((res) => {
//           console.log('User Thank You Email Sent!', res.status, res.text);
//           alert('Form submitted successfully! A confirmation email has been sent.');

//           setFormData({
//             name: '',
//             organization: '',
//             email: '',
//             phone: '',
//             address: '',
//             applicationType: 'rna-sequencing',
//             otherApplication: '',
//             organism: '',
//             otherOrganism1: '',
//             otherOrganism2: '',
//             sampleNumber: '',
//             millionReads: '',
//             agreedToTerms: false,
//           });
//           setErrors({});
//           setFile(null);
//           setFileError('');
//         })
//         .catch((err) => {
//           console.error('Submission error:', err);
//           alert('Submission failed. Please try again.');
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-header">
//         <h1>Data Analysis Offer</h1>
//         <p>Please fill out the form below to request our data analysis services</p>
//       </div>

//       <form onSubmit={handleSubmit} className="analysis-form">
//         <div className="form-section">
//           <h2 className="section-title">Personal Information</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.name ? 'error' : ''}`}>
//               <label htmlFor="name">Full Name*</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className={`form-group ${errors.organization ? 'error' : ''}`}>
//               <label htmlFor="organization">Organization*</label>
//               <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter your organization" />
//               {errors.organization && <span className="error-message">{errors.organization}</span>}
//             </div>

//             <div className={`form-group ${errors.email ? 'error' : ''}`}>
//               <label htmlFor="email">Email ID*</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className={`form-group ${errors.phone ? 'error' : ''}`}>
//               <label htmlFor="phone">Contact Phone Number*</label>
//               <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
//               {errors.phone && <span className="error-message">{errors.phone}</span>}
//             </div>

//             <div className={`form-group ${errors.address ? 'error' : ''}`}>
//               <label htmlFor="address">Address*</label>
//               <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" rows="3" />
//               {errors.address && <span className="error-message">{errors.address}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2 className="section-title">Analysis Details</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.applicationType ? 'error' : ''}`}>
//               <label>Application Type*</label>
//               <div className="radio-group">
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="rna-sequencing" checked={formData.applicationType === 'rna-sequencing'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   RNA Sequencing Analysis
//                 </label>
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="other" checked={formData.applicationType === 'other'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   Other
//                 </label>
//               </div>
//               {formData.applicationType === 'other' && (
//                 <div className="form-group">
//                   <input type="text" name="otherApplication" value={formData.otherApplication} onChange={handleChange} placeholder="Please specify NGS application" className="full-width" />
//                   {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.organism ? 'error' : ''}`}>
//               <label htmlFor="organism">Organism*</label>
//               <select id="organism" name="organism" value={formData.organism} onChange={handleChange}>
//                 <option value="">Select an organism</option>
//                 {organismOptions.map((org, idx) => <option key={idx} value={org}>{org}</option>)}
//               </select>
//               {errors.organism && <span className="error-message">{errors.organism}</span>}
//               {formData.organism === 'Other' && (
//                 <div className="other-organism-fields">
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism1" value={formData.otherOrganism1} onChange={handleChange} placeholder="Organism Scientific name" />
//                   </div>
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism2" value={formData.otherOrganism2} onChange={handleChange} placeholder="NCBI Accession Number" />
//                   </div>
//                   {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
//               <label htmlFor="sampleNumber">Sample Number*</label>
//               <input type="number" id="sampleNumber" name="sampleNumber" value={formData.sampleNumber} onChange={handleChange} min="1" placeholder="Enter number of samples" />
//               {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
//               <input type="number" id="millionReads" name="millionReads" value={formData.millionReads} onChange={handleChange} min="0" step="0.1" placeholder="Enter million reads" />
//             </div>
//           </div>
//         </div>

//         <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
//           <label className="checkbox-option">
//             <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
//             <span className="checkbox-custom"></span>
//             I agree to the <span className="terms-tooltip">Terms and Conditions
//               <div className="tooltip-content">
//                 <strong>Extended Deliverables:</strong><br />
//                 1. Individual Raw FASTQ FastQC report<br />
//                 2. Raw FASTQ MultiQC report<br />
//                 3. Individual processed FASTQ FastQC report<br />
//                 4. Processed FASTQ MultiQC report<br />
//                 5. Alignment and Mapping statistics of individual samples<br />
//                 6. Raw readcount (featureCounts) of individual samples<br />
//                 7. Counts for DEG analysis<br />
//                 8. rlog transformed file<br />
//                 9. PCA plot showing variation within and between groups<br />
//                 10. Sample-to-Sample distance cluster plot<br />
//                 11. Up/down regulated gene counts (.xls)<br />
//                 12. Annotated DEGs with Chromosome, Gene name, Position, Stats<br />
//                 - FDR &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//                 - p-value &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//                 13. Heatmap (top 25 up/down genes)<br />
//                 14. MA plot<br />
//                 15. Volcano plot
//               </div>
//             </span>*
//           </label>
//           {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
//         </div>

//         <div className="form-actions">
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Request'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DataAnalysisForm;


// import React, { useState, useEffect } from 'react';
// import './Analysisform.css';
// import emailjs from 'emailjs-com';
// import image from '../assets/image.jpg';

// const DataAnalysisForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     address: '',
//     applicationType: 'rna-sequencing',
//     otherApplication: '',
//     organism: '',
//     otherOrganism1: '',
//     otherOrganism2: '',
//     sampleNumber: '',
//     millionReads: '',
//     agreedToTerms: false,
//   });

//   const [file, setFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [fileError, setFileError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showImagePopup, setShowImagePopup] = useState(false);

//   // Show popup every 10 seconds
//   useEffect(() => {
//     const popupInterval = setInterval(() => {
//       setShowImagePopup(true);
      
//       // Auto-hide after 10 seconds
//       const timer = setTimeout(() => {
//         setShowImagePopup(false);
//       }, 10000);
      
//       return () => clearTimeout(timer);
//     }, 10000);

//     return () => clearInterval(popupInterval);
//   }, []);

//   const organismOptions = [
//     'Human', 'Mouse', 'Rat', 'Zebrafish', 'Drosophila',
//     'C. elegans', 'Arabidopsis', 'E. coli', 'Yeast',
//     'Chicken', 'Cow', 'Pig', 'Sheep', 'Dog', 'Cat',
//     'Monkey', 'Xenopus', 'Salmon', 'Rice', 'Wheat', 'Maize', 'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (formData.applicationType === 'other' && !formData.otherApplication.trim())
//       newErrors.otherApplication = 'Please specify application';
//     if (!formData.organism) newErrors.organism = 'Organism is required';
//     if (formData.organism === 'Other' &&
//       (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim()))
//       newErrors.otherOrganism = 'Please specify organism details';
//     if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
//     if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0 && !fileError;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setLoading(true);

//       const templateParamsToAdmin = {
//         user_name: formData.name,
//         user_email: formData.email,
//         organization: formData.organization,
//         phone: formData.phone,
//         address: formData.address,
//         applicationType: formData.applicationType === 'other' ? formData.otherApplication : formData.applicationType,
//         organism: formData.organism === 'Other'
//           ? `${formData.otherOrganism1} - ${formData.otherOrganism2}`
//           : formData.organism,
//         sampleNumber: formData.sampleNumber,
//         millionReads: formData.millionReads || 'Not Provided',
//       };

//       const SERVICE_ID = 'service_m04jave';
//       const ADMIN_TEMPLATE_ID = 'template_z801jx2';
//       const USER_TEMPLATE_ID = 'template_4gv6nxn';
//       const PUBLIC_KEY = 'vNK8H8pIP5nC4I1cq';

//       emailjs
//         .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParamsToAdmin, PUBLIC_KEY)
//         .then((response) => {
//           console.log('Admin Email Sent!', response.status, response.text);

//           const templateParamsToUser = {
//             user_name: formData.name,
//             user_email: formData.email,
//           };

//           return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParamsToUser, PUBLIC_KEY);
//         })
//         .then((res) => {
//           console.log('User Thank You Email Sent!', res.status, res.text);
//           alert('Form submitted successfully! A confirmation email has been sent.');

//           setFormData({
//             name: '',
//             organization: '',
//             email: '',
//             phone: '',
//             address: '',
//             applicationType: 'rna-sequencing',
//             otherApplication: '',
//             organism: '',
//             otherOrganism1: '',
//             otherOrganism2: '',
//             sampleNumber: '',
//             millionReads: '',
//             agreedToTerms: false,
//           });
//           setErrors({});
//           setFile(null);
//           setFileError('');
//         })
//         .catch((err) => {
//           console.error('Submission error:', err);
//           alert('Submission failed. Please try again.');
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   const closeImagePopup = () => {
//     setShowImagePopup(false);
//   };

//   return (
//     <div className="form-container">
//       {/* Image Popup */}
//       {showImagePopup && (
//         <div className="image-popup">
//           <div className="popup-content">
//             <button className="close-popup" onClick={closeImagePopup}>×</button>
//             <img src={image} alt="Promotional" className="popup-image" />
//           </div>
//         </div>
//       )}

//       <div className="form-header">
//         <h1>Data Analysis Offer</h1>
//         <p>Please fill out the form below to request our data analysis services</p>
//       </div>

//       <form onSubmit={handleSubmit} className="analysis-form">
//         <div className="form-section">
//           <h2 className="section-title">Personal Information</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.name ? 'error' : ''}`}>
//               <label htmlFor="name">Full Name*</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className={`form-group ${errors.organization ? 'error' : ''}`}>
//               <label htmlFor="organization">Organization*</label>
//               <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter your organization" />
//               {errors.organization && <span className="error-message">{errors.organization}</span>}
//             </div>

//             <div className={`form-group ${errors.email ? 'error' : ''}`}>
//               <label htmlFor="email">Email ID*</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className={`form-group ${errors.phone ? 'error' : ''}`}>
//               <label htmlFor="phone">Contact Phone Number*</label>
//               <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
//               {errors.phone && <span className="error-message">{errors.phone}</span>}
//             </div>

//             <div className={`form-group ${errors.address ? 'error' : ''}`}>
//               <label htmlFor="address">Address*</label>
//               <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" rows="3" />
//               {errors.address && <span className="error-message">{errors.address}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2 className="section-title">Analysis Details</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.applicationType ? 'error' : ''}`}>
//               <label>Application Type*</label>
//               <div className="radio-group">
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="rna-sequencing" checked={formData.applicationType === 'rna-sequencing'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   RNA Sequencing Analysis
//                 </label>
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="other" checked={formData.applicationType === 'other'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   Other
//                 </label>
//               </div>
//               {formData.applicationType === 'other' && (
//                 <div className="form-group">
//                   <input type="text" name="otherApplication" value={formData.otherApplication} onChange={handleChange} placeholder="Please specify NGS application" className="full-width" />
//                   {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.organism ? 'error' : ''}`}>
//               <label htmlFor="organism">Organism*</label>
//               <select id="organism" name="organism" value={formData.organism} onChange={handleChange}>
//                 <option value="">Select an organism</option>
//                 {organismOptions.map((org, idx) => <option key={idx} value={org}>{org}</option>)}
//               </select>
//               {errors.organism && <span className="error-message">{errors.organism}</span>}
//               {formData.organism === 'Other' && (
//                 <div className="other-organism-fields">
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism1" value={formData.otherOrganism1} onChange={handleChange} placeholder="Organism Scientific name" />
//                   </div>
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism2" value={formData.otherOrganism2} onChange={handleChange} placeholder="NCBI Accession Number" />
//                   </div>
//                   {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
//               <label htmlFor="sampleNumber">Sample Number*</label>
//               <input type="number" id="sampleNumber" name="sampleNumber" value={formData.sampleNumber} onChange={handleChange} min="1" placeholder="Enter number of samples" />
//               {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
//               <input type="number" id="millionReads" name="millionReads" value={formData.millionReads} onChange={handleChange} min="0" step="0.1" placeholder="Enter million reads" />
//             </div>
//           </div>
//         </div>

//         <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
//           <label className="checkbox-option">
//             <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
//             <span className="checkbox-custom"></span>
//             I agree to the <span className="terms-tooltip">Terms and Conditions
//               <div className="tooltip-content">
//                 <strong>Extended Deliverables:</strong><br />
//                 1. Individual Raw FASTQ FastQC report<br />
//                 2. Raw FASTQ MultiQC report<br />
//                 3. Individual processed FASTQ FastQC report<br />
//                 4. Processed FASTQ MultiQC report<br />
//                 5. Alignment and Mapping statistics of individual samples<br />
//                 6. Raw readcount (featureCounts) of individual samples<br />
//                 7. Counts for DEG analysis<br />
//                 8. rlog transformed file<br />
//                 9. PCA plot showing variation within and between groups<br />
//                 10. Sample-to-Sample distance cluster plot<br />
//                 11. Up/down regulated gene counts (.xls)<br />
//                 12. Annotated DEGs with Chromosome, Gene name, Position, Stats<br />
//                 - FDR &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//                 - p-value &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//                 13. Heatmap (top 25 up/down genes)<br />
//                 14. MA plot<br />
//                 15. Volcano plot
//               </div>
//             </span>*
//           </label>
//           {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
//         </div>

//         <div className="form-actions">
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Request'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DataAnalysisForm;


// import React, { useState, useEffect } from 'react';
// import './Analysisform.css';
// import emailjs from 'emailjs-com';
// import image from '../assets/image.jpg';

// const DataAnalysisForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     address: '',
//     applicationType: 'rna-sequencing',
//     otherApplication: '',
//     organism: '',
//     otherOrganism1: '',
//     otherOrganism2: '',
//     sampleNumber: '',
//     millionReads: '',
//     agreedToTerms: false,
//   });

//   const [file, setFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [fileError, setFileError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showImagePopup, setShowImagePopup] = useState(false);
//   const [showTermsPopup, setShowTermsPopup] = useState(false);
//   const [popupPosition, setPopupPosition] = useState({ top: '20%', left: '30%' });

//   // Show moving popup every 6 seconds
//   useEffect(() => {
//     const positions = [
//       { top: '10%', left: '10%' },
//       { top: '20%', left: '70%' },
//       { top: '70%', left: '20%' },
//       { top: '60%', left: '60%' }
//     ];

//     const popupInterval = setInterval(() => {
//       const randomPosition = positions[Math.floor(Math.random() * positions.length)];
//       setPopupPosition(randomPosition);
//       setShowImagePopup(true);
      
//       // Auto-hide after 6 seconds
//       const timer = setTimeout(() => {
//         setShowImagePopup(false);
//       }, 6000);
      
//       return () => clearTimeout(timer);
//     }, 6000);

//     return () => clearInterval(popupInterval);
//   }, []);

//   const organismOptions = [
//     'Human', 'Mouse', 'Rat', 'Zebrafish', 'Drosophila',
//     'C. elegans', 'Arabidopsis', 'E. coli', 'Yeast',
//     'Chicken', 'Cow', 'Pig', 'Sheep', 'Dog', 'Cat',
//     'Monkey', 'Xenopus', 'Salmon', 'Rice', 'Wheat', 'Maize', 'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (formData.applicationType === 'other' && !formData.otherApplication.trim())
//       newErrors.otherApplication = 'Please specify application';
//     if (!formData.organism) newErrors.organism = 'Organism is required';
//     if (formData.organism === 'Other' &&
//       (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim()))
//       newErrors.otherOrganism = 'Please specify organism details';
//     if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
//     if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0 && !fileError;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setLoading(true);

//       const templateParamsToAdmin = {
//         user_name: formData.name,
//         user_email: formData.email,
//         organization: formData.organization,
//         phone: formData.phone,
//         address: formData.address,
//         applicationType: formData.applicationType === 'other' ? formData.otherApplication : formData.applicationType,
//         organism: formData.organism === 'Other'
//           ? `${formData.otherOrganism1} - ${formData.otherOrganism2}`
//           : formData.organism,
//         sampleNumber: formData.sampleNumber,
//         millionReads: formData.millionReads || 'Not Provided',
//       };

//       const SERVICE_ID = 'service_m04jave';
//       const ADMIN_TEMPLATE_ID = 'template_z801jx2';
//       const USER_TEMPLATE_ID = 'template_4gv6nxn';
//       const PUBLIC_KEY = 'vNK8H8pIP5nC4I1cq';

//       emailjs
//         .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParamsToAdmin, PUBLIC_KEY)
//         .then((response) => {
//           console.log('Admin Email Sent!', response.status, response.text);

//           const templateParamsToUser = {
//             user_name: formData.name,
//             user_email: formData.email,
//           };

//           return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParamsToUser, PUBLIC_KEY);
//         })
//         .then((res) => {
//           console.log('User Thank You Email Sent!', res.status, res.text);
//           alert('Form submitted successfully! A confirmation email has been sent.');

//           setFormData({
//             name: '',
//             organization: '',
//             email: '',
//             phone: '',
//             address: '',
//             applicationType: 'rna-sequencing',
//             otherApplication: '',
//             organism: '',
//             otherOrganism1: '',
//             otherOrganism2: '',
//             sampleNumber: '',
//             millionReads: '',
//             agreedToTerms: false,
//           });
//           setErrors({});
//           setFile(null);
//           setFileError('');
//         })
//         .catch((err) => {
//           console.error('Submission error:', err);
//           alert('Submission failed. Please try again.');
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   const closeImagePopup = () => {
//     setShowImagePopup(false);
//   };

//   const toggleTermsPopup = () => {
//     setShowTermsPopup(!showTermsPopup);
//   };

//   return (
//     <div className="form-container">
//       {/* Moving Image Popup */}
//       {showImagePopup && (
//         <div className="image-popup" style={popupPosition}>
//           <div className="popup-content">
//             <button className="close-popup" onClick={closeImagePopup}>×</button>
//             <img src={image} alt="Promotional" className="popup-image" />
//           </div>
//         </div>
//       )}

//       {/* Terms and Conditions Popup */}
//       {showTermsPopup && (
//         <div className="terms-popup-overlay">
//           <div className="terms-popup-content">
//             <button className="close-popup" onClick={toggleTermsPopup}>×</button>
//             <h3>Terms and Conditions</h3>
//             <div className="terms-content">
//               <strong>Extended Deliverables:</strong><br />
//               1. Individual Raw FASTQ FastQC report<br />
//               2. Raw FASTQ MultiQC report<br />
//               3. Individual processed FASTQ FastQC report<br />
//               4. Processed FASTQ MultiQC report<br />
//               5. Alignment and Mapping statistics of individual samples<br />
//               6. Raw readcount (featureCounts) of individual samples<br />
//               7. Counts for DEG analysis<br />
//               8. rlog transformed file<br />
//               9. PCA plot showing variation within and between groups<br />
//               10. Sample-to-Sample distance cluster plot<br />
//               11. Up/down regulated gene counts (.xls)<br />
//               12. Annotated DEGs with Chromosome, Gene name, Position, Stats<br />
//               - FDR &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//               - p-value &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//               13. Heatmap (top 25 up/down genes)<br />
//               14. MA plot<br />
//               15. Volcano plot
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="form-header">
//         <h1>Data Analysis Offer</h1>
//         <p>Please fill out the form below to request our data analysis services</p>
//       </div>

//       <form onSubmit={handleSubmit} className="analysis-form">
//         <div className="form-section">
//           <h2 className="section-title">Personal Information</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.name ? 'error' : ''}`}>
//               <label htmlFor="name">Full Name*</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className={`form-group ${errors.organization ? 'error' : ''}`}>
//               <label htmlFor="organization">Organization*</label>
//               <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter your organization" />
//               {errors.organization && <span className="error-message">{errors.organization}</span>}
//             </div>

//             <div className={`form-group ${errors.email ? 'error' : ''}`}>
//               <label htmlFor="email">Email ID*</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className={`form-group ${errors.phone ? 'error' : ''}`}>
//               <label htmlFor="phone">Contact Phone Number*</label>
//               <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
//               {errors.phone && <span className="error-message">{errors.phone}</span>}
//             </div>

//             <div className={`form-group ${errors.address ? 'error' : ''}`}>
//               <label htmlFor="address">Address*</label>
//               <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" rows="3" />
//               {errors.address && <span className="error-message">{errors.address}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2 className="section-title">Analysis Details</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.applicationType ? 'error' : ''}`}>
//               <label>Application Type*</label>
//               <div className="radio-group">
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="rna-sequencing" checked={formData.applicationType === 'rna-sequencing'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   RNA Sequencing Analysis
//                 </label>
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="other" checked={formData.applicationType === 'other'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   Other
//                 </label>
//               </div>
//               {formData.applicationType === 'other' && (
//                 <div className="form-group">
//                   <input type="text" name="otherApplication" value={formData.otherApplication} onChange={handleChange} placeholder="Please specify NGS application" className="full-width" />
//                   {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.organism ? 'error' : ''}`}>
//               <label htmlFor="organism">Organism*</label>
//               <select id="organism" name="organism" value={formData.organism} onChange={handleChange}>
//                 <option value="">Select an organism</option>
//                 {organismOptions.map((org, idx) => <option key={idx} value={org}>{org}</option>)}
//               </select>
//               {errors.organism && <span className="error-message">{errors.organism}</span>}
//               {formData.organism === 'Other' && (
//                 <div className="other-organism-fields">
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism1" value={formData.otherOrganism1} onChange={handleChange} placeholder="Organism Scientific name" />
//                   </div>
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism2" value={formData.otherOrganism2} onChange={handleChange} placeholder="NCBI Accession Number" />
//                   </div>
//                   {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
//               <label htmlFor="sampleNumber">Sample Number*</label>
//               <input type="number" id="sampleNumber" name="sampleNumber" value={formData.sampleNumber} onChange={handleChange} min="1" placeholder="Enter number of samples" />
//               {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
//               <input type="number" id="millionReads" name="millionReads" value={formData.millionReads} onChange={handleChange} min="0" step="0.1" placeholder="Enter million reads" />
//             </div>
//           </div>
//         </div>

//         <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
//           <label className="checkbox-option">
//             <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
//             <span className="checkbox-custom"></span>
//             I agree to the <span className="terms-link" onClick={toggleTermsPopup}>Terms and Conditions</span>*
//           </label>
//           {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
//         </div>

//         <div className="form-actions">
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Request'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DataAnalysisForm;

// import React, { useState, useEffect } from 'react';
// import './Analysisform.css';
// import emailjs from 'emailjs-com';
// import image from '../assets/image.jpg';

// const DataAnalysisForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     address: '',
//     applicationType: 'rna-sequencing',
//     otherApplication: '',
//     organism: '',
//     otherOrganism1: '',
//     otherOrganism2: '',
//     sampleNumber: '',
//     millionReads: '',
//     agreedToTerms: false,
//   });

//   const [file, setFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [fileError, setFileError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showImagePopup, setShowImagePopup] = useState(false);
//   const [showTermsPopup, setShowTermsPopup] = useState(false);

//   // Show popup after component mounts
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowImagePopup(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   const organismOptions = [
//     'Human', 'Mouse', 'Rat', 'Zebrafish', 'Drosophila',
//     'C. elegans', 'Arabidopsis', 'E. coli', 'Yeast',
//     'Chicken', 'Cow', 'Pig', 'Sheep', 'Dog', 'Cat',
//     'Monkey', 'Xenopus', 'Salmon', 'Rice', 'Wheat', 'Maize', 'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (formData.applicationType === 'other' && !formData.otherApplication.trim())
//       newErrors.otherApplication = 'Please specify application';
//     if (!formData.organism) newErrors.organism = 'Organism is required';
//     if (formData.organism === 'Other' &&
//       (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim()))
//       newErrors.otherOrganism = 'Please specify organism details';
//     if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
//     if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0 && !fileError;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setLoading(true);

//       const templateParamsToAdmin = {
//         user_name: formData.name,
//         user_email: formData.email,
//         organization: formData.organization,
//         phone: formData.phone,
//         address: formData.address,
//         applicationType: formData.applicationType === 'other' ? formData.otherApplication : formData.applicationType,
//         organism: formData.organism === 'Other'
//           ? `${formData.otherOrganism1} - ${formData.otherOrganism2}`
//           : formData.organism,
//         sampleNumber: formData.sampleNumber,
//         millionReads: formData.millionReads || 'Not Provided',
//       };

//       const SERVICE_ID = 'service_m04jave';
//       const ADMIN_TEMPLATE_ID = 'template_z801jx2';
//       const USER_TEMPLATE_ID = 'template_4gv6nxn';
//       const PUBLIC_KEY = 'vNK8H8pIP5nC4I1cq';

//       emailjs
//         .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParamsToAdmin, PUBLIC_KEY)
//         .then((response) => {
//           console.log('Admin Email Sent!', response.status, response.text);

//           const templateParamsToUser = {
//             user_name: formData.name,
//             user_email: formData.email,
//           };

//           return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParamsToUser, PUBLIC_KEY);
//         })
//         .then((res) => {
//           console.log('User Thank You Email Sent!', res.status, res.text);
//           alert('Form submitted successfully! A confirmation email has been sent.');

//           setFormData({
//             name: '',
//             organization: '',
//             email: '',
//             phone: '',
//             address: '',
//             applicationType: 'rna-sequencing',
//             otherApplication: '',
//             organism: '',
//             otherOrganism1: '',
//             otherOrganism2: '',
//             sampleNumber: '',
//             millionReads: '',
//             agreedToTerms: false,
//           });
//           setErrors({});
//           setFile(null);
//           setFileError('');
//         })
//         .catch((err) => {
//           console.error('Submission error:', err);
//           alert('Submission failed. Please try again.');
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   const closeImagePopup = () => {
//     setShowImagePopup(false);
//   };

//   const toggleTermsPopup = () => {
//     setShowTermsPopup(!showTermsPopup);
//   };

//   return (
//     <div className="form-container">
//       {/* Full-width Image Popup below submit button */}
//       {showImagePopup && (
//         <div className="full-width-popup">
//           <div className="popup-content">
//             <button className="close-popup" onClick={closeImagePopup}>×</button>
//             <img src={image} alt="Promotional" className="full-width-image" />
//           </div>
//         </div>
//       )}

//       {/* Terms and Conditions Popup */}
//       {showTermsPopup && (
//         <div className="terms-popup-overlay">
//           <div className="terms-popup-content">
//             <button className="close-popup" onClick={toggleTermsPopup}>×</button>
//             <h3>Terms and Conditions</h3>
//             <div className="terms-content">
//               <strong>Extended Deliverables:</strong><br />
//               1. Individual Raw FASTQ FastQC report<br />
//               2. Raw FASTQ MultiQC report<br />
//               3. Individual processed FASTQ FastQC report<br />
//               4. Processed FASTQ MultiQC report<br />
//               5. Alignment and Mapping statistics of individual samples<br />
//               6. Raw readcount (featureCounts) of individual samples<br />
//               7. Counts for DEG analysis<br />
//               8. rlog transformed file<br />
//               9. PCA plot showing variation within and between groups<br />
//               10. Sample-to-Sample distance cluster plot<br />
//               11. Up/down regulated gene counts (.xls)<br />
//               12. Annotated DEGs with Chromosome, Gene name, Position, Stats<br />
//               - FDR &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//               - p-value &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//               13. Heatmap (top 25 up/down genes)<br />
//               14. MA plot<br />
//               15. Volcano plot
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="form-header">
//         <h1>Data Analysis Offer</h1>
//         <p>Please fill out the form below to request our data analysis services</p>
//       </div>

//       <form onSubmit={handleSubmit} className="analysis-form">
//         <div className="form-section">
//           <h2 className="section-title">Personal Information</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.name ? 'error' : ''}`}>
//               <label htmlFor="name">Full Name*</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className={`form-group ${errors.organization ? 'error' : ''}`}>
//               <label htmlFor="organization">Organization*</label>
//               <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter your organization" />
//               {errors.organization && <span className="error-message">{errors.organization}</span>}
//             </div>

//             <div className={`form-group ${errors.email ? 'error' : ''}`}>
//               <label htmlFor="email">Email ID*</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className={`form-group ${errors.phone ? 'error' : ''}`}>
//               <label htmlFor="phone">Contact Phone Number*</label>
//               <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
//               {errors.phone && <span className="error-message">{errors.phone}</span>}
//             </div>

//             <div className={`form-group ${errors.address ? 'error' : ''}`}>
//               <label htmlFor="address">Address*</label>
//               <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" rows="3" />
//               {errors.address && <span className="error-message">{errors.address}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2 className="section-title">Analysis Details</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.applicationType ? 'error' : ''}`}>
//               <label>Application Type*</label>
//               <div className="radio-group">
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="rna-sequencing" checked={formData.applicationType === 'rna-sequencing'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   RNA Sequencing Analysis
//                 </label>
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="other" checked={formData.applicationType === 'other'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   Other
//                 </label>
//               </div>
//               {formData.applicationType === 'other' && (
//                 <div className="form-group">
//                   <input type="text" name="otherApplication" value={formData.otherApplication} onChange={handleChange} placeholder="Please specify NGS application" className="full-width" />
//                   {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.organism ? 'error' : ''}`}>
//               <label htmlFor="organism">Organism*</label>
//               <select id="organism" name="organism" value={formData.organism} onChange={handleChange}>
//                 <option value="">Select an organism</option>
//                 {organismOptions.map((org, idx) => <option key={idx} value={org}>{org}</option>)}
//               </select>
//               {errors.organism && <span className="error-message">{errors.organism}</span>}
//               {formData.organism === 'Other' && (
//                 <div className="other-organism-fields">
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism1" value={formData.otherOrganism1} onChange={handleChange} placeholder="Organism Scientific name" />
//                   </div>
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism2" value={formData.otherOrganism2} onChange={handleChange} placeholder="NCBI Accession Number" />
//                   </div>
//                   {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
//               <label htmlFor="sampleNumber">Sample Number*</label>
//               <input type="number" id="sampleNumber" name="sampleNumber" value={formData.sampleNumber} onChange={handleChange} min="1" placeholder="Enter number of samples" />
//               {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
//               <input type="number" id="millionReads" name="millionReads" value={formData.millionReads} onChange={handleChange} min="0" step="0.1" placeholder="Enter million reads" />
//             </div>
//           </div>
//         </div>

//         <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
//           <label className="checkbox-option">
//             <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
//             <span className="checkbox-custom"></span>
//             I agree to the <span className="terms-link" onClick={toggleTermsPopup}>Terms and Conditions</span>*
//           </label>
//           {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
//         </div>

//         <div className="form-actions">
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Request'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DataAnalysisForm;


// import React, { useState, useEffect } from 'react';
// import './Analysisform.css';
// import emailjs from 'emailjs-com';
// import image from '../assets/image.jpg';

// const DataAnalysisForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     address: '',
//     applicationType: 'rna-sequencing',
//     otherApplication: '',
//     organism: '',
//     otherOrganism1: '',
//     otherOrganism2: '',
//     sampleNumber: '',
//     millionReads: '',
//     agreedToTerms: false,
//   });

//   const [file, setFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [fileError, setFileError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showImage, setShowImage] = useState(true);
//   const [showTermsPopup, setShowTermsPopup] = useState(false);

//   // Re-show image every 5 seconds if it was hidden
//   useEffect(() => {
//     let timer;
//     if (!showImage) {
//       timer = setTimeout(() => {
//         setShowImage(true);
//       }, 5000);
//     }
//     return () => clearTimeout(timer);
//   }, [showImage]);

//   const organismOptions = [
//     'Human', 'Mouse', 'Rat', 'Zebrafish', 'Drosophila',
//     'C. elegans', 'Arabidopsis', 'E. coli', 'Yeast',
//     'Chicken', 'Cow', 'Pig', 'Sheep', 'Dog', 'Cat',
//     'Monkey', 'Xenopus', 'Salmon', 'Rice', 'Wheat', 'Maize', 'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (formData.applicationType === 'other' && !formData.otherApplication.trim())
//       newErrors.otherApplication = 'Please specify application';
//     if (!formData.organism) newErrors.organism = 'Organism is required';
//     if (formData.organism === 'Other' &&
//       (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim()))
//       newErrors.otherOrganism = 'Please specify organism details';
//     if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
//     if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0 && !fileError;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setLoading(true);

//       const templateParamsToAdmin = {
//         user_name: formData.name,
//         user_email: formData.email,
//         organization: formData.organization,
//         phone: formData.phone,
//         address: formData.address,
//         applicationType: formData.applicationType === 'other' ? formData.otherApplication : formData.applicationType,
//         organism: formData.organism === 'Other'
//           ? `${formData.otherOrganism1} - ${formData.otherOrganism2}`
//           : formData.organism,
//         sampleNumber: formData.sampleNumber,
//         millionReads: formData.millionReads || 'Not Provided',
//       };

//       const SERVICE_ID = 'service_m04jave';
//       const ADMIN_TEMPLATE_ID = 'template_z801jx2';
//       const USER_TEMPLATE_ID = 'template_4gv6nxn';
//       const PUBLIC_KEY = 'vNK8H8pIP5nC4I1cq';

//       emailjs
//         .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParamsToAdmin, PUBLIC_KEY)
//         .then((response) => {
//           console.log('Admin Email Sent!', response.status, response.text);

//           const templateParamsToUser = {
//             user_name: formData.name,
//             user_email: formData.email,
//           };

//           return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParamsToUser, PUBLIC_KEY);
//         })
//         .then((res) => {
//           console.log('User Thank You Email Sent!', res.status, res.text);
//           alert('Form submitted successfully! A confirmation email has been sent.');

//           setFormData({
//             name: '',
//             organization: '',
//             email: '',
//             phone: '',
//             address: '',
//             applicationType: 'rna-sequencing',
//             otherApplication: '',
//             organism: '',
//             otherOrganism1: '',
//             otherOrganism2: '',
//             sampleNumber: '',
//             millionReads: '',
//             agreedToTerms: false,
//           });
//           setErrors({});
//           setFile(null);
//           setFileError('');
//         })
//         .catch((err) => {
//           console.error('Submission error:', err);
//           alert('Submission failed. Please try again.');
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   const toggleTermsPopup = () => {
//     setShowTermsPopup(!showTermsPopup);
//   };

//   const handleHideImage = () => {
//     setShowImage(false);
//   };

//   return (
//     <div className="form-container">
//       {/* Terms and Conditions Popup */}
//       {showTermsPopup && (
//         <div className="terms-popup-overlay">
//           <div className="terms-popup-content">
//             <button className="close-popup" onClick={toggleTermsPopup}>×</button>
//             <h3>Terms and Conditions</h3>
//             <div className="terms-content">
//               <strong>Extended Deliverables:</strong><br />
//               1. Individual Raw FASTQ FastQC report<br />
//               2. Raw FASTQ MultiQC report<br />
//               3. Individual processed FASTQ FastQC report<br />
//               4. Processed FASTQ MultiQC report<br />
//               5. Alignment and Mapping statistics of individual samples<br />
//               6. Raw readcount (featureCounts) of individual samples<br />
//               7. Counts for DEG analysis<br />
//               8. rlog transformed file<br />
//               9. PCA plot showing variation within and between groups<br />
//               10. Sample-to-Sample distance cluster plot<br />
//               11. Up/down regulated gene counts (.xls)<br />
//               12. Annotated DEGs with Chromosome, Gene name, Position, Stats<br />
//               - FDR &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//               - p-value &lt;0.05 &amp; LOG2FC 2 / 1.5 / 1<br />
//               13. Heatmap (top 25 up/down genes)<br />
//               14. MA plot<br />
//               15. Volcano plot
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="form-header">
//         <h1>Data Analysis Offer</h1>
//         <p>Please fill out the form below to request our data analysis services</p>
//       </div>

//       <form onSubmit={handleSubmit} className="analysis-form">
//         <div className="form-section">
//           <h2 className="section-title">Personal Information</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.name ? 'error' : ''}`}>
//               <label htmlFor="name">Full Name*</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className={`form-group ${errors.organization ? 'error' : ''}`}>
//               <label htmlFor="organization">Organization*</label>
//               <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter your organization" />
//               {errors.organization && <span className="error-message">{errors.organization}</span>}
//             </div>

//             <div className={`form-group ${errors.email ? 'error' : ''}`}>
//               <label htmlFor="email">Email ID*</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className={`form-group ${errors.phone ? 'error' : ''}`}>
//               <label htmlFor="phone">Contact Phone Number*</label>
//               <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
//               {errors.phone && <span className="error-message">{errors.phone}</span>}
//             </div>

//             <div className={`form-group ${errors.address ? 'error' : ''}`}>
//               <label htmlFor="address">Address*</label>
//               <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" rows="3" />
//               {errors.address && <span className="error-message">{errors.address}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2 className="section-title">Analysis Details</h2>
//           <div className="form-grid">
//             <div className={`form-group ${errors.applicationType ? 'error' : ''}`}>
//               <label>Application Type*</label>
//               <div className="radio-group">
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="rna-sequencing" checked={formData.applicationType === 'rna-sequencing'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   RNA Sequencing Analysis
//                 </label>
//                 <label className="radio-option">
//                   <input type="radio" name="applicationType" value="other" checked={formData.applicationType === 'other'} onChange={handleChange} />
//                   <span className="radio-custom"></span>
//                   Other
//                 </label>
//               </div>
//               {formData.applicationType === 'other' && (
//                 <div className="form-group">
//                   <input type="text" name="otherApplication" value={formData.otherApplication} onChange={handleChange} placeholder="Please specify NGS application" className="full-width" />
//                   {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.organism ? 'error' : ''}`}>
//               <label htmlFor="organism">Organism*</label>
//               <select id="organism" name="organism" value={formData.organism} onChange={handleChange}>
//                 <option value="">Select an organism</option>
//                 {organismOptions.map((org, idx) => <option key={idx} value={org}>{org}</option>)}
//               </select>
//               {errors.organism && <span className="error-message">{errors.organism}</span>}
//               {formData.organism === 'Other' && (
//                 <div className="other-organism-fields">
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism1" value={formData.otherOrganism1} onChange={handleChange} placeholder="Organism Scientific name" />
//                   </div>
//                   <div className="form-group">
//                     <input type="text" name="otherOrganism2" value={formData.otherOrganism2} onChange={handleChange} placeholder="NCBI Accession Number" />
//                   </div>
//                   {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
//                 </div>
//               )}
//             </div>

//             <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
//               <label htmlFor="sampleNumber">Sample Number*</label>
//               <input type="number" id="sampleNumber" name="sampleNumber" value={formData.sampleNumber} onChange={handleChange} min="1" placeholder="Enter number of samples" />
//               {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
//               <input type="number" id="millionReads" name="millionReads" value={formData.millionReads} onChange={handleChange} min="0" step="0.1" placeholder="Enter million reads" />
//             </div>
//           </div>
//         </div>

//         <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
//           <label className="checkbox-option">
//             <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
//             <span className="checkbox-custom"></span>
//             I agree to the <span className="terms-link" onClick={toggleTermsPopup}>Terms and Conditions</span>*
//           </label>
//           {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
//         </div>

//         <div className="form-actions">
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Request'}
//           </button>
//         </div>
//       </form>

//       {/* Promotional Image Section */}
//       {showImage && (
//         <div className="promotional-image-section">
//           <div className="image-container">
//             <img src={image} alt="Promotional" className="promotional-image" />
//             <button className="cancel-image-button" onClick={handleHideImage}>×</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataAnalysisForm;


import React, { useState, useEffect } from 'react';
import './Analysisform.css';
import emailjs from 'emailjs-com';
import image from '../assets/image.jpg';

const DataAnalysisForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    address: '',
    applicationType: 'rna-sequencing',
    otherApplication: '',
    organism: '',
    otherOrganism1: '',
    otherOrganism2: '',
    sampleNumber: '',
    millionReads: '',
    agreedToTerms: false,
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  useEffect(() => {
    let timer;
    if (!showImage) {
      timer = setTimeout(() => {
        setShowImage(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showImage]);

  const organismOptions = [
    'Human', 'Mouse', 'Rat', 'Zebrafish', 'Drosophila',
    'C. elegans', 'Arabidopsis', 'E. coli', 'Yeast',
    'Chicken', 'Cow', 'Pig', 'Sheep', 'Dog', 'Cat',
    'Monkey', 'Xenopus', 'Salmon', 'Rice', 'Wheat', 'Maize', 'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (formData.applicationType === 'other' && !formData.otherApplication.trim())
      newErrors.otherApplication = 'Please specify application';
    if (!formData.organism) newErrors.organism = 'Organism is required';
    if (formData.organism === 'Other' &&
      (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim()))
      newErrors.otherOrganism = 'Please specify organism details';
    if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && !fileError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      const templateParamsToAdmin = {
        user_name: formData.name,
        user_email: formData.email,
        organization: formData.organization,
        phone: formData.phone,
        address: formData.address,
        applicationType: formData.applicationType === 'other' ? formData.otherApplication : formData.applicationType,
        organism: formData.organism === 'Other'
          ? `${formData.otherOrganism1} - ${formData.otherOrganism2}`
          : formData.organism,
        sampleNumber: formData.sampleNumber,
        millionReads: formData.millionReads || 'Not Provided',
      };

      const SERVICE_ID = 'service_m04jave';
      const ADMIN_TEMPLATE_ID = 'template_z801jx2';
      const USER_TEMPLATE_ID = 'template_4gv6nxn';
      const PUBLIC_KEY = 'vNK8H8pIP5nC4I1cq';

      emailjs
        .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParamsToAdmin, PUBLIC_KEY)
        .then((response) => {
          console.log('Admin Email Sent!', response.status, response.text);

          const templateParamsToUser = {
            user_name: formData.name,
            user_email: formData.email,
          };

          return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParamsToUser, PUBLIC_KEY);
        })
        .then((res) => {
          console.log('User Thank You Email Sent!', res.status, res.text);
          alert('Form submitted successfully! A confirmation email has been sent.');

          setFormData({
            name: '',
            organization: '',
            email: '',
            phone: '',
            address: '',
            applicationType: 'rna-sequencing',
            otherApplication: '',
            organism: '',
            otherOrganism1: '',
            otherOrganism2: '',
            sampleNumber: '',
            millionReads: '',
            agreedToTerms: false,
          });
          setErrors({});
          setFile(null);
          setFileError('');
        })
        .catch((err) => {
          console.error('Submission error:', err);
          alert('Submission failed. Please try again.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const toggleTermsPopup = () => {
    setShowTermsPopup(!showTermsPopup);
  };

  const handleHideImage = () => {
    setShowImage(false);
  };

  const termsAndConditions = [
    "1) The validity of the quotation is for 45 days.",
    "2) Sample Shipping charges additional if arranged by Molsys.",
    "3) The Data Generation shall be completed in 45-60 days from the date when sample qualifies DNA QC",
    "4) The project shall be completed within 20 days for the primary analysis.",
    "5) Sample QC carried out at Molsys facility will be considered final. QC charges will be applicable for all samples which will be subjected for QC in spite of the QC status achieved. QC passed samples will be categorized in Grade (A, B & C) depending upon the OD (by nanodrop), concentration & quantity.",
    "6) Library preparation will be carried out only for those samples for which the client agrees and provides written/e-mail consent. Molsys will make a maximum of two attempts to prepare library from the agreed samples. In case the samples fail to generate libraries post two attempts, Molsys will ask the client to replace these samples and the replaced fresh samples shall be charged additionally.",
    "7) Library QC carried out at Molsys facility will be considered final. Molsys cannot be held responsible for non-performance of a library based on library QC report generated outside Molsys.",
    "8) Molsys will proceed with data generation only for those samples for which the client provides a written/e-mail consent. In case of a Grade 'A' sample fails to generate promised data, Molsys will take a maximum of one additional attempt to achieve the required data using the same library. In case the sample still fails to generate sufficient data Molsys will ask the client to replace the concerned sample. The replaced samples will be considered and will be billed as additional sample. Molsys shall not be responsible for data loss due to poor sequencing quality due to poor quality samples (Grade 'B' & Grade 'C').",
    "9) Molsys expects the client cooperation in maintaining project timeline by reverting back within 3 working days (Saturday included) from the date a QC report (sample/library/data) has been shared in order to make sure that the promised timeline for the project is meet. In case the client fails to respond within 3 days Molsys cannot be held responsible in case any delay is observed from the promised timeline.",
    "10) In case any of the samples have to be repeated (as per client's consent), these repeated samples will follow their own fresh timeline i.e., 45-60 days from the day sample passes QC.",
    "11) In case the client fails to provide consent on whether to proceed with the samples, Molsys will store the DNA samples free of cost for a maximum of 2 months. If the client wishes to store the samples any further than 2 months the same can be done at a chargeable basis (charges – vial or tube – INR 100/per month, Plate – INR 500/per month). These charges will be billed independently from the concerned project and will have to be paid in full advance. Any failure in making this payment even after 2 reminders will result in the samples being discarded without any further intimation to the client.",
    "12) In case the client fails to provide consent on whether to proceed with the library, Molsys will store library free of cost for 45 days and on a chargeable basis for next 45 days (charges – INR 200/library). These charges will be billed independently from the concerned project and will have to be paid in full advance.",
    "13) In case client wishes to proceed with any library which is more than 45 days old, Molsys will not guarantee efficient data generation and the client will be responsible to bear the full charges of these samples independent from the final data quality/quantity achieved.",
    "14) Raw Data shall be shipped over cloud link or hard drive (user provided), only after receiving full payment.",
    "15) The link provided for data sharing will be active for 15 days only, if the client wishes the data to be stored further same can be availed on a chargeable basis as mention in point 16",
    "16) Data Storage charges applicable; billed separately each month\na. <15 Days – Free of charge\nb. >15 Days – INR USD 0.02/GB/Month",
    "17) Molsys cannot be held responsible for any delay in project timeline due to unforeseen circumstances like non-availability of kits (essential for NGS work), in Indo-pacific region, etc. In such situations the same will be notified to the client with proper documented reason. We will expect full cooperation from clients in such adverse conditions.",
    "18) In case the client wishes to discontinue the project in situations (relevant to) explained in point 17, the same can be done after a waiting period of over 45 days from the last date of promised timeline. No storage fees for sample or libraries will be charged in such cases.",
    "19) In case the client wishes to discontinue the project after the samples have been processed for sample QC without achieving a written mutual consent between Molsys and client; Molsys will have complete authority to charge for the full compensation of the project.",
    "20) In case client wishes to terminate the project after fulfilling the conditions mentioned in point 18, Molsys will only charge for till whatever extent the project has been completed.",
    "21) In case of termination of project, the client can request back the left-out quantity of samples after full financial settlement. The shipment charges for the same will have to be completely borne by the client.",
    "22) Molsys administers best possible practices and intends to provide best possible service within promised timeline to all our customers. Still in case of any discrepancy between Molsys and the client, the same will have to be resolved by judicial system based in Bangalore (Bengaluru), India only.",
    "23) Payment within 20 days of submitting invoice.",
    "24) 100% advance payment.",
    "25) The payment shall be through cheque / Draft in favor of 'Molsys Private Limited' or to the account through NEFT/RTGS/IMPS:\nBank Name: ICICI, Sahakarnagar branch\nA/c Name: Molsys Private Limited\nA/c No.: 060405002959 (Current A/c)\nIFSC: ICIC0000604\nGSTIN: 29AALCM9252C1Z7\nSWIFT CODE: ICICINBBCTS"
  ];

  return (
    <div className="form-container">
      {/* Terms and Conditions Popup */}
      {showTermsPopup && (
        <div className="terms-popup-overlay">
          <div className="terms-popup-content">
            <button className="close-popup" onClick={toggleTermsPopup}>×</button>
            <h3>Terms and Conditions</h3>
            <div className="terms-content">
              {termsAndConditions.map((term, index) => (
                <p key={index}>{term}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="form-header">
        <h1>Data Analysis Offer</h1>
        <p>Please fill out the form below to request our data analysis services</p>
      </div>

      <form onSubmit={handleSubmit} className="analysis-form">
        <div className="form-section">
          <h2 className="section-title">Personal Information</h2>
          <div className="form-grid">
            <div className={`form-group ${errors.name ? 'error' : ''}`}>
              <label htmlFor="name">Full Name*</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className={`form-group ${errors.organization ? 'error' : ''}`}>
              <label htmlFor="organization">Organization*</label>
              <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter your organization" />
              {errors.organization && <span className="error-message">{errors.organization}</span>}
            </div>

            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email">Email ID*</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.phone ? 'error' : ''}`}>
              <label htmlFor="phone">Contact Phone Number*</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className={`form-group ${errors.address ? 'error' : ''}`}>
              <label htmlFor="address">Address*</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" rows="3" />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Analysis Details</h2>
          <div className="form-grid">
            <div className={`form-group ${errors.applicationType ? 'error' : ''}`}>
              <label>Application Type*</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input type="radio" name="applicationType" value="rna-sequencing" checked={formData.applicationType === 'rna-sequencing'} onChange={handleChange} />
                  <span className="radio-custom"></span>
                  RNA Sequencing Analysis
                </label>
                <label className="radio-option">
                  <input type="radio" name="applicationType" value="other" checked={formData.applicationType === 'other'} onChange={handleChange} />
                  <span className="radio-custom"></span>
                  Other
                </label>
              </div>
              {formData.applicationType === 'other' && (
                <div className="form-group">
                  <input type="text" name="otherApplication" value={formData.otherApplication} onChange={handleChange} placeholder="Please specify NGS application" className="full-width" />
                  {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
                </div>
              )}
            </div>

            <div className={`form-group ${errors.organism ? 'error' : ''}`}>
              <label htmlFor="organism">Organism*</label>
              <select id="organism" name="organism" value={formData.organism} onChange={handleChange}>
                <option value="">Select an organism</option>
                {organismOptions.map((org, idx) => <option key={idx} value={org}>{org}</option>)}
              </select>
              {errors.organism && <span className="error-message">{errors.organism}</span>}
              {formData.organism === 'Other' && (
                <div className="other-organism-fields">
                  <div className="form-group">
                    <input type="text" name="otherOrganism1" value={formData.otherOrganism1} onChange={handleChange} placeholder="Organism Scientific name" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="otherOrganism2" value={formData.otherOrganism2} onChange={handleChange} placeholder="NCBI Accession Number" />
                  </div>
                  {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
                </div>
              )}
            </div>

            <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
              <label htmlFor="sampleNumber">Sample Number*</label>
              <input type="number" id="sampleNumber" name="sampleNumber" value={formData.sampleNumber} onChange={handleChange} min="1" placeholder="Enter number of samples" />
              {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
              <input type="number" id="millionReads" name="millionReads" value={formData.millionReads} onChange={handleChange} min="0" step="0.1" placeholder="Enter million reads" />
            </div>
          </div>
        </div>

        <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
          <label className="checkbox-option">
            <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
            <span className="checkbox-custom"></span>
            I agree to the <span className="terms-link" onClick={toggleTermsPopup}>Terms and Conditions</span>*
          </label>
          {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </form>

      {/* Promotional Image Section */}
      {showImage && (
        <div className="promotional-image-section">
          <div className="image-container">
            <img src={image} alt="Promotional" className="promotional-image" />
            <button className="cancel-image-button" onClick={handleHideImage}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataAnalysisForm;