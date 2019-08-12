import React, { Component } from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import { Route, Link } from "react-router-dom";
import Questions from "./components/Questions";
import House from "./components/House";

class App extends Component {
  constructor() {
    super();
    this.state = {
      points: {
        g: 0,
        h: 0,
        r: 0,
        s: 0
      }
      
    };
  }

  addPoint = house => {
    console.log(house);
    switch (house) {
      case "G":
        this.setState({g: this.state.points.g + 1})
        break;
      case "H":
          this.setState({h: this.state.points.h + 1})
        break;
      case "R":
          this.setState({r: this.state.points.r + 1})
        break;
      case "S":
          this.setState({s: this.state.points.s + 1})
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <Route exact exact path="/" component={WelcomePage} />
        <Route
          exact
          path="/questions"
          component={props => <Questions {...props} addPoint={this.addPoint} />}
        />
        <Route exact path="/house" 
        component={House} 
        />
      </div>
    );
  }
}

export default App;
