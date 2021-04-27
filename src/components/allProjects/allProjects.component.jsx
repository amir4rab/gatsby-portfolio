import React, { useState, useEffect, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Button from './../../components/button/button.component';
import ProjectsDisplayer from '../projectsDisplayer/projectsDisplayer.component';
import ProjectsFilters from './projectsFilters/projectsFilters.component';
import * as classes from './allProjects.module.scss';

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
                        hero{
                            gatsbyImageData
                            fixed(quality: 75, width: 1920) {
                                src
                            }
                        }
                        stack
                        specialProject
                        url
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

    const makeFilterdProjects = useCallback(() => {
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
    }, [ activeFilters, qeuryRes.allContentfulProject.nodes ]);

    const [ filterdProjects , setFilterdProjects ] = useState(makeFilterdProjects());

    useEffect(() => {
        setFilterdProjects(makeFilterdProjects());
    }, [ activeFilters, makeFilterdProjects ]);

    const [ showFilteres, setShowFilteres] = useState(false);
    
    // const testFn = () => console.log('testFn');
    return (
        <div className={ classes.allProjects }>
            <div  className={ classes.filters }>
                <Button btnType='blackHighlighted' onClick={ _ => setShowFilteres(!showFilteres) }>
                    {
                        showFilteres === true ?
                        <p>Hide filters</p>
                        :
                        <p>Show filters</p>
                    }
                </Button>
                {
                    showFilteres === true ?
                    <div>
                        <ProjectsFilters filters={filters} setActiveFilters={setActiveFilters} activeFilters={activeFilters}/>
                    </div>
                    :
                    null
                }
            </div>
            <ProjectsDisplayer projects={filterdProjects} />
        </div>
    );
};

export default AllProjects;
