import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from './sections/Hero/HeroSection';
import ServiceSection from './sections/Services/ServiceSection';
import ContactSection from './sections/Contact/ContactSection';

const Home = () => {
    const serviceSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    return (
        <div className="home-page">
            <Helmet>
                <title>SPMC | Home</title>
            </Helmet>
            <HeroSection serviceSectionRef={serviceSectionRef} />
            <ServiceSection ref={serviceSectionRef} contactSectionRef={contactSectionRef} />
            <ContactSection ref={contactSectionRef} />
        </div>
    );
};

export default Home;