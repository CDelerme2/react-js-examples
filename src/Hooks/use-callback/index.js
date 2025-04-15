import React, { useCallback, useState } from "react";
import Child from "./ChildComponent.js";

export const UseCallbackExample = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hey - this is the CallbackTutorial app.");

  // const returnComment = (text) => {
  //   return data + text;
  // };

  // useCallback() : Cache a function between renders
  const returnComment = useCallback((text) => {
    return data + text;
  }, []);

  return (
    <div style={{ border: "1px solid blue", padding: "12px" }}>
      {/* <h1>CallbackTutorial</h1> */}
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>TOGGLE</button>
      {toggle && <h1>TOGGLE</h1>}
      <div>
        <h2>UseCallbackExample</h2>
        <li>
          Similar to UseMemo() - for callback funtions (
          <span style={{ color: "red", fontStyle: "italic" }}>
            not computed values
          </span>
          )
        </li>

        <li>Good for functions passed down to Child components</li>
        <li>
          Improves performance by preventing callback function from being
          recreated on each re-render.
        </li>
      </div>
    </div>
  );
};
