import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
import { Timer } from "./Timer";

export const UseEffectExample = () => {
  const [dbData, setDBData] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(true);
  // const dependency_array = [];
  // const videoRef = useRef(null);

  // Mount -> Update -> Unmount
  useEffect(() => {
    console.log("useEffect() : Mounting...", []);
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   console.log("useEffect() []", response.data);
    //   setDBData(response.data.slice(0, 8));
    // });
    // if (isPlaying) videoRef.current.play();
    // else videoRef.current.pause();
    return () => console.log("useEffect() : Unmounting...");
  }, []);

  useEffect(() => console.log("useEffect(), null"));

  useEffect(() => {
    // Set page title using browser's document API
    document.title = dbData ? `${dbData.length} Posts` : "UseEffect()";
  }, dbData);

  return (
    <div>
      <p>
        {dbData?.map((post, i) => {
          return <div key={i}>&#10033;&nbsp;{post.title}</div>;
        })}
      </p>
      {/* <video ref={videoRef} src="music.mp3" loop playsInline /> */}

      <li>
        useEffect() is used to perform side-effects & sync w/ systems outside
        React.
      </li>

      <li>
        A side-effect is any application State change observable outside the
        called function other than its return value.
      </li>

      <li>
        Examples of side-effects are Modifying an external var or object prop,
        writing to the screen, file, or network, throwing an error, or
        triggering an external process
      </li>

      <p>
        There are 2 types of side-effects:
        {/* <ul> */}
        <li>Event-based</li>
        <li>Render-based</li>
        {/* </ul> */}
      </p>

      <Timer />

      <li>Ideal for syncing React code w/ browser APIs</li>

      <li>
        An empty dependency array will cause the useEffect() function to execute
        whenever <b>an</b>y state var changes.
      </li>

      <li>
        <span style={{ color: "red" }}>
          UseEffect() only specifies WHEN code should run - not WHY it should
          run or WHAT it should do.
        </span>{" "}
        <span style={{ fontStyle: "italic" }}>
          (Naming effect function could improve understandibg)
        </span>
      </li>

      <li>
        <span style={{ color: "red", fontStyle: "italic" }}>
          There are more effective ways of retrieving data rather than the
          useEffect() hook - such as
        </span>{" "}
        <a
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=NOvx4LB6Hfk"
          target="_blank"
        >
          Tanstack Query
        </a>
        .
      </li>
    </div>
  );
};
