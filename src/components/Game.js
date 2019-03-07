import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import cardData from '../clickCards.json';
import AppBar from 'material-ui/AppBar';
import Card from 'material-ui/Card';

class Game extends Component {
  state = {
    cardData: [...cardData],
    currentScore: 0,
    topScore: 0
  };

  // create method to handle clicking on a card
  handleCardClick = cardId => {
    // create a flag variable to check if we're correct or not
    let isCorrect = false;

    // make a copy of the cardData from state
    const cardData = [...this.state.cardData];

    // loop over that copied array and find the object with the id you clicked on
    // check if card you clicked on has been clicked before
    // if no => set isCorrect to true and set the card's clicked status to true
    cardData.forEach(card => {
      if (card.id === cardId) {
        if (!card.clicked) {
          isCorrect = true;
          card.clicked = true;
        }
      }
    });

    // check if isCorrect is true or false
    // if true => run logic for handling a correct guess
    // if false => run logic for handling an incorrect guess
    isCorrect ? this.handleCorrect(cardData) : this.handleIncorrect(cardData);
  };

  handleCorrect = cardData => {
    // shuffle cards
    const shuffledCards = cardData.sort(() => 0.5 - Math.random());

    // get current score and add 1 to it
    const currentScore = this.state.currentScore + 1;

    let topScore = this.state.topScore;

    // check if current score is greater than topScore
    if (currentScore > topScore) {
      topScore = currentScore;
    }

    this.setState({
      cardData: shuffledCards,
      currentScore: currentScore,
      topScore: topScore
    });
  };

  handleIncorrect = cardData => {
    const shuffledCards = cardData.sort(() => 0.5 - Math.random());

    // reset all cards to not be clicked
    shuffledCards.forEach(card => (card.clicked = false));

    this.setState({
      cardData: shuffledCards,
      currentScore: 0
    });
  };


  render() {
    return (
      <React.Fragment>
    <h4>         Current Score: {this.state.currentScore} || Top Score: {this.state.topScore}
    </h4>
        <div className="container-fluid">
          <Row>
            {this.state.cardData.map(card => {
                return (
                <div className="col-12 col-sm-3 col-md-3 img-container" key={card.id}>
                <Card className="img-container">
                    <img
                    src={card.image}
                    alt={card.name}
                    onClick={() => this.handleCardClick(card.id)}
                    />
                    </Card>
                    <br/>
                </div>
                );
            })}
            </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default Game;
