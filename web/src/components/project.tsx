import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import RoleList from "./role-list";

const Project = ({ _rawBody, title, categories, mainImage, members }) => (
  <article>
    {mainImage && mainImage.asset && (
      <div>
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit("crop")
            .url()}
          alt={mainImage.alt}
        />
      </div>
    )}
    <div>
      <div>
        <h1>{title}</h1>
        {_rawBody && <BlockContent blocks={_rawBody || []} />}
      </div>
      <aside>
        {members && <RoleList items={members} title="Authors" />}
        {categories && (
          <div>
            <h3>Categories</h3>
            <ul>
              {categories.map(({ _id, title }) => (
                <li key={_id}>{title}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  </article>
);

export default Project;
