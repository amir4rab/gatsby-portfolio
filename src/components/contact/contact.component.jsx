import React from 'react';

import Button from '../button/button.component';

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
                        <a href="https://github.com/amir4rab">
                            github
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/amir4rab">
                            code pen
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/amir4rab">
                            dribbble
                        </a>
                    </li>
                </ul>
            </div>
            <div className={ classes.contactform }>
                <h3 className={ classes.subtitle }>
                    Contact From
                </h3>
                <form name="contact" method="post" data-netlify="true">
                    <p className={ classes.inputGroup }>
                        <label>
                            <p>Your Name</p>
                            <input type="text" name="name"/>
                        </label>
                    </p>
                    <p className={ classes.inputGroup }>
                        <label>
                            <p>Your Email</p>
                            <input type="email" name="email"/>
                        </label>
                    </p>
                    <p className={ classes.inputGroup }>
                        <label>
                            <p>Message</p>
                            <textarea name="message"></textarea>
                        </label>
                    </p>
                    <p className={ classes.inputGroup }>
                        <Button type="submit">
                            send
                        </Button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Contact;
