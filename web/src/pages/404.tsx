import React from "react";
import Seo from "../components/seo";
import Layout from "../containers/layout";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>Not found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
