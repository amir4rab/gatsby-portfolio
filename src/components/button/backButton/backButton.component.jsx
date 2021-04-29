import React from 'react';

import * as classes from './backButton.module.scss';

const BackButton = ({ children }) => {

    const text = '<';

    return (
        <button className={ classes.backButtonComponent }>
            <p className={ classes.backInd }>
                { text } 
            </p>
            <p>
                { children }
            </p>
        </button>
    );
};

export default BackButton;
