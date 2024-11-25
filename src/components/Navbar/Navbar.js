import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaChevronDown } from 'react-icons/fa'; // Import the chevron down icon

const Navbar = ({ contactSectionRef }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
        {
            text: "Services",
            submenu: [
                { text: 'Care for adults', path: '/care-for-adults' },
                { text: 'Disabilities Support', path: '/disabilities-support' },
                { text: 'Live-in Care', path: '/live-in-care' },
                { text: 'After Hospital Care', path: '/after-hospital-care' },
                { text: 'Home Care', path: '/home-care' },
                { text: 'Social Engagement', path: '/social-engagement' },
            ],
        },
        { text: "Social Events", path: "/social-events" },
        { text: "Why Us?", path: "/about" },
        { text: "Careers", path: "/about" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <ul className="navbar-links">
                {navItems.map(({ text, path, submenu }) => (
                    <li
                        key={text}
                        className="navbar-link-item"
                        onMouseEnter={() => submenu && setDropdownOpen(true)}
                        onMouseLeave={() => submenu && setDropdownOpen(false)}
                    >
                        <Link to={path} className="nav-link">
                            {text}
                            {submenu && <FaChevronDown className="chevron-icon" />}
                        </Link>
                        {submenu && dropdownOpen && (
                            <ul className="dropdown-menu">
                                {submenu.map((subItem) => (
                                    <li key={subItem.text}>
                                        <Link to={subItem.path} className="dropdown-link">
                                            {subItem.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <button className="contact-button" onClick={scrollToContact}>Contact</button>
            <div className="burger-menu">
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;