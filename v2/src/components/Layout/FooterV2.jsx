import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './FooterV2.css';

const FooterV2 = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-v2">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">NBB Networks</h2>
                        <p className="footer-desc">
                            Global Trading & Logistics Partner
                        </p>
                        <div className="footer-info mt-4">
                            <span>{t('footer.address', '8Fl, Donghyun Bldg., 11-16 Teheran-ro 77-gil, Gangnam-gu, Seoul, 06159, Republic of Korea')}</span>
                            <span className="footer-divider">|</span>
                            <span>Tel: +82-2-554-0550</span>
                            <span className="footer-divider">|</span>
                            <span>Fax: +82-2-554-0551</span>
                            <span className="footer-divider">|</span>
                            <span>{t('footer.email_label', 'Email')}: hschoi@nbbintl.com / nbbl@nbblogistics.com</span>
                        </div>
                        <p className="footer-copyright mt-2">{t('footer.copyright', { year: currentYear, defaultValue: `© ${currentYear} NBB Networks. All rights reserved.` })}</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h3>{t('footer.company', 'Company')}</h3>
                            <ul>
                                <li><Link to="/about">{t('header.nav.about', 'About Us')}</Link></li>
                                <li><Link to="/business">{t('header.nav.business', 'Business')}</Link></li>
                                <li><Link to="/network">{t('header.nav.network', 'Network')}</Link></li>
                                <li><Link to="/contact">{t('header.nav.contact', 'Contact')}</Link></li>
                            </ul>
                        </div>
                        <div className="link-group">
                            <h3>{t('footer.legal', 'Legal')}</h3>
                            <ul>
                                <li><a href="#">{t('footer.links.privacy', 'Privacy Policy')}</a></li>
                                <li><a href="#">{t('footer.links.terms', 'Terms of Service')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright moved inside brand for alignment */}
            </div>
        </footer>
    );
};

export default FooterV2;
