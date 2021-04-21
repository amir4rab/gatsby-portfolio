import React, { useEffect, useState } from 'react';
import './mobileMenuOverlay.scss';

const MobileMenuOverlay = ({ closeOverlay }) => {
    // const [ clickedState, setClickedState ] = useState(false)

    const closeOverlayFn = (e) => {
        if( e.target.id === 'mobileMenuOverlay' ) closeOverlay();;
    }

    return (
        <div 
            className={ `overlay-mobileMenu` }
            onClick={ closeOverlayFn }
            id="mobileMenuOverlay"
            >
            <div className={ 'inner' }>

            </div>
        </div>
    );
};

export default MobileMenuOverlay;
