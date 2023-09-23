import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import axios from "axios";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comments from "../Comments/Comments";
import Header from "../Header/Header";

import "./App.css";

function App() {
  return (
    <Router>

      <Route path="/">
        <Header />
      </Route>

      <Route path="/Feeling">
        {/* <Header /> */}
        <Feeling />
      </Route>

      <Route path="/Understanding">
        <Understanding />
      </Route>

      <Route path="/Supported">
        <Supported />
      </Route>

      <Route path="/Comments">
        <Comments />
      </Route>
    </Router>
  );
}

export default App;
