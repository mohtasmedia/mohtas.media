import React from "react";
import { Helmet } from "react-helmet";

interface SeoProps {
  description: string;
  title: string;
  keywords: string[];
}

export const Seo = ({ description, keywords, title }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />

    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:description" content={description} />

    <meta name="keywords" content={keywords?.join(", ")} />
  </Helmet>
);
