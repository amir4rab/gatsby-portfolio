import { Link } from 'gatsby';
import React, { memo } from 'react';

import * as classes from './notFound.module.scss';

const NotFound = () => {
    return (
        <main className={ classes.main }>
            <h3 className={ classes.title }>
                unfortunately this page does not exists.
            </h3>
            <h4 className={ classes.subtitle }>
                get back to <Link to='/'>home</Link>.
            </h4>
        </main>
    );
};

export default memo(NotFound);
