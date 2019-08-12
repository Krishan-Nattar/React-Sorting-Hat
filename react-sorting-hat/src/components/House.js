import React, { useEffect } from "react";

import Gryffindor from "./Gryffindor";
import Hufflepuff from "./Hufflepuff";
import Ravenclaw from "./Ravenclaw";
import Slytherin from "./Slytherin";

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: ""
    };
  }

  componentDidMount() {
    this.winner();
  }
  winner = () => {
    let points = this.props.points;

    if (points.g === 3) {
      this.setState({ winner: "G" });
      return;
    } else if (points.h === 3) {
      this.setState({ winner: "H" });
      return;
    } else if (points.r === 3) {
      this.setState({ winner: "R" });
      return;
    } else if (points.s === 3) {
      this.setState({ winner: "S" });
      return;
    } else {
      let index = [];
      if (points.g === 2) {
        index.push(0);
      }
      if (points.h === 2) {
        index.push(1);
      }
      if (points.r === 2) {
        index.push(2);
      }
      if (points.s === 2) {
        index.push(3);
      }

      let randomItem = index[Math.floor(Math.random() * index.length)];

      switch (randomItem) {
        case 0:
          this.setState({ winner: "G" });
          break;
        case 1:
          this.setState({ winner: "H" });
          break;
        case 2:
          this.setState({ winner: "R" });
          break;
        case 3:
          this.setState({ winner: "S" });
          break;
      }
    }
  };

  render() {

    return (
      <div>
        
        {this.state.winner === "G" ? (
          <Gryffindor />
        ) : this.state.winner === "H" ? (
          <Hufflepuff />
        ) : this.state.winner === "R" ? (
          <Ravenclaw />
        ) : this.state.winner === "S" ? (
          <Slytherin />
        ) : (
          console.log("nothing")
        )}
      </div>
    );
  }
}

export default House;
