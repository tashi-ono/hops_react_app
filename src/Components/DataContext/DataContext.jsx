import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();
const myApiKey = process.env.REACT_APP_API_KEY;
const hopsDataUrl = `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/hops/?key=${myApiKey}`;

// backup fetch call
// const hopsDataUrl = `https://sandbox-api.brewerydb.com/v2/hops/?key=${myApiKey}`;

export const DataProvider = (props) => {
  const [allHopsData, setAllHopsData] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const response = await fetch(hopsDataUrl);
      const jsonData = await response.json();
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
