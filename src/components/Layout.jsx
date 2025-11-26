import React from "react";
import NavBar from "./NavBar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="app-root">
      <div className="app-shell">
        <header className="app-header">
          <h1 className="app-logo">PawMatch</h1>
        </header>

        <main className="app-main">{children}</main>

        <NavBar />
      </div>
    </div>
  );
};

export default Layout;
