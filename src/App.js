import React, { Component } from "react";
import "./App.css";

// Task: keyboard (enter, backspace, operators)
// Task: Material Design
// Task: Equation Ui
// Task: 4 + 2 + 3 = 9
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
    console.log("e.key", e.key);
    e.preventDefault()
    e.stopPropagation()
    if (Number.isInteger(Number(e.key))) {
      this.handleNumber(e.key);
    }

    if (e.key === "-") {
      this.handleOperator('subtraction')
    } else if ( e.key === 'Enter' ) {
      this.handleResult()
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
        {this.state.result !== "" && '='} {this.state.result}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <input type="text" disabled value={this.state.number} />
        <div>
          <button onClick={() => this.handleClear()}>C</button>
          <button onClick={() => this.handleResult()}>=</button>
          <button onClick={() => this.handleOperator("addition")}>+</button>
          <button onClick={() => this.handleOperator("subtraction")}>-</button>
        </div>
        <div>
          <button onClick={() => this.handleNumber(1)}>1</button>
          <button onClick={() => this.handleNumber(2)}>2</button>
          <button onClick={() => this.handleNumber(3)}>3</button>
          <button onClick={() => this.handleOperator("multiply")}>X</button>
        </div>
        <div>
          <button onClick={() => this.handleNumber(4)}>4</button>
          <button onClick={() => this.handleNumber(5)}>5</button>
          <button onClick={() => this.handleNumber(6)}>6</button>
          <button onClick={() => this.handleOperator("divide")}>/</button>
        </div>
        <div>
          <button onClick={() => this.handleNumber(7)}>7</button>
          <button onClick={() => this.handleNumber(8)}>8</button>
          <button onClick={() => this.handleNumber(9)}>9</button>
        </div>
        <div>
          <button onClick={() => this.handleNumber(0)}>0</button>
        </div>
        <div style={{ height: "1em", borderStyle: "solid" }}>
          {this.renderEquation()}
        </div>
      </div>
    );
  }
}

export default App;
