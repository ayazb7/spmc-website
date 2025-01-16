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
import LifestyleServices from './pages/Lifestyle/Services/LifestyleServices';

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

                    <Route path="/lifestyle-services" element={<LifestyleServices />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;