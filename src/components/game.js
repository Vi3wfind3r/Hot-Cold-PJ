import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      feedback: 'Make your Guess!',
      guessCount:0,
      guessNumbers:[],
      secretNumber: Math.floor(Math.random()*100)+1,
      instructions: false
    }
  }

  showInstructions() {
    this.setState({instructions: true});
  }

  makeGuess(num) {
    this.setState({
      guessNumbers:[...this.state.guessNumbers, num],
      guessCount: this.state.guessCount + 1
    });
    this.noDuplicates(num);
    this.setFeedback(num);
  }

  noDuplicates(num) {
    this.state.guessNumbers.forEach(el => {
      if(num == el) {
        this.setState({
          guessNumbers:[...this.state.guessNumbers],
          guessCount: this.state.guessCount 
        });
        alert('You cannot have duplicate numbers');
      }
    })
  }

  setFeedback(num) {
    let guessDiff = Math.abs(this.state.secretNumber - num);

    if(this.state.secretNumber == num){
      this.setState({
        feedback: 'You Won. Click new game to play again'
      });
    } else if(guessDiff < 10){
      this.setState({
        feedback: 'hot'
      });
    } else if(guessDiff < 20 && guessDiff > 9){
      this.setState({
        feedback: 'Kinda hot'
      });
    } else if(guessDiff < 30 && guessDiff > 19){
      this.setState({
        feedback: 'less than warm'
      });
    } else {
      this.setState({
        feedback: 'cold'
      });
    }
  }

  render(){

    return (
        <div>
            <Header instructions={this.state.instructions} showInstructions={() => this.setState({instructions: true})} 
              hideInstructions={() => this.setState({instructions: false})}/>
            <GuessSection guestList={num => this.makeGuess(num)} feedback={this.state.feedback} />
            <GuessCount count={this.state.guessCount} />
            <GuessList guesses={this.state.guessNumbers} />
        </div>
    );
  }
}
