import React, { forwardRef } from "react";
import "./ContactSection.css";
import { Link } from "react-router-dom";
import ContactCard from "../../components/ContactCard/ContactCard";
import CQCLogo from "../../../../assets/cqc_logo.png";
import CityCouncilLogo from "../../../../assets/city_council_logo.png";
import ICOLogo from "../../../../assets/ico-logo.png";
import VideoSection from "../../../Services/VideoSection";

const ContactSection = forwardRef((props, ref) => {
  return (
    <section className="contact-section" ref={ref}>
      <div className="contact-container">
        <div className="contact-left">
          <div className="video-card">
            <h2 className="video-title">Dedicated to bringing you the best</h2>
            <div className="video-frame-container">
              <iframe
                className="embedded-video"
                src="https://www.youtube.com/watch?v=3YdlV1DsK54"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-description">
              We provide exceptional, tailored care to individuals of all ages,
              offering supported living, live-in care, and home care services.
              Whether you require assistance for a few hours a day,
              round-the-clock care, or a dedicated live-in carer, we are
              committed to finding the perfect solution to meet your needs.
            </p>
            <div className="button-container">
              <Link to="/contact" className="button-filled">
                Book Now
              </Link>
              <Link to="/contact" className="button-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h2 className="contact-title">Dedicated and compassionate carers</h2>
          <p className="contact-description">
            We carefully select a carer who possesses the appropriate skills and
            experience to provide the highest standard of care. Our aim is to
            empower you to maintain your independence and continue enjoying the
            activities you love with confidence.
          </p>
          <p className="contact-description">
            Contact us today to connect with dedicated and compassionate carers
            who will support you in living life to the fullest.
          </p>
          <div className="partner-logos">
            <div className="logo-container">
              <img
                className="logo-image"
                src={CQCLogo}
                alt="Care Quality Commission"
              />
              <span className="registration-text">*REGISTRATION PENDING</span>
            </div>
            <div className="logo-container">
              <img
                className="logo-image"
                src={CityCouncilLogo}
                alt="Southampton City Council"
              />
              <span className="registration-text">*REGISTRATION PENDING</span>
            </div>
            <div className="logo-container">
              <img className="logo-image" src={ICOLogo} alt="ICO" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
