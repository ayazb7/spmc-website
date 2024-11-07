import React from 'react';
import './AboutSection.css';
import aboutEllipse from '../../../../assets/about-ellipse-image.png';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-background">
                <img src={aboutEllipse} alt="About Ellipse" className="about-ellipse" />
                <div className="about-blue-ellipse"></div>
                <div className="about-blue-rectangle"></div>
            </div>
            <div className="about-card">
                <div className="about-header">
                    <p>About Us</p>
                </div>
                <div className="about-content">
                    <h2 className="about-title">Personalised Care & Commitment</h2>
                    <p className="about-description">
                        We are based in Hampshire and dedicated to providing high-quality homecare services within our community.
                        Our team is highly trained and experienced in supporting individuals in the comfort of their own homes.
                    </p>
                    <p className="about-description">
                        We are dedicated to delivering personalised care that fosters independence and meets the unique needs of
                        each individual. Our goal is to ensure continuity of care and empower our clients to develop vital life skills,
                        contributing to their overall well-being.
                    </p>
                </div>
                <div className="about-buttons">
                    <button className="btn btn-primary">Discover More</button>
                    <button className="btn btn-outline">Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;