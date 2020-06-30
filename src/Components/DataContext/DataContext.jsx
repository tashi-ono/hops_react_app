import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();
// const myApiKey = "24151686766657a8e26383e3c63f9faa";
const myApiKey = process.env.REACT_APP_API_KEY;
// const hopsDataUrl = `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/hops/?key=${myApiKey}`
const hopsDataUrl = `https://sandbox-api.brewerydb.com/v2/hops/?key=${myApiKey}`;

export const DataProvider = (props) => {
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
    <DataContext.Provider value={[allHopsData, setAllHopsData]}>
      {props.children}
    </DataContext.Provider>
  );
};
