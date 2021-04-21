import React, { useState, useEffect } from 'react';
import './animateOpacity.scss';

const AnimateOpacity = ({ outerState, children }) => {
    const [ showState, setShowState ] = useState(false);
    const [ showingState, setShowingState ] = useState('notShowing');

    useEffect(() => {
        const value = outerState;

        outerState === true ? setShowingState('entering') : setShowingState('exiting');

        const timeout = setTimeout( _ => {
            if( value === true ) {
                setShowState(true);
                setShowingState('showing')
            } else {
                setShowState(false);
                setShowingState('notShowing')
            }
        }, 300)
        return () => {
            clearTimeout(timeout);
        }
    }, [ outerState ]);

    return (
        <div className="animate-opacity-component">
            {
                (outerState === true) || (showState === true)
                ?
                <div
                    className={[
                        'item',
                        `${showingState}`,
                    ].join(' ')}
                >
                    { children }
                </div>
                :
                null
            }
        </div>
    );
};

export default AnimateOpacity;
