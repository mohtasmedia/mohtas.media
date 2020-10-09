import React from "react";
import { graphql } from "gatsby";
import { GraphQLError } from "graphql";
import { Seo, Article } from "../components";

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
      description: string;
      keywords: string[];
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
    article: { title, description, keywords, ...article },
  },
}: ArticleTemplateProps) => (
  <>
    <Seo
      title={title}
      description={description || ""}
      keywords={keywords || [""]}
    />
    <Article title={title} article={article} />
  </>
);

export default ArticleTemplate;
