import React from "react";

const Count = ({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};

// React.memo is a HOC that will prevent a funtional component
// from being re-rendered if its props or state have not changed

export default React.memo(Count);
