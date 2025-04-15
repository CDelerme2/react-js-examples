import { useEffect, useReducer } from "react";
import axios from "axios";

const DataFetching2 = () => {
  const initialState = {
    loading: true,
    error: "",
    post: {},
  };

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return { loading: false, error: "", post: action.payload };
      case "FETCH_ERROR":
        return { loading: false, error: action.error, post: {} };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response?.data || {} });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
          error: error.message || "FETCH_ERROR",
        });
      });
  }, []);

  return (
    <div>
      <div>
        {state.loading ? "Loading..." : state.post?.title}
        {state.error}
      </div>
    </div>
  );
};

export default DataFetching2;
