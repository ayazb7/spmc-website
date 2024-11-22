import React, { useState, useEffect } from 'react';
import './DisabilitiesSupport.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoSection from '../VideoSection';

const DisabilitiesSupport = () => {
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
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const serviceSection = document.querySelector('.service-description');
    
        if (serviceSection) {
            const serviceSectionPosition = serviceSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: serviceSectionPosition - navbarHeight,
                behavior: 'smooth',
            });
        }
    }; 

    return (
        <div className='care-page'>
            <section className="care-hero-section care-hero-disabilities">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>Disabilities Support</h1>
                    <p>We provide specialised home care for adults living with learning disabilities, offering comprehensive support tailored to their unique needs.</p>
                    
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

                <h2 className="service-title">Learning Disability Support</h2>
                <p className="service-subtitle">
                Learning disabilities manifest in various ways, making it difficult to determine the most suitable care options. Our team of experienced carers is here to guide you through these challenges, ensuring the best possible care for your loved one. Our goal is to empower individuals with learning disabilities to live fulfilling and independent lives, with the right support and guidance every step of the way.
                </p>

            </section>

            <VideoSection />
        </div>
    );
};

export default DisabilitiesSupport;