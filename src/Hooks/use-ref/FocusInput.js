import React, { useEffect, useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("FocusInput-useEffect");
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      {/* <span>{inputRef.current.}</span> */}
      <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  );
};

export default FocusInput;
