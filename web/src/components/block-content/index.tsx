import BaseBlockContent from "@sanity/block-content-to-react";
import React from "react";
import Figure from "./figure";
import Slideshow from "./slideshow";

const serializers = {
  types: {
    block({ children, node }) {
      switch (node.style) {
        case "h1":
          return <h1>{children}</h1>;

        case "h2":
          return <h2>{children}</h2>;

        case "h3":
          return <h3>{children}</h3>;

        case "h4":
          return <h4>{children}</h4>;

        case "blockquote":
          return <blockquote>{children}</blockquote>;

        default:
          return <p>{children}</p>;
      }
    },
    figure({ node }) {
      return <Figure {...node} />;
    },
    slideshow({ node }) {
      return <Slideshow {...node} />;
    },
  },
};

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
);

export default BlockContent;
