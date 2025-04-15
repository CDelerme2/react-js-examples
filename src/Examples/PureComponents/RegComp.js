import React, { Component } from "react";

export class RegComp extends Component {
  render() {
    console.log("RegComp.render()");
    return (
      <div
        style={{
          border: "1px solid darkgray",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Regular Component | {this.props.name}
      </div>
    );
  }
}

export default RegComp;
