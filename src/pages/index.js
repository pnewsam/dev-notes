import * as React from "react";
import "styles/base.css";
import "bulma/css/bulma.min.css";
import { graphql } from "graphql";
import Layout from "components/Layout";

const IndexPage = () => {
  // console.log(data);
  return (
    <Layout>
      <title>Home Page</title>
      <h1>Home</h1>
    </Layout>
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
