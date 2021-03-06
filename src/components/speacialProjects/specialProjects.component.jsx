import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectsDisplayer from '../projectsDisplayer/projectsDisplayer.component';

function SpecialProjects() {
    const qeuryRes = useStaticQuery(
        graphql`
            query getProjectsDataForSpecialProjectsPage {
                allContentfulProject(filter: {specialProject: {eq: true}}) {
                    nodes {
                        title
                        slug
                        url
                        thumbnail {
                            gatsbyImageData
                        }
                        hero {
                            gatsbyImageData
                            fixed(quality: 75, width: 1920) {
                                src
                            }
                        }
                        stack
                        specialProject
                    }
                }
            }
        `
    );

    const [ specialProjectsArr ] = useState([...qeuryRes.allContentfulProject.nodes]);
    
    return (
        <div>
            <ProjectsDisplayer projects={specialProjectsArr} />
        </div>
    );
};

export default SpecialProjects;
