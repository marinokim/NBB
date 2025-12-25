import React from 'react';
import { useTranslation } from 'react-i18next';

const Support = () => {
    // No translation needed for layout, maybe just a title
    return (
        <div style={{ paddingTop: '80px', paddingBottom: '80px', textAlign: 'center' }}>
            <div className="container">
                <h1 className="heading-lg" style={{ marginBottom: '20px' }}>Support Center</h1>
                <p>Customer Support Board (Comming Soon)</p>
                {/* This is a hidden page as per requirements */}
            </div>
        </div>
    );
};

export default Support;
