import React, { Component } from 'react';
import Calculadora from "./Calculadora";
import LogicCalculator from "./logic/LogicCalculator";
import Display from "./components/Display";

var x = ""
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleClick = (value) => {
    if (value == "=") {
      var y = LogicCalculator(x, value)
      x = y
    } else if (value == "Clear") {
      x = ""
      var y = ""
    } else {
      x = x + value
      var y = LogicCalculator(x, value)
    }
    this.setState({
      value: y
    })
  }

  render() {
    return (
      <div>
        <Display value={this.state.value} />
        <Calculadora onClick={this.handleClick} />
      </div>
    );
  }
}
export default App;