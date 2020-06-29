import React from "react";
import styled from "styled-components";
import Container from "./Container";

export const Hero = () => (
  <Wrapper>
    <Container>
      <Title>Making Your Project Successful</Title>
      <Text>
        20+ years experience developing software applications for established
        businesses, blue chips and start-ups.
        <br />
        Bringing together the tech, the talent and the experience to develop
        your web, mobile and software applications.
      </Text>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 2rem 0;

  @media screen and (min-width: 64rem) {
    padding: 8rem 0;
  }
`;

const Title = styled.h3`
  margin: 0 0 1.5rem;
  font-size: 2rem;

  @media screen and (min-width: 64rem) {
    font-size: 2.75rem;
    margin: 0 0 2rem;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.25rem;
  border-left: 0.25rem solid black;
  padding: 0.5rem 0;
  padding-left: 2rem;

  &:not(:last-child) {
    margin: 0 0 4rem;
  }

  @media screen and (min-width: 64rem) {
    font-size: 1.75rem;
    padding: 1rem 0;
    padding-left: 4rem;
    border-width: 0.5rem;
  }
`;

export default Hero;
