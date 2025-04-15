import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
const getComments = () =>
  fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
    response.json()
  );

const headers = { "Content-type": "application/json; charset=UTF-8" };
const addPost = (newPost) =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers,
  }).then((response) => response.json());

export const ReactQueryExample = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 5000,
    refetchOnWindowFocus: false,
    retry: 5,
    refetchInterval: 10000,
  });

  const id = data !== undefined ? data[0].id : null;

  // Dependent query...
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
    // staleTime: 4000
    // refetchInterval: 10000,
    enabled: !!id,
  });

  // useMutation() returns mutate function & state indicators
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: addPost,
    onSuccess: (newPost) => {
      // invalidateQueries() refetches data for specified queryIds
      // queryClient.invalidateQueries({ queryKey: ["posts"] });

      // setQueryData() uses the cached query data
      queryClient.setQueryData(["posts"], (oldPosts) => [...oldPosts, newPost]);
    },
  });

  return (
    <div>
      {/* <h4>ReactQueryExample</h4> */}
      {(isLoading || isLoading2) && <div>Loading...</div>}
      {error || error2 || isError ? (
        <div key={1} style={{ color: "red", fontWeight: "bold" }}>
          There was an error loading the data
        </div>
      ) : (
        <div>
          {isPending && <div key={2}>Submitting Post...</div>}
          <button
            onClick={() =>
              mutate({
                userId: 763,
                id: 763,
                title: "React Query Example",
                body: "This record was added using React Query' useMutation() method.",
              })
            }
          >
            Add Post
          </button>
          {isSuccess && <div key={3}>Post Added</div>}
          {data?.map((todo, i) => {
            return (
              <div key={i}>
                <br />
                <b>
                  {todo.id}. {todo.title}
                </b>
                <br />
                {todo.body}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const ReactQueryExample2 = () => {
  return <div>ReactQueryExample2</div>;
};
