import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { Icon as IconBase } from "./icons";

export const Hero = () => (
  <Wrapper>
    <Container wide>
      <Title>Our services</Title>

      <List>
        <Item>
          <Icon symbol="web-development" />
          Web development
        </Item>

        <Item>
          <Icon symbol="mobile-development" />
          Mobile development
        </Item>

        <Item>
          <Icon symbol="development-consulting" />
          Development consulting
        </Item>

        <Item>
          <Icon symbol="product-design" />
          Product design
        </Item>
      </List>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: rgb(38, 38, 38);
  padding: 2rem 0;
  color: white;
  fill: white;

  @media screen and (min-width: 64rem) {
    padding: 8rem 0;
  }
`;

const Title = styled.h3`
  margin: 0 0 2rem;
  font-size: 2rem;

  @media screen and (min-width: 64rem) {
    font-size: 2.75rem;
    margin: 0 0 4rem;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: -1rem;

  @media screen and (min-width: 40rem) {
    flex-direction: row;
  }

  @media screen and (min-width: 64rem) {
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 40rem) {
    width: 50%;
  }

  @media screen and (min-width: 64rem) {
    width: 25%;
    margin-bottom: 0;
    font-size: 1.5rem;
  }
`;

const Icon = styled(IconBase)`
  width: 6rem;
  display: block;
  margin-bottom: 1rem;

  @media screen and (min-width: 64rem) {
    width: 8rem;
  }
`;

export default Hero;
