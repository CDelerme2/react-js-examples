import React, { useState } from "react";
import { useDocumentTitle } from "./useDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count : {count}
      </button>
    </div>
  );
}

export default DocTitleTwo;
