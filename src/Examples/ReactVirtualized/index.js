import { useCallback, useState } from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import List from "react-virtualized/dist/commonjs/List";
// import { AutoSizer, List } from "react-virtualized";

function generateList(listLength) {
  return Array.from({ length: listLength }, (_, index) => `Item ${index}`);
}

export const ReactVirtualizedExample = () => {
  const [items, setItems] = useState([]);
  const [triggerRerender, setTriggerRerender] = useState(false);

  const handleGenerateList = () => {
    setItems(generateList(10000));
    setTimeout(() => {
      setTriggerRerender((prev) => !prev);
    }, 1000);
  };

  const rowRenderer = useCallback(({ key, index, style }) => (
    <div key={key} style={style}>
      {items[index]}
    </div>
  ));

  return (
    <div>
      <button onClick={handleGenerateList}>Generate List...</button>
      {/* {items.map((item, index) => {
        return <div key={index}>{item}</div>;
      })} */}
      <button onClick={() => setItems([])}>Clear List</button>
      <div style={{ width: "auto", height: "400px" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowCount={items.length}
              rowHeight={20}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};
