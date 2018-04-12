import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import './game.css'

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guesses: [],
            guessCount: 0,
            answer: (Math.floor(Math.random() * 101)),
            feedback: 'Make your guess!',
            infoModal: false
        }
    }

    toggleInfoModal() {
        this.setState({
            infoModal: (!this.state.infoModal)
        })
    }

    newGame() {
        this.setState({
            guesses: [],
            guessCount: 0,
            answer: (Math.floor(Math.random() * 101)),
            feedback: 'Make your guess!',
            infoModal: false
        })
    }

    feedbackChange(guessNumber) {
        const answer = this.state.answer;
        const difference = Math.abs(guessNumber - answer);
        let feedback;


        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You got it!';
            // this.newgame();

        }
        this.setState({
            feedback
        })
    }

    enterGuess(guessNumber) {
        if (this.state.guesses.includes(guessNumber)) {
            alert('You already guessed that number!')
        } else {
            this.setState({
                guesses: [...this.state.guesses, guessNumber],
                guessCount: this.state.guesses.length + 1
            })
        }

    }

    render() {
        return (
            <div className="game">
                <Header
                    newGame={() => this.newGame()}
                    toggleInfoModal={() => this.toggleInfoModal()}
                    infoModal={this.state.infoModal}
                />
                <div className="gameBoard">
                    <GuessSection
                        feedback={this.state.feedback}
                        feedbackChange={(guessNumber) => this.feedbackChange(guessNumber)}
                        enterGuess={(guessNumber) => this.enterGuess(guessNumber)}
                    />

                    <GuessCount
                        count={this.state.guessCount}
                    />

                    <GuessList
                        guesses={this.state.guesses}
                    />
                </div>
            </div>
        );
    }

}

export default Game;