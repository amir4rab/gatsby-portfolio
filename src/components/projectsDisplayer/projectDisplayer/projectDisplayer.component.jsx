import React from 'react';
import { Link } from 'gatsby';

import Button from '../../button/button.component';

import * as classes from './projectDisplayer.module.scss';

const ProjectDisplayer = ({ project }) => {
    console.log(project);

    return (
        <div>
            {
                project === undefined ?
                null 
                :
                <div className={ classes.projectDisplay }>
                    <div className={ classes.image }>
                        <img 
                            src={project.hero.fixed.src}
                            alt={`${project.title}`}
                        />
                    </div>
                    <h3 className={ classes.title }>
                        { project.title }
                    </h3>
                    <div className={ classes.stacks }>
                        <div className={ classes.subTitle }>
                            stack
                        </div>
                        { project.stack.map(stackItem => <p className={ classes.stack } key={stackItem}>{stackItem}</p>) }
                    </div>
                    <div className={ classes.links }>
                        <a href={project.url} target="_">
                            <Button>
                                Live version
                            </Button>
                        </a>
                        <Link className={ classes.linkToMore } to={`/projects/${project.slug}`}>
                                learn more about this project
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectDisplayer
