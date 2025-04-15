import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

// export class PureComponentsExample extends PureComponent {
export class PureComponentsExample extends Component {
  interval;

  constructor(props) {
    super(props);
    this.state = { name: "Carlton" };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ name: "Carlton" });
    }, 2000); //no change
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  removeInterval() {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({ name: "Carlton" });
  }

  render() {
    console.log("Parent.render()");
    return (
      <>
        <li>
          A <span style={{ fontWeight: "bold" }}>regular</span> component does
          not Implement the{" "}
          <span style={{ fontStyle: "italic" }}>shouldComponentUpdate() </span>
          method. It always retruns{" "}
          <span style={{ fontWeight: "bold", color: "blue" }}>true</span> by
          default
        </li>

        <li>
          A <span style={{ fontWeight: "bold" }}>pure</span> component
          implements{" "}
          <span style={{ fontStyle: "italic" }}>shouldComponentUpdate() </span>
          with a shallow props and state comparison.
        </li>

        <li>
          PureComponents help reduce unneccessary re-renders and can help
          improve performance
        </li>

        <div
          style={{
            paddingTop: "4px",
            paddingBottom: "4px",
            fontStyle: "italic",
            fontSize: "sm",
          }}
        >
          Note console output on setState()
        </div>

        <div
          style={{
            border: "1px solid darkgray",
            backgroundColor: "lightyellow",
            padding: "8px",
          }}
        >
          Parent Component
          <RegComp name={this.state.name} />
          <PureComp name={this.state.name} />
        </div>
        <button
          onClick={() =>
            this.interval
              ? this.removeInterval()
              : (this.interval = setInterval(() => {
                  this.setState({ name: "Carlton" });
                }, 2000))
          }
        >
          {this.interval ? "Clear" : "Set"} Interval
        </button>
      </>
    );
  }
}

export default PureComponentsExample;
