import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button
                className={i18n.language === 'ko' ? 'active' : ''}
                onClick={() => changeLanguage('ko')}
            >
                KO
            </button>
            <span>|</span>
            <button
                className={i18n.language === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
            <span>|</span>
            <button
                className={i18n.language === 'zh' ? 'active' : ''}
                onClick={() => changeLanguage('zh')}
            >
                CH
            </button>
        </div>
    );
};

export default LanguageSwitcher;
