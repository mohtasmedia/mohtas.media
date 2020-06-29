import React from "react";
import styled from "styled-components";
import Container from "./Container";

export const Hero = ({ title }) => (
  <Wrapper>
    <Container wide>
      <Text>
        From concept to launch. <br />
        Successful and scalable mobile, web and desktop apps.
      </Text>
      <Text>Made by {title}.</Text>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  font-family: "Roboto Mono", monospace;
  color: white;
  background-color: rgb(38, 38, 38);
  padding-top: 3rem;
  padding-bottom: 6rem;

  @media screen and (min-width: 64rem) {
    padding-top: 8rem;
    padding-bottom: 15rem;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;

  &:not(:last-child)::not(:only-child) {
    margin: 0 0 2rem;
  }

  @media screen and (min-width: 64rem) {
    font-size: 2.75rem;

    &:not(:last-child) {
      margin: 0 0 4rem;
    }
  }
`;

export default Hero;
