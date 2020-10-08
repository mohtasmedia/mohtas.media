import React from "react";
import styled from "styled-components";
import BlockContent from "../block-content";
import { ArticleHero } from "./Hero";

const Article = ({ title, article: { publishedAt, author, _rawBody } }) => (
  <>
    <ArticleHero title={title} published={publishedAt} author={author.name} />

    <Wrapper>
      <article>{_rawBody && <BlockContent blocks={_rawBody} />}</article>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  width: 90%;
  max-width: 70rem;
  margin: 1.5rem auto;
  font-size: 1rem;

  @media screen and (min-width: 64rem) {
    font-size: 1.125rem;
    margin: 4rem auto;
  }
`;

export default Article;
