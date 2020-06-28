import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const style = {
  textDecorationLine: "none",
  color: "white",
};

const Header = () => {
  const [quoteClass, setQuoteClass] = useState("");

  const handleBeerClick = (event) => {
    console.log("handle icon click");
    setQuoteClass("visible");
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
          className="hop-cone-img"
          src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1593207548/Hops%20React%20Assets/hop-cone_wio19t.png"
          alt="hop-cone"
          width="50px"
        />
      </Link>
      <div className="hamburger-nav">
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
      <div className="hidden-beer-icon">
        <img
          src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1593237086/Hops%20React%20Assets/beer-icon_vqoyng.png"
          alt="beer-icon"
          width="40px"
          onClick={handleBeerClick}
        />
      </div>
      <div className={`hidden-beer-quote ${quoteClass}`}>
        <h5>Beer Makes Me Hoppy</h5>
      </div>
      <Link style={style} to="/all-hops">
        <p>All Hops</p>
      </Link>
      <Link style={style} to="/us-hops">
        <p>US Varieties</p>
      </Link>
      <Link style={style} to="/german-hops">
        <p>German Varieties</p>
      </Link>
      <Link style={style} to="/uk-hops">
        <p>UK Varieties</p>
      </Link>
      <Link style={style} to="/other-hops">
        <p>Other Varieties</p>
      </Link>

      <Link style={style} to="/aa-sort">
        <p>Alpha Acid Sort</p>
      </Link>
      <h2>HOPickin</h2>
    </nav>
  );
};

export default Header;
