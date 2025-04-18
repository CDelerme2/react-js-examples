import { useState, Suspense } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FilteredListExample } from "./FilteredList";
import { DebounceTextExample } from "./DebounceText";
import { PhoneInput } from "./PhoneInput";
import { LazyLoadingExample } from "./LazyLoading";
import { AsyncAwaitExample } from "./AsyncAwait";
import { CreatePortalExample } from "./Portals";
import { ReduxStoreExample } from "./ReduxStore";
import { ReactQueryExample, ReactQueryExample2 } from "./ReactQuery";
// Implementing 'global' redux store
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
// Instantiating a Query client
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactRouterExample } from "./ReactRouter";
// import { useParams } from "react-router-dom";
import { CustomHooksExample } from "./CustomHooks";
import { CustomHooksExample2 } from "./CustomHooks/index2";
import { FetchingDataExample } from "./FetchingData";
import { ReactVirtualizedExample } from "./ReactVirtualized";
import { ClassUseRefExample } from "./Class_UseRef";
import { PureComponentsExample } from "./PureComponents";
import { ErrorBoundariesExample } from "./ErrorBoundaries";
import { ContextAPIExample } from "./ContextAPI";
import { ReduxLoginExample } from "./ReduxLogin";
import { ZustandExample } from "./Zustand";

const chapters = [
  { value: 1, label: "Filtered List" },
  { value: 2, label: "Debouncer Hook" },
  { value: 3, label: "Formatted Phone Input" },
  { value: 4, label: "Lazy Loading/Code Splitting" },
  { value: 5, label: "Promises" },
  { value: 6, label: "Portals" },
  { value: 7, label: "Global Store" },
  { value: 8, label: "React Query" },
  { value: 9, label: "React Router" },
  { value: 10, label: "Custom Hooks" },
  { value: 11, label: "Fetching Data" },
  { value: 12, label: "React Virtualized" },
  { value: 13, label: "React Query 2" },
  { value: 14, label: "Class | Hooks" },
  { value: 15, label: "Custom Hooks #2" },
  { value: 16, label: "Pure Components" },
  { value: 17, label: "Error Boundaries" },
  { value: 18, label: "Context API" },
  { value: 19, label: "Redux Login" },
  { value: 20, label: "Zustand State Management" },
];

const tanstackExamples = [8, 13];

function getChapter(chapterNo) {
  // console.log("getChapter()", chapterNo);
  const queryClient = tanstackExamples.includes(chapterNo)
    ? new QueryClient({
        // defaultOptions applies to every query and mutation
        // defaultOptions: {
        //   queries: { staleTime: 50000, gcTime: 10 * (60 * 1000) },
        // },
      })
    : null;
  switch (chapterNo) {
    case 1:
      return <FilteredListExample />;
    case 2:
      return <DebounceTextExample />;
    case 3:
      return <PhoneInput />;
    case 4:
      return <LazyLoadingExample />;
    case 5:
      return <AsyncAwaitExample />;
    case 6:
      return <CreatePortalExample />;
    case 7:
      return (
        <Provider store={store}>
          <ReduxStoreExample />
        </Provider>
      );
    case 8:
      return (
        <QueryClientProvider client={queryClient}>
          <ReactQueryExample />
        </QueryClientProvider>
      );
    case 9:
      return <ReactRouterExample />;
    case 10:
      return <CustomHooksExample />;
    case 11:
      return (
        <Suspense fallback={<div>LOADING IMAGE...</div>}>
          <FetchingDataExample />
        </Suspense>
      );
    case 12:
      return <ReactVirtualizedExample />;
    case 13:
      return (
        <QueryClientProvider client={queryClient}>
          <ReactQueryExample2 />
        </QueryClientProvider>
      );
    case 14:
      return <ClassUseRefExample />;
    case 15:
      return <CustomHooksExample2 />;
    case 16:
      return <PureComponentsExample />;
    case 17:
      return <ErrorBoundariesExample />;
    case 18:
      return <ContextAPIExample />;
    case 19:
      return <ReduxLoginExample />;
    case 20:
      return <ZustandExample />;
    default:
      return null;
  }
}

export function FunctionalExamples() {
  const [chapterNo, setChapterNo] = useState(1);

  return (
    <div
      key={66}
      style={{
        padding: "12px",
        backgroundColor: "lightgreen",
        border: "1px solid black",
        margin: "12px",
      }}
    >
      <h1>Functional Examples</h1>
      <h4>Select a functionality example:</h4>
      <Dropdown
        options={chapters}
        onChange={(option) => {
          setChapterNo(option?.value);
          localStorage.setItem("chapter", option?.value.toString() || "");
          localStorage.setItem(
            "chaptersVisited",
            JSON.stringify([option?.value || chapters[chapterNo - 1]])
          );
        }}
        value={
          chapters[parseInt(localStorage.getItem("chapter") - 1)] ||
          chapters[chapterNo - 1]
        }
        placeholder="Select an example"
      />
      {getChapter(
        parseInt(localStorage.getItem("chapter")) ||
          chapterNo ||
          chapters[chapterNo - 1]
      )}
      {/* {getChapter(parseInt(chapter))} */}
    </div>
  );
}
