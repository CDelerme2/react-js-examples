import React, { useState, lazy, Suspense } from "react";

async function delayLoadProcess(promise) {
  // delay for demo purposes
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
}

// lazy() returns Promise...
const Modal = lazy(() => import("./Modal"));
// const Modal = lazy(() => delayLoadProcess(import("./Modal")));

export default function LazyLoadModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {!showModal && (
        <button onClick={() => setShowModal(true)}>Open Modal</button>
      )}
      <Suspense fallback={<div>LOADING...</div>}>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </Suspense>
    </div>
  );
}
