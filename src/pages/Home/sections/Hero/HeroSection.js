import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import heroVideo from '../../../../assets/hero_video.mp4'; // Replace with your actual video path

const HeroSection = ({ serviceSectionRef }) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [postcode, setPostcode] = useState('');
    const videoRef = useRef(null);
    const navigate = useNavigate();

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

    // Function to validate Southampton/Hampshire postcodes
    const isValidPostcode = (postcode) => {
        // Remove spaces and convert to uppercase
        const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase();
        
        // Southampton postcodes start with SO
        // Hampshire postcodes start with GU, PO, SO, SP
        const validPrefixes = ['SO', 'GU', 'PO', 'SP'];
        
        // Basic UK postcode format validation
        const postcodeRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}$/;
        
        if (!postcodeRegex.test(cleanPostcode)) {
            return false;
        }

        // Check if postcode starts with valid prefix
        return validPrefixes.some(prefix => cleanPostcode.startsWith(prefix));
    };

    const handlePostcodeSubmit = () => {
        if (!postcode) {
            alert('Please enter a postcode');
            return;
        }

        if (isValidPostcode(postcode)) {
            navigate('/service-available', { 
                state: { 
                    postcode: postcode.toUpperCase(),
                    message: "You're in luck – we've got you covered!",
                    subMessage: "Our team is already warming up to serve you. We'll be in touch very soon!"
                }
            });
        } else {
            navigate('/service-unavailable', {
                state: {
                    postcode: postcode.toUpperCase(),
                    message: "Oh no! We're not in your area... yet!",
                    subMessage: "But don't worry – we're growing fast. Drop your email below and we'll be the first to let you know when we arrive in your neighbourhood!"
                }
            });
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
                <h1>Solent Primary Medical Care</h1>
                <p>Specialist provider of domiciliary and supported living services for adults of all age.</p>
                
                <div className="search-section">
                    <p className="search-title">Looking for homecare?</p>
                    <div className="search-bar">
                        <input 
                            type="text" 
                            placeholder="Enter Postcode" 
                            className="search-input"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handlePostcodeSubmit();
                                }
                            }}
                        />
                        <button className="search-button" onClick={handlePostcodeSubmit}>
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

export default HeroSection;