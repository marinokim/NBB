import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import HeaderV2 from './HeaderV2';
import FooterV2 from './FooterV2';

const LayoutV2 = () => {
    return (
        <div className="layout-v2">
            <HeaderV2 />
            <main className="main-content">
                <Outlet />
            </main>
            <FooterV2 />
            <ScrollRestoration />
        </div>
    );
};

export default LayoutV2;
