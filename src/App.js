
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'typeface-roboto'; 
import "./styles/bootstrap.css";
import "./styles/card.css";
import "./styles/img.css";
import "./styles/header.css";
 import AppBar from 'material-ui/AppBar';
// import NavBar from 'material-ui/AppBar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
// import Nav from 'react-bootstrap/lib/Nav';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import NavDropdown from 'react-bootstrap/lib/NavDropdown';
// import NavItem from 'react-bootstrap/lib/NavItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import animals from "./animals.json";

import AnimalCard from "./components/Card";
import ActionLink from "./components/Card";


class App extends Component {
    state = {
      animals
  }

  render() {
    return (
      <div className="App">
      <Grid>
      <AppBar>
        <div className="row">
        <div col md={6}>
        <h3>Animal Crossing Memory Game  </h3> </div>   <div col md={6}> <b>Your guess is</b> c/i |  Scores: </div>
          </div>
        </AppBar>
 
     <div className="background">
      <div className="top">image</div>
      {/* // function conditional for scores */}
      <Row className="show-grid"> {this.state.animals.map(animal => (
    <AnimalCard
      id={animal.id}
      key={animal.id}
      name={animal.name}
      image={animal.image}  
    />
  ))}
    </Row>
    </div>
  </Grid>
      </div>
    );
  }
}

export default App;
