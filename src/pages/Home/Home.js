import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from './sections/Hero/HeroSection';
import ServiceSection from './sections/Services/ServiceSection';

const Home = () => {
    const serviceSectionRef = useRef(null);

    return (
        <div className="home-page">
            <Helmet>
                <title>SPMC | Home</title>
            </Helmet>
            <HeroSection serviceSectionRef={serviceSectionRef} />
            <ServiceSection ref={serviceSectionRef} />
        </div>
    );
};

export default Home;