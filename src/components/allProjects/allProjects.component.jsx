import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ProjectsDisplayer from '../projectsDisplayer/projectsDisplayer.component';
import ProjectsFilters from './projectsFilters/projectsFilters.component';

const AllProjects = () => {
    const qeuryRes = useStaticQuery(
        graphql`
            query getProjectsDataForAllProjectsPage {
                allContentfulProject {
                    nodes {
                        title
                        slug
                        thumbnail {
                            gatsbyImageData
                        }
                        stack
                        specialProject
                    }
                }
            }
        `
    );

    const [ filters ] = useState( _ => {
        const arrayRes = [];

        qeuryRes.allContentfulProject.nodes.forEach( item => {
            item.stack.forEach(stackItem => {
                if(!arrayRes.includes(stackItem)) arrayRes.push(stackItem);
            });
        });

        return arrayRes;
    });

    const [ activeFilters, setActiveFilters ] = useState([]);

    const makeFilterdProjects = () => {
        const resArr = [];

        
        if(activeFilters.length === 0){
            qeuryRes.allContentfulProject.nodes.forEach( project => {
                resArr.push(project)
            })
        }
        else {
            qeuryRes.allContentfulProject.nodes.forEach( project => {
                let includesFilters = true;
                activeFilters.every( activeFilter => {
                    if( !project.stack.includes(activeFilter) ) {
                        includesFilters = false;
                        return false;
                    }
                    return true;
                });
                if( includesFilters ) resArr.push(project);
            })
        }
        return resArr;
    }

    const [ filterdProjects , setFilterdProjects ] = useState(makeFilterdProjects());

    useEffect(() => {
        setFilterdProjects(makeFilterdProjects());
    }, [activeFilters]);

    return (
        <div>
            <ProjectsFilters filters={filters} setActiveFilters={setActiveFilters} activeFilters={activeFilters}/>
            <ProjectsDisplayer projects={filterdProjects} />
        </div>
    );
};

export default AllProjects;
