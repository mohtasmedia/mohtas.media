import React from "react";
import { graphql } from "gatsby";
import format from "date-fns/format";
import styled from "styled-components";
import { Article, Layout } from "../components";

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    article: sanityArticle(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      publishedAt
      _updatedAt
      author {
        name
      }
      _rawBody
    }
  }
`;

const ArticleHero = ({ title, author, published, updated }) => {
  const formatted = {
    published: format(new Date(published), "dd MMM yyyy"),
    updated: format(new Date(updated), "dd MMM yyyy"),
  };
  const isUpdated = formatted.updated !== formatted.published;

  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
      </Content>

      <Meta>
        <MetaContent>
          <Author>{author}</Author>
          <Published>
            {isUpdated ? formatted.published.slice(0, -4) : formatted.published}
          </Published>
          {isUpdated && <Updated>Updated {formatted.updated}</Updated>}
        </MetaContent>
      </Meta>
    </Wrapper>
  );
};

const ArticleTemplate = ({
  data: {
    article: { title, publishedAt, _updatedAt, author, ...article },
  },
  errors,
}) => (
  <Layout
    title={errors ? "GraphQL Error" : title || "Untitled"}
    errors={errors}
  >
    <ArticleHero
      title={title}
      published={publishedAt}
      updated={_updatedAt}
      author={author.name}
    />

    <ArticleWrapper>{article && <Article {...article} />}</ArticleWrapper>
  </Layout>
);

const Wrapper = styled.div`
  background: rgb(38, 38, 38);
  padding: 6rem 0 14rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
`;

const Content = styled.div`
  max-width: 70rem;
  width: 90%;
  text-align: center;
  flex-direction: column;
`;

const Meta = styled.div`
  border-top: white solid 0.5rem;
  margin: 0 2rem 2rem;
  padding-top: 1rem;
  width: calc(100% - 7rem);
  position: absolute;
  bottom: 0;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;

const MetaContent = styled.div`
  width: 90%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
`;

const Author = styled.span``;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
`;

const Published = styled.span``;

const Updated = styled.span`
  font-style: italic;
  margin-left: 0.25rem;
`;

const ArticleWrapper = styled.div`
  width: 90%;
  max-width: 70rem;
  margin: 4rem auto;
  font-size: 1.5rem;
`;

export default ArticleTemplate;
