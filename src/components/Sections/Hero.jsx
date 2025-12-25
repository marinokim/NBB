import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

import heroSteelCoils from '../../assets/images/hero/hero_steel_coils.png';
import heroContainerShip from '../../assets/images/hero/hero_container_ship.png';
import heroSteelBeams from '../../assets/images/hero/hero_steel_beams.png';
import heroPolishedSteel from '../../assets/images/hero/hero_polished_steel.png';
import heroPortOperations from '../../assets/images/hero/hero_port_operations.png';
import heroGinseng from '../../assets/images/hero/hero_ginseng.png';
import heroStrawberry from '../../assets/images/hero/hero_strawberry.png';

const images = [
    heroSteelCoils,
    heroContainerShip,
    heroSteelBeams,
    heroGinseng, // Added K-Product
    heroPolishedSteel,
    heroStrawberry, // Added K-Product
    heroPortOperations
];

const Hero = () => {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`hero-bg ${index === currentImage ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}
            <div className="hero-overlay" />
            <div className="container hero-content">
                <h1 className="hero-title">{t('home.hero.title')}</h1>
                <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
                <p className="hero-description">{t('home.visual_copy')}</p>
            </div>
        </section>
    );
};

export default Hero;
