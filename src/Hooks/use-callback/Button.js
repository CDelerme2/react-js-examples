import React from "react";

const Button = ({ handleClick, children }) => {
  console.log("Rendering button - ", children);
  return <button onClick={handleClick}>{children}</button>;
};

// React.memo is a HOC that will prevent a funtional component
// from being re-rendered if its props or state have not changed

export default React.memo(Button);
