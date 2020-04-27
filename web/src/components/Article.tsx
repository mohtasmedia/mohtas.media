import React from "react";
import BlockContent from "./block-content";

const Article: React.FunctionComponent<any> = ({ _rawBody, title }) => (
  <article>
    <h1>{title}</h1>
    {_rawBody && <BlockContent blocks={_rawBody} />}
  </article>
);

export default Article;
