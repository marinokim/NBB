import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NetworkV2.css';

// Import Partner Logos (Reusing paths from V1 assets)
// Note: We need to ensure these paths are correct relative to v2/src
import kg_steel from '../assets/images/partners/manual_logos/kg_steel.png';
import dk_dongshin from '../assets/images/partners/manual_logos/dk_dongshin.png';
import dongkuk_cm from '../assets/images/partners/manual_logos/dongkuk_cm.png';
import seah_cm from '../assets/images/partners/manual_logos/seah_cm.png';
import hyundai_steel from '../assets/images/partners/manual_logos/hyundai_steel.png';
import posco from '../assets/images/partners/manual_logos/posco.png';
import posco_steeleon from '../assets/images/partners/manual_logos/posco_steeleon.png';
import hbis from '../assets/images/partners/manual_logos/hbis.png';
import lianyuan_steel from '../assets/images/partners/manual_logos/lianyuan_steel.png';
import ansteel from '../assets/images/partners/manual_logos/ansteel.png';
import hongji_group from '../assets/images/partners/manual_logos/hongji_group.png';
import fouhi from '../assets/images/partners/manual_logos/fouhi.png';
import shinmade from '../assets/images/partners/manual_logos/shinmade.png';

import sm_line from '../assets/images/partners/logistics/sm_line.png';
import hmm from '../assets/images/partners/logistics/hmm.png';
import yml from '../assets/images/partners/logistics/yml.png';
import one from '../assets/images/partners/logistics/one.svg';
import maersk from '../assets/images/partners/logistics/maersk.png';
import sea_lead from '../assets/images/partners/logistics/sea_lead.png';
import zim from '../assets/images/partners/logistics/zim.png';
import msc from '../assets/images/partners/logistics/msc.svg';
import cma_cgm from '../assets/images/partners/logistics/cma_cgm.png';
import weidong from '../assets/images/partners/logistics/weidong.png';
import ck_line from '../assets/images/partners/logistics/ck_line.png';
import panstar from '../assets/images/partners/logistics/panstar.png';
import sinokor from '../assets/images/partners/logistics/sinokor.png';
import pan_ocean from '../assets/images/partners/logistics/pan_ocean.png';
import kmtc from '../assets/images/partners/logistics/kmtc.webp';
import cosco from '../assets/images/partners/logistics/cosco.png';
import evergreen from '../assets/images/partners/logistics/evergreen.png';
import heung_a from '../assets/images/partners/logistics/heung_a.png';


