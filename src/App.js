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
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/all-hops" component={HopList} />
          {/* <Route exact path="/all-hops">
            <DataContext.Provider value={{ allHopsData }}>
              <HopList allHopsData={allHopsData} />
            </DataContext.Provider>
          </Route> */}
          <Route exact path="/hops/:id" component={HopDetails} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
