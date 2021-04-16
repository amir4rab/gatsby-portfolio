import React from 'react'

import * as classes from './home.module.scss';

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
                        <button>My projects</button>
                        <button>About me</button>
                    </div>
                </div>
                <div className={ classes.right }>
                    <div className={ classes.highlightedProjects }>
                        highlighted
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
