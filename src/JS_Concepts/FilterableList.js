import React, { useState, useMemo } from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

export function FilterableList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Only compute this value when the vaklue of searchTerm or items changes...
  const filteredList = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, items]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        Memoization is a programming technique used to optimize the performance
        of functions by caching the results of expensive function calls and
        returning the cached result when the same inputs occur again.
        <p>
          This technique is particularly useful in scenarios where the same
          computation is repeated with identical inputs, as it helps avoid
          redundant calculations and improves overall execution speed.
        </p>
      </div>
      <div style={{ backgroundColor: "white", border: "1px solid grey" }}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <ul>
          {filteredList.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
