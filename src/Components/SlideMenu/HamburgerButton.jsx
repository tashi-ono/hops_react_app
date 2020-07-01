import React from "react";
import "./HamburgerButton.scss";

const HamburgerButton = (props) => {
  return (
    <button onClick={props.clickHandler} className="hamburger-nav">
      <div className="hamburger-lines"></div>
      <div className="hamburger-lines"></div>
      <div className="hamburger-lines"></div>
    </button>
  );
};

export default HamburgerButton;
