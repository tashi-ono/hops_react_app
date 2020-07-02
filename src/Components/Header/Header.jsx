import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../SlideMenu/HamburgerButton";
import "./Header.scss";

const style = {
  textDecorationLine: "none",
  color: "white",
};

const Header = (props) => {
  const [beerQuote, setBeerQuote] = useState(false);

  const handleBeerClick = (event) => {
    setBeerQuote(!beerQuote);
  };

  return (
    <nav className="header-nav-bar">
      <Link to="/">
        <img
          className="hop-cone-img"
          src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1593207548/Hops%20React%20Assets/hop-cone_wio19t.png"
          alt="hop-cone"
          width="50px"
        />
      </Link>
      <HamburgerButton clickHandler={props.handleSlideMenu} />

      <div className="hidden-beer-icon">
        <img
          src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1593237086/Hops%20React%20Assets/beer-icon_vqoyng.png"
          alt="beer-icon"
          width="40px"
          onClick={handleBeerClick}
        />
      </div>
      <div className={`hidden-beer-quote ${beerQuote ? "visible" : ""}`}>
        <h5>Beer Makes Us Hoppy</h5>
      </div>
      <Link style={style} to="/">
        <p onClick={() => window.location.reload(false)}>All Hops</p>
      </Link>
      <Link style={style} to="/varieties/us">
        <p>US Varieties</p>
      </Link>
      <Link style={style} to="/varieties/other">
        <p>Other Varieties</p>
      </Link>
      <Link style={style} to="/about">
        <p>About</p>
      </Link>
      <h2>HOPickin</h2>
    </nav>
  );
};

export default Header;
