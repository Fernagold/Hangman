import React, { Component } from 'react';
import Letter from './Letter';

class Score extends Component {
    render() {
        return (
            <h1> {this.props.score}</h1 >
        )
    }
}

export default Score;