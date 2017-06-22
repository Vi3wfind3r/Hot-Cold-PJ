import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      feedback: '',
      guessCount:0,
      guessNumbers:[]
    }
  }

  increment(){
    this.setState({guessCount: this.state.guessCount + 1});
  }
  
  //COME BACK TO THIS....//
  // setFeedback() {
  //   if(secretNumber == userGuess){
  //     feedback = 'You Won. Click new game to play again';
  //   } else if(Math.abs(secretNumber - userGuess) < 10){
  //     userFeedback = 'hot';
  //   } else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
  //     userFeedback = ' Kinda hot';
  //   } else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
  //     userFeedback = 'less than warm';
  //   } else {
  //     userFeedback = 'cold';
  //   }
  // }

  render(){
    return (
        <div>
            <Header />
            <GuessSection feedback="Make your guess!"  onChange={() => this.increment()}/>
            <GuessCount count={this.state.guessCount} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );
  }
}

//hot
//cold
//kinda hot
//less than warm
