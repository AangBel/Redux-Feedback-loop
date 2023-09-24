import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
// import {compose} from "redux";

// import axios from "axios";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comments from "../Comments/Comments";
import Header from "../Header/Header";
import Feedback from "../Review/Review";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Feeling} />
        <Route exact path="/Feeling" component={Feeling} />
        <Route exact path="/Understanding" component={Understanding} />
        <Route exact path="/Supported" component={Supported} />
        <Route exact path="/Comments" component={Comments} />
        <Route exact path="/Feedback" component={Feedback} />
      </Switch>
    </Router>
  );
}

export default App;
