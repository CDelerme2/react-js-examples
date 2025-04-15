import { useId, useState } from "react";

export const UseIdExample = () => {
  const id = useId();
  const id2 = useId();
  return (
    <div>
      <label htmlFor={id}>Enter your name:</label>
      <input id={id} type="text" />
      <label htmlFor={id2}>Enter your rank:</label>
      <input id={id2} type="text" />

      <div>
        <p>
          Creates unique ID values for dynamic elements - prevents id collisions
        </p>
        <p>
          Best for <b>id</b> prop on Form fields/labels - promotes accessibility
        </p>
        <p>
          Insures unique IDs across server/client rendering - critical for SSR
          apps like <b>Next.js</b>
        </p>
        <p>Generates different values on each re-render</p>
        <p style={{ color: "red" }}>
          Do not use to genereate key values in lists
        </p>
      </div>
    </div>
  );
};
