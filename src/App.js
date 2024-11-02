import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CareForAdults from './pages/Services/CareForAdults/CareForAdults'; 

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/care-for-adults" element={<CareForAdults />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;