import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
// import Navbar from "./components/Navbar";
// import Body from "./components/Body";
import Home from "./components/Home";
import Wisconsin from "./components/Wisconsin";
// import Footer from "./components/Footer";
import Schools from "./components/Schools";
import NoSchools from "./components/NoSchools";
import "./App.css";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wisconsin" component={Wisconsin} />
            <Route exact path="/schools" component={Schools} />
            <Route component={NoSchools} />
          </Switch>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
