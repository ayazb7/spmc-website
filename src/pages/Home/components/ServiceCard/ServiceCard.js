import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, roundedCorners = [], width = 250, height = 250 }) => {
    const borderRadiusStyle = {
        borderTopLeftRadius: roundedCorners.includes('top-left') ? '15px' : '0',
        borderTopRightRadius: roundedCorners.includes('top-right') ? '15px' : '0',
        borderBottomLeftRadius: roundedCorners.includes('bottom-left') ? '15px' : '0',
        borderBottomRightRadius: roundedCorners.includes('bottom-right') ? '15px' : '0',
    };

    return (
        <div 
            className="service-card" 
            style={{
                backgroundImage: `url(${image})`,
                width: `${width}px`,
                height: `${height}px`,
                ...borderRadiusStyle
            }}
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