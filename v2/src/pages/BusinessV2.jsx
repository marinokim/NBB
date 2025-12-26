import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Truck, Ship, Package, ArrowRight, Handshake, ShieldCheck, Factory, Plane, Train, TrendingUp } from 'lucide-react';
import './BusinessV2.css';
// Reusing images from V1 (or new V2 ones relative to v2/src)
import steelImage from '../assets/images/hero/hero_steel_coils.png';
import ginsengImage from '../assets/images/hero/hero_ginseng.png';
import logisticsImage from '../assets/images/hero/hero_container_ship.png';

const BusinessV2 = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('trading');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab === 'logistics' || tab === 'trading') {
            setActiveTab(tab);
        }
    }, [location]);

    const steelItems = t('business.trading.steel.items', { returnObjects: true });
    const kProducts = t('business.trading.kproduct.items', { returnObjects: true });

    return (
        <div className="page-business-v2">
            <header className="page-header business-header">
                <div className="container">
                    <h1>{t('business.title', 'Our Business')}</h1>
                    <p>{t('business.subtitle', 'Strategic Trading & Advanced Logistics')}</p>
                </div>
            </header>

            {/* Tabs V2 */}
            <div className="business-tabs-v2">
                <div className="container text-center">
                    <button
                        className={`tab-btn-v2 ${activeTab === 'trading' ? 'active' : ''}`}
                        onClick={() => setActiveTab('trading')}
                    >
                        {t('business.tabs.trading', 'Global Trading')}
                    </button>
                    <button
                        className={`tab-btn-v2 ${activeTab === 'logistics' ? 'active' : ''}`}
                        onClick={() => setActiveTab('logistics')}
                    >
                        {t('business.tabs.logistics', 'Logistics Solutions')}
                    </button>
                </div>
            </div>

            <div className="container v2-content-wrapper">

                {/* TRADING TAB */}
                {activeTab === 'trading' && (
                    <div className="fade-in">
                        {/* Philosophy Cards from V1 */}
                        <div className="philosophy-section">
                            <div className="philosophy-card-v2">
                                <div className="ph-icon"><Handshake size={32} /></div>
                                <h4>{t('business.trading.philosophy.partnership', 'Strong Partnerships')}</h4>
                                <p>{t('business.trading.intro.main', 'Building trust through transparent and efficient global trade.')}</p>
                            </div>
                            <div className="philosophy-card-v2">
                                <div className="ph-icon"><ShieldCheck size={32} /></div>
                                <h4>{t('business.trading.philosophy.quality', 'Quality Assurance')}</h4>
                                <p>{t('business.trading.intro.sub', 'Ensuring the highest standards for all materials and products.')}</p>
                            </div>
                        </div>

                        <div className="trading-grid">
                            {/* Steel */}
                            <Link to="/business/steel" className="trading-item-link">
                                <div className="trading-item">
                                    <div className="trading-image">
                                        <img src={steelImage} alt="Steel Trading" />
                                    </div>
                                    <div className="trading-info">
                                        <h3>{t('business.trading.steel.title', 'Steel Trading')}</h3>
                                        <ul className="feature-list">
                                            {Array.isArray(steelItems) && steelItems.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        <span className="read-more-btn">{t('common.read_more', 'Read More')} <ArrowRight size={16} /></span>
                                    </div>
                                </div>
                            </Link>

                            {/* K-Product */}
                            <Link to="/business/k-product" className="trading-item-link">
                                <div className="trading-item reverse">
                                    <div className="trading-image">
                                        <img src={ginsengImage} alt="Ginseng Trading" />
                                    </div>
                                    <div className="trading-info">
                                        <h3>{t('business.trading.kproduct.title', 'K-Products (Ginseng)')}</h3>
                                        <div className="k-product-grid">
                                            {Array.isArray(kProducts) && kProducts.map((item, i) => (
                                                <div key={i} className="k-mini-card">
                                                    <strong>{item.name}</strong>
                                                    <p>{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <span className="read-more-btn">{t('common.read_more', 'Read More')} <ArrowRight size={16} /></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}

                {/* LOGISTICS TAB */}
                {activeTab === 'logistics' && (
                    <div className="fade-in">
                        <div className="logistics-intro text-center">
                            <h3>{t('business.logistics.intro', 'We provide comprehensive logistics solutions including warehousing, customs clearance, and global forwarding.')}</h3>
                        </div>

                        {/* Ported Logistics Flow */}
                        <div className="logistics-flow-v2">
                            <h2 className="v2-section-title">{t('business.logistics.flow_title', 'Process Flow')}</h2>
                            <div className="process-diagram-v2">
                                {/* Step 1: Shipper */}
                                <div className="flow-step">
                                    <div className="flow-icon"><Factory size={28} /></div>
                                    <span>{t('business.logistics.process.shipper', 'Shipper')}</span>
                                </div>
                                <div className="p-arrow"><ArrowRight size={20} /></div>

                                {/* Step 2: Inland */}
                                <div className="flow-step">
                                    <div className="flow-icon"><Truck size={28} /></div>
                                    <span>{t('business.logistics.process.inland', 'Inland')}</span>
                                </div>
                                <div className="p-arrow"><ArrowRight size={20} /></div>

                                {/* Step 3: CFS */}
                                <div className="flow-step">
                                    <div className="flow-icon"><Package size={28} /></div>
                                    <span>{t('business.logistics.process.cfs', 'CFS')}</span>
                                </div>

                                {/* Branch Split */}
                                <div className="p-branch-arrows">
                                    <div className="p-arrow-up"></div>
                                    <div className="p-arrow-mid"></div>
                                    <div className="p-arrow-down"></div>
                                </div>

                                {/* Middle Column: Air / Ocean / Rail */}
                                <div className="p-middle-col">
                                    <div className="p-mid-step">
                                        <div className="flow-icon plane"><Plane size={20} /></div>
                                        <span className="p-label-sm">{t('business.logistics.process.air', 'Air')}</span>
                                    </div>
                                    <div className="p-mid-step">
                                        <div className="flow-icon ship"><Ship size={20} /></div>
                                        <span className="p-label-sm">{t('business.logistics.process.ocean', 'Ocean')}</span>
                                    </div>
                                    <div className="p-mid-step">
                                        <div className="flow-icon train"><Train size={20} /></div>
                                        <span className="p-label-sm">{t('business.logistics.process.rail', 'Rail')}</span>
                                    </div>
                                </div>

                                {/* Branch Merge */}
                                <div className="p-branch-arrows rotate-180">
                                    <div className="p-arrow-up"></div>
                                    <div className="p-arrow-mid"></div>
                                    <div className="p-arrow-down"></div>
                                </div>

                                {/* Step 5: CFS */}
                                <div className="flow-step">
                                    <div className="flow-icon"><Package size={28} /></div>
                                    <span>{t('business.logistics.process.cfs', 'CFS')}</span>
                                </div>
                                <div className="p-arrow"><ArrowRight size={20} /></div>

                                {/* Step 6: Consignee */}
                                <div className="flow-step">
                                    <div className="flow-icon success"><Handshake size={28} /></div>
                                    <span>{t('business.logistics.process.consignee', 'Consignee')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Ported Services Table */}
                        <div className="services-table-wrapper">
                            <h3>{t('business.logistics.table.title', 'Service Areas')}</h3>
                            <table className="v2-table">
                                <thead>
                                    <tr>
                                        {Array.isArray(t('business.logistics.table.headers', { returnObjects: true })) &&
                                            t('business.logistics.table.headers', { returnObjects: true }).map((h, i) => (
                                                <th key={i}>{h}</th>
                                            ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(t('business.logistics.table.rows', { returnObjects: true })) &&
                                        t('business.logistics.table.rows', { returnObjects: true }).map((row, i) => (
                                            <tr key={i}>
                                                <td className="svc-name-v2">{row.svc}</td>
                                                <td className="svc-desc-v2">{row.desc}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default BusinessV2;
