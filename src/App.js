import React, { Component } from 'react'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import ReactRouterTest from './components/react-router-test'

import reducers from './reducers/index'

const combinedReducers = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(combinedReducers , window.STATE_FROM_SERVER)

const history = syncHistoryWithStore(browserHistory, store)

function App(){
  return (
    <Provider store={store}> 
      <Router history={history}>
        <Route path="/" component={ReactRouterTest}/>
      </Router>
    </Provider>
  )
}

export default App
