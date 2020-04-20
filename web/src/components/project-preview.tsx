import { Link } from "gatsby";
import React from "react";
import BlockText from "./block-text";

const ProjectPreview = ({ slug, title, _rawExcerpt }) => (
  <Link to={`/project/${slug.current}`}>
    <h3>{title}</h3>
    {_rawExcerpt && (
      <div>
        <BlockText blocks={_rawExcerpt} />
      </div>
    )}
  </Link>
);

export default ProjectPreview;
