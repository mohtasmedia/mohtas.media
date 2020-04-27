import BaseBlockContent from "@sanity/block-content-to-react";
import React from "react";

const serializers = {
  types: {
    block({ node, children }) {
      switch (node.style) {
        default:
          return <p>{children}</p>;
      }
    },
  },
};

interface Props {
  blocks: {
    children: React.ReactNodeArray;
  };
}

const BlockText: React.FunctionComponent<Props> = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
);

export default BlockText;
