import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { UseStateExample, UseStateExample2 } from "./use-state";
import { UseEffectExample } from "./use-effect";
import { UseContextExample } from "./use-context";
import { UseReducerExample } from "./use-reducer";
import { UseRefExample } from "./use-ref";
import { UseRefExample2 } from "./use-ref/index2";
import { UseImperativeHandleExample } from "./use-imperative-handle";
import { UseLayoutEffectExample } from "./use-layout-effect";
import { UseInsertionEffectExample } from "./use-insertion-effect";
import { UseIdExample } from "./use-id";
import { UseTransitionExample } from "./use-transition";
import { UseDeferredValueExample } from "./use-deferred-value";
import { UseSyncExternalStoreExample } from "./use-sync-external-store";
import { UseMemoExample } from "./use-memo";
import { UseMemoExample2 } from "./use-memo/index2";
import { UseCallbackExample } from "./use-callback";
import { UseCallbackExample2 } from "./use-callback/index2";
import { UseReducerWithUseContextExample } from "./use-reducer-use-context";
import { UseReducerFetchExample } from "./use-reducer-fetch";

const chapters = [
  { value: 1, label: "UseState()" },
  { value: 2, label: "UseEffect()" },
  { value: 3, label: "UseContext()" },
  { value: 4, label: "UseReducer()" },
  { value: 5, label: "UseRef()" },
  { value: 6, label: "UseImperativeHandle()" },
  { value: 7, label: "UseLayoutEffect()" },
  { value: 8, label: "UseInsertionEffect()" },
  { value: 9, label: "UseId()" },
  { value: 10, label: "UseTransition()" },
  { value: 11, label: "UseDeferredValue()" },
  { value: 12, label: "UseSyncExternalStore()" },
  { value: 13, label: "UseMemo()" },
  { value: 14, label: "UseCallback()" },
  { value: 15, label: "UseState() #2" },
  { value: 16, label: "Use Reducer & UseContext" },
  { value: 17, label: "Use Reducer & fetch()" },
  { value: 18, label: "UseCallback() #2" },
  { value: 19, label: "UseMemo() #2" },
  { value: 20, label: "UseRef() #2" },
];

function getChapter(chapterNo) {
  switch (chapterNo) {
    case 1:
      return <UseStateExample />;
    case 2:
      return <UseEffectExample />;
    case 3:
      return <UseContextExample />;
    case 4:
      return <UseReducerExample />;
    case 5:
      return <UseRefExample />;
    case 6:
      return <UseImperativeHandleExample />;
    case 7:
      return <UseLayoutEffectExample />;
    case 8:
      return <UseInsertionEffectExample />;
    case 9:
      return <UseIdExample />;
    case 10:
      return <UseTransitionExample />;
    case 11:
      return <UseDeferredValueExample />;
    case 12:
      return <UseSyncExternalStoreExample />;
    case 13:
      return <UseMemoExample />;
    case 14:
      return <UseCallbackExample />;
    case 15:
      return <UseStateExample2 />;
    case 16:
      return <UseReducerWithUseContextExample />;
    case 17:
      return <UseReducerFetchExample />;
    case 18:
      return <UseCallbackExample2 />;
    case 19:
      return <UseMemoExample2 />;
    case 20:
      return <UseRefExample2 />;
    default:
      return null;
  }
}

export default function Hooks() {
  const [chapterNo, setChapterNo] = useState(19);
  return (
    <div
      style={{
        padding: "12px",
        backgroundColor: "lightgreen",
        border: "1px solid black",
        margin: "12px",
      }}
    >
      <h1>Hooks</h1>
      <p>
        &#9755; Hooks are functions that allow use of State & other React
        features without writing a class
      </p>
      <p>
        &#9755; Hooks allow to 'hook' into features like <b>State</b> within
        Funtional components
      </p>
      <p>&#9755; There are five (5) main types of Hooks: </p>
      {/* <ul> */}
      <li>
        State Hooks (<i>to work w/ React State</i>)
      </li>
      <li>
        Context Hooks (<i>to read from React Context</i>)
      </li>
      <li>
        Ref Hooks (<i>to reference JS values or DOM elements</i>)
      </li>
      <li>
        Effect Hooks (<i>to perform side-effects</i>)
      </li>
      <li>
        Performance Hooks (<i>to improve app performance</i>)
      </li>
      {/* </ul> */}

      <p>&#9755; There are also: </p>
      {/* <ul> */}
      <li>
        Transition Hooks (<i>for better user experiences</i>)
      </li>
      <li>Random Hooks</li>
      <li>New Hooks in React 19</li>
      {/* </ul> */}

      <p>
        &#9755; <b>Custom Hooks</b> allow us to seperate the behavior of a
        component from its appearance.
      </p>

      <p>
        &#9755; Hooks must be used at the top-level of React functions (not
        inside loops, conditions, or nested functions)
      </p>
      <li>
        {/* <a
          href="https://www.youtube.com/watch?v=LlvBzyy-558&t=3826s"
          target="_blank"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          React Hooks Course - All React Hooks Explained
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=xfKYYRE6-TQ"
          target="_blank"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          All React Hooks - React Tutorial 2025
        </a> */}
      </li>
      <h4>Select a lesson:</h4>
      <Dropdown
        options={chapters}
        onChange={(option) => setChapterNo(option?.value)}
        value={chapters[17]}
        placeholder="Select a tutorial"
      />
      {getChapter(chapterNo)}
    </div>
  );
}
