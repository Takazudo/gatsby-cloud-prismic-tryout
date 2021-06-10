const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query all Pages with their IDs and template data.
  const pages = await graphql(`
    query AllEntries {
      allPrismicEntry {
        nodes {
          id
          uid
        }
      }
    }
  `);

  // Create pages for each Page in Prismic using a template.
  for (const node of pages.data.allPrismicEntry.nodes) {
    createPage({
      path: `/entry/${node.uid}`,
      component: path.resolve(__dirname, "src/templates/entry.js"),
      context: {
        uid: node.uid,
        id: node.id,
      },
    });
  }
};
