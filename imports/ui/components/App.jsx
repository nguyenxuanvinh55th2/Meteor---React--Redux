import React, { Component, PropTypes } from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'
export default class  App extends Component{
  render(){
    return(
    <div>
      <AddTodo />
      <TodoList/>
    </div>)
  }
}
