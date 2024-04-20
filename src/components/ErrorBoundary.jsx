import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full font-shadows text-2xl">
          <h2 className="pb-3">Something went wrong...</h2>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
