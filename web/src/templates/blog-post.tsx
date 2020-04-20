import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPost from "../components/blog-post";
import Seo from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      authors {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`;

const BlogPostTemplate = ({ data: { post }, errors }) => (
  <Layout>
    {errors && <Seo title="GraphQL Error" />}
    {post && <Seo title={post.title || "Untitled"} />}

    {errors && <GraphQLErrorList errors={errors} />}

    {post && <BlogPost {...post} />}
  </Layout>
);

export default BlogPostTemplate;
