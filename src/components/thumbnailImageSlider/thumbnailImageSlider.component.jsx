import React from 'react';

import * as classes from './thumbnailImageSlider.module.scss';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ThumbnailImageSlider = () => {

    const queryRes = useStaticQuery(
        graphql`
            query heroImgGeter {
                allContentfulProject {
                    edges {
                        node {
                            title
                            slug
                            thumbnail {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        `
    );

    // console.log(queryRes.allContentfulProject.edges);
    // queryRes.allContentfulProject.edges.map( item => console.log( item.node.thumbnail ));

    return (
        <div className={ classes.main }>
            <div className={ classes.imgSlider }>
                <div className={ classes.imgSlider_inner }>
                    {
                        queryRes.allContentfulProject.edges.map( 
                            item => 
                                <GatsbyImage 
                                    className={ classes.gatsbyImage }
                                    key={ item.node.slug } 
                                    alt={ `image from ${item.node.title}` } 
                                    image={ item.node.thumbnail.gatsbyImageData } 
                                />
                        ) 
                    }
                </div>
            </div>
        </div>
    );
};

export default ThumbnailImageSlider;
