// import useRandomColor from "./useRandomColor";
// import useQuery from "./useQuery";
// import axios from "axios";
import { ChangeColor } from "./ChangeColor";
import { PokemonList } from "./PokemonList";
// import { Router } from "react-router-dom";

// https://foodish-api.herokuapp.com/api

export const CustomHooksExample = () => {
  // const { color, changeColor } = useRandomColor();
  // const { response } = useQuery(
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"),
  //   []
  // );

  return (
    <>
      <ChangeColor />
      {/* SEPERATE COMPONENTS PREVENTS PokemonList FROM BEING RERENDERED & DATA REFETCHED */}
      <PokemonList />
    </>
    // <div
    //   style={{
    //     border: "1px solid black",
    //     width: "100vw",
    //     height: "100vh",
    //     backgroundColor: "#" + color,
    //   }}
    // >
    //   <button onClick={() => changeColor()}>Change Color</button>
    //   {response?.results?.map((r, i) => {
    //     return <div key={i}>{r.name}</div>;
    //   })}
    // </div>
  );
};
