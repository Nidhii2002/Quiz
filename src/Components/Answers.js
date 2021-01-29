import React from "react";
import "./Answers.css";
import Result from "./Result";

class Answers extends React.Component {
  state = {};
  render() {
    // let answer = Object.keys(this.props.answers[this.props.step])
    //  .map((qAns, i) => (
    //      <h1 key={qAns}>
    //          {this.props.answers[this.props.step][qAns]}
    //      </h1>
    // ));

    let { answers, step } = this.props;

    // let ans = Object.keys(answers).map((text) => (
    //     <li className="ans" key={text}>{answers[text]}</li>
    // ))

    function ListItem(props) {
      return (
        <li className="ans">
          {props.value}
          {console.log(props.value)}
        </li>
      );
    }

    return (
      <div>
        {/* <ul className="answers">
                    {answer}
                </ul>   */}

        <ul className="answers">
          {step === 0 ? (
            answers[step]
          ) : step > 3 ? (
            <Result />
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
