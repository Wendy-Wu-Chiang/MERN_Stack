import Display from "./components/Display";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]); //lifting state
  return (
    <div className="App">
      <Display pokemon={pokemon} setPokemon={setPokemon} />
    </div>
  );
}

export default App;
