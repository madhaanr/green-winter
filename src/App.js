import React, { Component } from 'react'
import './App.css'
import Project from './Project'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div>
          <h1>Green Winter</h1>
        </div>
        <Project />
      </div>
    )
  }
}

export default App
