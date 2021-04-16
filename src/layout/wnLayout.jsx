import React from 'react'

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import './layout.scss';

function WnLayout({ children }) {
    return (
        <div>
            { children } 
        </div>
    );
};

export default WnLayout;
