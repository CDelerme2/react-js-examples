import { useState, useEffect } from "react";
import axios from "axios";

const DataFetching1 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError(error.message || "There was an API error.");
      });
  }, []);

  return (
    <div>
      <div>
        {loading ? "Loading..." : post?.title}
        {error}
      </div>
    </div>
  );
};

export default DataFetching1;
