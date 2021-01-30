import React from "react";
import "./Result.css";

class Result extends React.Component {
  state = {};
  render() {
    return (
      <div className="result">
        <div className="lines">
          You Have Scored {this.props.score} \ 3 !
          <button className="rbtn" onClick={() => this.props.playAgain()}>
            Play Again
          </button>
        </div>
      </div>
    );
  }
}

export default Result;
