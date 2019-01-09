import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

const Button = styled.button`
  font-size: 2em;
  width: 200px;
`;

const Count = styled.div`
  font-size: 2em;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = e => {
    e.preventDefault();
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decrement = e => {
    e.preventDefault();
    const count = this.state.count - 1;
    this.setState({ count });
  };

  reset = e => {
    e.preventDefault();
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={this.increment}>+</Button>

          <Count>{this.state.count}</Count>

          <Button onClick={this.decrement}>-</Button>

          <Button onClick={this.reset}>Reset</Button>
        </header>
      </div>
    );
  }
}

export default App;
