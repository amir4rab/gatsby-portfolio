import React from 'react';
import { Link } from 'gatsby';
import * as classes from './mobileMenuOverlay.module.scss';

const MobileMenuOverlay = ({ closeOverlay }) => {
    // const [ clickedState, setClickedState ] = useState(false)

    const closeOverlayFn = (e) => {
        if( e.target.id === 'mobileMenuOverlay' ) closeOverlay();;
    }

    return (
        <div 
            className={ classes.overlay }
            onClick={ closeOverlayFn }
            onKeyDown={ e => console.log(e) }
            id="mobileMenuOverlay"
            role="button"
            aria-label="button"
            tabIndex="0"
            >
            <div className={ classes.inner }>
                <ul className={ classes.ul }>
                    <li className={ classes.li }>
                        <Link activeClassName={ classes.activeLink } to="/">
                            Home
                        </Link>
                    </li>
                    <li className={ classes.li }>
                        <Link activeClassName={ classes.activeLink } to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className={ classes.li }>
                        <Link activeClassName={ classes.activeLink } to="/about">
                            About
                        </Link>
                    </li>
                    <li className={ classes.li }>
                        <Link activeClassName={ classes.activeLink } to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenuOverlay;
