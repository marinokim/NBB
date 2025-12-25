import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Truck, Ship, Anchor, Package, Home, ArrowRight } from 'lucide-react';
import './Business.css';

const Business = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('trading'); // 'trading' or 'logistics'

    const kProducts = t('business.trading.kproduct.items', { returnObjects: true });
    const services = t('business.logistics.services.list', { returnObjects: true });
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
                            <p>{t('business.trading.desc')}</p>
                        </div>

                        <div className="trading-grid">
                            {/* Steel */}
                            <div className="product-category">
                                <h3>{t('business.trading.steel.title')}</h3>
                                <ul className="product-list">
                                    {Array.isArray(steelItems) && steelItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* K-Product */}
                            <div className="product-category">
                                <h3>{t('business.trading.kproduct.title')}</h3>
                                <div className="k-product-grid">
                                    {Array.isArray(kProducts) && kProducts.map((item, i) => (
                                        <div key={i} className="k-item">
                                            <h4>{item.name}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* LOGISTICS SECTION */}
                {activeTab === 'logistics' && (
                    <div className="logistics-section fade-in">
                        <div className="section-header">
                            <h2>{t('business.logistics.title')}</h2>
                            <p>{t('business.logistics.desc')}</p>
                        </div>

                        {/* Animated Flow */}
                        <div className="logistics-flow">
                            <h3 style={{ marginBottom: '20px' }}>{t('business.logistics.flow_title')}</h3>
                            <div className="flow-animation">
                                <div className="flow-line"><div className="flow-line-fill"></div></div>

                                <div className="flow-step">
                                    <div className="flow-icon"><Home size={24} /></div>
                                    <span>Shipper</span>
                                </div>
                                <div className="flow-step">
                                    <div className="flow-icon"><Truck size={24} /></div>
                                    <span>Inland</span>
                                </div>
                                <div className="flow-step">
                                    <div className="flow-icon"><Ship size={24} /></div>
                                    <span>Ocean/Air</span>
                                </div>
                                <div className="flow-step">
                                    <div className="flow-icon"><Anchor size={24} /></div>
                                    <span>Port</span>
                                </div>
                                <div className="flow-step">
                                    <div className="flow-icon"><Package size={24} /></div>
                                    <span>Destination</span>
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
