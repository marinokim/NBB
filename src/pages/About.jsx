import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Handshake, ShieldCheck, PieChart, Briefcase, Globe } from 'lucide-react';
import AboutImage from '../assets/images/hero/hero_port_operations.png'; // Placeholder image
import './About.css';

const About = () => {
    const { t } = useTranslation();

    const values = [
        { id: 'partnership', icon: <Handshake size={32} />, label: t('about.values.items.partnership.title'), desc: t('about.values.items.partnership.desc') },
        { id: 'quality', icon: <ShieldCheck size={32} />, label: t('about.values.items.quality.title'), desc: t('about.values.items.quality.desc') },
        { id: 'diversification', icon: <PieChart size={32} />, label: t('about.values.items.diversification.title'), desc: t('about.values.items.diversification.desc') },
        { id: 'expertise', icon: <Briefcase size={32} />, label: t('about.values.items.expertise.title'), desc: t('about.values.items.expertise.desc') },
        { id: 'customer', icon: <Globe size={32} />, label: t('about.values.items.customer.title'), desc: t('about.values.items.customer.desc') }, // Changed icon to Globe as placeholder
    ];

    return (
        <div className="about-page">
            {/* Intro Section */}
            <section className="about-intro">
                <div className="container">
                    <h1>{t('about.title')}</h1>
                    <div className="about-content-grid">
                        <div className="about-text-col fade-in-up">
                            <p className="about-headline">
                                <Trans i18nKey="about.intro.headline" />
                            </p>
                            <div className="about-desc-wrapper">
                                <p className="about-desc">{t('about.intro.desc_1')}</p>
                                <p className="about-desc">{t('about.intro.desc_2')}</p>
                            </div>
                        </div>
                        <div className="about-image-col fade-in-up delay-100">
                            <img src={AboutImage} alt="NBB Corporate" className="about-main-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Summary */}
            <section className="about-business">
                <div className="container">
                    <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '60px' }}>{t('about.business.title')}</h2>
                    <div className="business-grid">
                        {/* Trading */}
                        <div className="business-card fade-in-up delay-200">
                            <h3>{t('about.business.trading.title')}</h3>
                            <p className="business-headline">"{t('about.business.trading.headline')}"</p>
                            <ul className="business-list">
                                {(t('about.business.trading.items', { returnObjects: true }) || []).map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong> : {item.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Logistics */}
                        <div className="business-card fade-in-up delay-300">
                            <h3>{t('about.business.logistics.title')}</h3>
                            <p className="business-headline">"{t('about.business.logistics.headline')}"</p>
                            <ul className="business-list">
                                {(t('about.business.logistics.items', { returnObjects: true }) || []).map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong> : {item.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="about-values">
                <div className="container">
                    <h2 className="heading-lg">{t('about.values.title')}</h2>
                    <div className="values-grid">
                        {values.map((val, index) => (
                            <div key={val.id} className={`value-item fade-in-up delay-${(index + 2) * 100}`}>
                                <div className="value-icon-wrapper">
                                    {val.icon}
                                </div>
                                <span className="value-text">{val.label}</span>
                                <p className="value-desc">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Banner */}
            <section className="about-vision">
                <div className="container">
                    <h2>{t('about.vision.title')}</h2>
                    <p className="vision-desc">{t('about.vision.desc')}</p>
                </div>
            </section>
        </div>
    );
};

export default About;
