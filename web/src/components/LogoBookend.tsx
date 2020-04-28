import React from "react";
import { Link as LinkBase } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const LogoBookend = ({
  title,
  orientation = "left",
}: {
  title: string;
  orientation?: "left" | "right";
}) => (
  <Wrapper orientation={orientation}>
    <Link to="/">
      <Logo title={title} height={80} />
    </Link>
  </Wrapper>
);

const Link = styled(LinkBase)`
  color: white;
  background-color: #0d0d0d;
  padding-right: 0;
  display: block;
  margin: 2rem;
`;

const Wrapper = styled.nav`
  background-color: #0d0d0d;
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
    height: 8px;
    width: calc(100% - 12rem);
    background-color: white;
  }

  ${Link} {
    ${({ orientation }) =>
      orientation === "right" ? "margin-left: 0;" : "margin-right: 0"};
  }
`;

export default LogoBookend;
