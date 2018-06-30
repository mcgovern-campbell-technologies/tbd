import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.css';
import './styles/App.css';
import configureStore from './core/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './app/index';
import AuthService from './core/utils/AuthService';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';

const store = configureStore();
const history = createBrowserHistory();
const authService = new AuthService();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App authService={authService}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
