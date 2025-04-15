// "CLOSURE"

import { useState } from "react";

// SEE: \src\Hooks\use-context\useToggle.js

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return [count, increment];
}

export function CounterComponent() {
  const [count, increment] = useCounter();
  /* No need to call useCounter() any more... */

  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        A closure gives you access to an outer funtion's scope from an inner
        function
        <br />
        When functions are nested, the inner functions have access to the vars
        declared in the outer function's scope
        <br />
        A closure is when a function has access to variables (can read and
        change them) defined in its outer scope,
        <br />
        even when the function is executed outside of the scope where it was
        defined.{" "}
        <p>
          A closure is a function enclosing a reference (variable) to its outer
          scope.
        </p>
        <p>Functions can access variables outside of their scope.</p>
        The outer function returns an inner function that "closes" over the
        outer function variable count. This is why it is called a closure.
      </div>
      <div style={{ backgroundColor: "white", border: "1px solid grey" }}>
        <button onClick={increment}>Increment</button>
        {/* No need to call useCounter() any more...Can still access useCounter's local count var after calling custom hook */}
        <p>{count}</p>
      </div>
    </div>
  );
}
