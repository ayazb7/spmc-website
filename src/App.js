import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CareForAdults from './pages/Services/CareForAdults/CareForAdults'; 
import DisabilitiesSupport from './pages/Services/DisabilitiesSupport/DisabilitiesSupport';
import LiveInCare from './pages/Services/LiveInCare/LiveInCare';
import AfterHospitalCare from './pages/Services/AfterHospitalCare/AfterHospitalCare';
import HomeCare from './pages/Services/HomeCare/HomeCare';
import SocialEngagement from './pages/Services/SocialEngagement/SocialEngagement';
import LifestyleAbout from './pages/Lifestyle/About/LifestyleAbout';
import LifestyleServices from './pages/Lifestyle/Services/LifestyleServices';
import WhyChooseUs from './pages/Lifestyle/WhyChooseUs/WhyChooseUs';
import Contact from './pages/Contact/Contact';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/care-for-adults" element={<CareForAdults />} />
                    <Route path="/disabilities-support" element={<DisabilitiesSupport />} />
                    <Route path="/live-in-care" element={<LiveInCare />} />
                    <Route path="/after-hospital-care" element={<AfterHospitalCare />} />
                    <Route path="/home-care" element={<HomeCare />} />
                    <Route path="/social-engagement" element={<SocialEngagement />} />
                    
                    <Route path="/lifestyle-about" element={<LifestyleAbout />} />
                    <Route path="/lifestyle-services" element={<LifestyleServices />} />
                    <Route path="/lifestyle-why" element={<WhyChooseUs />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;