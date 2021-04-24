import React from 'react';
import ProjectFilter from './projectFilter/projectFilter.component';

import * as classes from './projectsFilters.module.scss';

const ProjectsFilters = ({ filters, activeFilters, setActiveFilters }) => {

    const changeFilterState = ( filterName, newState ) => {
        newState === true ? 
            setActiveFilters( filters =>  [ ...filters, filterName ]) 
            :
            setActiveFilters( filters => filters.filter( filter => filter !== filterName ));
    }

    return (
        <div className={ classes.filtersList }>
            <div className={ classes.inner }>
                {
                    filters.map(
                        filter => <ProjectFilter changeFilterState={changeFilterState} isActive={activeFilters.includes(filter)} filterName={filter} key={filter} />
                    )
                }
            </div>
        </div>
    );
};

export default ProjectsFilters;
