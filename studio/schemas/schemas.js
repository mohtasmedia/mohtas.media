import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import blockText from "./blockText";
import category from "./category";
import companyInfo from "./companyInfo";
import figure from "./figure";
import mainImage from "./mainImage";
import page from "./page";
import person from "./person";
import post from "./post";
import postAuthor from "./postAuthor";
import project from "./project";
import projectMember from "./projectMember";
import siteSettings from "./siteSettings";
import slideshow from "./slideshow";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    blockContent,
    blockText,
    category,
    companyInfo,
    figure,
    mainImage,
    page,
    person,
    post,
    postAuthor,
    project,
    projectMember,
    siteSettings,
    slideshow,
  ]),
});
