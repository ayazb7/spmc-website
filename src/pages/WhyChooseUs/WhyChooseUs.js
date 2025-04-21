import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';
import '../../pages/Global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const WhyChooseUs = () => {
    const sectionRefs = useRef([]);
    const [hasScrolled, setHasScrolled] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const scrollToContent = () => {
        if (contentRef.current) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const contentPosition = contentRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: contentPosition - navbarHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>SPMC | Why Choose Us</title>
            </Helmet>

            <section className="hero-section no-bottom-margin">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Your Everyday Ally</h1>
                    <p>Discover why we're the trusted choice for lifestyle support services.</p>
                </div>
                <div className={`chevron-down ${hasScrolled ? 'no-bounce' : ''}`} onClick={scrollToContent}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            <div className="why-choose-us-page" ref={contentRef}>
                <div className="why-choose-us-intro" ref={el => sectionRefs.current[0] = el}>
                    <div className="intro-container">
                        <div className="intro-icon-container">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <h2>Why Choose Us?</h2>
                        <p>
                            At SPMC, we believe in creating personalized support that adapts to your unique needs and lifestyle. 
                            Our commitment to excellence and genuine care sets us apart as your trusted partner in everyday living.
                        </p>
                    </div>
                </div>

                <div className="benefits-section">
                    <div className="benefits-grid">
                        <div className="benefit-card" ref={el => sectionRefs.current[1] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <h3>Dependable Service</h3>
                            <p>Your satisfaction is our priority. Count on us to deliver exceptional support.</p>
                        </div>

                        <div className="benefit-card" ref={el => sectionRefs.current[2] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <h3>Customised Solutions</h3>
                            <p>We believe one size doesn't fit all. That's why our plans are uniquely yours.</p>
                        </div>

                        <div className="benefit-card" ref={el => sectionRefs.current[3] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-smile"></i>
                            </div>
                            <h3>Friendly Professionals</h3>
                            <p>Our team is passionate about making your life a little brighter every day.</p>
                        </div>

                        <div className="benefit-card" ref={el => sectionRefs.current[4] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-pound-sign"></i>
                            </div>
                            <h3>Transparent Pricing</h3>
                            <p>No surprises—you'll always know what to expect with our straightforward pricing.</p>
                        </div>

                        <div className="benefit-card" ref={el => sectionRefs.current[5] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3>Tailored Care</h3>
                            <p>We listen to your needs and adapt our services to fit your lifestyle perfectly.</p>
                        </div>

                        <div className="benefit-card" ref={el => sectionRefs.current[6] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Experienced Team</h3>
                            <p>Our professionals bring a wealth of experience to provide you with top-notch support.</p>
                        </div>

                        <div className="benefit-card" ref={el => sectionRefs.current[7] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-check-double"></i>
                            </div>
                            <h3>Commitment to Quality</h3>
                            <p>We uphold the highest standards, ensuring every service we deliver exceeds expectations.</p>
                        </div>

                        <div className="benefit-card" ref={el => sectionRefs.current[8] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-brain"></i>
                            </div>
                            <h3>Peace of Mind</h3>
                            <p>Knowing you have a reliable partner for everyday tasks allows you to focus on what matters most.</p>
                        </div>

                        <div className="benefit-card" ref={el => sectionRefs.current[9] = el}>
                            <div className="benefit-icon">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <h3>Flexibility</h3>
                            <p>Whether you need a one-off service or ongoing assistance, we're here to help.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section" ref={el => sectionRefs.current[10] = el}>
                    <div className="cta-content">
                        <h2>Ready to Transform Your Support?</h2>
                        <p>We're here to provide personalized care that fits seamlessly into your lifestyle. Our dedicated team works around your schedule, preferences, and unique needs to deliver support that makes a real difference in your daily life. Let's create a care plan that's as individual as you are.</p>
                        <Link to="/contact" className="cta-button no-bottom-margin">Contact Us Today</Link>
                    </div>
                    <div className="cta-background-element"></div>
                </div>

                <div className="testimonials-section" ref={el => sectionRefs.current[11] = el}>
                    <h2>What Our Clients Say</h2>
                    <div className="testimonials-container">
                        <div className="testimonial">
                            <div className="testimonial-content">
                                <i className="fas fa-quote-left"></i>
                                <p>SPMC has been my support system for over a year now. Their flexible approach to my needs has made all the difference in my day-to-day life.</p>
                                <div className="testimonial-author">
                                    <span className="author-name">Sarah J.</span>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial-content">
                                <i className="fas fa-quote-left"></i>
                                <p>I appreciate how the team always goes the extra mile. Their attention to detail and genuine care makes them stand out from other service providers.</p>
                                <div className="testimonial-author">
                                    <span className="author-name">Michael T.</span>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial-content">
                                <i className="fas fa-quote-left"></i>
                                <p>The peace of mind that comes with having SPMC handle my everyday tasks is invaluable. Their reliable service frees me up to focus on what truly matters.</p>
                                <div className="testimonial-author">
                                    <span className="author-name">Emily R.</span>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUs; 