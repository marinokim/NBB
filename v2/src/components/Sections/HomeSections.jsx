import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Globe, Truck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HomeSections.css';

// About Section Component
export const AboutSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section-about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h5 className="section-subtitle">{t('home.about_summary.since', 'Since 2005')}</h5>
                        <h2 className="section-title">{t('home.about_summary.title', 'Bridging Global Markets with Trust')}</h2>
                        <p className="section-text">
                            {t('home.about_summary.desc', 'NBB Networks has been a pioneer in connecting international markets through strategic trading and efficient logistics. Our mission is to simplify global commerce for our partners.')}
                        </p>
                        <Link to="/about" className="btn-text">
                            {t('home.about_summary.btn', 'Our Story')} <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">{t('home.about_summary.stats.exp', 'Years Experience')}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">{t('home.about_summary.stats.partners', 'Global Partners')}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100M+</span>
                            <span className="stat-label">{t('home.about_summary.stats.volume', 'Trade Volume')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Business Section Component
export const BusinessSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section-business">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('home.business_summary.title', 'Our Expertise')}</h2>
                    <p className="section-desc">{t('home.business_summary.desc', 'Comprehensive solutions for the modern supply chain.')}</p>
                </div>

                <div className="business-cards">
                    <div className="business-card">
                        <div className="card-icon"><TrendingUp size={32} /></div>
                        <h3>{t('home.business_summary.trading.title', 'Global Trading')}</h3>
                        <p>{t('home.business_summary.trading.desc', 'Sourcing and distributing premium steel products ("NBB Steel") and high-quality Korean Ginseng ("Ginseng Khan").')}</p>
                        <Link to="/business?tab=trading" className="card-link">{t('home.business_summary.btn', 'Learn More')}</Link>
                    </div>

                    <div className="business-card">
                        <div className="card-icon"><Truck size={32} /></div>
                        <h3>{t('home.business_summary.logistics.title', 'Logistics')}</h3>
                        <p>{t('home.business_summary.logistics.desc', 'End-to-end logistics monitoring with real-time tracking from port to warehouse.')}</p>
                        <Link to="/business?tab=logistics" className="card-link">{t('home.business_summary.btn', 'Learn More')}</Link>
                    </div>

                    <div className="business-card">
                        <div className="card-icon"><Globe size={32} /></div>
                        <h3>{t('home.business_summary.network.title', 'Network')}</h3>
                        <p>{t('home.business_summary.network.desc', 'A vast network of reliable partners ensuring smooth operations across Asia and beyond.')}</p>
                        <Link to="/network" className="card-link">{t('home.business_summary.btn', 'Learn More')}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
