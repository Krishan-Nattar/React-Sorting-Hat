import React from "react";
import { bigIntLiteral } from "@babel/types";

class House extends React.Component {
  state = {};

  winner = () => {
    let points = this.props.points;
    //  console.log(points);

    //  points.forEach((item,index)=>{
    //     if(item===3){
    //         console.log(index, "is the winner");
    //     }
    //  })
    if (points.g === 3) {
      console.log("g wins");
      return;
    } else if (points.h === 3) {
      console.log("h wins");
      return;
    } else if (points.r === 3) {
      console.log("r wins");
      return;
    } else if (points.s === 3) {
      console.log("s wins");
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
          console.log("ran grif");
          break;
        case 1:
          console.log("ran huff");
          break;
        case 2:
          console.log("ran rav");
          break;
        case 3:
          console.log("ran slyth");
          break;
      }
    }
  };

  render() {
    {
      this.winner();
    }
    return <div>House Selection</div>;
  }
}

export default House;
