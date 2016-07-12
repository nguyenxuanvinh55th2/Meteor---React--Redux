import React, { Component, PropTypes } from 'react'

export default class Todo extends Component{
  render(){
    return(
      <div>
        <li >
          {this.props.task.text}
        </li>
          <button onClick={this.props.onDel}>X</button>
      </div>

    )
  }
}

Todo.propTypes = {
  task: PropTypes.object.isRequired,
  onDel:PropTypes.func.isRequired
}
