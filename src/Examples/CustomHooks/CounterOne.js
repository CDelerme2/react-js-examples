import React from "react";
import useCounter from "./useCounter";

const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <h3>Counter 1 : {count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterOne;
