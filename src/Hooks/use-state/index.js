import react from "react";
import { useState } from "react";
import CounterClass from "./CounterClass";

export const UseStateExample = () => {
  // Destrucure the [var,function] array returned by useState()
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // the setter method returned by useState() updates the state immutably by making a copy of the current State value before applying changes

  return (
    <div>
      <br />
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="State.text value"
        />
      </div>
      <br />
      <li>
        UseState() returns an array of 2 vars: the value and its corresponding
        setter function.
      </li>
      <div
        style={{
          fontFamily: "monospace",
          color: "darkred",
          backgroundColor: "#f1f1f1",
          padding: "2px",
          fontSize: "105%",
          width: "350px",
          textAlign: "left",
          margin: "8px auto",
          padding: "8px",
        }}
      >
        const [count, setCount] = useState(0);
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        Count: {count}
      </div>
      <br />
      <div>
        <li style={{ fontStyle: "italic" }}>
          Allows you to add State to functional components
        </li>
        <li style={{ fontStyle: "italic" }}>
          Best for client components that need their own specific state
        </li>
        <li style={{ fontStyle: "italic" }}>
          The State var <b>count</b> must be mutated via the corresponding
          setter function in order to trigger an update of state and a
          re-render.
        </li>
        <li style={{ fontStyle: "italic" }}>
          The setter method returned by useState() updates the state immutably
          by making a copy of the current State value before applying changes
        </li>
        <div>
          <p>Types of applications state:</p>
          <li>Server state</li>
          <li>URL state</li>
          <li>Local storage + cookies</li>
        </div>
      </div>
    </div>
  );
};

export const UseStateExample2 = () => {
  return (
    <div>
      <CounterClass />
    </div>
  );
};
