import axios from "axios";

export const AsyncAwaitExample = () => {
  const Promise1 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve(success);
    } else {
      reject("Promise failed");
    }
  });
  Promise1.then((response) => {
    console.log("Promise1 : ", response);
  })
    .catch((error) => {
      console.error("Promise1 : ", error);
    })
    .finally(() => {
      console.info("Promise1 complete");
    });

  // async/await allows asynchronous code to be written in a synchronous manner...
  const fetchData = async () => {
    try {
      const Promise2 = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
      );
      console.log("Promise2:", Promise2.data);
    } catch (error) {
      console.error("Promise2 : ", error);
    } finally {
      console.info("fetchData() complete");
    }
  };
  fetchData();

  return (
    <div>
      <li>
        Async/Await allows asynchronous code to be written in a synchronous
        manner
      </li>
      <div
        style={{
          fontFamily: "monospace",
          color: "darkred",
          backgroundColor: "#f1f1f1",
          fontSize: "105%",
          width: "480px",
          textAlign: "left",
          margin: "8px auto",
          padding: "8px",
        }}
      >
        const fetchData = async () =&gt; &#123;
        <br />
        try &#123;
        <br />
        &nbsp;&nbsp;const Promise = await axios.get&#40;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;"https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
        <br />
        &nbsp;&nbsp;&#x29;&#x3B;
        <br />
        &nbsp;&nbsp;console.log("Promise :", Promise);
        <br />
        &#x7D; catch (error) &#x7B;
        <br />
        &nbsp;&nbsp;console.error("Promise : ", error);
        <br />
        &#x7D; finally &#x7B;
        <br />
        &nbsp;&nbsp;console.info&#x28;"fetchData&#x28;&#x29; complete"&#x29;;
        <br />
        &#125;
        <br />
        fetchData();
      </div>
      <li>Async/Await only works for a function declared as asynchronous</li>
    </div>
  );
};
