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
  padding: 4rem 2rem;
  color: white;
  fill: white;

  @media screen and (min-width: 64rem) {
    padding: 10rem 2rem;
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
  justify-content: space-between;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;

const Icon = styled(IconBase)`
  width: 8rem;
  display: block;
  margin-bottom: 1rem;
`;

export default Hero;
