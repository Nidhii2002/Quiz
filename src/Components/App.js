import React from "react";
import qB from "../Qbank/qBank";
import Quetion from "./Quetion";
import Answers from "./Answers";
import "./App.css";

class App extends React.Component {
  state = {
    quetionBank: [],
    answersB: [],
    step: 0,
    score: 0,
    clickAns: 0,
  };

  getQuetion = () => {
    qB().then((que) => {
      this.setState({
        quetionBank: que,
        step: this.state.step + 1,
      });
    });
  };

  playAgain = () => {
    this.getQuetion();
    this.setState({
      score: 0,
      step: 0,
    });
  };

  componentDidMount() {
    this.getQuetion();
  }

  newQuetion = () => {
    console.log("Nidhi loves Ishann!");
    this.setState({
      step: this.state.step + 1,
      clickAns: 0,
    });
  };

  checkAns = (clAns) => {
    console.log("nidhi!", clAns);
    let correct = this.state.quetionBank.map(({ correct }) => correct);
    let { score, step, clickAns } = this.state;

    console.log("Cstep", correct[step]);

    correct[step] === clAns
      ? this.setState({
          score: score + 1,
          clickAns: clickAns + 1,
        })
      : this.setState({
          clickAns: clickAns + 1,
        });
    console.log(clickAns, "clickAns");
    console.log("score", score);
  };

  render() {
    let { quetionBank, step, clickAns, score } = this.state;

    let question = quetionBank.map(({ question }) => question);
    let answers = quetionBank.map(({ answers }) => answers);
    let correct = this.state.quetionBank.map(({ correct }) => correct);
    console.log(quetionBank);
    console.log(question);
    console.log(answers);
    console.log("correct", correct);

    return (
      <div>
        {step > 3 ? "" : <Quetion question={question} step={step} />}
        <Answers
          answers={answers}
          step={step}
          score={score}
          correct={correct}
          clickAns={clickAns}
          checkAns={this.checkAns}
          playAgain={this.playAgain}
        />
        {step > 3 ? (
          ""
        ) : (
          <button className="btn" onClick={this.newQuetion}>
            Next
          </button>
        )}{" "}
      </div>
    );
  }
}

export default App;
