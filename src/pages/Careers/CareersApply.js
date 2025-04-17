import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaPaperclip, FaSpinner } from 'react-icons/fa';
import './CareersApply.css';

const CareersApply = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: null,
    resume: null,
  });

  const [fileNames, setFileNames] = useState({
    coverLetter: '',
    resume: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormState({
        ...formState,
        [name]: files[0],
      });
      setFileNames({
        ...fileNames,
        [name]: files[0].name,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // In a real application, you would send the form data to a server here
    }, 2000);
  };

  const positions = [
    'Care Assistant',
    'Senior Care Worker',
    'Registered Nurse',
    'Live-in Carer',
    'Support Worker',
    'Team Leader',
    'Field Care Supervisor',
    'Other',
  ];

  if (submitted) {
    return (
      <div className="careers-apply-page">
        <Helmet>
          <title>Application Submitted | SPMCS Careers</title>
        </Helmet>
        
        <section className="application-success">
          <motion.div 
            className="success-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="success-icon">
              <FaCheck />
            </div>
            <h1>Application Submitted!</h1>
            <p>Thank you for your interest in joining the SPMCS team. We have received your application and will review it promptly.</p>
            <p>Our HR team will contact you regarding the next steps in the recruitment process.</p>
            <motion.a 
              href="/careers" 
              className="back-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowLeft /> Back to Careers
            </motion.a>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="careers-apply-page">
      <Helmet>
        <title>Apply for a Position | SPMCS Careers</title>
      </Helmet>

      {/* Header Section - Uses Urbanist font from CSS */}
      <section className="apply-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Complete the form below to apply for a position at SPMCS
          </motion.p>
        </div>
      </section>

      {/* Application Form - All form elements use Urbanist font */}
      <section className="application-form-section">
        <div className="container">
          <div className="form-container">
            <motion.div
              className="form-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Application Form</h2>
              <p>All fields marked with an asterisk (*) are required</p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="position">Position Applying For *</label>
                  <select
                    id="position"
                    name="position"
                    value={formState.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Years of Experience</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formState.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group file-input-group">
                  <label htmlFor="coverLetter">Cover Letter</label>
                  <div className="file-input-container">
                    <input
                      type="file"
                      id="coverLetter"
                      name="coverLetter"
                      onChange={handleFileChange}
                      className="file-input"
                      accept=".pdf,.doc,.docx"
                    />
                    <div className="file-input-trigger">
                      <FaPaperclip />
                      <span>{fileNames.coverLetter || 'Choose file'}</span>
                    </div>
                  </div>
                  <small>PDF, DOC or DOCX (Max 5MB)</small>
                </div>

                <div className="form-group file-input-group">
                  <label htmlFor="resume">Resume/CV *</label>
                  <div className="file-input-container">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      className="file-input"
                      required
                      accept=".pdf,.doc,.docx"
                    />
                    <div className="file-input-trigger">
                      <FaPaperclip />
                      <span>{fileNames.resume || 'Choose file'}</span>
                    </div>
                  </div>
                  <small>PDF, DOC or DOCX (Max 5MB)</small>
                </div>
              </div>

              <div className="form-controls">
                <a href="/careers" className="back-button">
                  <FaArrowLeft /> Back
                </a>
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <FaSpinner className="spinner" /> Submitting...
                    </>
                  ) : 'Submit Application'}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersApply; 