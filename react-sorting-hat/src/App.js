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
      },
      question: [
        ["Which season do you prefer?", "Summer", "Fall", "G", "H"],
        [
          "How would your friends describe you?",
          "Adventurous",
          "Intellectual",
          "G",
          "R"
        ],
        ["Choose a pet to bring with you", "Owl", "Rat", "G", "S"],
        ["Favorite subject?", "Herbology", "History Of Magic", "H", "R"],
        [
          "What's most important to you?",
          "Friends And Family",
          "Changing The World",
          "H",
          "S"
        ],
        [
          "How would your friends describe you?",
          "Know-it-all",
          "Impatient",
          "R",
          "S"
        ]
      ],
      percent: 0
    };
  }

  increment = () =>
    this.setState(prevState => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 17
    }));

  selectAnswer = index => {
    let newQuestion = this.state.question.slice();
    newQuestion.shift();
    this.setState({ question: newQuestion });
    this.increment();
    this.addPoint(index);
  };

  addPoint = house => {
    let fullPoints = {...this.state.points};
    switch (house) {
      case "G":
        fullPoints.g = fullPoints.g + 1;
        break;
      case "H":
          fullPoints.h = fullPoints.h + 1
        break;
      case "R":
          fullPoints.r = fullPoints.r + 1
        break;
      case "S":
          fullPoints.s = fullPoints.s + 1
        break;
    }
    this.setState({points: fullPoints});
  };

  render() {
    return (
      <div className="App">
        <Route exact exact path="/" component={WelcomePage} />
        <Route
          exact
          path="/questions"
          component={props => (
            <Questions
              {...props}
              addPoint={this.addPoint}
              increment={this.increment}
              selectAnswer={this.selectAnswer}
              question={this.state.question}
              percent={this.state.percent}
            />
          )}
        />
        <Route
          exact
          path="/house"
          component={props => <House {...props} points={this.state.points} />}
        />
      </div>
    );
  }
}

export default App;
