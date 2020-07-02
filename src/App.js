import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import HopDetails from "./Components/HopDetails/HopDetails";
import About from "./Components/About/About";
import SlideMenu from "./Components/SlideMenu/SlideMenu";
import Footer from "./Components/Footer/Footer";
import { USList, OtherList } from "./Components/SortedLists/SortedLists";
import { DataProvider } from "./Components/DataContext/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [slideMenuOpen, setSlideMenuOpen] = useState(false);

  const handleSlideMenu = () => {
    setSlideMenuOpen(!slideMenuOpen);
  };
  const handleCloseMenu = () => {
    setSlideMenuOpen(false);
  };

  let showSlideMenu = null;
  if (slideMenuOpen) {
    showSlideMenu = <SlideMenu handleCloseMenu={handleCloseMenu} />;
  }

  return (
    <Router>
      <div className="App">
        <DataProvider>
          <Header handleSlideMenu={handleSlideMenu} />
          {showSlideMenu}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Homepage handleCloseMenu={handleCloseMenu} />}
            />
            <Route exact path="/varieties/us" component={USList} />
            <Route exact path="/varieties/other" component={OtherList} />
            <Route exact path="/hops/:id" component={HopDetails} />
            <Route exact path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
