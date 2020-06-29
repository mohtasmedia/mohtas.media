import React from "react";
import { Link as LinkBase } from "gatsby";
import styled from "styled-components";
import LogoBase from "./Logo";

const LogoBookend = ({
  orientation = "left",
}: {
  orientation?: "left" | "right";
}) => (
  <Wrapper orientation={orientation}>
    <Link to="/">
      <Logo />
    </Link>
  </Wrapper>
);

const Link = styled(LinkBase)`
  color: white;
  background-color: rgb(38, 38, 38);
  padding-right: 0;
  display: block;
  margin: 2rem;
`;

const Logo = styled(LogoBase)`
  width: 4rem;

  @media screen and (min-width: 64rem) {
    width: 5rem;
  }
`;

const Wrapper = styled.nav`
  background-color: rgb(38, 38, 38);
  width: 100%;
  display: flex;
  align-items: baseline;
  flex-direction: ${({ orientation }) =>
    orientation === "right" && "row-reverse"};
  margin: 0;
  padding: 0;

  &:after {
    content: "";
    display: block;
    height: 0.25rem;
    width: calc(100% - 8rem);
    background-color: white;

    @media screen and (min-width: 64rem) {
      height: 0.5rem;
      width: calc(100% - 10rem);
    }
  }

  ${Link} {
    ${({ orientation }) =>
      orientation === "right" ? "margin-left: 0;" : "margin-right: 0"};
  }
`;

export default LogoBookend;
