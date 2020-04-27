import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import blockText from "./blockText";
import category from "./category";
import image from "./image";
import article from "./article";
import project from "./project";
import siteSettings from "./siteSettings";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    blockContent,
    blockText,
    category,
    image,
    article,
    project,
    siteSettings,
  ]),
});
