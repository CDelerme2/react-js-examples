import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = this.state.count;
  }

  componentDidUpdate() {
    document.title = this.state.count;
  }

  increment = () => {
    this.setState((previousState) => {
      return { count: previousState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>
          Count : {this.state.count}
        </button>
      </div>
    );
  }
}
