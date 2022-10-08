import styled from "styled-components";
import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { capitalize } from "lodash";

const generateNestedPaths = (nodes) =>
  nodes.reduce((acc, node) => {
    const { path } = node;
    const trimmed = path.substring(1, path.length - 1);
    const [folder, label] = trimmed.split("/");
    if (!label) return acc;

    if (acc[folder]) {
      acc[folder] = [...acc[folder], { ...node, label }];
    } else {
      acc[folder] = [{ ...node, label }];
    }
    return acc;
  }, {});

const Aside = styled.aside`
  border-right: solid 1px gainsboro;
  padding: 20px;
`;

const SideNav = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const {
        allSitePage: { edges },
      } = data;

      const nodes = edges.map(({ node }) => node);
      const formattedNodes = generateNestedPaths(nodes) || {};

      console.log({
        nodes,
        edges,
        formattedNodes: generateNestedPaths(nodes),
      });
      return (
        <Aside>
          {Object.entries(formattedNodes).map(([folder, paths]) => (
            <>
              <h4>{folder.split("-").map(capitalize).join(" ")}</h4>
              <menu>
                {paths.map(({ id, path, label }) => (
                  <li key={id}>
                    <Link to={path}>
                      {label.split("-").map(capitalize).join(" ")}
                    </Link>
                  </li>
                ))}
              </menu>
            </>
          ))}
        </Aside>
      );
    }}
  />
);

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

export default SideNav;
