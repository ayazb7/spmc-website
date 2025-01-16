import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import LifestyleHeroSection from './sections/Hero/LifestyleHeroSection';
import DescriptionSection from './sections/Description/DescriptionSection';

const Home = () => {
    const descriptionSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    return (
        <div className="home-page">
            <Helmet>
                <title>SPMC | Home & Lifestyle Support</title>
            </Helmet>
            <LifestyleHeroSection serviceSectionRef={descriptionSectionRef} />
            <DescriptionSection ref={descriptionSectionRef} contactSectionRef={contactSectionRef} />
        </div>
    );
};

export default Home;