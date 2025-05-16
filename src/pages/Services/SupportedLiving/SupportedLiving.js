import React, { useState, useEffect } from 'react';
import './SupportedLiving.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';
import VideoSection from '../VideoSection';

import ServiceImage1 from '../../../assets/care-for-adults.png';
import SupportedLivingPanel1a from '../../../assets/supported-panel1a.jpg';
import SupportedLivingPanel1b from '../../../assets/supported-panel1b.jpg';

const SupportedLiving = () => {
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
            <title>SPMC | Supported Living</title>
        </Helmet>
        <div className='care-page'>
            <section className="care-hero-section care-hero-supported">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>Supported Living</h1>
                    <p>Creating environments where individuals can grow, feel safe, and live with confidence through person-led support for adults with various needs.</p>
                    
                    <div className="care-search-section">
                        <p className="care-search-title">Looking for supported living?</p>
                        <div className="care-search-bar">
                            <input type="text" placeholder="Enter Postcode" className="care-search-input" />
                            <button className="care-search-button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="scroll-text">Scroll to explore</div>
                <div className={`care-chevron-down ${hasScrolled ? 'care-no-bounce' : ''}`} onClick={scrollToServices}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            <section className="service-description">
                {/* <h2 className="service-title">Supported Living at SPMCS</h2> */}
                <div className="service-paragraph">
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            At Solent Primary Medical Care Services (SPMCS), Supported Living is more than practical support — it's about creating the right environment for people to grow, feel safe, and live with confidence.
                            <br/>
                            <br/>
                            We provide flexible, person-led support for adults with learning disabilities, autism, mental health needs, and physical health conditions who wish to live independently but require some level of assistance in their daily lives. Whether for a few hours a week or around-the-clock, our service adapts to the person — not the other way around.
                        </p>
                    </div>
                    <div className="section-image-container">
                        <img
                            src={SupportedLivingPanel1a}
                            alt="Supported Living Services"
                            className="section-image"
                        />
                    </div>
                </div>
                <div className="service-paragraph">
                    <div className="section-image-container">
                        <img
                            src={SupportedLivingPanel1b}
                            alt="Supported Living Services"
                            className="section-image"
                        />
                    </div>
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            No two lives are the same — and neither are our care plans. Every individual we support is involved in shaping how their care looks, feels, and evolves over time. Our team works to understand not just what someone needs, but what they value and what helps them feel in control of their own life.
                            <br/>
                            <br/>
                            <strong>Solent Primary Medical Care:</strong> where care exceeds expectations. <br/> 
                            Contact us today to explore how we can provide a bespoke and professional solution for your supported living needs.
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
                            <h3 className="section-title">Care That Reflects the Individual</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Life Skills Development:</strong> Developing life skills in a way that feels natural and achievable.
                                </li>
                                <li>
                                    <strong>Independence Support:</strong> Encouraging independence while providing just the right level of support.
                                </li>
                                <li>
                                    <strong>Routine Maintenance:</strong> Maintaining routines that give structure, comfort, and pride.
                                </li>
                                <li>
                                    <strong>Community Building:</strong> Building community links that reduce isolation and encourage engagement.
                                </li>
                                <li>
                                    <strong>Personal Preferences:</strong> Honouring choices around lifestyle, identity, and personal preferences.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Individual-centered Care"
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
                                alt="Technology-backed Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">A Service Backed by Smart Technology</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Digital Care Records:</strong> Keep families, professionals, and individuals fully informed.
                                </li>
                                <li>
                                    <strong>Real-time Updates:</strong> Mean there's always clarity on what support is being delivered and when.
                                </li>
                                <li>
                                    <strong>Secure Platforms:</strong> Protect privacy and ensure information is accessible only to those who need it.
                                </li>
                                <li>
                                    <strong>Data Insights:</strong> Help us fine-tune support, respond proactively, and continuously improve outcomes.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section green-section">
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">What We Support</h3>
                            <ul className="service-list">
                                <li>Personal care and daily routines</li>
                                <li>Household tasks, cooking, and budgeting</li>
                                <li>Medication prompts and health appointments</li>
                                <li>Confidence-building and emotional wellbeing</li>
                                <li>Education, employment, and volunteering</li>
                                <li>Navigating relationships and community life</li>
                                <li>Tenancy responsibilities and maintaining a safe home</li>
                                <li>Goal-setting, planning, and personal development</li>
                                <li>24/7 on-call support and flexible staff visits</li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Support Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                {/* <div className="section white-section">
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Person-centered Approach"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Designed Around Lives — Not Labels</h3>
                            <p>We don't define people by their diagnosis. Our work starts with a conversation: "What does a good day look like for you?" From there, we build care that supports each person's version of a meaningful life.</p>
                            <p>Whether someone is building a new chapter after residential care, navigating adulthood for the first time, or managing complex needs in the community — we walk alongside them with care, clarity, and commitment.</p>
                        </div>
                    </div>
                </div> */}
            </section>

            <VideoSection />
        </div>
        </>
    );
};

export default SupportedLiving;