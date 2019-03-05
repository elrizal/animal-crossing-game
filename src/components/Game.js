import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import AnimalCard from "./components/Card";
import animals from "./animals.json";
class Game extends Component {
    state = {
        cardData: [...cardData],
        currentScore: 0,
        topScore: 0
    }
    handCardClick = CardId => {
        let isCorrect = false;
        const cardList = [... this.state.cardData];
        cardList.forEach(card => {
            if (card.id === cardId){
                if (!card.clicked){
                    isCorrect = true;
                    card.clicked =true;
                }
            }
        })
        (isCorrect) ? handleCorrect(cardList) : handleIncorrect(cardList)
    }
handleCorrect = cardList => {
    //shuffle deck
    const shuffledCards = cardList.sort(() => .5 - Math.random());
    //get current score and add on 1
    const currentScore = this.state.currentScore + 1;

    //check if current score is more than the top score
    if (currentScore > this.state.topScore){
        topScore = currentScore
    }
    this.setState ({
        cardList: shuffledCards,
        currentScore: currentScore,
        topScore: topScore
    })
}

 handleIncorrect = cardList => {
    const currentScore = this.state.currentScore - 1;
    //check if current score is more than the top score
    if (currentScore > this.state.topScore){
        topScore = currentScore
    }
    shuffledCards.forEach(cardList.sort(() => .5 - Math.random()))
    this.setState ({
        cardList: shuffledCards,
        currentScore: currentScore,
        topScore: topScore
    })
}

render() {
    return (
      <Grid>
        <Row className="show-grid"> {this.state.animals.map(animal => (
            <AnimalCard
                id={animal.id}
                key={animal.id}
                name={animal.name}
                image={animal.image}  
                // onClick={this.state}
            />
            ))}
            </Row> 

      </Grid>
    );
  }
}
export default Game;