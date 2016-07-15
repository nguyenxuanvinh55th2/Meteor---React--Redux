import React, { Component, PropTypes } from 'react'
import AddTodo from '../containers/AddTodo'
import LoadToDo from '../containers/LoadToDo'
import { Link,Router,browserHistory } from 'react-router'
export default class  App extends Component{
  render(){
    return(
    <div>
      <Link to="/formAdd">Add new task</Link>
      {/*<AddTodo/>*/}
      <LoadToDo/>
    </div>)
  }
}
