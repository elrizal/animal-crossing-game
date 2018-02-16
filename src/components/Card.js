import React from "react";
import "../styles/card.css";
import Panel from 'react-bootstrap/lib/Panel';
import animals from "../animals.json";

const AnimalCard = props => {
  console.log(props);

  return (
    <Panel>
  <div className="card">
  { console.log('props: ', props) }
    <div className="img-container">
      <img alt={props.animals.name} src={props.animals.image} />
    </div>
    <div className="content">
          <strong>Name:</strong> {props.name}
    </div>
  </div>
  </Panel>
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
