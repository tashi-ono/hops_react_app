import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const style = {
  textDecorationLine: "none",
  color: "white",
};

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
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
      <img
        className="hidden-beer-icon"
        src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1593237086/Hops%20React%20Assets/beer-icon_vqoyng.png"
        alt="beer-icon"
        width="40px"
      />
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
