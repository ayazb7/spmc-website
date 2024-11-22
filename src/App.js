import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CareForAdults from './pages/Services/CareForAdults/CareForAdults'; 
import DisabilitiesSupport from './pages/Services/DisabilitiesSupport/DisabilitiesSupport';
import LiveInCare from './pages/Services/LiveInCare/LiveInCare';
import AfterHospitalCare from './pages/Services/AfterHospitalCare/AfterHospitalCare';

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
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;