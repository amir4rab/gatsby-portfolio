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
                            fixed {
                                src
                                height
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

    console.log(specialProjectsArr);
    return (
        <div>
            <ProjectsDisplayer projects={specialProjectsArr} />
        </div>
    );
};

export default SpecialProjects;
