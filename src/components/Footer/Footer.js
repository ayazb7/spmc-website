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
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
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
                            <li><a href="/care-for-adults">Care for adults</a></li>
                            <li><a href="/supported-living">Supported Living</a></li>
                            <li><a href="/disabilities-support">Disabilities Support</a></li>
                            <li><a href="/live-in-care">Live-in Care</a></li>
                            <li><a href="/after-hospital-care">After Hospital Care</a></li>
                            <li><a href="/home-care">Home Care</a></li>
                            <li><a href="/social-engagement">Social Engagement</a></li>
                            <li><a href="/night-care">Night Care</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                         <div className="footer-heading">
                            <h3>Contact</h3>
                            <hr className="blue-line" />
                        </div>
                        <ul className="link-grid">
                            <li><a href="tel:02382145353"><FontAwesomeIcon icon={faPhoneAlt} className="contact-icon"/>02382145353</a></li>
                            <li><a href="mailto:info@spmcs.co.uk"><FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>info@spmcs.co.uk</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <div className="social-icons">
                        <a href="https://www.facebook.com/share/1ATaFjVP2V/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></div>
                        </a>
                        <a href="https://www.instagram.com/solentprimarymedicalcare?igsh=MTkyanNybzd2OWJjdA==" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon"><FontAwesomeIcon icon={faInstagram} /></div>
                        </a>
                        <div className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></div>
                        <a href="https://www.linkedin.com/company/solent-primary-medical-care-services/" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;