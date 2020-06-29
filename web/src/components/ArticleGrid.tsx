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
  padding: 1rem 2rem;
  text-align: center;
  border-top: 0.25rem rgb(38, 38, 38) solid;
  border-bottom: 0.25rem rgb(38, 38, 38) solid;
  display: inline-block;
  margin: 5rem 0 0;
  position: relative;
  text-transform: uppercase;

  &::before {
    content: "";
    display: block;
    width: 0.25rem;
    height: 5rem;
    background-color: rgb(38, 38, 38);
    margin: 0 auto;
    position: absolute;
    top: -5.25rem;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 64rem) {
      width: 0.5rem;
      top: -5.5rem;
    }
  }

  @media screen and (min-width: 64rem) {
    border-width: 0.5rem;
  }
`;

const ArticleList = styled.ul`
  width: 100%;
  font-size: 1.25rem;
  padding: 3rem 0;

  a {
    color: rgb(38, 38, 38);
    text-decoration: none;
    display: block;
  }

  li {
    transition: transform 0.3s ease-out;
    position: relative;
    z-index: 2;
    margin: 0.5rem;
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
    color: rgb(100, 100, 100);
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.75rem;
  padding: 2rem 0 1rem;
  margin: 0 2rem;
  font-family: "Roboto Slab", monospace;
`;

export default ArticleGrid;
