import { useEffect, useRef, useState } from "react";

export const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const prevCountRef = useRef(0);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    // document.getElementById("testInput").focus();
  };

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <div>
        <input type="text" id="testInput" ref={inputRef} />
        <button onClick={onClick}>console log</button>
      </div>

      <div>
        <p>Count : {count}</p>
        <p>Previous count : {prevCountRef.current}</p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increment
        </button>
      </div>

      <li>
        Refs are mutable (<i>can be modified directly</i>) - State is immutable
        (<i>can modify direcdtly</i>)
      </li>
      <li>
        Changing the value of ref.current does not trigger a re-render (no State
        change)
      </li>
      <li>useRef() allows direct access to the browser's DOM elements</li>
    </div>
  );
};
