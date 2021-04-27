// const { graphql } = require('gatsby');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query getProjectsSlugs {
            allContentfulProject {
                nodes {
                    slug
                }
            }
        }
    `);

    data.allContentfulProject.nodes.forEach( node => {
        console.log('/projects/' + node.slug);

        actions.createPage({
            path: '/projects/' + node.slug,
            component: require.resolve('./src/templates/project/projectTemplate.component.jsx'),
            context: {
                slug: node.slug
            }
        });
    });
};