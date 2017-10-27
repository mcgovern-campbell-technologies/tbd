import React from 'react'

/* Redux Utilites */
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

/* Routing Utilities */
import { Router, Route, IndexRoute } from 'react-router'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, routerReducer } from 'react-router-redux'
import * as reactRouterRedux from 'react-router-redux'

/* import store configure */
import configureStore from './redux/configureStore'

/*Containers*/
// import { } from './containers/index'
import App from './containers/App'
import AuthService from './utils/AuthService'

const preloadedState = {
  one: "Some test preloaded state. Don't forget to add prop when creating rootReducer(?)"
}
/* create store */
const store = configureStore(preloadedState)

/* create history */
const history = createBrowserHistory()

const authService = new AuthService();

function Root() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App authService={authService}/>
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
