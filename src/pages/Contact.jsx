import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container">
                    <h1>{t('contact.title')}</h1>
                </div>
            </div>

            <div className="container">
                <div className="contact-content">

                    {/* Information */}
                    <div className="contact-info-card">
                        <div className="info-group">
                            <h3><MapPin size={20} /> {t('contact.address.label')}</h3>
                            <p>{t('contact.address.value')}</p>
                        </div>

                        <div className="info-group">
                            <h3><Mail size={20} /> Email</h3>
                            <div className="email-list">
                                <div className="email-item">
                                    <span className="email-label">{t('contact.email.trading')}</span>
                                    <a href="mailto:hschoi@nbbintl.com" className="email-addr">hschoi@nbbintl.com</a>
                                </div>
                                <div className="email-item">
                                    <span className="email-label">{t('contact.email.logistics')}</span>
                                    <a href="mailto:nbbl@nbblogistics.com" className="email-addr">nbbl@nbblogistics.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder for Phone if needed */}
                        {/* <div className="info-group">
                            <h3><Phone size={20} /> Phone</h3>
                            <p>+82 2-1234-5678</p>
                        </div> */}
                    </div>

                    {/* Google Map */}
                    <div className="map-frame">
                        {/* Embedding Donghyun Building location query */}
                        <iframe
                            title="NBB Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.071247071987!2d127.05437877636603!3d37.506161972054766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca414c568ac8f%3A0xe542b8e5c8e39265!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrjbztlqTrnozroZwgNzdjIOyYgxTE5NS0xNiwg64-Z7ZiE67mM65Sp!5e0!3m2!1sko!2skr!4v1703491234567!5m2!1sko!2skr"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
