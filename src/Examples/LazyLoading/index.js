import React, { useState, lazy, Suspense } from "react";
// import LazyLoadModal from "./LazyLoadModal";

async function delayLoadProcess(promise) {
  // delay for demo purposes
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
}

// lazy() returns Promise...
// const Modal = lazy(() => import("./Modal"));
const Modal = lazy(() => delayLoadProcess(import("./Modal")));

export const LazyLoadingExample = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <li>
        Allows deferred loading of componment's code until it is rendered for
        the first time
      </li>
      <li>
        <b>Suspense</b> allows app to render while data is being fetched.
      </li>
      <li>
        The JS code bundle will only loaded when this modal is about to be
        rendered
      </li>
      <div style={{ fontWeight: "bold" }}>Modal.js</div>
      <div
        style={{
          fontFamily: "monospace",
          color: "darkred",
          backgroundColor: "#f1f1f1",
          padding: "2px",
          fontSize: "105%",
          width: "480px",
          textAlign: "left",
          margin: "8px auto",
          padding: "8px",
        }}
      >
        export default function Modal(&#x7B;onClose&#x7D;) &#x7B;
        <br />
        &nbsp;&nbsp;return &#x28;
        <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;DIALOG MODAL&lt;/div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input placeholder="User Input"
        /&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
        onClick=&#x7B;&#x28;&#x29; =&gt;onClose()&#x7D;&gt;Close
        Modal&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
        <br />
        &nbsp;&nbsp;&#x29; ;
        <br />
        &#x7D;
      </div>
      <div style={{ fontWeight: "bold" }}>Implementation</div>
      <div
        style={{
          fontFamily: "monospace",
          color: "darkred",
          backgroundColor: "#f1f1f1",
          padding: "2px",
          fontSize: "105%",
          width: "580px",
          textAlign: "left",
          margin: "8px auto",
          padding: "8px",
        }}
      >
        const Modal = lazy(&#x28;) =&gt; import("./Modal")&#x29;;
        <br />
        <br />
        &lt;div&gt;
        <br />
        &nbsp;&nbsp;&#x7B;!showModal && &#x28;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#x7B;&#x28;) =&gt;
        setShowModal&#x28;true&#x29;&#x7D;&gt;Open Modal&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&#x29;&#x7D;
        <br />
        &nbsp;&nbsp;&lt;Suspense
        fallback=&#x7B;&lt;div&gt;&gt;LOADING...&lt;/div&gt;&#x7D;&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&#x7B;showModal && &lt;Modal onClose=&#x7B;()
        =&gt; setShowModal(false)&#x7D; /&gt;&#x7D;
        <br />
        &nbsp;&nbsp;&lt;/Suspense&gt;
        <br />
        &lt;/div&gt;
      </div>

      <div>
        {!showModal && (
          <button onClick={() => setShowModal(true)}>Open Modal</button>
        )}
        <Suspense fallback={<div>LOADING...</div>}>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </Suspense>
      </div>

      {/* <LazyLoadModal /> */}
    </div>
  );
};
