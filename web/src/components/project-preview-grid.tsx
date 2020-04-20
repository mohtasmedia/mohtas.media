import React from "react";
import ProjectPreview from "./project-preview";

const ProjectPreviewGrid = ({ title = "", nodes = [] }) => (
  <>
    {title && <h2>{title}</h2>}
    <ul>
      {nodes &&
        nodes.map(({ id, ...node }) => (
          <li key={id}>
            <ProjectPreview {...node} />
          </li>
        ))}
    </ul>
  </>
);

export default ProjectPreviewGrid;
