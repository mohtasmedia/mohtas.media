import sanityConfig from "../../../studio/sanity.json";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityConfig.api);

export const imageUrlFor = (source) => builder.image(source);
