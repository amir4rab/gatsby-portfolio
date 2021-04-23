import React from 'react';
import SpecialProjects from '../components/speacialProjects/specialProjects.component';
import Layout from '../layout/layout';

const ProjectsPage = (props) => {

    return (
        <Layout contextProps={props}>
            <SpecialProjects />
        </Layout>
    );
};

export default ProjectsPage;
