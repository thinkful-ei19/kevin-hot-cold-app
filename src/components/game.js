import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guesses: [],
            guessCount: 0
        }
    }

    enterGuess(guessNumber) {
        this.setState({
            guesses: [...this.state.guesses, guessNumber],
            guessCount: this.state.guesses.length +1
        })
    }


    render() {
        return (
            <div className="game">
                <Header />

                <GuessSection
                    feedback="Make your guess!"
                    increaseGuessCount={() => this.increaseGuessCount()}
                    enterGuess={(guessNumber) => this.enterGuess(guessNumber)}
                />

                <GuessCount
                    count={this.state.guessCount}
                />

                <GuessList
                    guesses={this.state.guesses}
                />
            </div>
        );
    }

}

export default Game;