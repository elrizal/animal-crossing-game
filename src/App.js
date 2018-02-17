
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'typeface-roboto'; 
import "./styles/bootstrap.css";
import "./styles/card.css";
import "./styles/img.css";
// import AppBar from 'material-ui/AppBar';
// import NavBar from 'material-ui/AppBar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Correct Guess? Y/N
          </NavItem>
          <NavItem eventKey={2} href="#">
            Scores
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>a</MenuItem>
            <MenuItem eventKey={3.2}>b</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>

      <Grid>
      <Row className="show-grid"> {this.state.animals.map(animal => (
    <AnimalCard
      id={animal.id}
      key={animal.id}
      name={animal.name}
      image={animal.image}
      
    />
  ))}
    </Row>
</Grid>
    
      </div>
    );
  }
}

export default App;
