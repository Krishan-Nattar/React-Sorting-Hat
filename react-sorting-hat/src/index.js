import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Gryffindor from './components/Gryffindor'
import HufflePuff from './components/Hufflepuff';
import Ravenclaw from './components/Ravenclaw';
import Slytherin from './components/Slytherin';

ReactDOM.render(
  <Router>
    {/* <App /> */}
    <Gryffindor />
    <HufflePuff />
    <Ravenclaw />
    <Slytherin />
  </Router>,
  document.getElementById("root")
);
