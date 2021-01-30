import React from "react";
import "./Answers.css";
import Result from "./Result";

class Answers extends React.Component {
  state = {};

  render() {
    let { answers, step, checkAns, clickAns, score, playAgain } = this.props;

    function ListItem(props) {
      return (
        <div className="ans">
          <li onClick={() => checkAns(props.value)}>
            <a>{props.value}</a>
            {console.log(props.value)}
          </li>
        </div>
      );
    }
    return (
      <div>
        <ul disabled={clickAns ? true : false} className="answers">
          {step === 0 ? (
            answers[step]
          ) : step > 3 ? (
            <Result score={score} playAgain={playAgain} />
          ) : (
            answers[step].map((number) => (
              <ListItem key={number.toString()} value={number} />
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default Answers;
