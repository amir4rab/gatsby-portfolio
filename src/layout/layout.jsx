import React from 'react';
import NavbarTop from './navbarTop/navbarTop.component';
import MobileMenu from './mobileMenu/mobileMenu.component';

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import './layout.scss';
import PathContext from '../utilities/contexts/pathContext/pathContext';

const Layout = ({ children, contextProps }) => {

    return (
        <main>
            <PathContext.Provider value={contextProps} >
                <NavbarTop />
                    { children }
                <MobileMenu />
            </PathContext.Provider>
        </main>
    );
};

export default Layout;
