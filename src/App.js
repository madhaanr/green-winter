import React, { Component } from 'react'
import './App.css'
import Workspace from './Workspace'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div>
          <h1>Green Winter</h1>
        </div>
        <Workspace />
      </div>
    )
  }
}

export default App
