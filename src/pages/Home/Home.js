import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from './sections/Hero/HeroSection';
import ServiceSection from './sections/Services/ServiceSection';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>SPMC | Home</title>
            </Helmet>
            <HeroSection />
            <ServiceSection />
        </div>
    );
};

export default Home;