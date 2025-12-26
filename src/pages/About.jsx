import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Handshake, ShieldCheck, PieChart, Briefcase, Globe } from 'lucide-react';
import AboutImage from '../assets/images/hero/hero_port_operations.png'; // Placeholder image
import './About.css';

const About = () => {
    const { t } = useTranslation();

    const values = [
        { id: 'partnership', icon: <Handshake size={32} />, label: t('about.values.items.partnership') },
        { id: 'quality', icon: <ShieldCheck size={32} />, label: t('about.values.items.quality') },
        { id: 'diversification', icon: <PieChart size={32} />, label: t('about.values.items.diversification') },
        { id: 'expertise', icon: <Briefcase size={32} />, label: t('about.values.items.expertise') },
        { id: 'global', icon: <Globe size={32} />, label: t('about.values.items.global') },
    ];

    return (
        <div className="about-page">
            {/* Intro Section */}
            <section className="about-intro">
                <div className="container">
                    <h1>{t('about.title')}</h1>
                    <div className="about-content-grid">
                        <div className="about-text-col">
                            <p className="about-headline">
                                <Trans i18nKey="about.intro.headline" />
                            </p>
                            <div className="about-desc-wrapper">
                                <p className="about-desc">{t('about.intro.desc_1')}</p>
                                <p className="about-desc">{t('about.intro.desc_2')}</p>
                            </div>
                        </div>
                        <div className="about-image-col">
                            <img src={AboutImage} alt="NBB Corporate" className="about-main-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Summary */}
            <section className="about-business">
                <div className="container">
                    <div className="business-grid">
                        <div className="business-card">
                            <h3>{t('about.business.trading.title')}</h3>
                            <p>{t('about.business.trading.desc')}</p>
                        </div>
                        <div className="business-card">
                            <h3>{t('about.business.logistics.title')}</h3>
                            <p>{t('about.business.logistics.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="about-values">
                <div className="container">
                    <h2 className="heading-lg">{t('about.values.title')}</h2>
                    <div className="values-grid">
                        {values.map((val) => (
                            <div key={val.id} className="value-item">
                                <div className="value-icon-wrapper">
                                    {val.icon}
                                </div>
                                <span className="value-text">{val.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Banner */}
            <section className="about-vision">
                <div className="container">
                    <h2>{t('about.vision')}</h2>
                </div>
            </section>
        </div>
    );
};

export default About;
