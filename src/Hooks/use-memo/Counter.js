import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incCounter1 = () => setCounter1((prev) => prev + 1);
  const incCounter2 = () => setCounter2((prev) => prev + 1);

  // Resource intensive function isEven() will be recreated whenever Counter re-renders :-(
  // Without useMemo(), isEven() will be called even when counter2 is modified
  const isEven = useMemo(() => {
    let i = 0;
    // Simulate complex function...
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <div>
        <button onClick={() => incCounter1()}>Count 1 = {counter1}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={() => incCounter2()}>Count 2 = {counter2}</button>
      </div>
    </div>
  );
};

export default Counter;
