import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroV2.css';

// Import images directly to ensure they work with Vite
import hero1 from '../../assets/images/hero/hero_container_ship.png';
import hero2 from '../../assets/images/hero/hero_steel_coils.png';
import hero3 from '../../assets/images/hero/hero_port_operations.png';

const HeroV2 = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: hero1,
            title: t('home.hero.slides.trading.title', "Global Trading Partner"),
            subtitle: t('home.hero.slides.trading.subtitle', "Connecting markets, delivering value across borders."),
            link: "/business"
        },
        {
            id: 2,
            image: hero2,
            title: t('home.hero.slides.logistics.title', "Advanced Logistics"),
            subtitle: t('home.hero.slides.logistics.subtitle', "Seamless supply chain solutions for your business."),
            link: "/business?tab=logistics"
        },
        {
            id: 3,
            image: hero3,
            title: t('home.hero.slides.main.title', "NBB Networks"),
            subtitle: t('home.hero.slides.main.subtitle', "Your trusted partner in global commerce."),
            link: "/about"
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="hero-v2">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-overlay"></div>
                    <div className="container hero-content">
                        <h1 className="hero-title">{slide.title}</h1>
                        <p className="hero-subtitle">{slide.subtitle}</p>
                        <Link to={slide.link} className="hero-btn">
                            {t('common.learnMore', 'Learn More')} <ChevronRight size={20} />
                        </Link>
                    </div>
                </div>
            ))}

            <div className="hero-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroV2;
