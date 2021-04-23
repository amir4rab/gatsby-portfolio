import React from 'react';

import ProjectsIndicator from './projectsIndicator/projectsIndicator.component';

import * as classes from './projectsIndicators.module.scss';

const ProjectsIndicators = ({ data, changeHanler, activeIndexState }) => {
    return (
        <div className={ classes.list }>
            { 
                data.map((project, index) => <ProjectsIndicator
                    indexNum={index} 
                    key={project.slug} 
                    data={project} 
                    name={'selectProject'} 
                    changeHanler={changeHanler}
                    activeIndexState={activeIndexState}
                    />)
            }
        </div>
    );
};

export default ProjectsIndicators;
