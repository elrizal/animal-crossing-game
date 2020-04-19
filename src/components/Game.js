import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import cardData from '../clickCards.json';
import Card from 'material-ui/Card';

class Game extends Component {
  state = {
    cardData: [...cardData],
    currentScore: 0,
    topScore: 0
  };
  handleCardClick = cardId => {
    let isCorrect = false;

    const cardData = [...this.state.cardData];

    cardData.forEach(card => {
      if (card.id === cardId) {
        if (!card.clicked) {
          isCorrect = true;
          card.clicked = true;
        }
      }
    });

    isCorrect ? this.handleCorrect(cardData) : this.handleIncorrect(cardData);
  };

  handleCorrect = cardData => {
    const shuffledCards = cardData.sort(() => 0.5 - Math.random());

    const currentScore = this.state.currentScore + 1;

    let topScore = this.state.topScore;

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

    shuffledCards.forEach(card => (card.clicked = false));

    this.setState({
      cardData: shuffledCards,
      currentScore: 0
    });
  };


  render() {
    return (
      <React.Fragment>
    <h3>         Current Score: {this.state.currentScore} || Top Score: {this.state.topScore}
    </h3>
        <div className="container-fluid">
          <Row>
            {this.state.cardData.map(card => {
                return (
                <div className="col-12 col-sm-3 col-md-3" key={card.id}>
                <Card className="img-container animated fadeIn">
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
