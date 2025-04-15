import { useEffect, useState } from "react";

export const UseSyncExternalStoreExample = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      //   console.log("response", response);
      const data = await response.json();
      console.log("data", data.results);
      setPokemons(data.results);
    };
    fetchPokemons();
  }, []);

  return (
    <div>
      <p style={{ fontStyle: "italic" }}>
        Used to integrate non-React State stores w/ React
      </p>
      <p style={{ fontStyle: "italic" }}>Introduced w/ React 18</p>
      <p style={{ fontStyle: "italic" }}>
        Enables conponents to subscribe to external stores safely for concurrent
        rendering
      </p>
      <p style={{ fontStyle: "italic" }}>
        Insures that conponent stays in sycn w/ external state stores
      </p>
      <p style={{ fontStyle: "italic" }}>
        Helps avoid "tarrying" (inconsistent rendering/updates)
      </p>

      <div>Pokemon List</div>
      <ul>
        {pokemons.map((pokemon, p) => {
          return <li key={p}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};
