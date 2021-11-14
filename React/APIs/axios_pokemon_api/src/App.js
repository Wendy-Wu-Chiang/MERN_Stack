import axios from "axios";
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
  const[pokeApiData, setPokeApiData] = useState([]);

  useEffect(()=>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {console.log(response.data.results);
    setPokeApiData(response.data.results);
    })
    .catch(err=> console.log(err));
  }, []);



  return (
    <div className="App">
      <h3>Here's the 807 pokemons!!!</h3>
      <ul>
      {
        pokeApiData.map((pokemom, index) => (
          <li key="index">
            <p>{pokemom.name}</p>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
