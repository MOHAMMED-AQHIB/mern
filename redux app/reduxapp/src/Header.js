import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/home">Home </NavLink>
      <NavLink to="/contact">Contact </NavLink>
      <NavLink to="/about">About </NavLink>
    </div>
  );
};

export default Header;