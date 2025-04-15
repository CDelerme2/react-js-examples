import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return <h4>UseCallback Example #2</h4>;
};

// React.memo is a HOC that will prevent a funtional component
// from being re-rendered if its props or state have not changed

export default React.memo(Title);
