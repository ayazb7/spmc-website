import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaUserMd, FaLaptop, FaChartLine, FaUsers, FaHeart, FaBrain, FaHandshake } from 'react-icons/fa';
import ContactSection from '../Home/sections/Contact/ContactSection';
import './About.css';

const About = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const contentRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        <div className="about-page">
            <Helmet>
                <title>SPMC | About Us</title>
            </Helmet>

            <div className="about-hero">
                <motion.div 
                    className="about-hero-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <FaInfoCircle className="hero-icon" />
                    <h1>About Us</h1>
                    <p>Where leadership, compassion, and innovation come together</p>
                </motion.div>
                
                <div className="wave-decoration">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#f9fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,176C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

                <div className="intro-section" ref={el => sectionRefs.current[0] = el}>
                    <div className="intro-container">
                        <div className="intro-icon-container">
                            <FaHeart />
                        </div>
                        <h2>Our Mission</h2>
                        <p>At Solent Primary Medical Care, we believe care should be as individual as the people receiving it. Our home care services help individuals live with dignity, independence, and confidence in the comfort of their own homes — whether they need day-to-day support, night-time assistance, or post-hospital care.</p>
                        <p>We take a person-centred approach to everything we do — listening, adapting, and delivering care that fits around each individual's lifestyle, health needs, and personal goals. With a focus on quality, compassion, and consistency, we provide support that makes a real difference.</p>
                    </div>
                </div>

                <div className="vision-section" ref={el => sectionRefs.current[1] = el}>
                    <div className="vision-container">
                        <div className="vision-icon-container">
                            <FaUserMd />
                        </div>
                        <h2>Led by Insight, Driven by Care</h2>
                        <div className="vision-content">
                            <p>Our service is shaped by a GP-led vision to bridge the gap between adult social care and medical healthcare — ensuring people receive thoughtful, joined-up care that meets both practical and health-related needs.</p>
                            <p>With experience across healthcare, social care, and care management, our leadership team brings both professional insight and operational excellence. Together, we are focused on delivering safe, responsive services centred entirely on the person.</p>
                        </div>
                    </div>
                </div>

                <div className="tech-section" ref={el => sectionRefs.current[2] = el}>
                    <div className="container">
                        <h2>Empowered by Technology, Grounded in Care</h2>
                        <p className="tech-intro">We use technology to enhance — not replace — care.</p>
                        <div className="tech-grid">
                            <div className="tech-card">
                                <div className="tech-card-icon">
                                    <FaChartLine />
                                </div>
                                <h3>Real-Time Monitoring & Insights</h3>
                                <p>Families and managers stay informed and reassured. Data helps us review, improve, and personalise care delivery.</p>
                            </div>
                            <div className="tech-card">
                                <div className="tech-card-icon">
                                    <FaLaptop />
                                </div>
                                <h3>Digital Care Plans</h3>
                                <p>Secure, up-to-date, and accessible documentation that ensures consistency and quality of care.</p>
                            </div>
                            <div className="tech-card">
                                <div className="tech-card-icon">
                                    <FaUsers />
                                </div>
                                <h3>Smart Scheduling & Coordination</h3>
                                <p>Ensures continuity, reliability, and perfect matching of care providers to individual needs.</p>
                            </div>
                        </div>
                        <p className="tech-conclusion">Technology supports our people, promotes safety, and empowers families — while keeping the human connection at the heart of what we do.</p>
                    </div>
                </div>

                <div className="values-section" ref={el => sectionRefs.current[3] = el}>
                    <div className="container">
                        <h2>What We Stand For</h2>
                        <div className="values-grid">
                            <div className="value-card">
                                <div className="value-card-icon">
                                    <FaHeart />
                                </div>
                                <h3>Personalised, Respectful Care</h3>
                                <p>Tailored to individual routines, preferences, and goals with a focus on dignity and independence.</p>
                            </div>
                            <div className="value-card">
                                <div className="value-card-icon">
                                    <FaBrain />
                                </div>
                                <h3>Professional Excellence</h3>
                                <p>High standards in recruitment, training, and service delivery to ensure the best possible outcomes.</p>
                            </div>
                            <div className="value-card">
                                <div className="value-card-icon">
                                    <FaHandshake />
                                </div>
                                <h3>Collaborative, Integrated Support</h3>
                                <p>We work together with families, healthcare professionals, and local services to provide comprehensive care that promotes wellbeing and independence.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta-section" ref={el => sectionRefs.current[4] = el}>
                    <div className="cta-content">
                        <h2>Ready to Experience Our Care?</h2>
                        <p>Speak to our team today to find out how we can support you or your loved one at home. We'll listen to your needs, answer your questions, and guide you through our services to find the perfect care solution.</p>
                        <button className="cta-button no-bottom-margin" onClick={() => window.location.href = '/contact'}>
                            Contact Us
                        </button>
                    </div>
                    <div className="cta-background-element"></div>
                </div>

            <ContactSection />
        </div>
    );
};

export default About;