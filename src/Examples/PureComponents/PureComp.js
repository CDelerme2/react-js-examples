import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  // state = {  }
  render() {
    console.log("PureComp.render()");
    return (
      <div style={{ border: "1px solid darkgray", backgroundColor: "pink" }}>
        Pure Component | {this.props.name}
      </div>
    );
  }
}

export default PureComp;
