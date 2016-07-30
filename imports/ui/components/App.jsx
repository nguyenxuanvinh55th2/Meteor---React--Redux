import React, { Component, PropTypes } from 'react'
import AddTodo from '../containers/AddTodo'
import LoadToDo from '../containers/LoadToDo'
import Login from '../containers/login'
import SendEmail from '../containers/sendEmail'
import { Link,Router,browserHistory } from 'react-router'
export default class  App extends Component{
  render(){
    return(
    <div>
      <Link to="/formAdd">Add new task</Link>
      {/*<AddTodo/>*/}
      <Login/>
      <SendEmail/>
      <LoadToDo/>
    </div>)
  }
}
