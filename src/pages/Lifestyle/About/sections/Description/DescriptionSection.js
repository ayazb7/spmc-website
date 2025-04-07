import React, { forwardRef } from 'react';
import './DescriptionSection.css';

const DescriptionSection = forwardRef(({ contactSectionRef }, ref) => {
    const scrollToServices = () => {
        if (contactSectionRef && contactSectionRef.current) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const servicesPosition = contactSectionRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: servicesPosition - navbarHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div ref={ref} className="description-section">
            <div className="premium-description">
                <h2>Premium Home & Lifestyle Services</h2>
                <p>
                    At Solent Primary Medical Care, we understand that life's demands can sometimes be overwhelming. 
                    Our lifestyle support services are designed to make your daily life easier, offering 
                    personalized assistance that adapts to your unique needs.
                </p>
                <p>
                    From household management to personal support, our dedicated team provides reliable, 
                    professional service with a compassionate touch. We're not just service providers—we're 
                    partners in helping you maintain the lifestyle you desire.
                </p>
            </div>
        </div>
    );
});

export default DescriptionSection;