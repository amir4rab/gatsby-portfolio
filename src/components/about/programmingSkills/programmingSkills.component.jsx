import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as classes from './programmingSkills.module.scss';

const ProgrammingSkills = () => {
    return (
        <div className={ classes.ProgrammingSkills }>
            <h3 className={ classes.title }>
                    Programin skills
                </h3>
                <ul className={ classes.list }>
                    <li className={ classes.listItem }>
                        <p className={ classes.itemTitle }>
                            React js
                        </p>
                        <StaticImage 
                            className={ classes.itemImage } 
                            src='../../../images/icons/react.svg'
                            alt='React js'
                        />
                    </li>
                    <li className={ classes.listItem }>
                        <p className={ classes.itemTitle }>
                            Angular js
                        </p>
                        <StaticImage 
                            className={ classes.itemImage } 
                            src='../../../images/icons/angular.svg'
                            alt='Angular js'
                        />
                    </li>
                    <li className={ classes.listItem }>
                        <p className={ classes.itemTitle }>
                            javascript
                        </p>
                        <StaticImage 
                            className={ classes.itemImage } 
                            src='../../../images/icons/javascript.svg'
                            alt='javascript'
                        />
                    </li>
                    <li className={ classes.listItem }>
                        <p className={ classes.itemTitle }>
                            typescript
                        </p>
                        <StaticImage 
                            className={ classes.itemImage } 
                            src='../../../images/icons/typescript.svg'
                            alt='typescript'
                        />
                    </li>
                    <li className={ classes.listItem }>
                        <p className={ classes.itemTitle }>
                            gatsby
                        </p>
                        <StaticImage 
                            className={ classes.itemImage } 
                            src='../../../images/icons/gatsby.svg'
                            alt='gatsby'
                        />
                    </li>
                    <li className={ classes.listItem }>
                        <p className={ classes.itemTitle }>
                            react router
                        </p>
                        <StaticImage 
                            className={ classes.itemImage } 
                            src='../../../images/icons/reactrouter.svg'
                            alt='react router'
                        />
                    </li>
                    <li className={ classes.listItem }>
                        <p className={ classes.itemTitle }>
                            sass
                        </p>
                        <StaticImage 
                            className={ classes.itemImage } 
                            src='../../../images/icons/sass.svg'
                            alt='sass'
                        />
                    </li>
                </ul>
        </div>
    );
};

export default ProgrammingSkills;
