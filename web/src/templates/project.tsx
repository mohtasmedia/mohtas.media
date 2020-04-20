import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Project from "../components/project";
import Seo from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
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
      members {
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

interface Props {
  data: {
    project: any;
  };
  errors: Error;
}

const ProjectTemplate: React.FunctionComponent<Props> = ({
  data: { project },
  errors,
}) => (
  <Layout>
    {errors && <Seo title="GraphQL Error" />}
    {project && <Seo title={project.title || "Untitled"} />}

    {errors && <GraphQLErrorList errors={errors} />}
    {project && <Project {...project} />}
  </Layout>
);

export default ProjectTemplate;
