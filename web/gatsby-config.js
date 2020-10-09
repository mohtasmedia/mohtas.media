/* eslint-disable @typescript-eslint/camelcase */
require("dotenv").config();

function requireConfig() {
  try {
    return require("../studio/sanity.json");
  } catch (e) {
    console.error(
      "Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js"
    );
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || "",
        dataset: process.env.SANITY_DATASET || "",
      },
    };
  }
}

const {
  api: { projectId, dataset },
} = requireConfig("../studio/sanity.json");

module.exports = {
  plugins: [
    "gatsby-plugin-preload-link-crossorigin",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-subfont",
      options: {
        silent: true,
        fallback: false,
        inlineFonts: true,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
        token: process.env.SANITY_TOKEN,
        // watchMode: true,
        // overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Mohtas Media",
        short_name: "Mohtas",
        start_url: "/",
        background_color: "#262626",
        theme_color: "#fff",
        display: "standalone",
        icon: "static/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
};
