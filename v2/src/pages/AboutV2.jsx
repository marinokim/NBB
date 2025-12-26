import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Handshake, ShieldCheck, PieChart, Briefcase, Globe, Award } from 'lucide-react';
import './AboutV2.css';

const AboutV2 = () => {
    const { t } = useTranslation();

    // Scroll Animation Logic
    const timelineRef = React.useRef(null);
    const itemRefs = React.useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Animate once
                }
            });
        }, observerOptions);

        itemRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    // Helper to add refs
    const addToRefs = (el) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current.push(el);
        }
    };

    const values = [
        { id: 'partnership', icon: <Handshake size={32} />, label: t('about.values.items.partnership.title', 'Partnership'), desc: t('about.values.items.partnership.desc', 'Building lasting relationships based on trust.') },
        { id: 'quality', icon: <ShieldCheck size={32} />, label: t('about.values.items.quality.title', 'Quality Assurance'), desc: t('about.values.items.quality.desc', 'Delivering only the highest quality products.') },
        { id: 'diversification', icon: <PieChart size={32} />, label: t('about.values.items.diversification.title', 'Diversification'), desc: t('about.values.items.diversification.desc', 'Expanding into new markets and sectors.') },
        { id: 'expertise', icon: <Briefcase size={32} />, label: t('about.values.items.expertise.title', 'Expertise'), desc: t('about.values.items.expertise.desc', 'Leveraging decades of industry experience.') },
        { id: 'customer', icon: <Globe size={32} />, label: t('about.values.items.customer.title', 'Global Reach'), desc: t('about.values.items.customer.desc', 'Serving customers worldwide with efficiency.') },
    ];

    return (
        <div className="page-about-v2">
            <header className="page-header about-header">
                <div className="container">
                    <h1>{t('about.title', 'About NBB Networks')}</h1>
                    <p>{t('about.subtitle', 'Connecting the World, Creating Value')}</p>
                </div>
            </header>

            {/* Intro / Vision Section */}
            <section className="v2-section vision-section">
                <div className="container">
                    <div className="vision-grid">
                        <div className="vision-card">
                            <h3>Mission</h3>
                            <p>{t('about.mission')}</p>
                        </div>
                        <div className="vision-card">
                            <h3>Vision</h3>
                            <p>{t('about.vision.desc')}</p>
                        </div>
                        <div className="vision-card">
                            <h3>Core Values</h3>
                            <p>{t('about.values_summary')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies (Migrated from V1) */}
            <section className="v2-section values-section">
                <div className="container">
                    <h2 className="v2-section-title">{t('about.values.title', 'Core Competencies')}</h2>
                    <div className="values-grid-v2">
                        {values.map((val) => (
                            <div key={val.id} className="value-card-v2">
                                <div className="value-icon-v2">
                                    {val.icon}
                                </div>
                                <span className="value-label-v2">{val.label}</span>
                                <p className="value-desc-v2">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="v2-section history-section">
                <div className="container">
                    <h2 className="v2-section-title">{t('about.history', 'Our Journey')}</h2>
                    <div className="timeline" ref={timelineRef}>
                        <div className="timeline-item" ref={addToRefs}>
                            <div className="year-marker">2005</div>
                            <div className="content">
                                <h3>Company Founded</h3>
                                <p>Established NBB Networks in Seoul, Korea.</p>
                            </div>
                        </div>
                        <div className="timeline-item" ref={addToRefs}>
                            <div className="year-marker">2010</div>
                            <div className="content">
                                <h3>Market Expansion</h3>
                                <p>Expanded steel trading operations to Southeast Asia and Americas.</p>
                            </div>
                        </div>
                        <div className="timeline-item" ref={addToRefs}>
                            <div className="year-marker">2018</div>
                            <div className="content">
                                <h3>Ginseng Brand Launch</h3>
                                <p>Launched "Ginseng Khan" premium brand for global export.</p>
                            </div>
                        </div>
                        <div className="timeline-item" ref={addToRefs}>
                            <div className="year-marker">2023</div>
                            <div className="content">
                                <h3>Logistics Innovation</h3>
                                <p>Integrated smart logistics tracking system for all shipments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Certifications Section */}
            <section className="v2-section cert-section">
                <div className="container">
                    <h2 className="v2-section-title">{t('home.cert.title', 'Proven Excellence')}</h2>
                    <div className="cert-grid">
                        <div className="cert-card">
                            <div className="cert-image-box">
                                <Award size={32} className="opacity-50" />
                                <span className="text-sm mt-2">Cert Image</span>
                            </div>
                            <h3>{t('home.cert.items.ctc', 'Certified Trading Company')}</h3>
                        </div>
                        <div className="cert-card">
                            <div className="cert-image-box">
                                <Award size={32} className="opacity-50" />
                                <span className="text-sm mt-2">Cert Image</span>
                            </div>
                            <h3>{t('home.cert.items.export_tower', 'Export Tower Award')}</h3>
                        </div>
                        <div className="cert-card">
                            <div className="cert-image-box">
                                <ShieldCheck size={32} className="opacity-50" />
                                <span className="text-sm mt-2">Cert Image</span>
                            </div>
                            <h3>{t('home.cert.items.motie', 'MOTIE')}</h3>
                        </div>
                        <div className="cert-card">
                            <div className="cert-image-box">
                                <Briefcase size={32} className="opacity-50" />
                                <span className="text-sm mt-2">Cert Image</span>
                            </div>
                            <h3>{t('home.cert.items.kita', 'KITA')}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutV2;
