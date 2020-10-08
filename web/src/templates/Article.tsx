import React from "react";
import { graphql } from "gatsby";
import { GraphQLError } from "graphql";
import { Layout, Article } from "../components";

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    article: sanityArticle(id: { eq: $id }) {
      title
      publishedAt
      author {
        name
      }
      _rawBody
    }
  }
`;

type ArticleTemplateProps = {
  data: {
    article?: {
      title: string;
      publishedAt: string;
      author: {
        name: string;
      };
      _rawBody: any;
    };
  };
  errors?: GraphQLError;
};

const ArticleTemplate = ({
  data: {
    article: { title, ...article },
  },
  errors,
}: ArticleTemplateProps) => (
  <Layout
    title={errors ? "GraphQL Error" : title || "Untitled"}
    errors={errors}
  >
    <Article title={title} article={article} />
  </Layout>
);

export default ArticleTemplate;
