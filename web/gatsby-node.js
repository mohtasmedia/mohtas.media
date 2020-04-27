const createPages = require("./lib/node/createPages.ts");

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPages({
    graphql: graphql(`
      {
        allSanityArticle(filter: { slug: { current: { ne: null } } }) {
          edges {
            node {
              id
              slug {
                current
              }
            }
          }
        }
      }
    `),
    type: "Article",
    actions,
    reporter,
  });
};
