import React from "react";
import LogoBookend from "./LogoBookend";
import Head from "./Head";
import GraphqlError from "./GraphqlError";
import styled from "styled-components";

const LayoutContainer = ({
  children,
  title,
  errors,
}: {
  children: React.ReactNode;
  title?: string;
  errors?: any;
}) => (
  <>
    {errors ? (
      <GraphqlError errors={errors} />
    ) : (
      <>
        <Wrapper>
          <Head title={title} />

          <LogoBookend />

          {children}
        </Wrapper>

        <LogoBookend orientation="right" />
      </>
    )}
  </>
);

const Wrapper = styled.div`
  min-height: calc(100vh - 7.3125rem);

  @media screen and (min-width: 64rem) {
    min-height: calc(100vh - 8.125rem);
  }
`;

export default LayoutContainer;
