import React from 'react';
import AppBar from 'material-ui/AppBar';

const appBar = () => (
  <AppBar>
  <div className="row">
  <div col md={6}>
  <h3>Animal Crossing Memory Game  </h3> </div>  
   <div col md={6}> <b>Your guess is</b> c/i |  Scores: </div>
    </div>
    </AppBar>
);

export default appBar;