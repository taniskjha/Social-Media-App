import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
  }

  render() {
    const { props, state } = this;
    if (state.hasError) {
      return <span>Something went Bad.</span>;
    }
    return props.children;
  }
}
