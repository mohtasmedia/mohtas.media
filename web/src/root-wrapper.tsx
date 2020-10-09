import React from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { Layout } from "./components";
import { GlobalStyle, theme } from "./theme";

const preconnect = [
  "https://fonts.gstatic.com",
  "https://fonts.googleapis.com",
];

const Head = ({ children }) => {
  const {
    site: { title, twitterHandle },
  } = useStaticQuery(graphql`
    query {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `);

  return (
    <>
      <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
        <html lang="en" />

        <meta property="og:type" content={"website"} />
        <meta name="twitter:card" content={"summary"} />
        <meta name="twitter:creator" content={twitterHandle} />

        {children}
      </Helmet>
    </>
  );
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Head>
      <meta name="theme-color" content="#232323" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {preconnect.map((url, i) => (
        <link key={i} rel="preconnect" href={url} crossOrigin="" />
      ))}

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Layout>{element}</Layout>
  </ThemeProvider>
);
