import React from "react";
import useCounter from "./useCounter";

const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounter(10, 10);
  return (
    <div>
      <h3>Counter 2 : {count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterTwo;
