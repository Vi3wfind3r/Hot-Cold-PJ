import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      guessCount:0,
      guessNumbers:[]
    }
  }

  increment(){
    this.setState({guessCount: this.state.guessCount + 1});
  }

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
