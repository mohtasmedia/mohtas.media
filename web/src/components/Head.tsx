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

const Head = ({
  description = "",
  meta = [],
  keywords = [],
  title,
}: HeadProps) => {
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
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        title={title}
        titleTemplate={title === site.title ? "%s" : `%s | ${site.title}`}
        meta={[
          {
            name: "description",
            content: metaDescription,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: metaDescription,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:creator",
            content: site.twitterHanlde || "@mohtasmedia",
          },
          {
            name: "twitter:title",
            content: title,
          },
          {
            name: "twitter:description",
            content: metaDescription,
          },
        ]
          .concat(
            keywords && keywords.length > 0
              ? {
                  name: "keywords",
                  content: keywords.join(", "),
                }
              : []
          )
          .concat(meta)}
      >
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <GlobalStyle />
    </>
  );
};

export default Head;
