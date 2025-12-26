import React from 'react';
import HeroV2 from '../components/Sections/HeroV2';
import { AboutSection, BusinessSection } from '../components/Sections/HomeSections';

const HomeV2 = () => {
    return (
        <div className="page-home">
            <HeroV2 />
            <AboutSection />
            <BusinessSection />
        </div>
    );
};

export default HomeV2;
