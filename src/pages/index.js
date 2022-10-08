import * as React from "react";
import "styles/base.css";
import { graphql } from "graphql";
import Layout from "components/Layout";

const IndexPage = () => {
  return (
    // <Layout>
    <>
      <title>Home Page</title>
      <h1>Home</h1>
    </>
    // </Layout>
  );
};

// const query = graphql`
//   query {
//     allSitePage {
//       edges {
//         node {
//           id
//           path
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
