import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ServiceAvailable.css';

const ServiceAvailable = () => {
  return (
    <div className="service-result-page">
      <Helmet>
        <title>Service Available - SPMC</title>
        <meta name="description" content="SPMC services are available in your area. Book a consultation today!" />
      </Helmet>
      
      <motion.div 
        className="service-result-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className="success-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div 
            className="success-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <FaCheckCircle />
          </motion.div>
          
          <h1>Great News!</h1>
          <div className="message-box">
            <span>Our Services are available in your area!</span>
          </div>
          
          <p className="sub-message">
            We're ready to provide exceptional care and support services tailored to your needs.
          </p>
          
          {/* <div className="features">
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <FaCalendarCheck className="feature-icon" />
              <span>Book a Free Consultation</span>
            </motion.div>
          </div> */}
          
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">
              Book Consultation
            </Link>
            <Link to="/" className="secondary-button">
              View Services
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceAvailable; 