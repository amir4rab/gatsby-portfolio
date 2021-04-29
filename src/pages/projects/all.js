import React from 'react'

import AllProjects from '../../components/allProjects/allProjects.component';
import Layout from '../../layout/layout';

const AllProjctsPage = (props) => {
    return (
        <Layout contextProps={props}>
            <AllProjects />
        </Layout>
    );
};

export default AllProjctsPage;
