import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, image, backImage, onCardClick }) {

  const [card, setCard] = useState(true)

  function onCardClick(){ 
    setCard((card) => !card) 
  }

  return (
    <Card>
      <div onClick={onCardClick}>

        <div className="image">
          {/* img ? true : false */}
          {/* logic to render a specific image  */}
          {card ? (<img src={image} alt="oh no!" /> ): (<img src={backImage} alt="back missing" />)}
        </div>

        <div className="content">
          <div className="header">{name}</div> {/* POKEMON NAME HERE */}
        </div>

        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>

      </div>
    </Card>
  );
}

export default PokemonCard;
