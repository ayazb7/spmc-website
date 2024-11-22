import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ServiceSection.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

import ServiceImage1 from '../../../../assets/service1.png';
import ServiceImage2 from '../../../../assets/service2.png';
import ServiceImage3 from '../../../../assets/service3.png';
import ServiceImage4 from '../../../../assets/service4.png';
import ServiceImage5 from '../../../../assets/service5.png';
import ServiceImage6 from '../../../../assets/service6.png';

const ServiceSection = forwardRef(({ contactSectionRef }, ref) => {
    const navigate = useNavigate(); // Initialize navigate function

    const services = [
        { title: 'Care for adults', image: ServiceImage1, roundedCorners: ['top-left'], route: '/care-for-adults' },
        { title: 'Disabilities Support', image: ServiceImage2, roundedCorners: [], route: '/disabilities-support'},
        { title: 'Live-in Care', image: ServiceImage3, roundedCorners: ['top-right'], route: '/live-in-care' },
        { title: 'After Hospital Care', image: ServiceImage4, roundedCorners: ['bottom-left'], route: '/after-hospital-care' },
        { title: 'Home Care', image: ServiceImage5, roundedCorners: [] },
        { title: 'Social Engagement', image: ServiceImage6, roundedCorners: ['bottom-right'] },
    ];

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
            <div className="ellipse-bg ellipse1"></div>
            <div className="ellipse-bg ellipse2"></div>

            <h2 className="service-title">High Quality Companionship Services</h2>
            <p className="service-subtitle">
            Our companions are thoughtfully chosen for their kindness and dedication, bringing positivity and joy to each interaction. Let our companionship visits enhance your daily life with genuine human connection, comfort, and support. Discover the uplifting impact a compassionate companion can make.
            </p>
            <div className="service-cards">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        image={service.image}
                        roundedCorners={service.roundedCorners}
                        width={250}
                        height={250}
                        onClick={() => {
                            if (service.route) {
                                navigate(service.route);
                                window.scrollTo(0, 0);
                            }
                        }}
                    />
                ))}
            </div>
            <button className="cta-button" onClick={scrollToContact}>CONTACT US</button>
        </section>
    );
});

export default ServiceSection;