import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../imports/ui/reducers'
import App from '../imports/ui/components/App.jsx'

let store = createStore(todoApp);

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
});
