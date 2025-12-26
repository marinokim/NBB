import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Truck, Ship, Package, ArrowRight, Handshake, ShieldCheck, Factory, Plane, Train } from 'lucide-react';
import './Business.css';

const Business = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('trading'); // 'trading' or 'logistics'

    const kProducts = t('business.trading.kproduct.items', { returnObjects: true });
    const steelItems = t('business.trading.steel.items', { returnObjects: true });

    return (
        <div className="business-page">
            {/* Tabs */}
            <div className="business-tabs">
                <div className="container tabs-container">
                    <button
                        className={`tab-btn ${activeTab === 'trading' ? 'active' : ''}`}
                        onClick={() => setActiveTab('trading')}
                    >
                        {t('business.tabs.trading')}
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'logistics' ? 'active' : ''}`}
                        onClick={() => setActiveTab('logistics')}
                    >
                        {t('business.tabs.logistics')}
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="container business-content">

                {/* TRADING SECTION */}
                {activeTab === 'trading' && (
                    <div className="trading-section fade-in">
                        <div className="section-header">
                            <h2>{t('business.trading.title')}</h2>
                            {/* <p>{t('business.trading.desc')}</p> */}
                        </div>

                        {/* Intro Box */}
                        <div className="trading-intro-box">
                            <h3 className="intro-title">Global Trading & Logistics Partner</h3>
                            <p className="intro-main">{t('business.trading.intro.main')}</p>
                            <div className="intro-divider"></div>
                            <p className="intro-sub">{t('business.trading.intro.sub')}</p>
                        </div>

                        {/* Philosophy Cards */}
                        <div className="philosophy-grid">
                            <div className="philosophy-card">
                                <div className="ph-icon"><Handshake size={32} /></div>
                                <h4>{t('business.trading.philosophy.partnership')}</h4>
                            </div>
                            <div className="philosophy-card">
                                <div className="ph-icon"><ShieldCheck size={32} /></div>
                                <h4>{t('business.trading.philosophy.quality')}</h4>
                            </div>
                        </div>

                        <div className="trading-grid">
                            {/* Steel */}
                            <div className="product-category">
                                <h3>{t('business.trading.steel.title')}</h3>
                                <div className="steel-list-wrapper">
                                    <ul className="product-list">
                                        {Array.isArray(steelItems) && steelItems.slice(0, 5).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <Link to="/business/steel" className="text-link">
                                    {t('business.trading.view_details', 'View Details')} <ArrowRight size={16} />
                                </Link>
                            </div>

                            {/* K-Product */}
                            <div className="product-category">
                                <h3>{t('business.trading.kproduct.title')}</h3>
                                <div className="k-product-grid">
                                    {Array.isArray(kProducts) && kProducts.slice(0, 3).map((item, i) => (
                                        <div key={i} className="k-item">
                                            {/* Placeholder images for K-Products would go here */}
                                            <div className="k-item-content">
                                                <h4>{item.name}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/business/k-product" className="text-link">
                                    {t('business.trading.view_details', 'View Details')} <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* LOGISTICS SECTION */}
                {activeTab === 'logistics' && (
                    <div className="logistics-section fade-in">
                        <div className="section-header">
                            <h2>{t('business.logistics.title')}</h2>
                            {/* <p>{t('business.logistics.desc')}</p> */}
                        </div>

                        {/* Logistics Intro */}
                        <div className="logistics-intro-box">
                            <p>{t('business.logistics.intro')}</p>
                        </div>

                        {/* Animated Flow */}
                        {/* Animated Flow - Redesigned */}
                        <div className="logistics-flow">
                            <h3 style={{ marginBottom: '40px' }}>{t('business.logistics.flow_title')}</h3>

                            <div className="process-diagram">
                                {/* Step 1: Shipper */}
                                <div className="p-step">
                                    <div className="p-icon"><Factory size={28} /></div>
                                    <span className="p-label">{t('business.logistics.process.shipper')}</span>
                                </div>
                                <div className="p-arrow"><ArrowRight size={20} /></div>

                                {/* Step 2: Inland */}
                                <div className="p-step">
                                    <div className="p-icon"><Truck size={28} /></div>
                                    <span className="p-label">{t('business.logistics.process.inland')}</span>
                                </div>
                                <div className="p-arrow"><ArrowRight size={20} /></div>

                                {/* Step 3: CFS */}
                                <div className="p-step">
                                    <div className="p-icon"><Package size={28} /></div>
                                    <span className="p-label">{t('business.logistics.process.cfs')}</span>
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
                                        <div className="p-icon plane"><Plane size={24} /></div>
                                        <span className="p-label-sm">{t('business.logistics.process.air')}</span>
                                    </div>
                                    <div className="p-mid-step">
                                        <div className="p-icon ship"><Ship size={24} /></div>
                                        <span className="p-label-sm">{t('business.logistics.process.ocean')}</span>
                                    </div>
                                    <div className="p-mid-step">
                                        <div className="p-icon train"><Train size={24} /></div>
                                        <span className="p-label-sm">{t('business.logistics.process.rail')}</span>
                                    </div>
                                </div>

                                {/* Branch Merge */}
                                <div className="p-branch-arrows rotate-180">
                                    <div className="p-arrow-up"></div>
                                    <div className="p-arrow-mid"></div>
                                    <div className="p-arrow-down"></div>
                                </div>

                                {/* Step 5: CFS */}
                                <div className="p-step">
                                    <div className="p-icon"><Package size={28} /></div>
                                    <span className="p-label">{t('business.logistics.process.cfs')}</span>
                                </div>
                                <div className="p-arrow"><ArrowRight size={20} /></div>

                                {/* Step 6: Consignee */}
                                <div className="p-step">
                                    <div className="p-icon success"><Handshake size={28} /></div>
                                    <span className="p-label">{t('business.logistics.process.consignee')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Services Table */}
                        <div className="services-table-container">
                            <h3>{t('business.logistics.table.title')}</h3>
                            <table className="services-table">
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
                                                <td className="svc-name">{row.svc}</td>
                                                <td className="svc-desc">{row.desc}</td>
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

export default Business;
