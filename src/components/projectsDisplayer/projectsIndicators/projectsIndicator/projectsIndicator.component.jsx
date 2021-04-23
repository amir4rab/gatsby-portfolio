import React from 'react';
import * as classes from './projectsIndicator.module.scss';

const ProjectsIndicator = ({ data, name, changeHanler, indexNum, activeIndexState }) => {
    return (
        <div className={ classes.inputBox }>
            <input 
                className={ classes.input } 
                checked={ activeIndexState === indexNum } 
                onChange={ _ => changeHanler(indexNum)} 
                id={data.slug} 
                name={name} 
                type="radio"
            />
            <label 
                className={ classes.label } 
                htmlFor={data.slug}
            >
                {data.title}
            </label>
        </div>
    );
};

export default ProjectsIndicator;
