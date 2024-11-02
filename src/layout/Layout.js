import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = ({ children, contactSectionRef }) => {
    return (
        <>
            <Navbar contactSectionRef={contactSectionRef} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;