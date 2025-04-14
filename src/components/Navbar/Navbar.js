import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes, FaPlus } from 'react-icons/fa'; // Import necessary icons
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
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

    const menuItems = [
        {
            text: 'Services',
            path: '#',
            subItems: [
                { text: 'Care for Adults', path: '/care-for-adults' },
                { text: 'Disabilities Support', path: '/disabilities-support' },
                { text: 'Live-in Care', path: '/live-in-care' },
                { text: 'After Hospital Care', path: '/after-hospital-care' },
                { text: 'Home Care', path: '/home-care' },
                { text: 'Social Engagement', path: '/social-engagement' }
            ]
        },
        {
            text: 'Lifestyle Support',
            path: '/lifestyle'
        },
        {
            text: 'Why Us?',
            path: '/why-us'
        },
        {
            text: 'FAQ',
            path: '/faq'
        },
        // {
        //     text: 'Social Events',
        //     path: '/about'
        // },
        {
            text: 'Careers',
            path: '/about'
        },

    ];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <ul className="navbar-links">
                {menuItems.map(({ text, path, subItems }) => (
                    <li
                        key={text}
                        className={`navbar-link-item ${subItems ? "has-dropdown" : ""}`}
                        onMouseEnter={() => subItems && setExpandedMenu(text)} 
                        onMouseLeave={() => subItems && setExpandedMenu(null)} 
                    >
                        <Link
                            to={path || '#'}
                            className="nav-link"
                            onClick={(e) => {
                                if (subItems) e.preventDefault();
                                setExpandedMenu(expandedMenu === text ? null : text); 
                            }}
                        >
                            {text}
                        </Link>
                        {subItems && expandedMenu === text && (
                            <ul className="dropdown-menu">
                                {subItems.map((subItem) => (
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
            <div className="nav-buttons">
                <Link to="/contact" className="contact-button">Contact Us</Link>
            </div>
            <div className="burger-menu" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div
                className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
            >
                <ul className="mobile-menu-links">
                    {menuItems.map(({ text, path, subItems }) => (
                        <li key={text} className="mobile-menu-item">
                            <div
                                className={`mobile-menu-header ${
                                    expandedMenu === text ? "expanded" : ""
                                }`}
                                onClick={() => subItems ? toggleSubMenu(text) : setMobileMenuOpen(false)}
                            >
                                {subItems ? (
                                    <>
                                        <span className="mobile-menu-text">{text}</span>
                                        <FaPlus className="submenu-icon" />
                                    </>
                                ) : (
                                    <Link
                                        to={path}
                                        className="mobile-menu-text mobile-menu-link"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setExpandedMenu(null);
                                        }}
                                    >
                                        {text}
                                    </Link>
                                )}
                            </div>
                            {subItems && expandedMenu === text && (
                                <ul className="mobile-submenu">
                                    {subItems.map((subItem) => (
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
                <Link
                    to="/contact"
                    className="mobile-contact-button"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        setExpandedMenu(null);
                    }}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
