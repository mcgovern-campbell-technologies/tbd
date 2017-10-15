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
import Test from './components/Test';


/* create store */
const store = configureStore()

/* create history */
const history = createBrowserHistory()

function Root() {
  console.log('store');
  console.log(store);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/* <div>
          <Route exact path="/" component={()=><p>hello world</p>}/>
          <Route path="/home" component={()=><p>home</p>}/>
          <Route path="/test" component={Test}/>
        </div> */}
        <App />
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
