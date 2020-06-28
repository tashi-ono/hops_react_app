import React, { useState, useEffect } from "react";

import "./HopDetails.scss";

const HopDetails = (props) => {
  const [hopDetails, setHopDetails] = useState({});
  const [country, setCountry] = useState("n/a");

  const makeApiCall = async () => {
    const singleHopUrl = `http://api.brewerydb.com/v2/hop/${props.match.params.id}/?key=24151686766657a8e26383e3c63f9faa`;
    const res = await fetch(singleHopUrl);
    const json = await res.json();
    setHopDetails(json.data);
    setCountry(json.data.country);
  };

  useEffect(() => {
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
