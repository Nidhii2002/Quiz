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
  };

  getQuetion = () => {
    qB().then((que) => {
      this.setState({
        quetionBank: que,
        answersB: que,
        step: this.state.step + 1,
      });
    });
  };

  componentDidMount() {
    this.getQuetion();
  }

  getSelected = () => {};

  newQuetion = () => {
    console.log("Nidhi loves Ishann!");
    this.setState({
      step: this.state.step + 1,
    });
    console.log(this.state.step);
  };

  render() {
    let { quetionBank, answersB, step } = this.state;

    let question = quetionBank.map(({ question }) => question);
    let answers = answersB.map(({ answers }) => answers);
    console.log(quetionBank);
    console.log(question);
    console.log(answers);

    return (
      <div>
        {step > 3 ? "" : <Quetion question={question} step={step} />}
        <Answers answers={answers} step={step} />
        {step > 3 ? (
          ""
        ) : (
          <button className="btn" onClick={this.newQuetion}>
            Next
          </button>
        )}
      </div>
    );
  }
}

export default App;
