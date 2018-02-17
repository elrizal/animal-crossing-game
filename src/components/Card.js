import React from "react";
import "../styles/card.css";
import Panel from 'react-bootstrap/lib/Panel';
import animals from "../animals.json";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
const AnimalCard = props => {
  console.log(props);

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
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// function handleClick() {
//   alert('You have clicked on me');
// }

// const panelInstance = (
//   <Panel onClick={handleClick}>
//     <Panel.Body>Basic panel example</Panel.Body>
//   </Panel>
// );

// render(panelInstance);

export default AnimalCard;
