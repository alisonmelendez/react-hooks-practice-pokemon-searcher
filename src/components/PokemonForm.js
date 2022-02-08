import React from "react";
import { useState } from "react/cjs/react.development";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {

  const [name, setName] = useState(""); 
  const [hp, setHp] = useState(""); 
  const [frontURL, setFrontURL] = useState(""); 
  const [backURL, setBackURL] = useState(""); 

  function handlePokemonSubmit(event){
    event.preventDefault(); 
    fetch('http://localhost:3001/pokemon', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:name,
          hp:hp,
          sprites:{
            front: frontURL,
            back: backURL
          }
        }),
    })
        .then(response => response.json())
        .then((data) => addNewPokemon(data))
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handlePokemonSubmit}
      >
        <Form.Group widths="equal">

          <Form.Input 
            onChange={(e) => setName(e.target.value)}
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name}
          />
           
          <Form.Input
            onChange={(e) => setHp(e.target.value)}
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
          />

          <Form.Input
            onChange={(e) => setFrontURL(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontURL}
          />
          <Form.Input
            onChange={(e) => setBackURL(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backURL}
          />

        </Form.Group>
        <Form.Button>Submit</Form.Button>

      </Form>
    </div>
  );
}

export default PokemonForm;
