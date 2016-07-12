import React, { Component, PropTypes } from 'react'

export default class Todo extends Component{
  render(){
    return(
      <li>
        {this.props.task.text}
      </li>
    )
  }
}

Todo.propTypes = {
  task: PropTypes.object.isRequired
}
