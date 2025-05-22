import React, { useState, useEffect } from 'react';
import './SocialEngagement.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';
import VideoSection from '../VideoSection';

import SocialPanel1 from '../../../assets/social-panel1.PNG';
import SocialPanel2 from '../../../assets/social-panel2.PNG';
import SocialPanel3 from '../../../assets/social-panel3.PNG';
import SocialPanel4 from '../../../assets/social-panel4.PNG';


const SocialEngagement = () => {
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
            <title>SPMC | Social Engagement</title>
        </Helmet>
        <div className='care-page'>
            <section className="care-hero-section social-engagement">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>Social Engagement</h1>
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
                            At Solent Primary Medical Care, we believe meaningful connections are the key to a fulfilling life. Our social engagement services are designed to combat loneliness, inspire joy, and foster a sense of belonging within the community.
                            <br/>
                            <br/>
                            From heartfelt conversations to sharing cherished memories over a cup of tea, our carers provide genuine companionship that nurtures emotional well-being. We help create moments of joy, ensuring every individual feels valued and connected.
                        </p>
                    </div>
                    <div className="section-image-container">
                        <img
                            src={SocialPanel1}
                            alt="Social Engagement Services"
                            className="section-image"
                        />
                    </div>
                </div>

                <div className="service-paragraph">
                    <div className="section-image-container">
                        <img
                            src={SocialPanel2}
                            alt="Meaningful Outings and Activities"
                            className="section-image"
                        />
                    </div>
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            We’re here to make outings stress-free and enjoyable, whether it’s attending an appointment, visiting loved ones, or taking a trip to a favourite café. Our carers provide reliable support every step of the way, ensuring independence and confidence.
                            <br/>
                            <br/>
                            From rekindling hobbies to enjoying walks in the park or participating in community events, we tailor every experience to individual preferences. At Solent Primary Medical Care, social connection goes beyond interaction—it’s about creating purpose and meaningful moments.
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
                            <h3 className="section-title">Engagement Services</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Companionship:</strong> Friendly, one-on-one interaction to reduce loneliness, including engaging in conversations, activities, and shared interests that foster emotional well-being.
                                </li>
                                <li>
                                    <strong>Accompanying to Appointments:</strong> Reliable transportation and support during medical, personal, or social appointments, ensuring clients feel safe and supported.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={SocialPanel3}
                                alt="Social Engagement Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="section white-section">
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={SocialPanel4}
                                alt="Supporting Hobbies and Outings"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Supporting Hobbies and Outings</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Hobbies Support:</strong> Encouragement and assistance with hobbies or interests, whether it’s gardening, arts and crafts, reading, or any activity that brings joy and fulfilment.
                                </li>
                                <li>
                                    <strong>Going Out to Places of Choice:</strong> Facilitation of outings to places the client enjoys, such as parks, cafes, or family gatherings, promoting independence and a continued connection to the community.
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

export default SocialEngagement;