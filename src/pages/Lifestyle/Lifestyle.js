import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import LifestyleHeroSection from './About/sections/Hero/LifestyleHeroSection';
import DescriptionSection from './About/sections/Description/DescriptionSection';
import DiscoverServices from './Services/components/DiscoverServices/DiscoverServices';
import ServicesList from './Services/components/ServicesList/ServicesList';

const Lifestyle = () => {
    const descriptionSectionRef = useRef(null);
    const servicesRef = useRef(null);
    const contactSectionRef = useRef(null);

    return (
        <div className="lifestyle-page">
            <Helmet>
                <title>SPMC | Lifestyle Support</title>
            </Helmet>

            {/* Hero Section from About page */}
            <LifestyleHeroSection serviceSectionRef={descriptionSectionRef} />
            
            {/* Description Section from About page */}
            <DescriptionSection ref={descriptionSectionRef} contactSectionRef={servicesRef} />
            
            {/* Services Section */}
            <div ref={servicesRef}>
                <DiscoverServices />
                <ServicesList />
            </div>
        </div>
    );
};

export default Lifestyle; 