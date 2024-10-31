import React from 'react';
import './ContactSection.css';
import ContactCard from '../../components/ContactCard/ContactCard';
import CQCLogo from '../../../../assets/cqc_logo.png';
import CityCouncilLogo from '../../../../assets/city_council_logo.png';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-left">
                    <ContactCard />
                </div>
                <div className="contact-right">
                    <h2 className="contact-title">Dedicated and compassionate carers</h2>
                    <p className="contact-description">
                        We carefully select a carer who possesses the appropriate skills and experience to provide the
                        highest standard of care. Our aim is to empower you to maintain your independence and continue
                        enjoying the activities you love with confidence.
                    </p>
                    <p className="contact-description">
                        Contact us today to connect with dedicated and compassionate carers who will support you in
                        living life to the fullest.
                    </p>
                    <div className="partner-logos">
                        <img src={CQCLogo} alt="Care Quality Commission" />
                        <img src={CityCouncilLogo} alt="Southampton City Council" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;