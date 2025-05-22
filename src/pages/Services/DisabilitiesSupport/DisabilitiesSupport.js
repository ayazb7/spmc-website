import React, { useState, useEffect } from 'react';
import './DisabilitiesSupport.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';
import VideoSection from '../VideoSection';

import DisabilitiesPanel1 from '../../../assets/disabilities-panel1.jpg';
import DisabilitiesPanel2 from '../../../assets/disabilities-panel2.jpg';
import DisabilitiesPanel3 from '../../../assets/disabilities-panel3.jpg';
import DisabilitiesPanel4 from '../../../assets/disabilities-panel4.jpg';

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
        <>
        <Helmet>
            <title>SPMC | Disability Support</title>
        </Helmet>
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

                {/* <h2 className="service-title">Learning Disability Support</h2> */}
                <div className="service-paragraph">
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            At Solent Primary Medical Care, we are committed to supporting individuals with learning disabilities, enabling them to lead meaningful and independent lives. Our care is designed to address each individual's unique needs, aspirations, and goals, helping them achieve their potential while enhancing their quality of life.                            <br/>
                            <br/>
                            We work closely with families, support networks, and commissioning partners to create bespoke care plans that cater to every aspect of an individual's life, from building life skills to fostering social inclusion. Our dedicated team focuses on empowering individuals through active support and positive behavioural strategies, encouraging confidence, independence, and personal growth.
                        </p>
                    </div>
                    <div className="section-image-container">
                        <img
                            src={DisabilitiesPanel1}
                            alt="Supported Living Services"
                            className="section-image"
                        />
                    </div>
                </div>
                <div className="service-paragraph">
                    <div className="section-image-container">
                        <img
                            src={DisabilitiesPanel2}
                            alt="Supported Living Services"
                            className="section-image"
                        />
                    </div>
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            Regular reviews ensure that our approach remains flexible and adaptive to changing needs, always striving for the best possible outcomes. With a focus on understanding and collaboration, we deliver care that truly makes a difference.
                            <br/>
                            <br/>
                            <strong>Solent Primary Medical Care:</strong> helping individuals with learning disabilities thrive every step of the way.<br/> 
                            Contact us today to learn more about our tailored solutions for learning disability support.
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
                            <h3 className="section-title">Disabilities Support Services</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Learning Disabilities/Autism Care:</strong> Individualised support promoting social engagement, skill-building, and independence in a structured, understanding environment.
                                </li>
                                <li>
                                    <strong>Physical Disabilities Support:</strong> Practical assistance with daily activities, including mobility support and accessibility adaptations.
                                </li>
                                <li>
                                    <strong>Mental Health Support:</strong> Compassionate care addressing mental health needs, offering coping strategies, resources, and emotional support.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={DisabilitiesPanel3}
                                alt="Disabilities Support Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="section white-section">
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={DisabilitiesPanel4}
                                alt="Recovery and Reablement Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Recovery and Reablement Services</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Reablement Care:</strong> Short-term support focused on regaining skills and independence after illness or injury.
                                </li>
                                <li>
                                    <strong>After Hospital Care:</strong> Assistance during the recovery process at home, ensuring a smooth transition from hospital to daily life.
                                </li>
                                <li>
                                    <strong>Temporary & Permanent Staffing Services:</strong> Provision of trained carers and healthcare professionals to meet temporary or long-term needs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>

            <VideoSection />
        </div>
        </>
    );
};

export default DisabilitiesSupport;