import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone } from 'lucide-react';
import './ContactV2.css';

const ContactV2 = () => {
    const { t } = useTranslation();

    return (
        <div className="page-contact-v2">
            <header className="page-header contact-header">
                <div className="container">
                    <h1>{t('contact.title', 'Contact Us')}</h1>
                    <p>{t('contact.subtitle', 'Get in touch with our global team')}</p>
                </div>
            </header>

            <div className="container contact-wrapper-v2">
                <div className="contact-grid">
                    {/* Information Card */}
                    <div className="contact-card info-card">
                        <div className="info-section">
                            <div className="icon-box">
                                <MapPin size={24} />
                            </div>
                            <div className="info-text">
                                <h3>{t('contact.address.label', 'Headquarters')}</h3>
                                <p>{t('contact.address.value', '77, Dongmak-ro, Mapo-gu, Seoul, Republic of Korea')}</p>
                            </div>
                        </div>

                        <div className="info-section">
                            <div className="icon-box">
                                <Mail size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <div className="email-group">
                                    <div className="email-row">
                                        <span className="label">{t('contact.email.trading', 'Trading')}</span>
                                        <a href="mailto:hschoi@nbbintl.com">hschoi@nbbintl.com</a>
                                    </div>
                                    <div className="email-row">
                                        <span className="label">{t('contact.email.logistics', 'Logistics')}</span>
                                        <a href="mailto:nbbl@nbblogistics.com">nbbl@nbblogistics.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Optional Phone Section if needed later */}
                        {/* <div className="info-section">
                            <div className="icon-box">
                                <Phone size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Phone</h3>
                                <p>+82 2-1234-5678</p>
                            </div>
                        </div> */}
                    </div>

                    {/* Map Card */}
                    <div className="contact-card map-card">
                        <h3 className="v2-section-title" style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-6)', textAlign: 'left', transform: 'none', left: 'auto', display: 'block' }}>{t('contact.location', 'Location')}</h3>
                        <div className="map-frame-v2">
                            <iframe
                                title="NBB Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.071247071987!2d127.05437877636603!3d37.506161972054766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca414c568ac8f%3A0xe542b8e5c8e39265!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrjbztlqTrnozroZwgNzdjIOyYgxTE5NS0xNiwg64-Z7ZiE67mM65Sp!5e0!3m2!1sko!2skr!4v1703491234567!5m2!1sko!2skr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactV2;
