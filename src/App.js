import React, { Component } from "react";
import "./App.css";
import { TextField, FloatingActionButton } from "material-ui";
// import { 
//   add,
//   division,
//   eight,
//   equals,
//   five,
//   four,
//   minus,
//   multiply,
//   nine,
//   one,
//   percent,
//   seven,
//   six,
//   ten,
//   three,
//   two
//  } from '../assets/my-icons-collection/svg'

// Task: keyboard (enter, backspace, operators)
// Task: Material Design
// Task: Equation Ui
// Task: 4 + 2 + 3 = 9

const style = {
  margin: 5
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      result: ""
    };
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  // handleChange(e) {
  //   // this.setState({
  //   //   number: Number(e.target.value)
  //   // })
  // }

  handleNumber(number) {
    if (this.state.result !== "") {
      this.handleClear();
    }
    this.setState(prevState => ({
      number: Number(`${prevState.number}${number}`)
    }));
  }

  handleOperator(operation) {
    this.setState({
      prevNumber: this.state.number,
      math: operation,
      number: ""
    });
  }

  handleClear() {
    this.setState(() => ({
      math: undefined,
      number: "",
      prevNumber: undefined,
      result: ""
    }));
  }

  handleNumberState() {
      const toPercent = this.state.number / 100;
      this.setState({
        number: toPercent
      })
  }

  handleResult() {
    switch (this.state.math) {
      case "addition":
        this.setState({ result: this.state.prevNumber + this.state.number });
        break;
      case "subtraction":
        this.setState({ result: this.state.prevNumber - this.state.number });
        break;
      case "multiply":
        this.setState({ result: this.state.prevNumber * this.state.number });
        break;
      case "divide":
        this.setState({ result: this.state.prevNumber / this.state.number });
        break;
      default:
        break;
    }
  }

  handleKeydown(e) {
    e.preventDefault();
    e.stopPropagation();
    if (Number.isInteger(Number(e.key))) {
      this.handleNumber(e.key);
    }

    if (e.key === "-") {
      this.handleOperator("subtraction");
    } else if (e.key === "Enter") {
      this.handleResult();
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown, false);
  }

  renderEquation() {
    const math = this.state.math;
    const operationMap = {
      addition: "+",
      subtraction: "-",
      multiply: "x",
      divide: "/"
    };
    return (
      <div>
        {this.state.prevNumber} {operationMap[math]} {this.state.number}{" "}
        {this.state.result !== "" && "="} {this.state.result}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <TextField hintText="Do Maths Here" value={this.state.number} />
        <div>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            primary={true}
            label="C"
            onClick={() => this.handleClear()}
          >
            C
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            primary={true}
            label="="
            onClick={() => this.handleResult()}
          >
            =
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            primary={true}
            label="+"
            onClick={() => this.handleOperator("addition")}
          >
            +
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            primary={true}
            label="-"
            onClick={() => this.handleOperator("subtraction")}
          >
            -
          </FloatingActionButton>
        </div>
        <div>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="1"
            onClick={() => this.handleNumber(1)}
          >
            1
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="2"
            onClick={() => this.handleNumber(2)}
          >
            2
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="3"
            onClick={() => this.handleNumber(3)}
          >
            3
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            primary={true}
            label="X"
            onClick={() => this.handleOperator("multiply")}
          >
            x
          </FloatingActionButton>
        </div>
        <div>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="4"
            onClick={() => this.handleNumber(4)}
          >
            4
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="5"
            onClick={() => this.handleNumber(5)}
          >
            5
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="6"
            onClick={() => this.handleNumber(6)}
          >
            6
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            primary={true}
            label="/"
            onClick={() => this.handleOperator("divide")}
          >
            /
          </FloatingActionButton>
        </div>
        <div>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="7"
            onClick={() => this.handleNumber(7)}
          >
            7
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="8"
            onClick={() => this.handleNumber(8)}
          >
            8
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="9"
            onClick={() => this.handleNumber(9)}
          >
            9
          </FloatingActionButton>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            primary={true}
            label="%"
            onClick={() => this.handleNumberState()}
          >
            %{" "}
          </FloatingActionButton>
        </div>
        <div>
          <FloatingActionButton
            className="buttonContainer"
            style={style}
            secondary={true}
            label="0"
            onClick={() => this.handleNumber(0)}
          >
            0
          </FloatingActionButton>
        </div>
        <div style={{ height: "1em", borderStyle: "solid" }}>
          {this.renderEquation()}
        </div>
      </div>
    );
  }
}

export default App;
