import styled from "styled-components";
import React from "react";
import SideNav from "../SideNav";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
`;

export const Layout = ({ children }) => (
  <Wrapper>
    <SideNav />
    <main>
      <section className="section">
        <div className="content">{children}</div>
      </section>
    </main>
  </Wrapper>
);

export default Layout;
