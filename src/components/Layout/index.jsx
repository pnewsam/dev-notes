import React from "react";
import SideNav from "../SideNav";

export const Layout = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      minHeight: "100vh",
    }}
  >
    <SideNav></SideNav>
    <main>
      <section className="section">
        <div className="content">{children}</div>
      </section>
    </main>
  </div>
);

export default Layout;
