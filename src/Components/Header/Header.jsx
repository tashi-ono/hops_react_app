import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const style = {
  textDecorationLine: "none",
  color: "white",
};

const Header = () => {
  const [toggleQuoteClass, setToggleQuoteClass] = useState("");
  const [toggleNavClass, setToggleNavClass] = useState("hidden");

  const handleBeerClick = (event) => {
    console.log("handle icon click");
    setToggleQuoteClass("visible");
  };

  const handleHamburgerOnClick = (event) => {
    console.log("hamburger click")
    setToggleNavClass("slide-out");
  }

  //  const handleNavClick = (event) => {
  //   setToggleNavClass("hidden");
  // }

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
      <div onClick={handleHamburgerOnClick}  className={`hamburger-nav ${toggleNavClass}`} >
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
      {/* <button onClick={handleNavClick} className="close-nav" >
         X
      </button> */}

      <div className="hidden-beer-icon">
        <img
          src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1593237086/Hops%20React%20Assets/beer-icon_vqoyng.png"
          alt="beer-icon"
          width="40px"
          onClick={handleBeerClick}
        />
      </div>
      <div className={`hidden-beer-quote ${toggleQuoteClass}`}>
        <h5>Beer Makes Us Hoppy</h5>
      </div>
      <Link style={style} to="/varieties">
        <p>All Hops</p>
      </Link>
      <Link style={style} to="/varieties/us">
        <p>US Varieties</p>
       </Link>
      {/*<Link style={style} to="/german-hops">
        <p>German Varieties</p>
      </Link>
      <Link style={style} to="/uk-hops">
        <p>UK Varieties</p>
      </Link> */}
      <Link style={style} to="/varieties/other">
        <p>Other Varieties</p>
      </Link>
      {/* <Link style={style} to="/aa-sort">
        <p>Alpha Acid Sort</p>
      </Link> */}
      <h2>HOPickin</h2>
    </nav>
  );
};

export default Header;
