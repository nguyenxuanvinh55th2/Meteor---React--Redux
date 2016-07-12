import React, { Component, PropTypes } from 'react'
import AddTodo from '../containers/AddTodo'
import LoadToDo from '../containers/LoadToDo'
export default class  App extends Component{
  render(){
    return(
    <div>
      <AddTodo />
      <LoadToDo/>
    </div>)
  }
}
