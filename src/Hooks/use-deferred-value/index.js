import { useState, useDeferredValue } from "react";

export const UseDeferredValueExample = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const items = Array.from({ length: 20000 }, (_, i) => `Item ${i}`);

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(deferredQuery.toLowerCase());
  });

  return (
    <div>
      {/* <ul> */}
      <li>
        Enables "deferred" updates to keep app responsive (
        <span style={{ fontStyle: "italic" }}>similar to UseTransition()</span>)
      </li>
      <li>Schedule's State value's update for optimal time</li>
      <li>
        Defers a value from propigating immediately ({" "}
        <span style={{ fontStyle: "italic" }}>
          whereas UseTransition() defers <b>State</b> updates
        </span>{" "}
        )
      </li>
      {/* </ul> */}

      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        {query !== deferredQuery && <div>Loading...</div>}
        {/* <ul> */}
        {filteredItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        {/* </ul> */}
      </div>
    </div>
  );
};
