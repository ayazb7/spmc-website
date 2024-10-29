import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css'; 
import logo from '../../assets/logo_white.png'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <ul className="navbar-links">
                {["Care Services", "Disability Support", "Social Events", "About Us"].map((text) => (
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
                        {text}
                    </motion.li>
                ))}
            </ul>
            <button className="contact-button">Contact</button>
        </nav>
    );
};

export default Navbar;