import React, { useState } from 'react';

import MobileMenuBtn from './mobileMenuBtn/mobileMenuBtn.component';
import MobileMenuOverlay from './mobileMenuOverlay/mobileMenuOverlay.component';
import AnimateOpacity from '../../utilities/components/anmiateOpacity/animateOpacity.component';

import * as classes from './mobileMenu.module.scss';

const MobileMenu = () => {
    const [ overlayState , setOverlayState ] = useState(false);

    return (
        <div
            className={ classes.mobileMenu }
        >
            <MobileMenuBtn 
                toggleOverlayState={ _ => setOverlayState(!overlayState) }
                overlayState={ overlayState }
            />
            <AnimateOpacity
                outerState ={ overlayState }
            >
                <MobileMenuOverlay closeOverlay={ _ => setOverlayState(false) } />
            </AnimateOpacity>
        </div>
    );
};

export default MobileMenu;
