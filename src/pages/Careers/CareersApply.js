import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaInfoCircle, FaSpinner } from 'react-icons/fa';
import './CareersApply.css';
import emailjs from 'emailjs-com';

const CareersApply = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('6T61pTerVCBUrDn_O');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      // Get current date and time
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      const formattedTime = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit'
      });
      const timeStamp = `${formattedDate} at ${formattedTime}`;
      
      // Prepare template parameters
      const templateParams = {
        from_name: formState.fullName,
        reply_to: formState.email,
        phone: formState.phone,
        position: formState.position,
        experience: formState.experience || 'Not specified',
        time: timeStamp,
        to_name: 'SPMC Recruitment',
        to_email: 'info@spmcs.co.uk',
        message: `This applicant has submitted an initial application. Please contact them to request their CV and any additional documents required for the ${formState.position} position.`
      };
      
      // Send email using EmailJS
      await emailjs.send(
        'service_yt00lit', 
        'template_07ddx1i',
        templateParams, 
        '6T61pTerVCBUrDn_O'
      );
      
      setSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitting(false);
      setError('There was an error submitting your application. Please try again later or contact us directly at info@spmcs.co.uk');
    }
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
            <p>Our HR team will contact you shortly to request your CV/Resume and any additional documents required for the recruitment process.</p>
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
              <h2>Initial Application Form</h2>
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

              <div className="cv-notice">
                <FaInfoCircle className="info-icon" />
                <p>After submitting this initial application, our recruitment team will contact you to request your CV/Resume and any other necessary documents.</p>
              </div>

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

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