import React from 'react';
import * as classes from './mobileMenuBtn.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const MobileMenuBtn = ({ toggleOverlayState }) => {
    return (
        <button 
            className={ classes.button }
            onClick={ _ => toggleOverlayState() }
            >
            <StaticImage 
                src="../../../images/menu.svg"
                alt="menu btn"
                placeholder="none"
                className={ classes.img }
            />
        </button>
    );
};

export default MobileMenuBtn;
