import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import {Tasks} from '../../api/task.js'
import { createContainer } from 'meteor/react-meteor-data';
class TodoList extends Component{
  render(){

    return(
      <ul>
        {this.props.tasks.map(task =>
          <Todo
            key={task.id}
            task = {task}
          />
        )}
      </ul>
    )
  }
}


TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
}
export default createContainer(() => {
  return {
     tasks: Tasks.find({}).fetch(),
  };
}, TodoList);
