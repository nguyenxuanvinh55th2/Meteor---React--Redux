import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

// route components
import App from '../../ui/components/App.jsx'
import Tam from '../../ui/components/tam.jsx'
import AddTodo from '../../ui/containers/AddTodo'
checkuser = ()=>(
  console.log("this is log page tam on enter")

);

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="formAdd" component={AddTodo} onEnter={console.log("vinh is the")} />
    <Route path="tam/:id" component={Tam} onEnter={this.checkuser}/>
  </Router>
);
