import React, { useEffect, useState } from "react";
import axios from "axios";

const Display = () => {
  const [pokemon, setPokemon] = useState([]);
  console.log(pokemon);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
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
