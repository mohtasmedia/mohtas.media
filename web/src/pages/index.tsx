import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";
import { ArticleGrid, Seo, Hero, Intro, Services } from "../components";

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

const IndexPage = ({
  data: {
    site: { title, description, keywords },
    articles = {},
  },
}) => {
  const articleNodes = articles
    ? mapEdgesToNodes(articles).filter(filterOutDocsWithoutSlugs)
    : [];

  return (
    <>
      <Seo title={title} description={description || ""} keywords={keywords} />

      <Hero title={title} />

      <Intro />

      <Services />

      {articleNodes && <ArticleGrid nodes={articleNodes} />}
    </>
  );
};

export default IndexPage;
