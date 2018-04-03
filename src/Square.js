import React, { Component } from 'react'
import './Square.css'

class Square extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.toggleState(this.props.id)
  }

  render () {
    return (
      <div className="Container" onClick={this.handleClick}>
      <div className={this.props.isChecked ? 'CheckedIndicator-Checked' : 'CheckedIndicator-NotChecked' }>
      {this.props.text}
      </div>
      </div>
    )
  }
}
export default Square
