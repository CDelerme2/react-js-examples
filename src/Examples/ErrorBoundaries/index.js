import React from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

export const ErrorBoundariesExample = () => {
  return (
    <div>
      <li>
        Error boundaries are React components that catch JS errors in their
        child component tree, log those errors, and display a fallback UI
      </li>
      <li>
        A class component becomes an Error Boundary by defining the
        getDerivedStateFromError() and/or componentDidCatch() lifecycle methods.
      </li>
      <li>
        Error boundaries are designed to catch errors during rendering, in
        lifecycle methods, and in constructors of components.{" "}
      </li>
      <li>
        Placement of the Error Boundary controls if the entire app should
        display fallback UI or just component generating error.
      </li>
      <li>
        <span style={{ color: "red" }}>
          React error boundaries do not catch errors that occur inside event
          handlers.
        </span>{" "}
        Event handlers are treated as regular JS functions and errors within
        them do not propagate up to the error boundary.
      </li>
      <li style={{ fontStyle: "italic" }}>
        To handle errors in event handlers, a try...catch block should be used
        within the event handler function.
      </li>
      <br />
      <ErrorBoundary>
        <Hero heroName={"Hero1"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Hero2"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Joker"} />
      </ErrorBoundary>
    </div>
  );
};
