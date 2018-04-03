import React, { Component } from 'react'
import Square from './Square'
import Options from './Options'
import './Board.css'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      options: this.populateOptions()
    }

    this.toggleState = this.toggleState.bind(this)
  }

  populateOptions() {
    let localOptions = [...Options]

    let chosenOptions = []
    for (let i = 0; i < 25; i++) {
      let option = {key: 'FREE', isChecked: true }
      if (i !== 12) {
        option.key = localOptions.splice(Math.floor(Math.random()*localOptions.length), 1)[0]
        option.isChecked = false
      }

      chosenOptions[i] = option
    }

    return chosenOptions
  }

  toggleState(index) {
    if (index === 12) {
      return
    }
    let options = [...this.state.options]
    options[index].isChecked = !options[index].isChecked
    this.setState({options: options})
  }

  render() {
    return (
      <div className="BingoContainer">
      <div className="Header">
        <div className="HeaderTile">B</div>
        <div className="HeaderTile">I</div>
        <div className="HeaderTile">N</div>
        <div className="HeaderTile">G</div>
        <div className="HeaderTile">O</div>
      </div>
      <div className="Board">
        { this.state.options.map((item, index) => <Square key={index} text={item.key} isChecked={item.isChecked} id={index} toggleState={this.toggleState}/> ) }
      </div>
      </div>
    )
  }
}

export default Board
