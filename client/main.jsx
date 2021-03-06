import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../imports/ui/reducers'
import App from '../imports/ui/components/App.jsx'
import { renderRoutes } from '../imports/startup/client/routes.js';
let store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension());
Meteor.startup(() => {
  render(
    <Provider store={store}>
      {renderRoutes()}
      {/* <App/> */}
    </Provider>,
    document.getElementById('root'));
});
