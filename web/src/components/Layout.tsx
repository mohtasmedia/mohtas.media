import React from "react";
import LogoBookend from "./LogoBookend";
import Hero from "./Hero";
import Head from "./Head";
import GraphqlError from "./GraphqlError";

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
        <Head title={title} />

        <LogoBookend title={title} />

        <Hero title={title} />

        {children}

        <LogoBookend title={title} orientation="right" />
      </>
    )}
  </>
);

export default LayoutContainer;
