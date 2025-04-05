import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert("Message sent successfully!");
    };

    return (
        <>
            <Helmet>
                <title>SPMC | Contact Us</title>
            </Helmet>

            <div className="standalone-contact-page">
                <div className="standalone-contact-hero">
                    <h1 className={`fade-in ${isVisible ? 'visible' : ''}`}>Let's Get Started</h1>
                    <p className={`fade-in ${isVisible ? 'visible' : ''}`}>
                        Ready to make life easier? We're just a call or click away. Whether you need help with household tasks, errands, or companionship, we're here to assist. Contact us for a no-obligation consultation, and let's create a support plan that works for you.
                    </p>
                </div>

                <div className="standalone-contact-content">
                    <div className={`standalone-contact-info slide-in-left ${isVisible ? 'visible' : ''}`}>
                        <div className="standalone-info-card">
                            <div className="standalone-info-item">
                                <i className="fas fa-phone"></i>
                                <h3>Phone</h3>
                                <p>07921 511703</p>
                            </div>
                            <div className="standalone-info-item">
                                <i className="fas fa-envelope"></i>
                                <h3>Email</h3>
                                <p>info@spmcs.co.uk</p>
                            </div>
                            <div className="standalone-consultation-card">
                                <h3>Book a Consultation</h3>
                                <p>Let's collaborate to design a plan that fits your lifestyle perfectly.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`standalone-contact-form-container slide-in-right ${isVisible ? 'visible' : ''}`}>
                        <form onSubmit={handleSubmit} className="standalone-contact-form">
                            <div className="standalone-form-row">
                                <div className="standalone-form-group">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="standalone-form-group">
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
                            <div className="standalone-form-row">
                                <div className="standalone-form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="standalone-form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="standalone-form-group">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Service Required</option>
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
                            <div className="standalone-form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="standalone-submit-button">
                                Send Message
                            </button>
                            <div className="standalone-cta-text">
                                Don't wait—take the first step toward simplicity today!
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact; 