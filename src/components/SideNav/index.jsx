import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

export default function SideNav() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const {
          allSitePage: { edges },
        } = data;
        return (
          <nav
            style={{
              backgroundColor: "gainsboro",
              color: "white",
            }}
          >
            {edges.map(({ node }) => (
              <div key={node.id}>
                <Link to={node.path}>{node.path}</Link>
              </div>
            ))}
          </nav>
        );
      }}
    ></StaticQuery>
  );
}

const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`;
