import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Chatbot from '../components/Chatbot/Chatbot';

const Layout = ({ children, contactSectionRef }) => {
    return (
        <>
            <Navbar contactSectionRef={contactSectionRef} />
            <main>{children}</main>
            <Footer />
            <Chatbot />
        </>
    );
};

export default Layout;