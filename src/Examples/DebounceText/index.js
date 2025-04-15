import { useState } from "react";
import { useDebounce } from "./useDebounce";

export const DebounceTextExample = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <h4>Debouncer Example</h4>
      <li>
        Debouncing is a programming technique that helps improve the performance
        of a web app by controlling the frequency at which time-consuming tasks
        are triggered.
      </li>
      <div style={{ marginTop: "12px" }}>
        <input
          id="inputText"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>Debounced Text: {debouncedText}</div>
      </div>
    </div>
  );
};
