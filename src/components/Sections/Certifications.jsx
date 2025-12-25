import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, ShieldCheck, TrendingUp, Globe } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const { t } = useTranslation();

    const certs = [
        { id: 'ctc', icon: <TrendingUp size={40} />, title: t('home.cert.items.ctc') },
        { id: 'export_tower', icon: <Award size={40} />, title: t('home.cert.items.export_tower') },
        { id: 'motie', icon: <Globe size={40} />, title: t('home.cert.items.motie') },
        { id: 'kita', icon: <ShieldCheck size={40} />, title: t('home.cert.items.kita') },
    ];

    return (
        <section className="section certifications-section">
            <div className="container">
                <h2 className="heading-lg text-center">{t('home.section_title')}</h2>
                <div className="cert-grid">
                    {certs.map((cert) => (
                        <div key={cert.id} className="cert-card">
                            <div className="cert-icon">
                                {cert.icon}
                            </div>
                            <h3 className="cert-title">{cert.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
