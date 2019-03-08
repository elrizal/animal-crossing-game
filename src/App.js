
import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <React.Fragment >
          <div className="header">
          <div className="container">
          <i class="fas fa-leaf"></i> <h1>Animal Crossing Memory "game"</h1>
          <p>Don't click on the neighbors that you've clicked on before!</p>
          </div>         
          </div>
        <Grid>
        <Game/>
      </Grid>
      </React.Fragment>
    );
  }
}

export default App;
