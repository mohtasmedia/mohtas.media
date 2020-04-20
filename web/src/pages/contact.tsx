import React from "react";
import { graphql } from "gatsby";
import BlockContent from "../components/block-content";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody
    }
  }
`;

const ContactPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data.page;

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    );
  }

  return (
    <Layout>
      <h1>{page.title || "No title"}</h1>
      <BlockContent blocks={page._rawBody || []} />
    </Layout>
  );
};

export default ContactPage;
