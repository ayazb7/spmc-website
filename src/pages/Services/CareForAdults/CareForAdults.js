import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CareForAdults.css";
import "../Global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Helmet } from "react-helmet-async";
import VideoSection from "../VideoSection";

import ServiceImage1 from "../../../assets/care-for-adults.png";
import ServiceImage9 from "../../../assets/services/adults/panel1.jpg";
import ServiceImage10 from "../../../assets/services/adults/panel2.jpg";
import AdultsPanel4 from "../../../assets/services/adults/panel4.jpg";

const CareForAdults = () => {
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
        <title>SPMC | Adult Care</title>
      </Helmet>
      <div className="care-page">
        <section className="care-hero-section care-hero-adults">
          <div className="care-hero-overlay"></div>
          <div className="care-hero-content">
            <h1>Care for Adults</h1>
            <p>
              Whether you require assistance for a few hours a day,
              round-the-clock care, or a dedicated live-in carer, we are
              committed to finding the perfect solution to meet your needs.
            </p>

            <div className="care-search-section">
              <p className="care-search-title">Looking for homecare?</p>
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
          {/* <h2 className="service-title">Adult and Home Care Services</h2> */}
          <div className="service-paragraph">
            <div className="paragraph-text">
              <p className="service-subtitle" style={{ marginBottom: "0px" }}>
                At Solent Primary Medical Care, our mission is to empower
                individuals to live independently in their own homes, with
                tailored care designed to meet their unique needs, aspirations,
                and goals.
                <br />
                <br />
                Our approach is entirely person-centred, with the individuals we
                support placed at the core of everything we do. We are dedicated
                to helping every person achieve their full potential and strive
                to improve their quality of life.
              </p>
            </div>
            <div className="section-image-container">
              <img
                src={ServiceImage9}
                alt="Supported Living Services"
                className="section-image"
              />
            </div>
          </div>
          <div className="service-paragraph">
            <div className="section-image-container">
              <img
                src={ServiceImage10}
                alt="Supported Living Services"
                className="section-image"
              />
            </div>
            <div className="paragraph-text">
              <p className="service-subtitle" style={{ marginBottom: "0px" }}>
                We provide active support and positive behavioural strategies,
                refining our care through regular reviews to ensure it remains
                aligned with each person's needs and preferences. Our team is
                not only highly skilled and experienced but also committed to
                truly listening—because understanding individual needs is key to
                delivering meaningful outcomes and achieving the right balance
                between practical support and personal priorities.
                <br />
                <br />
                <strong>Solent Primary Medical Care:</strong> where care exceeds
                expectations. <br />
                Contact us today to explore how we can provide a bespoke and
                professional solution for your supported living needs.
              </p>
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
                <h3 className="section-title">Adult Care Services</h3>
                <ul className="service-list">
                  <li>
                    <strong>Dementia Care:</strong> Specialist care to support
                    adults with dementia, promoting memory retention and
                    reducing anxiety in a safe environment.
                  </li>
                  <li>
                    <strong>Palliative Care/End of Life Care:</strong>{" "}
                    Compassionate support for individuals with terminal
                    illnesses, focusing on comfort, dignity, and peace.
                  </li>
                  <li>
                    <strong>Respite Care:</strong> Temporary relief for primary
                    carers, providing professional and reliable care for loved
                    ones.
                  </li>
                </ul>
              </div>
              <div className="image-container">
                <img
                  src={ServiceImage1}
                  alt="Adult Care Services"
                  className="section-image"
                />
              </div>
            </div>
          </div>

          <div className="section white-section">
            <div className="section-content">
              <div className="image-container">
                <img
                  src={AdultsPanel4}
                  alt="Adult Care Services"
                  className="section-image"
                />
              </div>
              <div className="text-container">
                <h3 className="section-title">Overnight Care and Support</h3>
                <ul className="service-list">
                  <li>
                    <strong>Waking Night Care:</strong> Specialist care to
                    support adults with dementia, promoting memory retention and
                    reducing anxiety in a safe environment.
                  </li>
                  <li>
                    <strong>Sleep-in Support:</strong> Compassionate support for
                    individuals with terminal illnesses, focusing on comfort,
                    dignity, and peace.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <VideoSection />
      </div>
    </>
  );
};

export default CareForAdults;
