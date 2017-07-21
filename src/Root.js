import React from 'react'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import ReactRouterTest from './components/react-router-test'

import reducers from './reducers/index'

import { App, Profile } from './containers/index'

const combinedReducers = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(combinedReducers , window.STATE_FROM_SERVER)

const history = syncHistoryWithStore(browserHistory, store)

function Root() {
  console.log(Profile)
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Profile}>
            <Route path="/">
            </Route>
          </IndexRoute>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
