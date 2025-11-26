import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className="nav-item">
        <span>Home</span>
      </NavLink>
      <NavLink to="/favorites" className="nav-item">
        <span>Favorites</span>
      </NavLink>
      <NavLink to="/tips" className="nav-item">
        <span>Tips</span>
      </NavLink>
      <NavLink to="/profile" className="nav-item">
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default NavBar;
