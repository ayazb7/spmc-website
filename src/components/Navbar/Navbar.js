import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes, FaPlus } from 'react-icons/fa'; // Import necessary icons
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ contactSectionRef }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState(null); // To track which menu is expanded
    const location = useLocation();

    const toggleMobileMenu = () => {
        if (mobileMenuOpen) {
            setExpandedMenu(null); // Reset submenu state when closing the menu
        }
        setMobileMenuOpen((prev) => !prev);
    };

    const toggleSubMenu = (menuText) => {
        setExpandedMenu((prev) => (prev === menuText ? null : menuText));
    };

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
                        className={`navbar-link-item ${submenu ? "has-dropdown" : ""}`}
                    >
                        <Link to={path} className="nav-link">
                            {text}
                        </Link>
                        {submenu && (
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
            <button className="contact-button" onClick={scrollToContact}>
                Contact
            </button>
            <div className="burger-menu" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div
                className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
            >
                <ul className="mobile-menu-links">
                    {navItems.map(({ text, path, submenu }) => (
                        <li key={text} className="mobile-menu-item">
                            <div
                                className={`mobile-menu-header ${
                                    expandedMenu === text ? "expanded" : ""
                                }`}
                                onClick={() => submenu && toggleSubMenu(text)}
                            >
                                <span className="mobile-menu-text">{text}</span>
                                {submenu && <FaPlus className="submenu-icon" />}
                            </div>
                            {submenu && expandedMenu === text && (
                                <ul className="mobile-submenu">
                                    {submenu.map((subItem) => (
                                        <li key={subItem.text} className="mobile-submenu-item">
                                            <Link
                                                to={subItem.path}
                                                className="mobile-submenu-link"
                                                onClick={() => {
                                                    setMobileMenuOpen(false); // Close the mobile menu
                                                    setExpandedMenu(null); // Close the submenu
                                                }}
                                            >
                                                {subItem.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <button
                    className="mobile-contact-button"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        setExpandedMenu(null); // Close submenu when Contact is clicked
                        scrollToContact();
                    }}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
