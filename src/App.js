
import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Game from './components/Game';


class App extends Component {
  render() {
    return (
      <React.Fragment >
          <div className="header">
          <div className="container">
          <i class="fas fa-leaf"></i> <h1>Remember Your New Neighbors!</h1>
          <div class="wordbubble" >

          <h5> Okay, maybe you're "not good with names" but the least you could do is remember our faces!
           Test your memory below by clicking on animals you haven't clicked on before!</h5>
          </div>
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
