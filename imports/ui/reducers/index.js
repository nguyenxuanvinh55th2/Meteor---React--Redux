import { combineReducers } from 'redux'
import todos from './todos'
import login from './login'

const todoApp = combineReducers({
  todos,
  login
})

export default todoApp
