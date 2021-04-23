import React from 'react';

import * as classes from './projectFilter.module.scss';

const ProjectFilter = ({ filterName, isActive, changeFilterState }) => {
    // console.log(filterName);

    const changeHanler = (e) => {
        console.log();
        changeFilterState( filterName , e.target.checked);
    }

    return (
        <div className={ classes.inputBox }>
            <input className={ classes.input } checked={isActive} onChange={changeHanler} id={filterName} name={filterName} type="checkbox"/>
            <label className={ classes.label } htmlFor={filterName}>{filterName}</label>
        </div>
    );
};

export default ProjectFilter;
