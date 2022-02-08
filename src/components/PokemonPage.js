import React,{ useEffect,useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);

  function addNewPokemon(newPokemon){
    setPokemon([newPokemon, ...pokemon])
  }

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
      .then(response => response.json())
      .then(pokeData => setPokemon(pokeData));
  },[])

  const [onSearchChange, setSearchChange] = useState(""); 

  function handleSearchChange(e){
    setSearchChange(e); 
  }

  const displaySearch = pokemon.filter((poke)=>{
    return poke.name.toLowerCase().includes(onSearchChange.toLowerCase())
  })

  
  


  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search handleSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection pokemon={displaySearch} />
    </Container>
  );
}

export default PokemonPage;
