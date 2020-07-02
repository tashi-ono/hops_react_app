import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const [hopInput, setHopInput] = useState("");


  // this takes input from UI search bar
  const handleChange = (event) => {
    const userInput = event.target.value;
    setHopInput(userInput);
  };

  // this takes searchbar input and turns it into a string for use as a homepage prop
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitHomepage(hopInput);
    setHopInput("");
  };

  const style = {
    backgroundColor: "#01a9b4",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/bright-squares.png')",
    border: "3px solid black",
  };

  return (
    <nav className="navbar navbar-light" style={style}>
      <form onSubmit={handleSubmit} className="form-inline">
        <input
          onChange={handleChange}
          value={hopInput}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default SearchBar;
