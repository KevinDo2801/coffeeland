// src/Views/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import FeaturesSection from '../Components/FeaturesSection';
import CafeNewsletter from '../Components/CafeNewsletter';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <div className="cafe-homepage">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <CafeNewsletter />
            <Footer />
        </div>
    );
};

export default HomePage;