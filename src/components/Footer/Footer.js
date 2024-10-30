import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; // Replace with the path to your logo file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-section">
                        <div className="footer-heading">
                            <h3 className="green-heading">Useful Links</h3>
                            <hr className="green-line" />
                        </div>
                        <ul className="link-grid">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Useful Information</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <div className="footer-heading">
                            <h3>Services</h3>
                            <hr className="blue-line" />
                        </div>
                        <ul className="link-grid">
                            <li><a href="#">Care for adults</a></li>
                            <li><a href="#">Disabilities care</a></li>
                            <li><a href="#">Home Care</a></li>
                            <li><a href="#">Social Engagement</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                         <div className="footer-heading">
                            <h3>Contact</h3>
                            <hr className="blue-line" />
                        </div>
                        <ul className="link-grid">
                            <li><a href="tel:07921511703"><FontAwesomeIcon icon={faPhoneAlt} className="contact-icon"/> 07921 511703</a></li>
                            <li><a href="mailto:info@spmcs.co.uk"><FontAwesomeIcon icon={faEnvelope} className="contact-icon"/> info@spmcs.co.uk</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <div className="social-icons">
                        <div className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></div>
                        <div className="social-icon"><FontAwesomeIcon icon={faInstagram} /></div>
                        <div className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></div>
                        <div className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;