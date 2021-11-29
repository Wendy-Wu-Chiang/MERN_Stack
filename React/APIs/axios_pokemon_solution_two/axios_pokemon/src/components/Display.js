import React, { useEffect } from "react";
import axios from "axios";

const Display = (props) => {
  const { pokemon, setPokemon } = props;
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data);
      });
    // .catch((err) => console.log(err));
  }, [setPokemon]);
  return (
    <div className="App">
      <ul>
        {pokemon.map((pokemonObj, index) => {
          return (
            <li key={index}>
              <p>{pokemonObj.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Display;
