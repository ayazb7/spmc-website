import React, { useEffect, useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, roundedCorners = [], width = 250, height = 250, onClick }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const borderRadiusStyle = isMobile ? 
        { borderRadius: '15px' } : 
        {
            borderTopLeftRadius: roundedCorners.includes('top-left') ? '15px' : '0',
            borderTopRightRadius: roundedCorners.includes('top-right') ? '15px' : '0',
            borderBottomLeftRadius: roundedCorners.includes('bottom-left') ? '15px' : '0',
            borderBottomRightRadius: roundedCorners.includes('bottom-right') ? '15px' : '0',
        };
    
    // Responsive width and height
    const responsiveWidth = isMobile ? '100%' : `${width}px`;
    const responsiveHeight = isMobile ? '220px' : `${height}px`;

    return (
        <div 
            className="service-card" 
            style={{
                backgroundImage: `url(${image})`,
                width: responsiveWidth,
                height: responsiveHeight,
                maxWidth: isMobile ? '280px' : 'none',
                ...borderRadiusStyle
            }}
            onClick={onClick}
        >
            <div className="bottom-overlay"></div>
            
            <div className="overlay">
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="learn-more">Learn More</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;