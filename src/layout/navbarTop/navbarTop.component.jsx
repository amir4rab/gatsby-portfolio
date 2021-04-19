import React from 'react';
import { Link } from 'gatsby';

import * as classes from './navbarTop.module.scss';

const NavbarTop = () => {
    return (
        <nav className={ classes.navbar }>
            <div className={ classes.title }>
                <h3>
                    Amir4rab
                </h3>
            </div>
            <div className={ classes.links }>
                <ul className={ classes.links_Ul }>
                    <li className={ classes.li }>
                        <Link to="/" activeClassName={ classes.activeLink }>
                            Home
                        </Link>
                    </li>
                    <li className={ classes.li }>
                        <Link to="/projects" activeClassName={ classes.activeLink }>
                            Projects
                        </Link>
                    </li>
                    <li className={ classes.li }>
                        <Link to="/about" activeClassName={ classes.activeLink }>
                            About Me
                        </Link>
                    </li>
                    <li className={ classes.li }>
                        <Link to="/contact" activeClassName={ classes.activeLink }>
                            Contanct me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarTop;
