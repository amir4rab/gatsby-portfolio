import { graphql, Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image'

import * as classes from './projectTemplate.module.scss';

import Layout from './../../layout/layout';


const ProjectTemplate = ({ data }) => {

    console.log(data);

    return (
        <Layout>
            <div
                className={ classes.projectTemplateStyles }
            >
                <div className={ classes.hero }>
                    <div className={ classes.gobackBtn }>
                        <Link to="/projects/">
                            go back
                        </Link>
                    </div>
                    <GatsbyImage 
                        className={ classes.heroImg } 
                        image={data.contentfulProject.hero.gatsbyImageData} 
                        alt={data.contentfulProject.title} 
                    />
                </div>
                <div className={ classes.titleContent }>
                    <h1 className={ classes.title }>
                        { data.contentfulProject.title }
                    </h1>
                    <a className={ classes.link } href={data.contentfulProject.url} target="_">
                        live website
                    </a>
                </div>
                <div className={ classes.htmlContent }>
                    <div dangerouslySetInnerHTML={{ __html: data.contentfulProject.childContentfulProjectContentTextNode.childMarkdownRemark.html }} />
                </div>
                <div className={ classes.stackContent }>
                    <h3 className={ classes.stackTitle }>
                        Stack:
                    </h3>
                    <ul className={ classes.stackList }>
                        {
                            data.contentfulProject.stack.map(( stackItem, i ) => 
                            <li 
                                key={`${stackItem}-${i}`}
                                className={ classes.stackItem }
                            >
                                {stackItem}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query getProjectsDataProjectPage($slug : String) {
        contentfulProject(slug: {eq: $slug}) {
            hero {
                gatsbyImageData
            }
            url
            title
            stack
            childContentfulProjectContentTextNode {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;


export default ProjectTemplate;
