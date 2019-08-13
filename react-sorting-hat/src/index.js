import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Gryffindor from './components/Gryffindor'

ReactDOM.render(
  <Router>
    {/* <App /> */}
    <Gryffindor />
  </Router>,
  document.getElementById("root")
);
