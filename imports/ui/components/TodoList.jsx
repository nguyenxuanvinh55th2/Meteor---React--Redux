import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import {Tasks} from '../../api/task.js'
import { createContainer } from 'meteor/react-meteor-data';

export default class TodoList extends Component{
  render(){

    return(
      <ul>
        {this.props.tasks.map(task =>
          <Todo
            key={task._id}
            task = {task} onDel={() => this.props.onDelete(task._id)}
          />
        )}
      </ul>
    )
  }
}


TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}
