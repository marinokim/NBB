import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../Common/LanguageSwitcher';
import './Header.css';

const Header = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <NavLink to="/" className="logo">
                    {/* Logo Placeholder */}
                    <span className="logo-text">NBB Networks</span>
                </NavLink>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.home')}</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.about')}</NavLink></li>
                        <li><NavLink to="/business" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.business')}</NavLink></li>
                        <li><NavLink to="/network" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.network')}</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.contact')}</NavLink></li>
                    </ul>
                    <div className="mobile-only" style={{ marginTop: '20px' }}>
                        <LanguageSwitcher />
                    </div>
                </nav>

                <div className="header-actions">
                    <div className="desktop-only">
                        <LanguageSwitcher />
                    </div>
                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
