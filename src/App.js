import React, { Component } from 'react';
import './App.css';

// Task: keyboard (enter, backspace, operators)
// Task: Material Design
// Task: Equation Ui 
// Task: GitHub

class App extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
    this.handleKeydown = this.handleKeydown.bind(this)
  }

  // handleChange(e) {
  //   // this.setState({
  //   //   number: Number(e.target.value)
  //   // })
  // }

  handleNumber(number) {
    const prevNumber = this.state.number;
    this.setState({
      number: Number(`${prevNumber}${number}`)
    })
  }

  handleOperator(operation) {
    this.setState({
      prevNumber: this.state.number,
      math: operation,
      number: 0
    })
    
  }

  handleClear() {
    this.setState({
      math: undefined,
      number: 0,
      prevNumber: undefined
    })
  }

  handleResult() {
    let result
    if (this.state.math === "addition") {
      result = this.state.prevNumber + this.state.number
    } else if (this.state.math === "subtraction") {
      result = this.state.prevNumber - this.state.number
    } else if (this.state.math === 'multiply') {
      result = this.state.prevNumber * this.state.number
    } else if (this.state.math === 'divide') {
      result = this.state.prevNumber / this.state.number
    }
    this.setState({
      number: result
    })
  }

  handleKeydown(e) {
    console.log('e.key', e.key)
    if (Number.isInteger(Number(e.key))) {
      this.handleNumber(e.key)
    }

    if (e.key === '-') {
      this.handleSubtract()
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
      addition: '+',
      subtraction: '-',
      multiply: 'x',
      divide: '/'
    }
    return (
      <div>
        {this.state.prevNumber} {operationMap[math]} {this.state.number}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <input type="text" disabled value={this.state.number} />
        <div>
          <button onClick={() => this.handleClear()} >C</button>
          <button onClick={() => this.handleResult()} >=</button>
          <button onClick={() => this.handleOperator('addition')} >+</button>
          <button onClick={() => this.handleOperator('subtraction')} >-</button>
        </div>
        <div>
          <button onClick={() => this.handleNumber(1)} >1</button>
          <button onClick={() => this.handleNumber(2)} >2</button>
          <button onClick={() => this.handleNumber(3)} >3</button>
          <button onClick={() => this.handleOperator('multiply')} >X</button>
        </div>
        <div>
          <button onClick={() => this.handleNumber(4)} >4</button>
          <button onClick={() => this.handleNumber(5)} >5</button>
          <button onClick={() => this.handleNumber(6)} >6</button>
          <button onClick={() => this.handleOperator('divide')}>/</button>
        </div>
        <div>
          <button onClick={() => this.handleNumber(7)} >7</button>
          <button onClick={() => this.handleNumber(8)} >8</button>
          <button onClick={() => this.handleNumber(9)} >9</button>
        </div>
        <div>
          <button onClick={() => this.handleNumber(0)} >0</button>
        </div>
        {this.renderEquation()}

      </div>
    );
  }
}

export default App;
