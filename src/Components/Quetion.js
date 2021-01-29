import React from "react";
import "./Question.css";

class Quetion extends React.Component {
  state = {};
  render() {
    return (
      <div className="question">{this.props.question[this.props.step]}</div>
    );
  }
}

export default Quetion;
