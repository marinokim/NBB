import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>NBB Networks</h3>
                        <p>{t('footer.slogan')}</p>
                    </div>
                    <div className="footer-info">
                        <p>{t('footer.address')}</p>
                        <p>Email: hschoi@nbbintl.com | nbbl@nbblogistics.com</p>
                        <p className="copyright">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
