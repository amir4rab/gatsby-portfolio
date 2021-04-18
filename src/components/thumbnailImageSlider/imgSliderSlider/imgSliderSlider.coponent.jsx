import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as classes from './imgSliderSlider.module.scss';

const ImgSliderSlider = ({ imagesDataArr, activeIndex }) => {
    const [ innerStyle, setInnerStyle ] = useState(`translate(0vh)`);
    
    useEffect( _ => {
        setInnerStyle(`translate(${ -25 * activeIndex }vh)`);
    },[ setInnerStyle, activeIndex ]);

    return (
        <div>
            <div className={ classes.imgSlider }>
                <div 
                    className={ classes.imgSlider_inner }
                    style={{ transform: innerStyle }}
                    >
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
