import React, { useState, useEffect } from 'react';
import './HomeCare.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';
import VideoSection from '../VideoSection';

import HomePanel1 from '../../../assets/services/home/panel1.jpg';
import HomePanel2 from '../../../assets/services/home/panel2.jpg';
import HomePanel3 from '../../../assets/services/home/panel3.jpg';
import HomePanel4 from '../../../assets/services/home/panel4.jpg';

const HomeCare = () => {
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
            <title>SPMC | Home Care</title>
        </Helmet>
        <div className='care-page'>
            <section className="care-hero-section home-care">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>Home Care</h1>
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

                {/* <h2 className="service-title">Adult and Home Care Services</h2> */}
                <div className="service-paragraph">
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            At Solent Primary Medical Care, our home care services are crafted to help individuals maintain independence while ensuring they feel supported, safe, and comfortable in their own homes. With a personalised approach, we prioritise dignity, well-being, and quality of life.
                            <br/>
                            <br/>
                            Our carers assist with daily household tasks, from cleaning and tidying to laundry and ironing, helping create a calm and organised home environment. With our help, clients can focus on the things they enjoy most without the stress of daily chores.
                        </p>
                    </div>
                    <div className="section-image-container">
                        <img
                            src={HomePanel1}
                            alt="Home Care Services"
                            className="section-image"
                        />
                    </div>
                </div>

                <div className="service-paragraph">
                    <div className="section-image-container">
                        <img
                            src={HomePanel2}
                            alt="Personalised Home Care"
                            className="section-image"
                        />
                    </div>
                    <div className="paragraph-text">
                        <p className="service-subtitle" style={{marginBottom: "0px"}}>
                            Our carers also provide sensitive and respectful assistance with personal hygiene, including bathing, showering, and grooming, helping clients feel confident and comfortable. Additionally, we support safe and timely medication management, offering peace of mind to clients and their families.
                            <br/>
                            <br/>
                            Beyond practical help, we bring companionship and meaningful interaction, alleviating loneliness through engaging conversations and shared activities. Our mission is to provide care that enriches daily life in every way possible.
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
            <   div className="section green-section">
                    <div className="section-content">
                        <div className="text-container">
                            {/* <h3 className="section-title">Home Care Services</h3> */}
                            <ul className="service-list">
                                <li>
                                    <strong>Medication Administration:</strong> Safe and accurate management of medications, ensuring clients take their prescriptions on time and as prescribed to support their health and well-being.
                                </li>
                                <li>
                                    <strong>Meal Preparation:</strong> Nutritious meal planning and preparation tailored to dietary needs and preferences, promoting good health and enjoyment of food.
                                </li>
                                <li>
                                    <strong>Cleaning, Laundry & Ironing:</strong> Routine household chores, including cleaning, washing, and ironing, to maintain a comfortable, clean, and organised home environment.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={HomePanel3}
                                alt="Home Care Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="section white-section">
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={HomePanel4}
                                alt="Personal Hygiene Assistance"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Personal Hygiene Assistance</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Assistance with Washing, Bathing, Showering:</strong> Sensitive and dignified personal care services to help clients with daily hygiene routines, fostering independence and confidence.
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

export default HomeCare;