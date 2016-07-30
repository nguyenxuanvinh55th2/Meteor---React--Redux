import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import {Tasks} from '../../api/task.js'
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Blaze } from 'meteor/blaze';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';
export default class TodoList extends Component{

  render(){

    return(
      <div>
          <AccountsUIWrapper />
          <ul>
            {this.props.tasks.map(task =>
              <Todo
                key={task._id}
                task = {task} onDel={() => this.props.onDelete(task._id)} onUp={()=> this.props.onUpdate(task._id,"vinh nguyen")}
              />
            )}
          </ul>
      </div>

    )
  }
}


TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,

}
