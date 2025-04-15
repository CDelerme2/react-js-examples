import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

export const UseMemoExample = () => {
  // useMemo() : Cache the result of a calculation between renders
  const [data, setData] = useState([]);
  const [value, setValue] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      });
  }, []);

  const computeFunction = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) longestName = currentName;
    }
    console.log("computeFunction() executed", longestName);
    return longestName;
  };

  // memoizedFunction will only execute when values listed in dependency array have changed
  const memoizedFunction = useMemo(() => computeFunction(data), [data]);

  return (
    <div>
      <h2>UseMemoExample</h2>
      <li>Made to improve app performance</li>
      <li>
        Uses <b>memoization</b> to "remember" values by caching previous results
      </li>
      <li>Cache the result of a calculation between renders</li>
      <li>Calculates values only when dependencies change</li>
      <li>Good for decreasing latency on expensive computations</li>
      <li>UseMemo() must return a value</li>
      <li style={{ color: "red" }}>Not for side-effects</li>
      <button onClick={() => setValue(!value)}>TOGGLE</button>
      {value && <div>VALUE=ON</div>}
      {/* <div>{computeFunction(data)}</div> */}
      <div>{memoizedFunction}</div>
    </div>
  );
};
