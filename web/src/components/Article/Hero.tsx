import React from "react";
import format from "date-fns/format";
import styled from "styled-components";

export const ArticleHero = ({ title, author, published }) => (
  <Wrapper>
    <Content>
      <Title>{title}</Title>
    </Content>

    <Meta>
      <MetaContent>
        <span>{author}</span>
        <span>{format(new Date(published), "dd MMM yyyy")}</span>
      </MetaContent>
    </Meta>
  </Wrapper>
);

const Wrapper = styled.div`
  background: rgb(38, 38, 38);
  padding: 1rem 0 6rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;

  @media screen and (min-height: 50rem) and (max-width: 64rem) {
    padding: 3rem 0 8rem;
  }

  @media screen and (min-width: 64rem) {
    padding: 3rem 0 10rem;
  }

  @media screen and (min-height: 50rem) and (min-width: 64rem) {
    padding: 6rem 0 14rem;
  }
`;

const Content = styled.div`
  max-width: 70rem;
  width: 90%;
  text-align: center;
  flex-direction: column;
`;

const Meta = styled.div`
  border-top: white solid 0.25rem;
  margin: 0 1rem 1rem;
  padding-top: 1rem;
  width: calc(100% - 2rem);
  position: absolute;
  bottom: 0;
  font-size: 1rem;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 64rem) {
    margin: 0 2rem 2rem;
    border-top-width: 0.5rem;
    font-size: 1.25rem;
    width: calc(100% - 7rem);
  }
`;

const MetaContent = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;

  @media screen and (min-height: 50rem) and (max-width: 64rem) {
    font-size: 2rem;
  }

  @media screen and (min-width: 64rem) {
    font-size: 2.5rem;
  }
`;
