import React from "react";
import { graphql } from "gatsby";
import { Article, Layout } from "../components";

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    article: sanityArticle(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      _rawBody
    }
  }
`;

const ArticleTemplate = ({ data: { article }, errors }) => (
  <Layout
    title={errors ? "GraphQL Error" : article.title || "Untitled"}
    errors={errors}
  >
    {article && <Article {...article} />}
  </Layout>
);

export default ArticleTemplate;
