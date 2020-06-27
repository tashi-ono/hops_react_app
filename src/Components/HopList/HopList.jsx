import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HopList.scss";

const HopList = () => {
  const hopsDataUrl =
    "http://api.brewerydb.com/v2/hops/?key=24151686766657a8e26383e3c63f9faa";

  const [allHopsData, setAllHopsData] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const response = await fetch(hopsDataUrl);
      const jsonData = await response.json();
      console.log("JSON Response: ", jsonData.data);
      setAllHopsData(jsonData.data);
    };
    makeAPICall();
  }, []);

  const style = {
    color: "black",
    fontWeight: "600",
    textDecorationLine: "none",
    display: "inline-block",
    margin: "20px",
    width: "250px",
    borderRadius: "30px",
    backgroundColor: "lightgrey",
  };

  const displayHopsList = allHopsData.map((hops) => {
    return (
      <Link key={hops.id} to={`/hops/${hops.id}`} style={style}>
        <p>{hops.name}</p>
      </Link>
    );
  });
  return <div className="hop-list-container">{displayHopsList}</div>;
};

export default HopList;
