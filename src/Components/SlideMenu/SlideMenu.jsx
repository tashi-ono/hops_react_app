import React from "react";
import { Link } from "react-router-dom";
import "./SlideMenu.scss";

const style = {
  textDecorationLine: "none",
  color: "white",
};

const SlideMenu = (props) => {
  return (
    <nav className="slide-nav-container" onClick={props.handleCloseMenu}>
      <Link style={style} to="/">
        <p>All Hops</p>
      </Link>
      <Link style={style} to="/varieties/us">
        <p>US Varieties</p>
      </Link>
      <Link style={style} to="/varieties/other">
        <p>Other Varieties</p>
      </Link>
      <Link style={style} to="/about">
        <p>About</p>
      </Link>
    </nav>
  );
};

export default SlideMenu;
