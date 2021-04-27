import React from 'react';

import ProgrammingSkills from './programmingSkills/programmingSkills.component';

import * as classes from './about.module.scss';

const About = () => {
    return (
        <main className={ classes.aboutComponent }>
            <h1 className={ classes.title }>
                About
            </h1>
            <div className={ classes.pageContent }>
                <div>
                    <div className={ classes.contentBox }>
                        <ProgrammingSkills />
                    </div>
                </div>
                <div>
                    <div className={ classes.contentBox }>
                        <div className={ classes.boxTitle }>
                            Education
                        </div>
                        <div className={ classes.boxContent }>
                            Bachelor degree in computer engineering from iau.
                        </div>
                    </div>
                    <div className={ classes.contentBox }>
                        <div className={ classes.boxTitle }>
                            Language skills
                        </div>
                        <ul className={ classes.boxList }>
                            <li className={ classes.listItem }>
                                German: A1.1
                            </li>
                            <li className={ classes.listItem }>
                                English: fluent
                            </li>
                            <li className={ classes.listItem }>
                                Persian: Native
                            </li>
                        </ul>
                    </div>
                    <div className={ classes.contentBox }>
                        <div className={ classes.boxTitle }>
                            Other skills
                        </div>
                        <ul className={ classes.boxList }>
                            <li className={ classes.listItem }>
                                Figma
                            </li>
                            <li className={ classes.listItem }>
                                davinciResolve
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
