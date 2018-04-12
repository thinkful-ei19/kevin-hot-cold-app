import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form 
        onSubmit={(event) => {
            event.preventDefault();
            let guessNumber = event.target.userGuess.value;
            props.enterGuess(guessNumber);
            props.feedbackChange(guessNumber)
            event.target.userGuess.value = ''
        }}>
            <input 
                type="text" 
                name="userGuess" 
                id="userGuess"
                className="text" 
                maxLength="3" 
                autoComplete="off"
                placeholder="Enter your Guess" 
                required 
            />

            <input 
                type="submit" 
                id="guessButton" 
                className="button" 
                name="submit" 
                value="Guess"
            />
        </form>
    );
};

