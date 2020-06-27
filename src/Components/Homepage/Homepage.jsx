import React from "react";
import HopList from "../HopList/HopList";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-pic"></div>
      <HopList />
    </div>
  );
};

export default Homepage;
