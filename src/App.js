import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';


class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generalLetterStatuses(),
      solution: { word: 'WORLD', hint: 'Big rounded item' },
      score: 80,
      newWord: '',
      newHint: ''
    }
  }
  generalLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }

    return letterStatus

  }
  selectLetter = (letter) => {
    debugger;
    let num = 0
    const newLetterStatus = { ...this.state.letterStatus };
    newLetterStatus[letter] = true;
    if (!(this.state.solution.word.includes(letter))) {
      num = num - 10
    } else {
      num = num
    }

    this.setState({
      letterStatus: newLetterStatus,
      score: this.state.score + num
    })
  }
  setScore = () => {
    if (this.state.score >= 80) {
      return <img classname='forca1' src='https://i.imgur.com/KIGQy7f.jpg' />
    } else if
      (this.state.score >= 70) {
      return <img classname='forca2' src='https://i.imgur.com/SYBahK0.png' />
    } else if
      (this.state.score >= 60) {
      return <img classname='forca3' src='https://i.imgur.com/tn2oQfe.jpg' />
    } else if
      (this.state.score >= 50) {
      return <img classname='forca4' src='https://i.imgur.com/zB763eh.jpg' />
    } else if
      (this.state.score >= 40) {
      return <img classname='forca5' src='https://i.imgur.com/Q5x8Fre.jpg' />
    } else if
      (this.state.score >= 30) {
      return <img classname='forca6' src='https://i.imgur.com/0MR4rWP.png' />
    } else if
      (this.state.score >= 20) {
      return <img classname='forca7' src='https://i.imgur.com/Jnzx6Lc.jpg' />

    }
  }
  changeWord = (event) => {

    this.setState({
      newWord: event.target.value,

    })
  }

  changeHint = (event) => {
    this.setState({
      newHint: event.target.value,

    })
  }

  changeWordAndHint = () => {
    let newSolution = { ...this.state.solution };
    newSolution.word = this.state.newWord.toUpperCase();
    newSolution.hint = this.state.newHint;
    this.setState({
      solution: newSolution,
      newWord: '',
      newHint: ''
    })
  }


  render() {
    return (
      <div className="container">
        <div className='forca'>{this.setScore()}</div>
        <Solution solution={this.state.solution} letterStatus={this.state.letterStatus} />
        <h4>Available letters:</h4>
        <div id='letters'>< Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} /></div>
        <input className='newWord' value={this.state.newWord} onChange={this.changeWord} placeHolder='write your new word' type="text" />
        <span> <input className='newHint' value={this.state.newHint} onChange={this.changeHint} placeHolder='write your new hint' type="text" /></span>
        <button className='changeButton' onClick={this.changeWordAndHint}>Send</button>
      </div>
    );
  }
}


export default App;
