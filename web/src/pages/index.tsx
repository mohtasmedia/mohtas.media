import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";
import { ArticleGrid, Layout, Hero } from "../components";

export const query = graphql`
  query IndexPageQuery {
    articles: allSanityArticle(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          _rawExcerpt
          categories {
            title
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data, errors }) => {
  const articleNodes = (data || {}).articles
    ? mapEdgesToNodes(data.articles).filter(filterOutDocsWithoutSlugs)
    : [];

  return (
    <Layout errors={errors}>
      <Hero />

      {articleNodes && <ArticleGrid nodes={articleNodes} />}
    </Layout>
  );
};

export default IndexPage;
