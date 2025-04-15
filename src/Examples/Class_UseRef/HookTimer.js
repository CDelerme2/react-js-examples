import React, { useEffect, useState, useRef } from "react";

export const HookTimer = () => {
  const [timer, setTimer] = useState(0);

  // useRef() can be used to create a generic container that can hold a mutable value
  // (Similar to instance properties in Class components
  const intervalRef = useRef();
  // This generic container does not cause rerenders when its data is updated
  // Its value does change on rerenders

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h3>Hook Timer : {timer}</h3>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
};

export default HookTimer;
