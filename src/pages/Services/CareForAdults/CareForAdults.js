import React, { useState, useEffect } from 'react';
import './CareForAdults.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CareForAdults = ({ serviceSectionRef }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToServices = () => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const serviceSectionPosition = serviceSectionRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: serviceSectionPosition - navbarHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className='care-page'>
            <section className="care-hero-section">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>Care for Adults</h1>
                    <p>Whether you require assistance for a few hours a day, round-the-clock care, or a dedicated live-in carer, we are committed to finding the perfect solution to meet your needs.</p>
                    
                    <div className="care-search-section">
                        <p className="care-search-title">Looking for homecare?</p>
                        <div className="care-search-bar">
                            <input type="text" placeholder="Enter Postcode" className="care-search-input" />
                            <button className="care-search-button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className={`care-chevron-down ${hasScrolled ? 'care-no-bounce' : ''}`} onClick={scrollToServices}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            <section className="service-description">

                <h2 className="service-title">Adult and Home Care Services</h2>
                <p className="service-subtitle">
                Our companions are thoughtfully chosen for their kindness and dedication, bringing positivity and joy to each interaction. Let our companionship visits enhance your daily life with genuine human connection, comfort, and support. Discover the uplifting impact a compassionate companion can make.
                </p>

            </section>
        </div>
    );
};

export default CareForAdults;