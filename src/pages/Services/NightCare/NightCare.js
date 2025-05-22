import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NightCare.css";
import "../Global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Helmet } from "react-helmet-async";
import VideoSection from '../VideoSection';

import ServiceImage1 from "../../../assets/care-for-adults.png";
import NightPanel1 from "../../../assets/night-panel1.jpg";
import NightPanel2 from "../../../assets/night-panel2.jpg";
import NightPanel3 from "../../../assets/night-panel3.jpg";
import NightPanel4 from "../../../assets/night-panel4.jpg";

const NightCare = () => {
  const [postcode, setPostcode] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToServices = () => {
    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
    const serviceSection = document.querySelector(".service-description");

    if (serviceSection) {
      const serviceSectionPosition =
        serviceSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: serviceSectionPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const isValidPostcode = async (postcode) => {
    const cleanPostcode = postcode.replace(/\s/g, "").toUpperCase();

    const postcodeRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]?[0-9][A-Z]{2}$/;
    if (!postcodeRegex.test(cleanPostcode)) {
      return false;
    }

    try {
      const response = await fetch(
        `https://api.postcodes.io/postcodes/${cleanPostcode}`
      );
      const data = await response.json();

      if (data.status !== 200 || !data.result) return false;

      const { admin_county, pfa } = data.result;

      return admin_county === "Hampshire" || pfa === "Hampshire";
    } catch (error) {
      console.error("Postcode API error:", error);
      return false;
    }
  };

  const handlePostcodeSubmit = async () => {
    if (!postcode) {
      alert("Please enter a postcode");
      return;
    }

    const isValid = await isValidPostcode(postcode);

    if (isValid) {
      navigate("/service-available", {
        state: {
          postcode: postcode.toUpperCase(),
          message: "You're in luck – we've got you covered!",
          subMessage:
            "Our team is already warming up to serve you. We'll be in touch very soon!",
        },
      });
    } else {
      navigate("/service-unavailable", {
        state: {
          postcode: postcode.toUpperCase(),
          message: "Oh no! We're not in your area... yet!",
          subMessage:
            "But don't worry – we're growing fast. Drop your email below and we'll be the first to let you know when we arrive in your neighbourhood!",
        },
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>SPMC | Night Care Services</title>
      </Helmet>
      <div className="care-page">
        <section className="care-hero-section night-care">
          <div className="care-hero-overlay"></div>
          <div className="care-hero-content">
            <h1>Night Care & Sitters</h1>
            <p>
            Compassionate Support When It Matters Most
            </p>

            <div className="care-search-section">
              <p className="care-search-title">Looking for night care?</p>
              <div className="care-search-bar">
                <input
                  type="text"
                  placeholder="Enter Postcode"
                  className="care-search-input"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handlePostcodeSubmit();
                    }
                  }}
                />
                <button
                  className="care-search-button"
                  onClick={handlePostcodeSubmit}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="scroll-text">Scroll to explore</div>
          <div
            className={`care-chevron-down ${
              hasScrolled ? "care-no-bounce" : ""
            }`}
            onClick={scrollToServices}
          >
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        <section className="service-description">
          <div className="service-paragraph">
            <div className="paragraph-text">
              <p className="service-subtitle" style={{ marginBottom: "0px" }}>
                At Solent Primary Medical Care, we understand that the need for care doesn't end when the sun sets. 
                Our dedicated night care services are designed to provide peace of mind and essential support during the overnight hours.
                <br/>
                <br/>
                Whether you're recovering from a hospital stay, managing a chronic condition, or simply require assistance during the night, 
                our compassionate team is here to help. We offer both sleep-in and waking night care options, tailored to your individual needs, 
                ensuring safety, comfort, and continuity of care throughout the night.
              </p>
            </div>
            <div className="section-image-container">
              <img
                src={NightPanel1}
                alt="Night Care Services"
                className="section-image"
              />
            </div>
          </div>

          <div className="discover-services">
            <span className="line"></span>
            <span className="discover-text">DISCOVER OUR SERVICES</span>
            <span className="line"></span>
          </div>
        </section>

        <section className="service-sections">
          <div className="section green-section">
            <div className="section-content">
              <div className="text-container">
                <h3 className="section-title">Sleep-In Care</h3>
                <ul className="service-list">
                  <li>
                    <strong>Overnight Support:</strong> A caregiver stays overnight in your home, available to assist as needed, providing reassurance and prompt support.
                  </li>
                  <li>
                    <strong>Peace of Mind:</strong> Knowing that help is available throughout the night, ensuring safety and comfort for you and your loved ones.
                  </li>
                </ul>
              </div>
              <div className="image-container">
                <img
                  src={NightPanel2}
                  alt="Sleep-In Care"
                  className="section-image"
                />
              </div>
            </div>
          </div>

          <div className="section white-section">
            <div className="section-content">
              <div className="image-container">
                <img
                  src={NightPanel3}
                  alt="Waking Night Care"
                  className="section-image"
                />
              </div>
              <div className="text-container">
                <h3 className="section-title">Waking Night Care</h3>
                <ul className="service-list">
                  <li>
                    <strong>24/7 Alert Support:</strong> A caregiver remains awake and alert throughout the night, ready to provide immediate assistance with mobility, personal care, or medication.
                  </li>
                  <li>
                    <strong>Comprehensive Care:</strong> Professional support for all your night-time needs, ensuring you receive the highest quality of care when it matters most.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section green-section">
            <div className="section-content">
              <div className="text-container">
                <h3 className="section-title">Night Sitting Services</h3>
                <ul className="service-list">
                  <li>
                    <strong>Companionship:</strong> Ideal for those who may feel anxious or require companionship during the night, our sitters offer a calming presence and attentive support.
                  </li>
                  <li>
                    <strong>Emotional Support:</strong> Providing reassurance and comfort throughout the night, helping you feel secure and well-cared for.
                  </li>
                </ul>
              </div>
              <div className="image-container">
                <img
                  src={NightPanel4}
                  alt="Night Sitting Services"
                  className="section-image"
                />
              </div>
            </div>
          </div>
        </section>

        <VideoSection />
      </div>
    </>
  );
};

export default NightCare; 