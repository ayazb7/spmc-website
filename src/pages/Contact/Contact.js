import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarCheck, FaArrowRight, FaPaperPlane, FaHeadset, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        // Initialize EmailJS with your user ID
        emailjs.init('6T61pTerVCBUrDn_O');
        
        // Animation triggers
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target.classList.contains('contact-info-cards') && entry.isIntersecting) {
                        setIsInfoVisible(true);
                    }
                    if (entry.target.classList.contains('contact-form-section') && entry.isIntersecting) {
                        setIsFormVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const infoElement = document.querySelector('.contact-info-cards');
        const formElement = document.querySelector('.contact-form-section');

        if (infoElement) observer.observe(infoElement);
        if (formElement) observer.observe(formElement);

        return () => {
            if (infoElement) observer.unobserve(infoElement);
            if (formElement) observer.unobserve(formElement);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
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
        
        const templateParams = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            service: formData.service || 'Not specified',
            message: formData.message,
            time: timeStamp,
            to_email: 'info@spmcs.co.uk'
        };
        
        emailjs.send(
            'service_yt00lit', 
            'template_9i8zhjj', 
            templateParams, 
            '6T61pTerVCBUrDn_O'
        )
        .then((response) => {
            console.log('Email sent successfully:', response);
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
            alert('Your message has been sent! We will be in touch shortly.');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            setIsSubmitting(false);
            setSubmitStatus('error');
            alert('Sorry, there was an error sending your message. Please try again later.');
        });
    };

    return (
        <div className="standalone-contact-page">
            <Helmet>
                <title>SPMC | Contact Us</title>
                <meta name="description" content="Get in touch with SPMC for premium personal management services. We're here to help with all your lifestyle support needs." />
            </Helmet>

            {/* Hero Section with Wave */}
            <section className="contact-hero">
                <motion.div 
                    className="contact-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <FaHeadset className="hero-icon" />
                    <h1>Get In Touch</h1>
                    <p>Have questions about our services or need personalized assistance? We're here to help you.</p>
                </motion.div>
            </section>

            {/* Contact Content */}
            <div className="contact-content">
                {/* Horizontal Info Cards */}
                <div className={`contact-info-cards ${isInfoVisible ? 'fade-in visible' : ''}`}>
                    <motion.div 
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <div className="info-icon-container">
                            <FaPhone className="info-icon" />
                        </div>
                        <div className="info-text">
                            <h3>Phone</h3>
                            <p>07921 511703</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="info-icon-container">
                            <FaEnvelope className="info-icon" />
                        </div>
                        <div className="info-text">
                            <h3>Email</h3>
                            <p>info@spmcs.co.uk</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="info-icon-container">
                            <FaMapMarkerAlt className="info-icon" />
                        </div>
                        <div className="info-text">
                            <h3>Location</h3>
                            <p>Hampshire, UK</p>
                        </div>
                    </motion.div>
                </div>
                
                {/* Contact Form Section */}
                <div className="contact-form-wrapper">
                    <div className={`contact-form-section ${isFormVisible ? 'fade-in visible' : ''}`}>
                        <div className="contact-form-container">
                            <div className="contact-form-page">
                                <h2>Send Us a Message</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="select-container">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>Select Service Required</option>
                                                <option value="care-adults">Care for Adults</option>
                                                <option value="disabilities">Disabilities Support</option>
                                                <option value="live-in">Live-in Care</option>
                                                <option value="hospital">After Hospital Care</option>
                                                <option value="home">Home Care</option>
                                                <option value="social">Social Engagement</option>
                                                <option value="lifestyle">Lifestyle Support</option>
                                                <option value="household">Household Tasks</option>
                                                <option value="errands">Errands</option>
                                                <option value="companionship">Companionship</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="submit-button"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'} 
                                        {!isSubmitting && <FaPaperPlane className="btn-icon" />}
                                    </button>
                                    {submitStatus === 'success' && (
                                        <p className="success-message">Your message has been sent successfully!</p>
                                    )}
                                    {submitStatus === 'error' && (
                                        <p className="error-message">Failed to send message. Please try again later.</p>
                                    )}
                                    <p className="cta-text">Don't wait—take the first step toward simplicity today!</p>
                                </form>
                            </div>
                        </div>
                        
                        {/* Consultation Card */}
                        <div className="consultation-card">
                            <FaCalendarCheck className="consultation-icon" />
                            <h3>Need a Consultation?</h3>
                            <p>We offer multiple ways to get in touch with our team for personalized support.</p>
                            
                            <div className="contact-methods">
                                <div className="contact-method">
                                    <FaWhatsapp />
                                    <p>WhatsApp Us</p>
                                </div>
                                <div className="contact-method">
                                    <FaPhone />
                                    <p>Schedule a Call</p>
                                </div>
                                <div className="contact-method" onClick={() => window.location.href = 'mailto:info@spmcs.co.uk'} style={{ cursor: 'pointer' }}>
                                    <FaEnvelope />
                                    <p>Email Directly</p>
                                </div>
                            </div>
                            
                            <div className="social-icons-contact">
                                <div className="social-icon-contact">
                                    <FaFacebookF />
                                </div>
                                <div className="social-icon-contact">
                                    <FaTwitter />
                                </div>
                                <div className="social-icon-contact">
                                    <FaInstagram />
                                </div>
                                <div className="social-icon-contact">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 