const NetworkV2 = () => {
    const { t } = useTranslation();
    const [activeRegion, setActiveRegion] = useState(null);

    // Map Dots Configuration (Same as V1)
    const dots = [
        { id: 'asia', top: '31%', left: '78%', label: t('network.regions.asia', 'China / Japan') },
        { id: 'sea', top: '50%', left: '78%', label: t('network.regions.sea', 'Southeast Asia') },
        { id: 'me', top: '40%', left: '60%', label: t('network.regions.me', 'Middle East') },
        { id: 'europe', top: '25%', left: '50%', label: t('network.regions.europe', 'Europe') },
        { id: 'namerica', top: '28%', left: '20%', label: t('network.regions.namerica', 'North America') },
        { id: 'samerica', top: '65%', left: '30%', label: t('network.regions.samerica', 'South America') },
        { id: 'others_india', top: '42%', left: '68%', label: t('network.regions.india', 'India') }, // grouped under others
        { id: 'others_sa', top: '70%', left: '53%', label: t('network.regions.sa', 'South Africa') }, // grouped under others
    ];

    const tradingLogosList = [
        { src: kg_steel, name: "KG Steel" },
        { src: dk_dongshin, name: "DK Dongshin" },
        { src: dongkuk_cm, name: "Dongkuk CM" },
        { src: seah_cm, name: "SeAH CM", style: { maxHeight: '45px' } },
        { src: hyundai_steel, name: "Hyundai Steel" },
        { src: posco, name: "POSCO", style: { maxWidth: '100%', maxHeight: '90px' } },
        { src: posco_steeleon, name: "POSCO Steeleon" },
        { src: hbis, name: "HBIS", style: { maxHeight: '30px' } },
        { src: lianyuan_steel, name: "Lianyuan Steel", style: { maxHeight: '45px' } },
        { src: ansteel, name: "Ansteel" },
        { src: hongji_group, name: "Hongji Group", style: { maxHeight: '50px' } },
        { src: fouhi, name: "Fouhi", style: { maxWidth: '100%', maxHeight: '90px' } },
        { src: shinmade, name: "Shinmade", style: { maxWidth: '100%', maxHeight: '90px' } }
    ];

    const logisticsPartners = [
        { name: "SM Line", url: "https://www.smlines.com", src: sm_line },
        { name: "HMM", url: "https://www.hmm21.com", src: hmm },
        { name: "YML", url: "http://www.yml.co.kr", src: yml },
        { name: "ONE", url: "https://www.one-line.com", src: one },
        { name: "Maersk", url: "https://www.maersk.com", src: maersk },
        { name: "Sea Lead", url: "https://www.sea-lead.com", src: sea_lead },
        { name: "ZIM", url: "https://www.zim.com", src: zim },
        { name: "MSC", url: "https://www.mymsc.com", src: msc },
        { name: "CMA CGM", url: "https://www.cma-cgm.com", src: cma_cgm },
        { name: "Weidong", url: "https://cargo.weidong.com", src: weidong },
        { name: "CK Line", url: "https://es.ckline.co.kr", src: ck_line },
        { name: "PanStar", url: "https://cargo.panstar.co.kr", src: panstar },
        { name: "Sinokor", url: "https://ebiz.sinokor.co.kr", src: sinokor },
        { name: "Pan Ocean", url: "https://www.panocean.com", src: pan_ocean },
        { name: "KMTC", url: "https://www.ekmtc.com", src: kmtc },
        { name: "COSCO", url: "http://lines.coscoshipping.com", src: cosco },
        { name: "Evergreen", url: "https://www.evergreen-marine.com", src: evergreen },
        { name: "Heung-A", url: "http://www.heung-a.com", src: heung_a }
    ];

    const regionKeys = ['asia', 'sea', 'me', 'europe', 'namerica', 'samerica', 'others'];

    const handleRegionClick = (key) => {
        setActiveRegion(activeRegion === key ? null : key);
    };

    return (
        <div className="page-network-v2">
            <header className="page-header network-header">
                <div className="container">
                    <h1>{t('network.title', 'Global Network')}</h1>
                    <p>{t('network.desc', 'Connecting businesses across continents.')}</p>
                </div>
            </header>

            <section className="v2-section map-section">
                <div className="container">
                    {/* Map Container */}
                    <div className="map-container-v2">
                        {/* Background Map Image is set via CSS or SVG */}
                        <div className="world-map-bg"></div>

                        {/* Connecting Lines SVG */}
                        <svg className="network-lines-svg-v2" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {dots.map((dot, i) => (
                                <path
                                    key={i}
                                    d={`M 81.5 27 Q ${(81.5 + parseFloat(dot.left)) / 2} ${(27 + parseFloat(dot.top)) / 2 - 10} ${parseFloat(dot.left)} ${parseFloat(dot.top)}`}
                                    className="network-line-v2"
                                    vectorEffect="non-scaling-stroke"
                                />
                            ))}
                        </svg>

                        {/* HQ Dot */}
                        <div className="map-dot-v2 hq" style={{ top: '27%', left: '81.5%' }}>
                            <div className="map-tooltip-v2">HQ (Seoul)</div>
                        </div>

                        {/* Region Dots */}
                        {dots.map((dot, i) => {
                            const isActive = activeRegion && dot.id.startsWith(activeRegion);
                            return (
                                <div
                                    key={i}
                                    className={`map-dot-v2 ${isActive ? 'active' : ''}`}
                                    style={{ top: dot.top, left: dot.left }}
                                    title={dot.label}
                                    onClick={() => handleRegionClick(dot.id.split('_')[0])} // Simplified click handler to match group
                                >
                                    <div className="map-tooltip-v2">{dot.label}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Region Filter Buttons */}
                    <div className="region-filter-v2">
                        {regionKeys.map((key) => (
                            <button
                                key={key}
                                className={`region-btn-v2 ${activeRegion === key ? 'active' : ''}`}
                                onClick={() => handleRegionClick(key)}
                            >
                                {t(`network.regions.${key}`, key.toUpperCase())}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="v2-section partners-section-v2">
                <div className="container">
                    <h2 className="v2-section-title">{t('network.partners.title', 'Our Partners')}</h2>

                    <div className="partner-group">
                        <h3 className="v2-section-title" style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-8)' }}>{t('network.partners.trading', 'Trading Partners')}</h3>
                        <div className="partners-grid-v2">
                            {tradingLogosList.map((partner, i) => (
                                <div key={i} className="partner-card-v2">
                                    <img src={partner.src} alt={partner.name} style={partner.style} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="partner-group">
                        <h3 className="v2-section-title" style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-8)' }}>{t('network.partners.logistics', 'Logistics Partners')}</h3>
                        <div className="partners-grid-v2">
                            {logisticsPartners.map((p, i) => (
                                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="partner-card-v2 link">
                                    <img src={p.src} alt={p.name} style={{ maxHeight: '60px' }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NetworkV2;
