import { Link } from "gatsby";
import React from "react";
import { getBlogUrl } from "../lib/helpers";
import BlockText from "./block-text";

interface BlogPostPreviewProps {
  title: string;
  _rawExcerpt: any;
  slug: {
    current: string;
  };
}

const BlogPostPreview: React.FunctionComponent<BlogPostPreviewProps> = ({
  title,
  _rawExcerpt,
  slug,
}) => (
  <Link to={getBlogUrl(slug)}>
    <h3>{title}</h3>
    {_rawExcerpt && (
      <div>
        <BlockText blocks={_rawExcerpt} />
      </div>
    )}
  </Link>
);

export default BlogPostPreview;
