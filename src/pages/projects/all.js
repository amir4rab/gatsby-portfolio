import React from 'react'

import AllProjects from '../../components/allProjects/allProjects.component';
import Layout from '../../layout/layout';

const AllProjctsPage = (props) => {
    console.log(props)

    return (
        <Layout contextProps={props}>
            <AllProjects />
        </Layout>
    );
};

export default AllProjctsPage;
