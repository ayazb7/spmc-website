import React, { forwardRef } from 'react';
import './DescriptionSection.css';

const ServiceSection = forwardRef(({ contactSectionRef }, ref) => {

    const scrollToContact = () => {
        if (contactSectionRef.current) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const contactSectionPosition = contactSectionRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: contactSectionPosition - navbarHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="service-description" ref={ref}>
            {/* <div className="ellipse-bg ellipse1"></div>
            <div className="ellipse-bg ellipse2"></div> */}

            <h2 className="service-title">Premium Home & Lifestyle Services</h2>
            <p className="service-subtitle">
            Life can get busy, and we know how challenging it can be to keep everything in balance. That’s why our services are tailored to meet your unique needs. From tidying up your space to assisting with errands or simply providing a friendly face, we’re here to make your life easier. Trust us to handle the day-to-day so you can focus on what truly brings you joy.
            </p>
            <p className="service-subtitle">
            Let us help you take the hassle out of daily tasks. Contact us today to create your bespoke support plan!
            </p>
            <button className="cta-button" onClick={scrollToContact}>CONTACT US</button>
        </section>
    );
});

export default ServiceSection;