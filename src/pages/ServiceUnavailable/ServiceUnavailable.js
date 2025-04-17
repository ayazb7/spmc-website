import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaBell, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ServiceUnavailable.css';

const ServiceUnavailable = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email subscription logic here
    setIsSubmitted(true);
  };

  return (
    <div className="service-result-page">
      <Helmet>
        <title>Service Unavailable - SPMC</title>
        <meta name="description" content="Get notified when SPMC services become available in your area." />
      </Helmet>
      
      <motion.div 
        className="service-result-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className="unavailable-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div 
            className="location-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <FaMapMarkerAlt />
          </motion.div>
          
          <h1>Coming Soon to Your Area!</h1>
          <div className="message-box">
            <span>We're expanding our premium services</span>
          </div>
          
          <p className="sub-message">
            While we're not in your area yet, we're growing fast! Sign up to be notified when we arrive.
          </p>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                onSubmit={handleSubmit} 
                className="notify-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="input-group">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button type="submit" className="notify-button">
                    <FaBell className="bell-icon" />
                    Notify Me
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <FaBell className="bell-icon" />
                <p>Thank you! We'll notify you when we're in your area.</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">
              Contact Us
            </Link>
            <Link to="/faq" className="secondary-button">
              View FAQ
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceUnavailable; 