import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactCard.css';
import Logo from '../../../../assets/logo.png';

const ContactCard = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again later.");
            });
    };

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
                        <p><i className="fas fa-phone-alt"></i> 02382145353</p>
                        <p><i className="fas fa-envelope"></i> info@spmcs.co.uk</p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-row">
                        <input type="text" name="first_name" placeholder="First Name" className="form-input half-width" required />
                        <input type="text" name="last_name" placeholder="Last Name" className="form-input half-width" required />
                    </div>
                    <div className="form-row">
                        <input type="email" name="email" placeholder="Email" className="form-input half-width" required />
                        <input type="text" name="phone" placeholder="Phone Number" className="form-input half-width" />
                    </div>
                    <textarea name="message" placeholder="Message" className="form-input full-width message" required></textarea>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactCard;