import React from 'react';
import { useTranslation } from 'react-i18next';
import './Network.css';

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

const Network = () => {
    const { t } = useTranslation();
    const [activeRegion, setActiveRegion] = React.useState(null);

    // Coordinates are approximate % for the background map
    // IDs are designed to match region keys for highlighting
    const dots = [
        { id: 'asia', top: '31%', left: '78%', label: t('network.regions.asia') }, // China/Japan
        { id: 'sea', top: '50%', left: '78%', label: t('network.regions.sea') }, // SE Asia
        { id: 'me', top: '40%', left: '60%', label: t('network.regions.me') }, // Middle East
        { id: 'europe', top: '25%', left: '50%', label: t('network.regions.europe') }, // Europe
        { id: 'namerica', top: '28%', left: '20%', label: t('network.regions.namerica') }, // North America
        { id: 'samerica', top: '65%', left: '30%', label: t('network.regions.samerica') }, // South America
        { id: 'others_india', top: '42%', left: '68%', label: t('network.regions.india') }, // India
        { id: 'others_sa', top: '70%', left: '53%', label: t('network.regions.sa') }, // South Africa
    ];

    const tradingLogosList = [
        { src: kg_steel, name: "KG Steel" },
        { src: dk_dongshin, name: "DK Dongshin" },
        { src: dongkuk_cm, name: "Dongkuk CM" },
        { src: seah_cm, name: "SeAH CM", style: { maxHeight: '45px' } },
        { src: hyundai_steel, name: "Hyundai Steel" },
        { src: posco, name: "POSCO", style: { maxWidth: '100%', maxHeight: '90px' } }, // Increased
        { src: posco_steeleon, name: "POSCO Steeleon" },
        { src: hbis, name: "HBIS", style: { maxHeight: '30px' } },
        { src: lianyuan_steel, name: "Lianyuan Steel", style: { maxHeight: '45px' } },
        { src: ansteel, name: "Ansteel" },
        { src: hongji_group, name: "Hongji Group", style: { maxHeight: '50px' } },
        { src: fouhi, name: "Fouhi", style: { maxWidth: '100%', maxHeight: '90px' } }, // Increased
        { src: shinmade, name: "Shinmade", style: { maxWidth: '100%', maxHeight: '90px' } } // Increased
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

    const regionKeys = [
        'asia',
        'sea',
        'me',
        'europe',
        'namerica',
        'samerica',
        'others'
    ];

    const handleRegionClick = (key) => {
        // If clicking the same region, toggle it off
        if (activeRegion === key) {
            setActiveRegion(null);
        } else {
            setActiveRegion(key);
        }
    };

    return (
        <div className="network-page">
            <div className="container">
                <div className="network-intro">
                    <h1>{t('network.title')}</h1>
                    <p className="network-desc">{t('network.desc')}</p>
                </div>

                <div className="map-container">
                    <svg className="network-lines-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {dots.map((dot, i) => (
                            <path
                                key={i}
                                d={`M 81.5 27 Q ${(81.5 + parseFloat(dot.left)) / 2} ${(27 + parseFloat(dot.top)) / 2 - 10} ${parseFloat(dot.left)} ${parseFloat(dot.top)}`}
                                className="network-line"
                                vectorEffect="non-scaling-stroke"
                            />
                        ))}
                    </svg>

                    {/* HQ Dot */}
                    <div
                        className="map-dot hq"
                        style={{ top: '27%', left: '81.5%' }}
                        title="HQ (Seoul, Korea)"
                    >
                        <div className="map-tooltip">HQ (Seoul, Korea)</div>
                    </div>

                    {dots.map((dot, i) => {
                        // Check if this dot belongs to the active region
                        // The 'others' case matches 'others_india' and 'others_sa'
                        // The 'americas' case matches 'americas_n' and 'americas_s'
                        const isActive = activeRegion && dot.id.startsWith(activeRegion);

                        return (
                            <div
                                key={i}
                                className={`map-dot ${isActive ? 'active-region' : ''}`}
                                style={{ top: dot.top, left: dot.left }}
                                title={dot.label}
                            >
                                <div className="map-tooltip">{dot.label}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="region-list">
                    {regionKeys.map((key) => (
                        <button
                            key={key}
                            className={`region-btn ${activeRegion === key ? 'active' : ''}`}
                            onClick={() => handleRegionClick(key)}
                        >
                            {t(`network.regions.${key}`)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="partners-section">
                <div className="container">
                    <h2 className="heading-lg">{t('network.partners.title')}</h2>

                    <div className="partners-category">
                        <h3>{t('network.partners.trading')}</h3>
                        <div className="partners-grid">
                            {tradingLogosList.map((partner, i) => (
                                <div key={i} className="partner-logo-container">
                                    <img
                                        src={partner.src}
                                        alt={partner.name}
                                        className="partner-logo-img"
                                        style={partner.style}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="partners-category">
                        <h3>{t('network.partners.logistics')}</h3>
                        <div className="partners-grid">
                            {logisticsPartners.map((p, i) => (
                                <a
                                    key={i}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="logo-link"
                                >
                                    <img
                                        src={p.src}
                                        alt={p.name}
                                        className="partner-logo-img"
                                        style={{ maxHeight: '75px' }} // Increased size for visibility
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Network;
