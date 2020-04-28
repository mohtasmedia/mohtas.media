import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body { 
    margin: 0;
    height: 100%;
    min-height: 100%;
    color: #0d0d0d;
    font-family: 'Courier Prime', monospace;
    background-color: #0d0d0d;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
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

const preconnect = [
  "https://fonts.gstatic.com",
  "https://fonts.googleapis.com",
];

const Head = ({ description = "", keywords = [], title }: HeadProps) => {
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

      <Helmet titleTemplate={`%s | ${site.title}`}>
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

        {preconnect.map((url, i) => (
          <link key={i} rel="preconnect" href={url} crossOrigin="" />
        ))}

        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  );
};

export default Head;
