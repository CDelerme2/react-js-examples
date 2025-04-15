import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Modal({ onClose }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
        );
        const dropdownOptions = [];
        response?.data?.results.map((pokemon) => {
          const urlArray = pokemon.url?.split("/");
          dropdownOptions.push({
            value: !isNaN(urlArray[urlArray.length - 2])
              ? urlArray[urlArray.length - 2]
              : 0,
            label: pokemon.name,
          });
          return true;
        });
        setPokemonData(dropdownOptions);
      } catch (error) {
        console.error("fetchData()", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "lightgrey",
          border: "2px black solid",
          width: "40%",
          margin: "8px auto",
        }}
      >
        <div>Select a Pokemon:</div>
        <Dropdown
          options={pokemonData}
          onChange={(option) => console.log(option?.value)}
          value={pokemonData && pokemonData[0]}
          placeholder="Select a pokemon"
        />
        <button onClick={() => onClose()}>Close Modal</button>
      </div>
      <li>Lazy loading facilitates code splitting and app responsiveness</li>
    </>
  );
}
