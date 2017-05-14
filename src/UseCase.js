import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Status from './Status'

class UseCase extends Component {
  render () {
    const listOne = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'}
    ]
    const listTwo = [
    {id: 4, name: 'Item 4'},
    {id: 5, name: 'Item 5'},
    {id: 6, name: 'Item 6'}
    ]
    const listThree = [
    {id: 7, name: 'Item 7'},
    {id: 8, name: 'Item 8'},
    {id: 9, name: 'Item 9'}
    ]
    return (
      <div className='use-case'>
        <h3>UseCase</h3>
        <Status id={1} list={listOne} />
        <Status id={2} list={listTwo} />
        <Status id={3} list={listThree} />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(UseCase)
