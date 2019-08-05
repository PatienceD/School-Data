import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Schools from "./components/Schools";
import NoSchools from "./components/NoSchools";
import "./App.css";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/schools" component={Schools} />
            <Route component={NoSchools} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
