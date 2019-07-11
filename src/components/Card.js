import React from "react";
import "../styles/card.css";
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
 
const AnimalCard = props => {
    return (
      <Col xs={6} md={3}>
      <Panel>
      <div className="img-container">
      <img alt={props.name} src={`${props.image}`} className="char-img" />
      </div>
      <div className="content"> 
      <strong> {props.name} </strong>
    </div>
    </Panel>
    </Col>
    );
}
export default AnimalCard;