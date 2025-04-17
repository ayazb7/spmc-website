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
import SupportedLiving from './pages/Services/SupportedLiving/SupportedLiving';
import Lifestyle from './pages/Lifestyle/Lifestyle';
import WhyChooseUs from './pages/WhyChooseUs/WhyChooseUs';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import ServiceAvailable from './pages/ServiceAvailable/ServiceAvailable';
import ServiceUnavailable from './pages/ServiceUnavailable/ServiceUnavailable';
import Careers from './pages/Careers/Careers';
import CareersApply from './pages/Careers/CareersApply';

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
                    <Route path="/supported-living" element={<SupportedLiving />} />
                    <Route path="/lifestyle" element={<Lifestyle />} />
                    <Route path="/why-us" element={<WhyChooseUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/careers-apply" element={<CareersApply />} />
                    <Route path="/service-available" element={<ServiceAvailable />} />
                    <Route path="/service-unavailable" element={<ServiceUnavailable />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;