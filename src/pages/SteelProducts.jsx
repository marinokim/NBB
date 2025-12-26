import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Box } from 'lucide-react';
import './ProductList.css';

const SteelProducts = () => {
    const { t } = useTranslation();
    const steelItems = t('business.trading.steel.items', { returnObjects: true });

    return (
        <div className="product-page-container container">
            <Link to="/business" className="back-link">
                <ArrowLeft size={16} style={{ display: 'inline', marginRight: '5px' }} />
                {t('business.trading.back_to_business')}
            </Link>

            <div className="product-page-header">
                <h2>{t('business.trading.steel.title')}</h2>
                <p>{t('business.trading.steel.page_desc')}</p>
            </div>

            <div className="product-grid">
                {Array.isArray(steelItems) && steelItems.map((item, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-image-placeholder">
                            <Box size={48} />
                        </div>
                        <div className="product-info">
                            <h3>{item}</h3>
                            <p>{t('business.trading.steel.item_desc', { item: item })}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SteelProducts;
