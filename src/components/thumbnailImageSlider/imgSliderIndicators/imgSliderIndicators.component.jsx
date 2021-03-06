import React from 'react';

import './imgSliderIndicators.scss';

const ImgSliderIndicators = ({
    indicatorsAmount,
    activeIndex,
    changeActiveIndexTo
}) => {

    const mapToNum = (num) => {
        const res = [];
        for( let i = 0 ; i < num ; i++ ){
            res.push(
                <button 
                    key={i} className={[ 'indicator', `${ activeIndex === i ? 'indicator_acitve' : '' }` ].join(' ')}
                    onClick={ _ => changeActiveIndexTo(i) }
                    aria-label="page indicator"
                />
                );
        }
        return res;
    }

    return (
        <div className={ 'imgSliderIndicators' }>
            { mapToNum(indicatorsAmount) }
        </div>
    );
};

export default ImgSliderIndicators;
