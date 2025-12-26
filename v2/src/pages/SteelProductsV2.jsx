import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Box } from 'lucide-react';
import './ProductListV2.css';

const SteelProductsV2 = () => {
    const { t } = useTranslation();
    const steelItems = t('business.trading.steel.items', { returnObjects: true });

    return (
        <div className="product-page-v2">
            <header className="page-header steel-header">
                <div className="container">
                    <h1>{t('business.trading.steel.title', 'Steel Trading')}</h1>
                    <p>{t('business.trading.steel.page_desc', 'High-quality steel products for construction and manufacturing.')}</p>
                </div>
            </header>

            <div className="container">
                <Link to="/business" className="back-link-v2">
                    <ArrowLeft size={20} />
                    {t('business.trading.back_to_business', 'Back to Business')}
                </Link>

                <div className="product-grid-v2">
                    {Array.isArray(steelItems) && steelItems.map((item, index) => (
                        <div className="product-card-v2" key={index}>
                            <div className="product-image-placeholder-v2">
                                <Box size={64} strokeWidth={1.5} />
                            </div>
                            <div className="product-info-v2">
                                <h3>{item}</h3>
                                <p>{t('business.trading.steel.item_desc', { item: item, defaultValue: 'Premium quality materials verified for international standards.' })}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SteelProductsV2;
