// https://www.youtube.com/watch?v=MS2kbyWOXI8
import { useState, lazy, Suspense } from "react";
const DayHeader = lazy(() => import("./DayHeader"));

export function LazySuspenseExample() {
  const [showDay, setShowDay] = useState(false);

  return (
    <>
      <button onClick={() => setShowDay(!showDay)}>What day is today?</button>{" "}
      <Suspense fallback="LOADING...">{showDay && <DayHeader />}</Suspense>
    </>
  );
}
