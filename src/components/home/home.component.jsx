import React from 'react';
import ThumbnailImageSlider from '../thumbnailImageSlider/thumbnailImageSlider.component';
import * as classes from './home.module.scss';

import Button from '../button/button.component';

function Home() {
    return (
        <div className={ classes.main }>
            <section className={ classes.hero }>
                <div className={ classes.left }>
                    <div className={ classes.left_title }>
                        <h2>
                            Hi my name is <strong>Amir Arab</strong> a
                        </h2>
                        <h2>
                            <strong>Front-end Developer</strong>
                        </h2>
                    </div>
                    <div className={ classes.left_buttons }>
                        <Button btnType="whiteFull"> My projects </Button>
                        <Button btnType="whiteEmpty"> about me </Button>
                    </div>
                </div>
                <div className={ classes.right }>
                    <div className={ classes.highlightedProjects }>
                        <ThumbnailImageSlider />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
