import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    render() {
        // let secretWord = [' ___ ', ' ___ ', ' ___ ', ' ___ ', '___'];
        let solutionLetters = this.props.solution.word.split('');
        return (
            <div>
                {solutionLetters.map((letter, index) => {
                    return (this.props.letterStatus[letter] ? <Letter letter={letter} /> : ' ___ ')
                })}
                <h3>{this.props.solution.hint}</h3>
            </div>
        )
    }
}
export default Solution;