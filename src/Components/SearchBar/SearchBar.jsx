import React from "react";
// import Navbar from 'react-bootstrap/Navbar'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import "./SearchBar.scss";

const SearchBar = () => {

  const style = {
  backgroundColor: "rgba(54, 156, 193, 0.4)",
  }
  return (
    
    <nav class="navbar navbar-light" style={style}>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
   
  // <Navbar bg="light" variant="light">
  //   <Form inline>
  //     <FormControl type="search" placeholder="Search" className="form-control mr-sm-2"/>
  //     <Button variant="btn btn-outline-info">Search</Button>
  //   </Form>
  // </Navbar>

  )
};

export default SearchBar;
