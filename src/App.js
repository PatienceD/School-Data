import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Body} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
