import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";
import { ArticleGrid, Layout, Hero, Intro, Services } from "../components";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
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
  const articleNodes = (data || {}).articles
    ? mapEdgesToNodes(data.articles).filter(filterOutDocsWithoutSlugs)
    : [];
  console.log(data);

  return (
    <Layout errors={errors}>
      <Hero title={data.site.title} />

      <Intro />

      <Services />

      {articleNodes && <ArticleGrid nodes={articleNodes} />}
    </Layout>
  );
};

export default IndexPage;
