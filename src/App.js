import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "rc-select/assets/index.css";
import { FunctionalExamples } from "./Examples/index";
// import { JS_Concepts } from "./JS_Concepts/index";
// import { Hooks } from "./Hooks/index";
const JS_Concepts = lazy(() => import("./JS_Concepts/index"));
const Hooks = lazy(() => import("./Hooks/index"));
// const FunctionalExamples = lazy(() =>
//   delayLoadProcess(import("./Examples/index"))
// );

// async function delayLoadProcess(promise) {
//   // delay for demo purposes
//   return new Promise((resolve) => {
//     setTimeout(resolve, 3000);
//   }).then(() => promise);
// }

function App() {
  return (
    <>
      <Router>
        <nav>
          &nbsp;<Link to="/concepts">JS Concepts</Link>&nbsp; &nbsp;
          <Link to="/hooks">React Hooks</Link>&nbsp; &nbsp;
          <Link to="/examples">Functional Examples</Link>&nbsp;
        </nav>
        <Suspense
          fallback={
            <div>
              <h1>LOADING...</h1>
            </div>
          }
        >
          <Routes>
            <Route path="concepts" element={<JS_Concepts />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="examples" element={<FunctionalExamples />} />
            {/* <Route path="examples/:chapter" element={<FunctionalExamples />} /> */}
            {/* <Route
            path="*"
            element={<div style={{ color: "red" }}>ERROR: PAGE NOT FOUND</div>}
          /> */}
          </Routes>
        </Suspense>
      </Router>

      {/* 
      <div
        className="App"
        style={{ padding: "12px", backgroundColor: "darkgray" }}
      >
        <div style={{ fontWeight: "bold" }}>
          <h1>The React Way:</h1>
          <li>Put data in State</li>
          <li>Change that data</li>
          <li>React updates UI</li>
        </div>
        <h2>Select a Section</h2>
        <Select
          onChange={(tutorialNo) => setTutorialNo(tutorialNo)}
          options={tutorials}
        ></Select>
        {getTutorial(tutorialNo)}
      </div> */}
    </>
  );
}

export default App;
