import React, { useState } from 'react';

import * as classes from './thumbnailImageSlider.module.scss';

import { graphql, useStaticQuery } from 'gatsby';
import ImgSliderIndicators from './imgSliderIndicators/imgSliderIndicators.component';
import ImgSliderSlider from './imgSliderSlider/imgSliderSlider.coponent';

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

    const [ activeIndex, setActiveIndex ] = useState(0);

    return (
        <div className={ classes.main }>
            <ImgSliderIndicators 
                indicatorsAmount={ queryRes.allContentfulProject.edges.length } 
                activeIndex={ activeIndex } 
                changeActiveIndexTo={ setActiveIndex }
            />
            <ImgSliderSlider
                imagesDataArr={queryRes.allContentfulProject.edges}
                activeIndex={ activeIndex }
            />
        </div>
    );
};

export default ThumbnailImageSlider;
