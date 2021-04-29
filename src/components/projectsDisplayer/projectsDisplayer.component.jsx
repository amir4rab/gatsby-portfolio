import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import PathContext from './../../utilities/contexts/pathContext/pathContext';

import ProjectDisplayer from './projectDisplayer/projectDisplayer.component';
import ProjectsIndicators from './projectsIndicators/projectsIndicators.component';

import * as classes from './projectsDisplayer.module.scss';

const ProjectsDisplayer = ({ projects }) => {
    const [ activeIndexState , setActiveIndexState ] = useState(0);
    const pathContext = useContext(PathContext);

    const changeHanler = (indexNum) => {
        setActiveIndexState(indexNum);
    }

    return (
        <div className={ classes.main }>
            <div className={ classes.indicators }>
                <div className={ classes.indicators_title }>
                    <div>
                        {
                            pathContext.path === '/projects/' 
                            ?
                            <h2>Special projects</h2>
                            :
                            <h2>All projects</h2>
                        }
                    </div>
                    <div>
                        {
                            pathContext.path === '/projects/' 
                            ?
                            <Link to="/projects/all">
                                See all projects
                            </Link>
                            :
                            <Link to="/projects">
                                Only show Speacial projects
                            </Link>
                        }
                    </div>
                </div>
                <div className={ classes.indicators_indicators }>
                    <ProjectsIndicators activeIndexState={activeIndexState} changeHanler={ changeHanler } data={ projects } />
                </div>
            </div>
            <div>
                <ProjectDisplayer project={projects[activeIndexState]} />
            </div>
        </div>
    );
};

export default ProjectsDisplayer;
