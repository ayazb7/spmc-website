import React, { useState, useEffect } from 'react';
import './AfterHospitalCare.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoSection from '../VideoSection';
import { Helmet } from 'react-helmet-async';

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
        <>
        <Helmet>
            <title>SPMC | After Hospital Care</title>
        </Helmet>
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
                <div className="service-paragraph">
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            At Solent Primary Medical Care, our post-hospital care services are designed to provide a smooth and supportive transition from hospital to home. We aim to ensure that individuals recover safely, regain their independence, and reduce the risk of complications or readmission, all while receiving personalised care tailored to their specific needs.
                            <br/>
                            <br/>
                            Comprehensive Discharge Assistance: Adjusting to life at home after a hospital stay can be challenging, which is why we offer coordinated support to ease the transition. From managing medications to assisting with daily routines and ensuring follow-up appointments are met, our care team works closely with clients to create a safe and comfortable home environment that supports recovery and peace of mind.
                        </p>
                    </div>
                    <div className="section-image-container">
                        <img
                            src={ServiceImage1}
                            alt="Post-Hospital Care Services"
                            className="section-image"
                        />
                    </div>
                </div>

                <div className="service-paragraph">
                    <div className="section-image-container">
                        <img
                            src={ServiceImage1}
                            alt="Rehabilitation and Recovery Services"
                            className="section-image"
                        />
                    </div>
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            Rehabilitation and Skill Rebuilding: Whether recovering from an illness, injury, or surgery, our services are focused on helping individuals regain strength, mobility, and essential daily skills. Through compassionate and patient-focused care, we help clients rebuild their confidence and independence, enabling them to return to their usual activities at their own pace.
                            <br/>
                            <br/>
                            We believe in delivering care that goes beyond just meeting immediate needs. With regular reviews and close collaboration with families and healthcare professionals, we adapt our approach to suit each individual’s evolving requirements. At Solent Primary Medical Care, we are dedicated to making recovery at home a positive, empowering, and supported experience.
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
                            <h3 className="section-title">After Hospital Care Services</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Hospital Discharge Support:</strong> Coordinated care to help clients transition back home after a hospital stay, ensuring they have the necessary support to avoid complications and regain confidence.
                                </li>
                                <li>
                                    <strong>Rehabilitation and Reablement Care:</strong> Post-hospital recovery services aimed at restoring mobility, strength, and independence, helping clients rebuild daily functionality and confidence.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="After Hospital Care Services"
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

export default AfterHospitalCare;