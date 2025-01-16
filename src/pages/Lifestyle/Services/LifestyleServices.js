import React, { useState, useEffect } from 'react';
import './LifestyleServices.css';
import '../Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';

import ServiceImage1 from '../../../assets/care-for-adults.png';

const LifestyleServices = () => {
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
            <title>SPMC | Lifestyle Support Services</title>
        </Helmet>
        <div className='care-page'>
            <section className="care-hero-section after-hospital-care">
                <div className="care-hero-overlay"></div>
                <div className="care-hero-content">
                    <h1>Tailored Support, Your Way</h1>
                    <p>From home care to personal assistance, we’re here to make your day run seamlessly.</p>
                    
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
                            <h3 className="section-title">Household Support</h3>
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
                                alt="After Hospital Care Services"
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
                                alt="After Hospital Care Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Shopping and Errands</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Grocery Shopping:</strong> Shop with us or let us handle it entirely for your convenience.
                                </li>
                                <li>
                                    <strong>Errand Running:</strong> From dry cleaning pickups to parcel deliveries, we take care of the details.
                                </li>
                                <li>
                                    <strong>Meal Planning and Grocery Prep:</strong> Meal prep made simple—we’ll stock your kitchen with all the essentials.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section green-section">
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Pharmacy Support</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Prescription Collection:</strong> No more waiting in queues—we’ll deliver prescriptions directly to your door.
                                </li>
                                <li>
                                    <strong>Medication Runs:</strong> Fast, reliable pickups for over-the-counter medications and pharmacy supplies.
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

                <div className="section white-section">
                    <div className="section-content">
                        <div className="image-container">
                            <img
                                src={ServiceImage1}
                                alt="After Hospital Care Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Personal Assistance</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>PA Services:</strong> Appointment scheduling, paperwork management, and bill tracking made easy.
                                </li>
                                <li>
                                    <strong>Appointment Support:</strong> From check-ups to meetings, we’ll ensure you’re on time and supported.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section green-section">
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Companionship</h3>
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
                                alt="After Hospital Care Services"
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
                                alt="After Hospital Care Services"
                                className="section-image"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="section-title">Everyday Assistance</h3>
                            <ul className="service-list">
                                <li>
                                    <strong>Post and Parcel Management:</strong> Timely handling of letters, packages, and deliveries.
                                </li>
                                <li>
                                    <strong>Household Essentials Stock-Up:</strong> A well-stocked pantry and home supplies, always.
                                </li>
                                <li>
                                    <strong>Small Home Repairs:</strong> From fixing shelves to assembling furniture, we’re here to help.
                                </li>
                                <li>
                                    <strong>Waste Management:</strong> Recycling, rubbish sorting, and green waste management made easy.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section green-section">
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Event Support</h3>
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

                <div className="section white-section">
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

                <div className="section green-section">
                    <div className="section-content">
                        <div className="text-container">
                            <h3 className="section-title">Learning and Development Support</h3>
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