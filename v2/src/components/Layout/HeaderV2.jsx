import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './HeaderV2.css';

const HeaderV2 = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const current = i18n.language;
        let nextLang = 'ko';
        if (current === 'ko') nextLang = 'en';
        else if (current === 'en') nextLang = 'zh';
        else nextLang = 'ko';

        i18n.changeLanguage(nextLang);
    };

    return (
        <header className={`header-v2 ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    {/* Assuming logo exists, otherwise text fallback */}
                    <span className="logo-text">NBB Networks</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <Link to="/">{t('header.nav.home', 'Home')}</Link>
                    <Link to="/business">{t('header.nav.business', 'Business')}</Link>
                    <Link to="/network">{t('header.nav.network', 'Network')}</Link>
                    <Link to="/about">{t('header.nav.about', 'About')}</Link>
                    <Link to="/contact">{t('header.nav.contact', 'Contact')}</Link>

                    <button className="lang-btn" onClick={toggleLanguage}>
                        <Globe size={18} />
                        <span>{i18n.language === 'zh' ? 'ZH' : (i18n.language === 'en' ? 'EN' : 'KO')}</span>
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.home', 'Home')}</Link>
                    <Link to="/business" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.business', 'Business')}</Link>
                    <Link to="/network" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.network', 'Network')}</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.about', 'About')}</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.contact', 'Contact')}</Link>
                    <button onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}>
                        <Globe size={18} /> {i18n.language === 'zh' ? 'Chinese' : (i18n.language === 'en' ? 'English' : 'Korean')}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeaderV2;
