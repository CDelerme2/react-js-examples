import useQuery from "./useQuery";
import axios from "axios";

export const PokemonList = () => {
  const { response } = useQuery(
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  );
  return (
    <div>
      {response?.results?.map((r, i) => {
        return <div key={i}>{r.name}</div>;
      })}
    </div>
  );
};
