import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { getBlogUrl } from "../lib/helpers";
import BlockText from "./BlockText";
import Container from "./Container";

interface Props {
  title?: string;
  nodes: any[];
}

const ArticleGrid: React.FunctionComponent<Props> = ({ nodes = [] }) => (
  <Wrapper>
    <Content>
      <Title>Latest articles</Title>

      <ArticleList>
        {nodes &&
          nodes.map(({ id, title, slug, _rawExcerpt }) => (
            <li key={id}>
              <Link to={getBlogUrl(slug)}>
                <ArticleTitle>{title}</ArticleTitle>
                {_rawExcerpt && <BlockText blocks={_rawExcerpt} />}
              </Link>
            </li>
          ))}
      </ArticleList>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: white;
`;

const Content = styled(Container)`
  padding: 0 0 7.5rem;
  max-width: 97rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 2rem;
  padding: 1rem 2rem 0.75rem;
  text-align: center;
  border-top: 0.25rem #0d0d0d solid;
  border-bottom: 0.25rem #0d0d0d solid;
  display: inline-block;
  margin: 5rem 0 0;
  position: relative;
  text-transform: uppercase;

  &::before {
    content: "";
    display: block;
    width: 0.25rem;
    height: 5rem;
    background-color: #0d0d0d;
    margin: 0 auto;
    position: absolute;
    top: -5.25rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ArticleList = styled.ul`
  width: 100%;
  font-size: 1.25rem;
  padding: 3rem 0 0;
  display: flex;
  flex-wrap: wrap;

  a {
    color: #0d0d0d;
    text-decoration: none;
    display: block;
  }

  li {
    width: calc(33% - 1rem);
    transition: transform 0.3s ease-out;
    position: relative;
    z-index: 2;
    margin: 0.5rem;

    &:before {
      z-index: -1;
      display: block;
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      transition: opacity 0.1s ease-out;
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.15);
      opacity: 0;
    }
  }

  li:hover {
    transform: scale(1.02);

    &:before {
      opacity: 1;
    }
  }

  p {
    margin: 0;
    padding: 0 2rem 2rem;
  }

  span {
    display: block;
    padding: 0 2rem 1rem;
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  padding: 2rem 0 1rem;
  margin: 0 2rem 1rem;
  border-bottom: 2px solid #0d0d0d;
`;

export default ArticleGrid;
