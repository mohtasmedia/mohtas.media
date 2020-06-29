import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotomono/v11/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngMUXZYTXPIvIBgJJSb6ufN5qU.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body { 
    margin: 0;
    height: 100%;
    min-height: 100%;
    color: rgb(38, 38, 38);
    font-family: 'Roboto Slab', monospace;
    background-color: white;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

interface HeadProps {
  description?: string;
  title?: string;
  meta?: any[];
  keywords?: string[];
}

const Head = ({ description = "", keywords = [], title = "" }: HeadProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        description
        keywords
      }
    }
  `);

  const metaDescription = description || site.description;

  return (
    <>
      <GlobalStyle />

      <Helmet defaultTitle={site.title} titleTemplate={`%s | ${site.title}`}>
        <html lang="en" />
        <title>{title}</title>
        <meta property="og:type" content={"website"} />
        <meta name="twitter:card" content={"summary"} />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:creator" content={site.twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Helmet>
    </>
  );
};

export default Head;
