import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as classes from './imgSliderSlider.module.scss';

const ImgSliderSlider = ({ imagesDataArr }) => {
    return (
        <div>
            <div className={ classes.imgSlider }>
                <div className={ classes.imgSlider_inner }>
                    {
                        imagesDataArr.map( 
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

export default ImgSliderSlider;
