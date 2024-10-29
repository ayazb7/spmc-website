import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HeroSection = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Solent Primary Medical Care</h1>
                <p>Specialist provider of domiciliary and supported living services for adults of all age.</p>
                
                <div className="search-section">
                    <p className="search-title">Looking for homecare?</p>
                    <div className="search-bar">
                        <input type="text" placeholder="Enter Postcode" className="search-input" />
                        <button className="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className={`chevron-down ${hasScrolled ? 'no-bounce' : ''}`}>
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    );
};

export default HeroSection;