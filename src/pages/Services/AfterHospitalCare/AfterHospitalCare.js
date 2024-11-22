import React, { useState, useEffect } from 'react';
import './AfterHospitalCare.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoSection from '../VideoSection';

import ServiceImage1 from '../../../assets/care-for-adults.png';

const AfterHospitalCare = () => {
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
            <section className="care-hero-section after-hospital-care">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>After Hospital Care</h1>
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

export default AfterHospitalCare;