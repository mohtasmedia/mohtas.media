module.exports = async ({
  graphql,
  actions: { createPage },
  type,
  reporter,
}) => {
  const { errors, data } = await graphql;

  if (errors) throw errors;

  const responseEdges = (data[`allSanity${type}`] || {}).edges || [];

  responseEdges.forEach(({ node: { id, slug = { current: "" } } }) => {
    const path = `/${slug.current}/`;

    reporter.info(`Creating ${type} page: ${path}`);

    createPage({
      path,
      component: require.resolve(`../../src/templates/${type}.tsx`),
      context: { id },
    });
  });
};
