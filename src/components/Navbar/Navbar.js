import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from '../../assets/logo_white.png';

const Navbar = ({ contactSectionRef }) => {
    const location = useLocation();

    const scrollToContact = () => {
        if (location.pathname === '/' && contactSectionRef?.current) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const contactSectionPosition = contactSectionRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: contactSectionPosition - navbarHeight,
                behavior: 'smooth',
            });
        } else {
            window.location.href = "/";
        }
    };

    const navItems = [
        { text: "Care Services", path: "/care-services" },
        { text: "Disability Support", path: "/disability-support" },
        { text: "Social Events", path: "/social-events" },
        { text: "About Us", path: "/about" }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <ul className="navbar-links">
                {navItems.map(({ text, path }) => (
                    <motion.li
                        key={text}
                        initial={{ backgroundColor: "rgba(255, 255, 255, 0)", color: "#FFFFFF" }}
                        whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 1)",
                            color: "#1B1E40",
                            transition: { duration: 0.3 },
                        }}
                        className="navbar-link-item"
                    >
                        <Link to={path} className="nav-link">
                            {text}
                        </Link>
                    </motion.li>
                ))}
            </ul>
            <button className="contact-button" onClick={scrollToContact}>Contact</button>
        </nav>
    );
};

export default Navbar;