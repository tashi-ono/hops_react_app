import React, {useState, useContext} from "react";
import SearchBar from "../SearchBar/SearchBar";
import HopList from "../HopList/HopList";
import { DataContext } from "../DataContext/DataContext";
import "./Homepage.scss";

const Homepage = () => {
const [allHopsData] = useContext(DataContext);
const [filteredHops, setFilteredHops] = useState(allHopsData);

// this takes hopInput from the SearchBar component and creates a hop array that matches input
const handleSubmitHomepage=(hopInput)=> {
  const hopName = hopInput.charAt(0).toUpperCase() + hopInput.slice(1);
  const filteredArr = allHopsData.filter((eachHops)=>
    eachHops.name.includes(hopName) 
  )

// this conditional sets HopList props to equal the hops in filteredArr, otherwise all hops are rendered

  filteredArr.length ? setFilteredHops(filteredArr) : setFilteredHops(allHopsData)
  setFilteredHops(filteredArr)
  console.log("filteredArr", filteredArr);

}

  return (
    <div className="homepage-container">
      <div className="homepage-pic">
        <div className="homepage-header-text">
          <h1>HOPickin</h1>
          <h2>Great beer needs great hops</h2>
        </div>
      </div>
      <SearchBar onSubmitHomepage={handleSubmitHomepage}/>
      <HopList hopsArr={filteredHops}/>
    </div>
  );
};

export default Homepage;
