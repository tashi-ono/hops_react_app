import React, { useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";
import { HopContext } from "../HopContext/HopContext";
import HopDetails from "../HopDetails/HopDetails";

import "./HopList.scss";

export const SingleHopContext = createContext();
const HopList = () => {
  const [allHopsData] = useContext(HopContext);
  const [hopDetails, setHopDetails] = useState({});

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

  // const handleClick = (event) => {
  //   console.log(event.target.innerHTML);
  //   let singleHop = allHopsData.filter((hops) => {
  //     return hops.name === event.target.innerHTML;
  //   });
  //   console.log("singleHop from hopList", singleHop[0]);
  //   setHopDetails(singleHop[0]);
  // };

  let displayHopsList = <h1>Loading...</h1>;
  if (allHopsData[0]) {
    displayHopsList = allHopsData.map((hops) => {
      return (
        <Link key={hops.id} to={`/hops/${hops.id}`} style={style}>
          <p
          // onClick={handleClick}
          >
            {hops.name}
          </p>
        </Link>
      );
    });
  }

  return <div className="hop-list-container">{displayHopsList}</div>;
};

export default HopList;
