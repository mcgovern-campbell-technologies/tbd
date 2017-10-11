import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic, rootReducer } from './modules/root'

/* create middleware out of your root epic and inject dependencies as needed */
const epicMiddleware = createEpicMiddleware(
  rootEpic,
  {
    /* put epic dependencies here*/
    dependencies: { }
  }
)

/* creates the store out of the root reducer and applies middleware to it*/
export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  )

  return store
}

