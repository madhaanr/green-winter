import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

class Status extends Component {
  render () {
    return (
      <div>
        <h3>Status</h3>
        <Task />
      </div>
    )
  }
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  estimate: PropTypes.number.isRequired,
  details: PropTypes.string
}

export default Status
