import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactButton.css';

const ContactButton = ({ className, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <button 
            className={`contact-button ${className || ''}`}
            onClick={handleClick}
        >
            {children || 'Contact Us'}
        </button>
    );
};

export default ContactButton; 