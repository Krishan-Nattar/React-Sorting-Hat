import React from "react";
// import { Route, Link } from "react-router-dom";
import Question from "./Question";
import { Button, Progress, Header } from "semantic-ui-react";

class Questions extends React.Component {
    constructor(props){
        super(props);
    }
  state = {
    question: [
      ["Which season do you prefer?", "Summer", "Fall","G","H"],
      ["How would your friends describe you?", "Adventurous", "Intellectual","G","R"],
      ["Choose a pet to bring with you", "Owl", "Rat","G","S"],
      ["Favorite subject?", "Herbology", "History Of Magic","H","R"],
      [
        "What's most important to you?",
        "Friends And Family",
        "Changing The World","H","S"
      ],
      ["How would your friends describe you?", "Know-it-all", "Impatient","R","S"]
    ],
    percent: 0
  };

  increment = () =>
    this.setState(prevState => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 17
    }));

  selectAnswer = index => {
    let newQuestion = this.state.question.slice();
    newQuestion.shift();
    this.setState({ question: newQuestion });
    this.increment();
    this.props.addPoint(index)
  };

  showHouse = () => {
    this.props.history.push("/house");
  };

  askQuestion = () => {};

  render(props) {
    return (
      <div className="question-page">
        {!this.state.question[0] ? null : (
          <Question
            question={this.state.question[0]}
            handleAnswer={this.selectAnswer}
          />
        )}
        <Header
          icon
          className="question-header"
          id={this.state.question.length != 0 ? "show-house" : ""}
        >
          <img src="./images/sortinghat.svg" id="hat" />
          <h1>Your Path Has Been Chosen</h1>
          <Button onClick={this.showHouse}>Show Me</Button>
        </Header>

        <Progress percent={this.state.percent} indicating id="progress-bar" />
      </div>
    );
  }
}

export default Questions;
