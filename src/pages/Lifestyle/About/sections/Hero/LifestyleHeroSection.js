import React, { useState, useEffect, useRef } from 'react';
import './LifestyleHeroSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import heroVideo from '../../../../../assets/hero_video.mp4';

const LifestyleHeroSection = ({ serviceSectionRef }) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const videoRef = useRef(null);

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
        if (serviceSectionRef && serviceSectionRef.current) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const serviceSectionPosition = serviceSectionRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: serviceSectionPosition - navbarHeight,
                behavior: 'smooth',
            });
        } else {
            // Fallback if ref is not available
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const serviceSection = document.querySelector('.service-description');
            
            if (serviceSection) {
                const serviceSectionPosition = serviceSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: serviceSectionPosition - navbarHeight,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <div className="hero-section">
            <video 
                ref={videoRef}
                className="hero-video" 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="auto"
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Simplifying Life, Your Way</h1>
                <p>Support designed to help you thrive in every moment.</p>
                
                <div className="search-section">
                    <p className="search-title">Looking for homecare?</p>
                    <div className="search-bar">
                        <input type="text" placeholder="Enter Postcode" className="search-input" />
                        <button className="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className={`chevron-down ${hasScrolled ? 'no-bounce' : ''}`} onClick={scrollToServices}>
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    );
};

export default LifestyleHeroSection;