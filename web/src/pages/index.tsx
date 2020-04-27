import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";
import { ArticleGrid, Layout } from "../components";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

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
  const site = (data || {}).site;
  const articleNodes = (data || {}).articles
    ? mapEdgesToNodes(data.articles).filter(filterOutDocsWithoutSlugs)
    : [];

  return (
    <Layout title={site.title} errors={errors}>
      {articleNodes && <ArticleGrid nodes={articleNodes} />}
    </Layout>
  );
};

export default IndexPage;
