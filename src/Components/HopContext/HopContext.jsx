import React, { useState, useEffect, createContext } from "react";

export const HopContext = createContext();
const hopsDataUrl =
  "http://api.brewerydb.com/v2/hops/?key=24151686766657a8e26383e3c63f9faa";

export const HopsProvider = (props) => {
  const [allHopsData, setAllHopsData] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const response = await fetch(hopsDataUrl);
      const jsonData = await response.json();
      //   console.log("JSON Response: ", jsonData.data);
      setAllHopsData(jsonData.data);
    };
    makeAPICall();
  }, []);

  return (
    <HopContext.Provider value={[allHopsData, setAllHopsData]}>
      {props.children}
    </HopContext.Provider>
  );
};
