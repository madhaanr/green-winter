import React, { Component } from 'react'
import update from 'react/lib/update'
import Task from './Task'
import { DropTarget } from 'react-dnd'

class Status extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: props.list
    }
  }
  pushTask (task) {
    this.setState(update(this.state, {
      tasks: {
        $push: [task]
      }
    }))
  }
  removeTask (index) {
    this.setState(update(this.state, {
      tasks: {
        $splice: [
          [index, 1]
        ]
      }
    }))
  }
  moveTask (dragIndex, hoverIndex) {
    const {tasks} = this.state
    const dragTask = tasks[dragIndex]
    this.setState(update(this.state, {
      tasks: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragTask]
        ]
      }
    }))
  }
  render () {
    const {tasks} = this.state
    const {canDrop, isOver, connectDropTarget} = this.props
    const isActive = canDrop && isOver
    const backgroundColor = isActive ? 'lightgreen' : '#FFF'
    return connectDropTarget(
      <div className='status' style={{backgroundColor}}>
        <h3>Status</h3>
        {tasks.map((task, i) => {
          return (
            <Task
              key={task.id}
              index={i}
              listId={this.props.id}
              task={task}
              removeTask={this.removeTask.bind(this)}
              moveTask={this.moveTask.bind(this)} />
          )
        })}
      </div>
    )
  }
}

const taskTarget = {
  drop (props, monitor, component) {
    const {id} = props
    const sourceObj = monitor.getItem()
    if (id !== sourceObj.listId) component.pushTask(sourceObj.task)
    return {
      listId: id
    }
  }
}

export default DropTarget('TASK', taskTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Status)
