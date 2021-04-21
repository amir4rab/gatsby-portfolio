import React from 'react';
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
            onKeyDown={ e => console.log(e) }
            id="mobileMenuOverlay"
            role="button"
            aria-label="button"
            tabIndex="0"
            >
            <div className={ 'inner' }>

            </div>
        </div>
    );
};

export default MobileMenuOverlay;
