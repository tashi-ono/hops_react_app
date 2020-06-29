import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import HopList from "../HopList/HopList";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-pic">
        <div className="homepage-header-text">
          <h1>HOPickin</h1>
          <h2>Great beer needs great hops</h2>
        </div>
      </div>
      <SearchBar />
      <HopList />
    </div>
  );
};

export default Homepage;
