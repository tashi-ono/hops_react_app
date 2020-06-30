import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import HopDetails from "./Components/HopDetails/HopDetails";
import Footer from "./Components/Footer/Footer";
import { USList, OtherList } from "./Components/SortedLists/SortedLists";
import { DataProvider } from "./Components/DataContext/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <DataProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/" onClick={() => window.location.reload()} />
            <Route exact path="/varieties/us" component={USList} />
            <Route exact path="/varieties/other" component={OtherList} />
            <Route exact path="/hops/:id" component={HopDetails} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
