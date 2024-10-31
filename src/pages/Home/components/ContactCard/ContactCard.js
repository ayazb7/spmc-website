import React from 'react';
import './ContactCard.css';
import Logo from '../../../../assets/logo.png';

const ContactCard = () => {
    return (
        <div className="contact-card">
            <div className="contact-header">
                <p>Contact Us</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <img src={Logo} alt="Logo" className="contact-logo" />
                    <div className="vertical-line"></div>
                    <div className="contact-details">
                        <p><i className="fas fa-phone-alt"></i> 07921 511703</p>
                        <p><i className="fas fa-envelope"></i> info@spmcs.co.uk</p>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="First Name" className="form-input half-width" />
                        <input type="text" placeholder="Last Name" className="form-input half-width" />
                    </div>
                    <div className="form-row">
                        <input type="email" placeholder="Email" className="form-input half-width" />
                        <input type="text" placeholder="Phone Number" className="form-input half-width" />
                    </div>
                    <textarea placeholder="Message" className="form-input full-width message"></textarea>
                    <button className="submit-button">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;