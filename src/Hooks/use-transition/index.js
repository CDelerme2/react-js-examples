import { useState, useTransition } from "react";

export const UseTransitionExample = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 20000 }, (_, i) => `Item ${i}`);

  const filterList = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      setFilteredItems(
        items.filter((item) => {
          return item.toLowerCase().includes(value.toLowerCase());
        })
      );
    });
  };

  return (
    <div>
      <div>
        <p style={{ fontStyle: "italic" }}>
          All State updates are "urgent" by default - use useTransition() to
          specify certain updates as "non-urgent"
        </p>
        <p style={{ fontStyle: "italic" }}>Good for heavy computations</p>
        <p style={{ fontStyle: "italic" }}>
          Transitions can make apps more responsive
        </p>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => filterList(e)}
        placeholder="Search..."
      />
      {isPending && <div>Loading...</div>}
      <ul>
        {filteredItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
