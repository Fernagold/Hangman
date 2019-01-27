import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    render() {
        const allLetters = Object.keys(this.props.letterStatus);
        return (
            allLetters.map(l => this.props.letterStatus[l] ? <Letter isRiskLetter={true} letter={l} selectLetter={this.props.selectLetter} /> : <Letter letter={l} selectLetter={this.props.selectLetter} />)
        )
    }
}
export default Letters;


