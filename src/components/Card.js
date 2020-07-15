import React from "react";
import "../styles/card.css";
import Panel from 'react-bootstrap/lib/Panel';
 
const AnimalCard = props => {
    return (
      <Panel>
    
      <div className="img-container">
      <img alt={props.name} src={`${props.image}`} className="char-img" />
      </div>
      <div className="content"> 
      <strong> {props.name} </strong>
    </div>

   </Panel>
    );
}
export default AnimalCard;