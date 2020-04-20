import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

const Figure = ({ asset, alt, caption, ...props }: any) => (
  <figure>
    {asset && (
      <img
        src={imageUrlFor(buildImageObj({ asset, ...props }))
          .width(1200)
          .url()}
        alt={alt}
      />
    )}
    <figcaption>{caption}</figcaption>
  </figure>
);

export default Figure;
