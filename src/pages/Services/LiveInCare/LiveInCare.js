import React, { useState, useEffect } from 'react';
import './LiveInCare.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoSection from '../VideoSection';

import ServiceImage1 from '../../../assets/care-for-adults.png';

const LiveInCare = () => {
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
            <section className="care-hero-section live-in-care">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>Live-in Care</h1>
                    <p>Our extensive range of services is designed to support you or your loved ones, whether on a short-term or long-term basis, with a focus on promoting independence and enhancing quality of life.</p>
                    
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

                <h2 className="service-title">Supported Living And Home Care Services</h2>
                <p className="service-subtitle">At Solent Primary Medical Care Services, we place great emphasis on understanding your unique requirements and preferences. We carefully select a carer who possesses the appropriate skills and experience to provide the highest standard of care. Our aim is to empower you to maintain your independence and continue enjoying the activities you love with confidence.                </p>

                <div className="discover-services">
                    <span className="line"></span>
                    <span className="discover-text">DISCOVER OUR SERVICES</span>
                    <span className="line"></span>
                </div>
                
            </section>

            <section className="service-sections">
                <div className="section green-section">
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Supported Living Services</h3>
                            <ul className="service-list">
                                <li>Dementia Care</li>
                                <li>End of Life Care</li>
                                <li>Respite Care</li>
                                <li>Hospital Discharge Support</li>
                                <li>Rehabilitation/Aftercare at Home</li>
                                <li>Walking Night Care</li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Supported Living Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="section white-section">
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Homecare Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Homecare Services</h3>
                            <ul className="service-list">
                                <li>Washing/Bathing Assistance</li>
                                <li>Oral Hygiene, Dressing</li>
                                <li>Catheters & Stoma Care</li>
                                <li>Medical Administration</li>
                                <li>Laundry & Ironing</li>
                                <li>Shopping, Cleaning</li>
                                <li>Companionship</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <VideoSection />
        </div>
    );
};

export default LiveInCare;