import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    let textInput;
    return (
        <form>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" ref={input => textInput = input} required />
            <button type="button" id="guessButton" className="button" name="submit" onClick={() => props.setGuess(textInput.value)}>Guess</button>
        </form>
    );
};
