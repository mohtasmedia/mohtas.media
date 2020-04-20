import React from "react";

const GraphQLErrorList = ({ errors }) => (
  <>
    <h1>GraphQL Error</h1>
    {errors.map(({ message }) => (
      <pre key={message}>{message}</pre>
    ))}
  </>
);

export default GraphQLErrorList;
