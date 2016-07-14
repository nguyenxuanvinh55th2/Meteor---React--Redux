import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

// route components
import App from '../../ui/components/App.jsx'
import Tam from '../../ui/components/tam.jsx'
import AddTodo from '../../ui/containers/AddTodo'
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="formAdd" component={AddTodo}/>
  <Route path="tam/:id" component={Tam}/>
  </Router>
);
