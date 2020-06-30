import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext/DataContext";
import "./SortedLists.scss";

export const USList = () => {
  const [allHopsData] = useContext(DataContext);
  console.log(allHopsData);

  let displayUsHops = <h4>Loading...</h4>;

  let foundUsHops = allHopsData.filter(
    (eachHops) => eachHops.countryOfOrigin === "US"
  );

  if (foundUsHops) {
    displayUsHops = foundUsHops.map((hops) => {
      return (
        <Link key={hops.id} to={`/hops/${hops.id}`}>
          <p className="hop-name">{hops.name}</p>
        </Link>
      );
    });
  }
  return (
    <div className="sorted-list-container">
      <h3>US Varieties</h3>
      {displayUsHops}
    </div>
  );
};

export const OtherList = () => {
  const [allHopsData] = useContext(DataContext);
  console.log(allHopsData);

  let displayOtherHops = <h4>Loading...</h4>;

  let foundOtherHops = allHopsData.filter(
    (eachHops) => eachHops.countryOfOrigin !== "US"
  );

  if (foundOtherHops) {
    displayOtherHops = foundOtherHops.map((hops) => {
      return (
        <Link key={hops.id} to={`/hops/${hops.id}`}>
          <p className="hop-name">{hops.name}</p>
        </Link>
      );
    });
  }
  return (
    <div className="sorted-list-container">
      <h3>Other Varieties</h3>
      {displayOtherHops}
    </div>
  );
};
