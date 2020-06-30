import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext/DataContext";
import "./SortedLists.scss";

export const USList = () => {
  const [allHopsData] = useContext(DataContext);
  console.log(allHopsData);

  //   let displayHopsList = <h4>Loading...</h4>;

  //   displayHopsList = allHopsData.filter(
  //     (eachHops) => eachHops.countryOfOrigin === "US"
  //   );
  //   if (displayHopsList) {
  //     return allHopsData.map((hops) => {
  //       return (
  //         <Link key={hops.id} to={`/hops/${hops.id}`}>
  //           <p className="hop-name">{hops.name}</p>
  //         </Link>
  //       );
  //     });
  //   }
  return (
    <div className="sorted-list-container">
      <h2>US Varieties</h2>
      {/* {displayHopsList} */}
    </div>
  );
};

export const OtherList = () => {
  return (
    <div className="sorted-list-container">
      <h2>Other Varieties</h2>
      {/* {displayHopsList} */}
    </div>
  );
};
