
import React, { Component } from 'react';
import './App.css';
import "./styles/bootstrap.css";
import "./styles/card.css";
import "./styles/img.css";
import "./styles/header.css";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import animals from "./animals.json";
// import AnimalCard from "./components/Card";
// import ActionLink from "./components/Card";
import AppBar from 'material-ui/AppBar';
import Game from './components/Game';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid>
        <AppBar>
        <div className="row">
        <div col md={6}>
        <h3>Animal Crossing Memory Game  </h3> </div>  
        <div col md={6}> <b>Your guess is</b> c/i |  Scores: </div>
          </div>
          </AppBar>

   
      </Grid>
      </div>
    );
  }
}

export default App;
