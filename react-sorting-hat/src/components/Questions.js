import React from "react";
import { Route, Link } from "react-router-dom";
import Question from "./Question";
import { Button, Progress, Header } from "semantic-ui-react";

class Questions extends React.Component {
  state = {
    question: [
      ["1 or 2?", "G", "H"],
      ["1 or 3?", "G", "R"],
      ["1 or 4?", "G", "S"],
      ["2 or 3?", "H", "R"],
      ["2 or 4?", "H", "S"],
      ["3 or 4?", "R", "S"]
    ],
    percent: 0
  };

  increment = () =>
    this.setState(prevState => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 17
    }));

    selectAnswer = (index) =>{
        // console.log("answer selected", index)
        let newQuestion = this.state.question.slice();
        newQuestion.shift();
        this.setState({question: newQuestion});
        this.increment();
        // console.log(newQuestion);
    }

    showHouse = () =>{
        console.log('show house');
    }

  askQuestion = () => {};
  render() {
    return (
      <div className="question-page">
        {!this.state.question[0] ? null : (
          <Question question={this.state.question[0]} handleAnswer={this.selectAnswer} />
        )}
        <Header icon className="question-header" id={(this.state.question.length != 0 ) ? "show-house" : ""}>
          <img src="./images/sortinghat.svg" id="hat" />
          <h1>Your Path Has Been Chosen</h1>
          <Button onClick={this.showHouse} >Show Me</Button>
        </Header>

        <Progress percent={this.state.percent} indicating id="progress-bar" />
        
      </div>
    );
  }
}

export default Questions;
