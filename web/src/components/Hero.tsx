import React from "react";
import styled from "styled-components";
import Container from "./Container";

export const Hero = ({ title }) => (
  <Wrapper>
    <Text>
      From concept to launch. <br />
      Successful and scalable mobile, web and desktop apps.
    </Text>
    <Text>{`Made by ${title}.`}</Text>
  </Wrapper>
);

const Wrapper = styled(Container)`
  padding: 8rem 2rem 15rem;
  max-width: 95rem;
  font-size: 2.75rem;
  position: relative;
  color: white;

  a {
    color: white;
  }
`;

const Text = styled.h3`
  margin: 0;

  &:not(:last-child) {
    margin: 0 0 4rem;
  }
`;

export default Hero;
