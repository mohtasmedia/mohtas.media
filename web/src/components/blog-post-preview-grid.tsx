import React from "react";
import BlogPostPreview from "./blog-post-preview";

interface Props {
  title?: string;
  nodes: any[];
}

const BlogPostPreviewGrid: React.FunctionComponent<Props> = ({
  title = "",
  nodes = [],
}) => (
  <div>
    {title && <h2>{title}</h2>}
    <ul>
      {nodes &&
        nodes.map((node) => (
          <li key={node.id}>
            <BlogPostPreview {...node} />
          </li>
        ))}
    </ul>
  </div>
);

export default BlogPostPreviewGrid;
