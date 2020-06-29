import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import HopList from "./Components/HopList/HopList";
import HopDetails from "./Components/HopDetails/HopDetails";
import Footer from "./Components/Footer/Footer";
import { HopsProvider } from "./Components/HopContext/HopContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";


function App() {
  return (
    <Router>
      <div className="App">
        <HopsProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/all-hops" component={HopList} />
            <Route exact path="/hops/:id" component={HopDetails} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </HopsProvider>
      </div>
    </Router>
  );
}

export default App;
