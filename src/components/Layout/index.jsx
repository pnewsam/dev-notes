import styled from "styled-components";
import React from "react";
import { Helmet } from "react-helmet";
import SideNav from "../SideNav";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
`;

const Section = styled.section`
  padding: 40px;
`;

export const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>{"My Website"}</title>
      <meta name="description" content={""} />
      <link
        rel="stylesheet"
        href="https://d162l99amukxws.cloudfront.net/style.css"
      />
    </Helmet>
    <Wrapper>
      <SideNav />
      <main>
        <Section>
          <div>{children}</div>
        </Section>
      </main>
    </Wrapper>
  </>
);

export default Layout;
