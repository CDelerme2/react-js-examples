import { useReducer } from "react";

const initialState = { count: 0 };

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    case "double":
      return { count: state.count * action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [state2, dispatch2] = useReducer(reducerFunction, initialState);

  return (
    <>
      {/* Counter 1 */}
      <div>
        <h3>Counter 1: {state.count}</h3>
        <button onClick={() => dispatch({ value: 1, type: "increment" })}>
          +
        </button>
        <button onClick={() => dispatch({ value: 1, type: "decrement" })}>
          -
        </button>
        <button
          onClick={() => dispatch({ value: 2, type: "double" })}
          disabled={state.count === 0}
        >
          x2
        </button>
        <button
          onClick={() => dispatch({ value: 0, type: "reset" })}
          disabled={state.count === 0}
        >
          Reset
        </button>
      </div>

      {/* Counter 2 */}
      <div>
        <h3>Counter 2: {state2.count}</h3>
        <button onClick={() => dispatch2({ value: 1, type: "increment" })}>
          +
        </button>
        <button onClick={() => dispatch2({ value: 1, type: "decrement" })}>
          -
        </button>
        <button
          onClick={() => dispatch2({ value: 2, type: "double" })}
          disabled={state2.count === 0}
        >
          x2
        </button>
        <button
          onClick={() => dispatch2({ value: 0, type: "reset" })}
          disabled={state2.count === 0}
        >
          Reset
        </button>
      </div>

      <div>
        <li>Uses "Reducer" function to update State</li>

        <li>
          UseReducer() returns an array of 2 vars: the State var and a dispatch
          function. Dispatch calls reducer function with an "action" to
          concditionally set State based on that action.
        </li>
        <div
          style={{
            fontFamily: "monospace",
            color: "darkred",
            backgroundColor: "#f1f1f1",
            padding: "2px",
            fontSize: "105%",
            width: "600px",
            textAlign: "left",
            margin: "8px auto",
            padding: "8px",
          }}
        >
          const [state, dispatch] = useReducer(reducerFunction, initialState);
        </div>
        <li>
          Works well for simplifying components with multiple related State
          values (e.g Form inputs)
        </li>
        <li>Can greatly simplify State related code</li>
        <li>For more complex State management</li>
        <li>Great for highly interactive apps and/or user interactions</li>
        <li>The reducer pattern is used by Redux</li>
      </div>
    </>
  );
};
