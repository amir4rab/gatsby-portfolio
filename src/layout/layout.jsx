import React from 'react';
import NavbarTop from './navbarTop/navbarTop.component';
import MobileMenu from './mobileMenu/mobileMenu.component';

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import './layout.scss';

const Layout = ({ children }) => {
    return (
        <main>
            <NavbarTop />
            { children }
            <MobileMenu />
        </main>
    );
};

export default Layout;
