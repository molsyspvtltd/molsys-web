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


import React, { useState } from 'react';
import './Analysisform.css';
import emailjs from 'emailjs-com';

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
    agreedToTerms: false
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState('');
  const [loading, setLoading] = useState(false);




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
    if (formData.organism === 'Other' && (!formData.otherOrganism1.trim() || !formData.otherOrganism2.trim())) 
      newErrors.otherOrganism = 'Please specify organism details';
    if (!formData.sampleNumber) newErrors.sampleNumber = 'Sample number is required';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && !fileError;
  };


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
const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    setLoading(true); // Show loading spinner

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

        // Reset form
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
          agreedToTerms: false
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
        setLoading(false); // Hide spinner
      });
  }
};



  return (
    <div className="form-container">
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
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className={`form-group ${errors.organization ? 'error' : ''}`}>
              <label htmlFor="organization">Organization*</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter your organization"
              />
              {errors.organization && <span className="error-message">{errors.organization}</span>}
            </div>

            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email">Email ID*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.phone ? 'error' : ''}`}>
              <label htmlFor="phone">Contact Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className={`form-group ${errors.address ? 'error' : ''}`}>
              <label htmlFor="address">Address*</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
              />
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
                  <input
                    type="radio"
                    name="applicationType"
                    value="rna-sequencing"
                    checked={formData.applicationType === 'rna-sequencing'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  RNA Sequencing Analysis
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="applicationType"
                    value="other"
                    checked={formData.applicationType === 'other'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Other
                </label>
              </div>
              {formData.applicationType === 'other' && (
                <div className="form-group">
                  <input
                    type="text"
                    name="otherApplication"
                    value={formData.otherApplication}
                    onChange={handleChange}
                    placeholder="Please specify NGS application"
                    className="full-width"
                  />
                  {errors.otherApplication && <span className="error-message">{errors.otherApplication}</span>}
                </div>
              )}
            </div>

            <div className={`form-group ${errors.organism ? 'error' : ''}`}>
              <label htmlFor="organism">Organism*</label>
              <select
                id="organism"
                name="organism"
                value={formData.organism}
                onChange={handleChange}
              >
                <option value="">Select an organism</option>
                {organismOptions.map((org, index) => (
                  <option key={index} value={org}>{org}</option>
                ))}
              </select>
              {errors.organism && <span className="error-message">{errors.organism}</span>}
              {formData.organism === 'Other' && (
                <div className="other-organism-fields">
                  <div className="form-group">
                    <input
                      type="text"
                      name="otherOrganism1"
                      value={formData.otherOrganism1}
                      onChange={handleChange}
                      placeholder="Organism Scientific name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="otherOrganism2"
                      value={formData.otherOrganism2}
                      onChange={handleChange}
                      placeholder="NCBI Accession Number"
                    />
                  </div>
                  {errors.otherOrganism && <span className="error-message">{errors.otherOrganism}</span>}
                </div>
              )}
            </div>

            <div className={`form-group ${errors.sampleNumber ? 'error' : ''}`}>
              <label htmlFor="sampleNumber">Sample Number*</label>
              <input
                type="number"
                id="sampleNumber"
                name="sampleNumber"
                value={formData.sampleNumber}
                onChange={handleChange}
                placeholder="Enter number of samples"
                min="1"
              />
              {errors.sampleNumber && <span className="error-message">{errors.sampleNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="millionReads">Million Reads per Sample (optional)</label>
              <input
                type="number"
                id="millionReads"
                name="millionReads"
                value={formData.millionReads}
                onChange={handleChange}
                placeholder="Enter million reads"
                min="0"
                step="0.1"
              />
            </div>
          </div>
        </div>

        

        <div className={`form-group terms-group ${errors.agreedToTerms ? 'error' : ''}`}>
          <label className="checkbox-option">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
            />
            <span className="checkbox-custom"></span>
            I agree to the Terms and Conditions*
          </label>
          {errors.agreedToTerms && <span className="error-message">{errors.agreedToTerms}</span>}
        </div>

        <div className="form-actions">
          {/* <button type="submit" className="submit-button">
            Submit Request
          </button> */}
          <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Request'}
          </button>

        </div>
      </form>
    </div>
  );
};

export default DataAnalysisForm;
