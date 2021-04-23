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
        <div className={ classes.filtersList }
        >
            {
                filters.map(
                    filter => <ProjectFilter changeFilterState={changeFilterState} isActive={activeFilters.includes(filter)} filterName={filter} key={filter} />
                )
            }
        </div>
    );
};

export default ProjectsFilters;
