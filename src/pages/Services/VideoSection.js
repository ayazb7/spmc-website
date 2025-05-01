import React from "react";
import { Link } from "react-router-dom";
import "./VideoSection.css";
import CQCLogo from "../../assets/cqc_logo.png";
import CityCouncilLogo from "../../assets/city_council_logo.png";
import ICOLogo from "../../assets/ico-logo.png";
import BirdieLogo from "../../assets/birdie-logo.png";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-left">
          <div className="video-card">
            <h2 className="video-title">Dedicated to bringing you the best</h2>
            <div className="video-frame-container">
              <iframe
                className="embedded-video"
                src="https://www.youtube.com/embed/3YdlV1DsK54"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="disclaimer-message">
              This video is provided by NHS England and explains the importance of integrated care in communities across the UK. It highlights how partnerships between the NHS, local government, and the third sector are improving care delivery.
            </p>
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
        <div className="video-right">
          <div className="logo-container">
            <img
              className="logo-image larger"
              src={CQCLogo}
              alt="Care Quality Commission"
            />
            <span className="registration-text">*REGISTRATION PENDING</span>
          </div>
          <div className="logo-container">
            <img
              className="logo-image larger"
              src={CityCouncilLogo}
              alt="Southampton City Council"
            />
            <span className="registration-text">*REGISTRATION PENDING</span>
          </div>
          <div className="logo-container">
            <img className="logo-image larger" src={ICOLogo} alt="ICO" />
          </div>
          <div className="logo-container">
            <img className="logo-image larger" src={BirdieLogo} alt="Birdie" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
