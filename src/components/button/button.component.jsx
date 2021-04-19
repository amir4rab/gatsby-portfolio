import React, { memo } from 'react';

import './button.scss';

const Button = ({
    children,
    btnType = '',
    disabled = false,
}) => {
    return (
        <button disabled={disabled} className={ [`customStyledBtn` , btnType ].join(' ')}>
            { children }
        </button>
    );
};

export default memo(Button);
