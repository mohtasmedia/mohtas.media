import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import { ArticleGrid, Layout } from "../components";

export const query = graphql`
  query BlogPageQuery {
    articles: allSanityArticle(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArticlePage = ({ data, errors }) => {
  const articleNodes = data?.articles && mapEdgesToNodes(data.articles);

  return (
    <Layout title="Articles" errors={errors}>
      <h1>Articles</h1>
      {articleNodes?.length > 0 && <ArticleGrid nodes={articleNodes} />}
    </Layout>
  );
};

export default ArticlePage;
