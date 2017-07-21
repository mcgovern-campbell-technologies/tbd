import React from 'react'

/*Redux Utilites*/
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

/*Routing Utilities*/
import { Router, Route, IndexRoute } from 'react-router'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, routerReducer } from 'react-router-redux'

/*Reducers*/
import reducers from './reducers/index'

/*Containers*/
import { App, Profile, ProfileSnapShot } from './containers/index'

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  })
)

const history = createBrowserHistory()

function Root() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Profile}>
            <IndexRoute component={ProfileSnapShot}>
            </IndexRoute>
          </IndexRoute>
        </Route>
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
