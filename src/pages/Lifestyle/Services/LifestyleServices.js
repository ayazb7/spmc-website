import React, { useState, useEffect, useRef } from 'react';
import './LifestyleServices.css';
import '../../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';

import ServiceImage1 from '../../../assets/care-for-adults.png';
import ShoppingImage from '../../../assets/shopping.jpg';

const LifestyleServices = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            // Update scroll state
            setHasScrolled(window.scrollY > 80);
            
            // Determine which section is currently in view
            const currentPosition = window.scrollY + window.innerHeight / 3;
            
            for (let i = 0; i < sectionRefs.current.length; i++) {
                const section = sectionRefs.current[i];
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (currentPosition >= sectionTop && 
                        currentPosition < sectionTop + sectionHeight) {
                        setActiveSection(i);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToServices = () => {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const serviceSection = document.querySelector('.service-sections');
    
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
            <title>SPMC | Lifestyle Support Services</title>
        </Helmet>
        
        <div className='care-page'>
            <section className="care-hero-section after-hospital-care">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>Tailored Support, Your Way</h1>
                    <p>From home care to personal assistance, we're here to make your day run seamlessly.</p>
                    
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
                
                <div className="scroll-text">Scroll to explore</div>
                <div className={`care-chevron-down ${hasScrolled ? 'care-no-bounce' : ''}`} onClick={scrollToServices}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            <section className="service-description" ref={el => sectionRefs.current[0] = el}>
                <div className="discover-services">
                    <span className="line"></span>
                    <span className="discover-text">DISCOVER OUR SERVICES</span>
                    <span className="line"></span>
                </div>
            </section>

            <section className="service-sections">
                <div className="section green-section" ref={el => sectionRefs.current[1] = el}>
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Household Support</h3>
                            <p className="section-subtitle">Effortless Living Starts Here</p>
                            <ul className="service-list">
                                <li>
                                    <strong>Gardening and Cleaning:</strong> Keep your home and garden pristine with services including lawn mowing, hedge trimming, vacuuming, dusting, and more.
                                </li>
                                <li>
                                    <strong>Laundry and Ironing:</strong> Neatly folded, freshly pressed clothes—leave the hard work to us.
                                </li>
                                <li>
                                    <strong>Decluttering and Organisation:</strong> Transform cluttered spaces into organised havens.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Household Support Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="section white-section" ref={el => sectionRefs.current[2] = el}>
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={ShoppingImage}
                                alt="Shopping and Errands Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Shopping and Errands</h3>
                            <p className="section-subtitle">Time Saved, Life Simplified</p>
                            <ul className="service-list">
                                <li>
                                    <strong>Grocery Shopping:</strong> Shop with us or let us handle it entirely for your convenience.
                                </li>
                                <li>
                                    <strong>Errand Running:</strong> From dry cleaning pickups to parcel deliveries, we take care of the details.
                                </li>
                                <li>
                                    <strong>Meal Planning and Grocery Prep:</strong> Meal prep made simple—we'll stock your kitchen with all the essentials.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section green-section" ref={el => sectionRefs.current[3] = el}>
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Pharmacy Support</h3>
                            <p className="section-subtitle">Your Health, Prioritised</p>
                            <ul className="service-list">
                                <li>
                                    <strong>Prescription Collection:</strong> No more waiting in queues—we'll deliver prescriptions directly to your door.
                                </li>
                                <li>
                                    <strong>Medication Runs:</strong> Fast, reliable pickups for over-the-counter medications and pharmacy supplies.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Pharmacy Support Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="section white-section" ref={el => sectionRefs.current[4] = el}>
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Personal Assistance Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Personal Assistance</h3>
                            <p className="section-subtitle">Stay Organised, Stress-Free</p>
                            <ul className="service-list">
                                <li>
                                    <strong>PA Services:</strong> Appointment scheduling, paperwork management, and bill tracking made easy.
                                </li>
                                <li>
                                    <strong>Appointment Support:</strong> From check-ups to meetings, we'll ensure you're on time and supported.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section green-section" ref={el => sectionRefs.current[5] = el}>
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Companionship</h3>
                            <p className="section-subtitle">Because Everyone Deserves a Friendly Face</p>
                            <ul className="service-list">
                                <li>
                                    <strong>Social Support:</strong> Share meaningful moments—from conversations over tea to strolls in the park.
                                </li>
                                <li>
                                    <strong>Accompaniment Services:</strong> Enjoy outings with the reassurance of friendly company.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Companionship Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="section white-section" ref={el => sectionRefs.current[6] = el}>
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Everyday Assistance Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Everyday Assistance</h3>
                            <p className="section-subtitle">Day-to-Day Made Simple</p>
                            <ul className="service-list">
                                <li>
                                    <strong>Post & Parcels:</strong> Timely handling of letters, packages, and deliveries.
                                </li>
                                <li>
                                    <strong>Home Essentials:</strong> Well-stocked pantry, supplies, and light meal preparation.
                                </li>
                                <li>
                                    <strong>Practical Support:</strong> Pet care, small repairs, and waste management.
                                </li>
                                <li>
                                    <strong>Tech Help:</strong> Setting up gadgets or troubleshooting issues with ease.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section green-section" ref={el => sectionRefs.current[7] = el}>
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Event Support</h3>
                            <p className="section-subtitle">Bringing Events to Life</p>
                            <ul className="service-list">
                                <li>
                                    <strong>Party Planning Assistance:</strong> Help with organising small gatherings or celebrations.
                                </li>
                                <li>
                                    <strong>Venue Setup and Decoration:</strong> Setting up chairs, tables, and decorations for your special occasions.
                                </li>
                                <li>
                                    <strong>Clean-Up Services:</strong> Post-event clean-up so you can relax and enjoy the moment.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Event Support Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="section white-section" ref={el => sectionRefs.current[8] = el}>
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Travel Assistance Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Travel Assistance</h3>
                            <p className="section-subtitle">Making Journeys Stress-Free</p>
                            <ul className="service-list">
                                <li>
                                    <strong>Packing Support:</strong> Assistance with organising and packing your belongings for travel.
                                </li>
                                <li>
                                    <strong>Travel Coordination:</strong> Help with booking tickets, managing itineraries, and ensuring a smooth journey.
                                </li>
                                <li>
                                    <strong>Drop-Off and Pick-Up Services:</strong> Transporting you or your belongings to and from travel hubs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section green-section" ref={el => sectionRefs.current[9] = el}>
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Learning and Development Support</h3>
                            <p className="section-subtitle">Encouraging Growth</p>
                            <ul className="service-list">
                                <li>
                                    <strong>Tutoring Services:</strong> Help with basic subjects or skills for children and adults.
                                </li>
                                <li>
                                    <strong>Digital Literacy:</strong> Assistance with learning to use computers, smartphones, and tablets effectively.
                                </li>
                                <li>
                                    <strong>Hobby Support:</strong> Guidance and encouragement in pursuing new interests like painting, knitting, or photography.
                                </li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="Learning and Development Support Services"
                                className="section-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default LifestyleServices;