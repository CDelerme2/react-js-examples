import { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("Child function was called!");
  }, [returnComment]);

  return <div>{returnComment("TEST")}</div>;
}

export default Child;
