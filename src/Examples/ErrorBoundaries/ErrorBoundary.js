import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // For updating state...
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // For executing code - e.g logging
    console.error("componentDidCatch()", { error, info });
  }

  render() {
    return this.state.hasError ? (
      <div style={{ color: "red" }}>hasError</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
