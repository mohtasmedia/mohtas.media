import React from "react";
import LogoBookend from "./LogoBookend";
import styled from "styled-components";

const LayoutContainer = ({
  children,
}: {
  children: React.ReactNode;
  errors?: any;
}) => (
  <>
    <Wrapper>
      <LogoBookend />

      {children}
    </Wrapper>

    <LogoBookend orientation="right" />
  </>
);

const Wrapper = styled.div`
  min-height: calc(100vh - 7.3125rem);

  @media screen and (min-width: 64rem) {
    min-height: calc(100vh - 8.125rem);
  }
`;

export default LayoutContainer;
