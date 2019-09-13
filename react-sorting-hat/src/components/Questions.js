import React from "react";
// import { Route, Link } from "react-router-dom";
import Question from "./Question";
import { Button, Progress, Header } from "semantic-ui-react";

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  showHouse = () => {
    this.props.history.push("/house");
  };

  askQuestion = () => {};

  render(props) {
    return (
      <div className="question-page">
        {!this.props.question[0] ? null : (
          <Question
            question={this.props.question[0]}
            handleAnswer={this.props.selectAnswer}
          />
        )}
        <Header
          icon
          className="question-header"
          id={this.props.question.length != 0 ? "show-house" : ""}
        >
          <img src="./images/sortinghat.svg" id="hat" />
          <h1>Your Path Has Been Chosen</h1>
          <Button onClick={this.showHouse}>Show Me</Button>
        </Header>

        <Progress percent={this.props.percent} indicating id="progress-bar" />
      </div>
    );
  }
}

export default Questions;
