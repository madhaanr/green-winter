import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Status from './Status'

class UseCase extends Component {
  render () {
    return (
      <div>
        <h3>UseCase</h3>
        <Status />
      </div>
    )
  }
}

export default UseCase
