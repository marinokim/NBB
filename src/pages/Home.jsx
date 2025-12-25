import React from 'react';
import Hero from '../components/Sections/Hero';
import Certifications from '../components/Sections/Certifications';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Certifications />
        </div>
    );
};

export default Home;
