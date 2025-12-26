import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';
import './ProductListV2.css';
import ginsengHero from '../assets/images/hero/hero_ginseng.png';

const KProductsV2 = () => {
    const { t } = useTranslation();
    const kProducts = t('business.trading.kproduct.items', { returnObjects: true });

    return (
        <div className="product-page-v2">
            <header className="page-header" style={{ backgroundImage: `linear-gradient(rgba(0, 43, 92, 0.9), rgba(0, 43, 92, 0.7)), url(${ginsengHero})` }}>
                <div className="container">
                    <h1>{t('business.trading.kproduct.title', 'K-Products')}</h1>
                    <p>{t('business.trading.kproduct.page_desc', 'Premium Korean Ginseng and health supplements.')}</p>
                </div>
            </header>

            <div className="container">
                <Link to="/business" className="back-link-v2">
                    <ArrowLeft size={20} />
                    {t('business.trading.back_to_business', 'Back to Business')}
                </Link>

                <div className="product-grid-v2">
                    {Array.isArray(kProducts) && kProducts.map((item, index) => (
                        <div className="product-card-v2" key={index}>
                            <div className="product-image-placeholder-v2">
                                <Leaf size={64} strokeWidth={1.5} />
                            </div>
                            <div className="product-info-v2">
                                <h3>{item.name}</h3>
                                <p>{item.desc || t('business.trading.kproduct.default_desc', 'Exporting the finest Korean Red Ginseng.')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KProductsV2;
