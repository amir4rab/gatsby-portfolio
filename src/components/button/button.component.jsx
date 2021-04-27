import React, { memo } from 'react';

import './button.scss';

const Button = ({
    children,
    btnType = '',
    disabled = false,
    onClick,
    type
}) => {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={ [`customStyledBtn` , btnType ].join(' ')}>
            { children }
        </button>
    );
};

export default memo(Button);
