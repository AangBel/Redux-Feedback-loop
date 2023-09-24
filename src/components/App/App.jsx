import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import {compose} from "redux";

// import axios from "axios";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comments from "../Comments/Comments";
import Header from "../Header/Header";

import "./App.css";

function App() {
  return (
    <Router>

    <Route exact path="/">
      <Header/>
      <Feeling/>
    </Route>

      {/* <Route>
        <Header />
      </Route> */}

    
      <Route exact path="/Feeling">
        <Feeling />
      </Route>

      <Route exact path="/Understanding">
        <Understanding />
      </Route>

      <Route exact path="/Supported">
        <Supported />
      </Route>

      <Route exact path="/Comments">
        <Comments />
      </Route>
    </Router>
  );
}

export default App;
