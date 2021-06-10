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

  for (const node of pages.data.allPrismicEntry.nodes) {
    createPage({
      path: `/entry/${node.uid}`,
      component: path.resolve(__dirname, "src/templates/entry.tsx"),
      context: {
        id: node.id,
      },
    });
  }
};
