import React, { useState, useEffect } from "react";
import "./HopDetails.scss";

const HopDetails = (props) => {
  const [hopDetails, setHopDetails] = useState({});
  const [country, setCountry] = useState("n/a");

  useEffect(() => {
    const makeApiCall = async () => {
      const myApiKey = process.env.REACT_APP_API_KEY;
      const singleHopUrl = `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/hop/${props.match.params.id}/?key=${myApiKey}`;

      //backup fetch call
      // const singleHopUrl = `https://sandbox-api.brewerydb.com/v2/hop/${props.match.params.id}/?key=${myApiKey}`;
      const res = await fetch(singleHopUrl);
      const json = await res.json();
      setHopDetails(json.data);
      setCountry(json.data.country);
    };

    makeApiCall();
  }, [props]);

  let displayCountry = country ? country.displayName : "not available";

  let description = hopDetails.description
    ? hopDetails.description
    : "not available";
  return (
    <div className="hop-details">
      <h2>{hopDetails.name}</h2>
      <p>
        <strong>Country: </strong>
        {displayCountry}{" "}
      </p>
      <p>
        <strong>Description:</strong> <br />
        {description}{" "}
      </p>
      <p>
        <strong>Alpha Acid:</strong> {hopDetails.alphaAcidMin}-
        {hopDetails.alphaAcidMax}%
      </p>
    </div>
  );
};

export default HopDetails;
