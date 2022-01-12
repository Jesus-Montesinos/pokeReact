import './App.css';
import React, { useState, useEffect } from "react";

export default function App() {
  const [pokemonName, setpokemonName] = useState([]);
  const [descriptionPokemon, setdescriptionPokemon] = useState([]);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.types;
        const { type } = item;
        setdescriptionPokemon(type);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [pokemonName]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setpokemonName(e.target.value);
    }
  };

  const handleKeyEnter = (e) => alert("testing onclick event with ReactBaby!!")

  return (
    <div className="App">
      <h1>Hello Puchamon</h1>
      <input type="text" onKeyPress={handleKeyPress}></input>
      <button type="button" onClick={handleKeyEnter}>Enter Please</button>
      <h2>Start editing to see some magic happen!</h2>
      <h1>{pokemonName}</h1>
      <h5>Type</h5>
      <h5>{descriptionPokemon.name}</h5>
    </div>
  );
}
