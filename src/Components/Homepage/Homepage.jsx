import React from "react";
import HopList from "../HopList/HopList";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-pic">
        <div className="homepage-header-text">
          <h1>HOPickin</h1>
          <h3>Great beer needs great hops</h3>
        </div>
      </div>
      <HopList />
    </div>
  );
};

export default Homepage;
