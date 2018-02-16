import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';

function handleClick() {
  alert('You have clicked on me');
}

const panelInstance = (
  <Panel onClick={handleClick}>
    <Panel.Body>{this.state.animals.map(animal => (
  <AnimalCard            
    id={animals.id}
    image={animals.image}
    animal={this.state.animal}
    
  />
))}

</Panel.Body>
  </Panel>
);

render(panelInstance);