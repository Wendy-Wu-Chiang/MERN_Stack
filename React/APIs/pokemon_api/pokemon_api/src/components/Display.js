import React, { useEffect } from "react";

const Display = (props) => {
  const { pokemon, setPokemon } = props;
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemon(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // The empty array as the second parameter makes it so that useEffect
  //    does NOT run more than once
  return (
    <div className="App" style={{ width: "300px", margin: "auto" }}>
      <ul>
        {pokemon.map((pokemonObj, index) => {
          return <li key={index}>{pokemonObj.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default Display;
