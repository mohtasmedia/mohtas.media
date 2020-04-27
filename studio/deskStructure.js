import S from "@sanity/desk-tool/structure-builder";
import { GoTag, GoPackage, GoSettings, GoFile } from "react-icons/go";

const hiddenTypes = ["category", "article", "project", "siteSettings"];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Articles")
        .schemaType("article")
        .child(S.documentTypeList("article").title("Articles"))
        .icon(GoFile),
      S.listItem()
        .title("Projects")
        .schemaType("project")
        .child(S.documentTypeList("project"))
        .icon(GoPackage),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories"))
        .icon(GoTag),
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(GoSettings),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
