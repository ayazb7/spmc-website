import React, { useState, useEffect } from 'react';
import './LiveInCare.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';
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
        <>
        <Helmet>
            <title>SPMC | Live in Care</title>
        </Helmet>
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

                {/* <h2 className="service-title">Supported Living And Home Care Services</h2> */}
                <div className="service-paragraph">
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            Live-in care from Solent Primary Medical Care offers a compassionate and comprehensive solution for individuals who wish to remain in their own homes while receiving full-time support. This personalised, 24/7 care service ensures safety, comfort, and a sense of independence in familiar surroundings.
                            <br/>
                            <br/>
                            Our service is tailored to meet the specific needs of each client, whether that involves assistance with personal care such as bathing, dressing, and grooming, or support with daily household tasks like cooking, cleaning, and shopping. We are committed to providing care that enhances dignity, well-being, and quality of life.                        </p>
                    </div>
                    <div className="section-image-container">
                        <img
                            src={ServiceImage1}
                            alt="Supported Living Services"
                            className="section-image"
                        />
                    </div>
                </div>
                <div className="service-paragraph">
                    <div className="section-image-container">
                        <img
                            src={ServiceImage1}
                            alt="Supported Living Services"
                            className="section-image"
                        />
                    </div>
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            Having a dedicated caregiver available around the clock creates a secure and supportive environment, offering not just care but companionship. Through regular reviews, we continuously adapt our services to meet evolving needs, ensuring the highest standards of care are maintained.
                            <br/>
                            <br/>
                            <strong>Solent Primary Medical Care:</strong> professional live-in care designed to make home the best place to be.<br/> 
                            Contact us today to explore how live-in care can provide a safe and supportive solution for you or your loved ones.
                        </p>
                    </div>
                </div>

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
                            <h3 className="section-title">Live-in Care Services</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>24/7 In-Home Support:</strong> Continuous, personalised care tailored to the unique needs of each client. From personal assistance to household tasks, we ensure clients can live safely and independently at home.
                                </li>
                                <li>
                                    <strong>Personal Care and Hygiene:</strong> Comprehensive assistance with daily hygiene, dressing, grooming, and incontinence care, promoting comfort, health, and dignity.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Live-in Care Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <VideoSection />
        </div>
        </>
    );
};

export default LiveInCare;