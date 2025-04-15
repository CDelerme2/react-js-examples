import { forwardRef, useImperativeHandle, useRef } from "react";

// Parent Component
export const UseImperativeHandleExample = () => {
  const inputRef = useRef();

  return (
    <div>
      {/* <p style={{ fontStyle: "italic" }}>UseImperativeHandleExample</p> */}
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusInput()}>focusInput</button>
      <button onClick={() => inputRef.current.clearInput()}>clearInput</button>

      <div>
        <li>Used to expose a method to the Parent compoent</li>
        <li>
          Used in combinationn w/ forwardRef() to expose a reference to a DOM
          element to the Parent component
        </li>
        <li>
          Allows child component to expose specific portions of its
          functionality.
        </li>
        <li>
          Keeps the internal workings of the Child component hidden while
          allowing the Parent component interact w/ it in a contolled way.
        </li>
      </div>
    </div>
  );
};

// Child component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose a Child component's methods/propoerties to the Parent component with UseImperativeHandle()
  useImperativeHandle(ref, () => {
    return {
      focusInput() {
        inputRef.current.focus();
      },
      clearInput() {
        inputRef.current.value = "";
      },
    };
  });

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something" />
    </div>
  );
});
