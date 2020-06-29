import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext/DataContext";

import "./HopList.scss";

const HopList = (props) => {
  const [allHopsData] = useContext(DataContext);
  // console.log("HOpList props", props.hopsArr[0]);
let displayHopsList = <h2>Loading...</h2>;

// if props have been passed down as a search input, then render that hop name
if(props.hopsArr[0]) {
  displayHopsList = props.hopsArr.map((hops)=>{
    return (
      <Link key={hops.id} to={`/hops/${hops.id}`}>
        <p className="hop-name">{hops.name}</p>
      </Link>
    );
  })

  // otherwise, render the whole hop list
} else {
  displayHopsList = allHopsData.map((hops) => {
      return (
        <Link key={hops.id} to={`/hops/${hops.id}`}>
          <p className="hop-name">{hops.name}</p>
        </Link>
      )
    });
}

  return (<div className="hop-list-container">
  {displayHopsList}
  </div>);
};

export default HopList;
