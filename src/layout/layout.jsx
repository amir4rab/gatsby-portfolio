import React from 'react';
import NavbarBottom from './navbarBottom/navbarBottom.component';
import NavbarTop from './navbarTop/navbarTop.component';

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import './layout.scss';

function Layout({ children }) {
    return (
        <main>
            <NavbarTop />
            { children }
            <NavbarBottom />
        </main>
    );
};

export default Layout;
