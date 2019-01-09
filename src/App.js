import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

const Button = styled.button`
  font-size: 2em;
  width: 200px;
`;

const Counter = styled.div`
  font-size: 2em;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = e => {
    e.preventDefault();
    const counter = this.state.counter + 1;
    this.setState({ counter });
  };

  decrement = e => {
    e.preventDefault();
    const counter = this.state.counter - 1;
    this.setState({ counter });
  };

  reset = e => {
    e.preventDefault();
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={this.increment}>+</Button>

          <Counter>{this.state.counter}</Counter>

          <Button onClick={this.decrement}>-</Button>

          <Button onClick={this.reset}>Reset</Button>
        </header>
      </div>
    );
  }
}

export default App;
