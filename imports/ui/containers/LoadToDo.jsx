import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { delTodo } from '../actions';
import { createContainer } from 'meteor/react-meteor-data'

import TodoList from '../components/TodoList.jsx'

import { Tasks } from '../../api/task.js';
const Container = createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, TodoList);

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(delTodo(id))
    }
  }
}

const LoadToDo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default LoadToDo
