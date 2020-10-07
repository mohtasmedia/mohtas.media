import React from "react";
import BlockContent from "./block-content";

const Article: React.FunctionComponent<any> = ({ _rawBody }) => (
  <article>{_rawBody && <BlockContent blocks={_rawBody} />}</article>
);

export default Article;
