import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import './ProductList.css';

const KProducts = () => {
    const { t } = useTranslation();
    const kProducts = t('business.trading.kproduct.items', { returnObjects: true });

    return (
        <div className="product-page-container container">
            <Link to="/business" className="back-link">
                <ArrowLeft size={16} style={{ display: 'inline', marginRight: '5px' }} />
                {t('business.trading.back_to_business')}
            </Link>

            <div className="product-page-header">
                <h2>{t('business.trading.kproduct.title')}</h2>
                <p>{t('business.trading.kproduct.page_desc')}</p>
            </div>

            <div className="product-grid">
                {Array.isArray(kProducts) && kProducts.map((item, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-image-placeholder">
                            <ImageIcon size={48} />
                        </div>
                        <div className="product-info">
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KProducts;
