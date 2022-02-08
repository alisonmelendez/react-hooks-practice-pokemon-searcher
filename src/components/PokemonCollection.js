import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((onePokemon)=>{
      return <PokemonCard  key={onePokemon.id} 
                    name={onePokemon.name}
                    hp={onePokemon.hp}
                    image={onePokemon.sprites.front}
                    backImage={onePokemon.sprites.back}
      />
    })}

    </Card.Group>
  );
}

export default PokemonCollection;
