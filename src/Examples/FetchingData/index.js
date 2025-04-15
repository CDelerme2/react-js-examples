import useSWR from "swr";

const fetchFunction = (...args) =>
  fetch(...args).then((response) => response.json());

export const FetchingDataExample = () => {
  const { data, error } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetchFunction,
    {
      suspense: true,
    }
  );
  if (error) return <h3>There was a data error</h3>;
  return (
    <div>
      <img width={500} src={data.message} />
    </div>
  );
};
