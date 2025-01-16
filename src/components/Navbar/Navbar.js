import React, { useState, useEffect } from 'react';
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

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // New function to close dropdown when clicking outside
    const handleClickOutside = (e) => {
        const navbar = document.querySelector('.navbar');
        if (navbar && !navbar.contains(e.target)) {
            setExpandedMenu(null); // Close any open submenu
        }
    };

    // Add event listener for clicks outside the navbar
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
        {
            text: "Lifestyle Support",
            submenu: [
                { text: 'About', path: '/lifestyle-about' },
                { text: 'Services', path: '/lifestyle-services' },
                { text: 'Why Choose Us?', path: '/lifestyle-why' },
                { text: 'FAQs', path: '/lifestyle-faqs' },
                { text: 'Contact', path: '/lifestyle-contact' },
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
                        onMouseEnter={() => submenu && setExpandedMenu(text)} 
                        onMouseLeave={() => submenu && setExpandedMenu(null)} 
                    >
                        <Link
                            to={path || '#'}
                            className="nav-link"
                            onClick={(e) => {
                                if (submenu) e.preventDefault();
                                setExpandedMenu(expandedMenu === text ? null : text); 
                            }}
                        >
                            {text}
                        </Link>
                        {submenu && expandedMenu === text && (
                            <ul className="dropdown-menu">
                                {submenu.map((subItem) => (
                                    <li key={subItem.text}>
                                        <Link
                                            to={subItem.path}
                                            className="dropdown-link"
                                            onClick={() => setExpandedMenu(null)} 
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
                                                    setMobileMenuOpen(false); 
                                                    setExpandedMenu(null); 
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
                        setExpandedMenu(null); 
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
