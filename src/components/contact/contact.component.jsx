import React from 'react';
import NetlifyForm from './netifyForm/netlifyForm.component';

import * as classes from './contact.module.scss';

const Contact = () => {
    return (
        <div className={ classes.contactComponent }>
            <h1 className={ classes.title }>
                Contact Me
            </h1>
            <div className={ classes.socials }>
                <h3 className={ classes.subtitle }>
                    Socials
                </h3>
                <ul className={ classes.socialsLinks }>
                    <li>
                        <a href="https://github.com/amir4rab" target="_">
                            github
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/amir4rab" target="_">
                            code pen
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/amir4rab" target="_">
                            dribbble
                        </a>
                    </li>
                </ul>
            </div>
            <NetlifyForm />
        </div>
    );
};

export default Contact;
