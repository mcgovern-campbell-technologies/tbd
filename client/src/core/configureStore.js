import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'
import { rootReducer } from './reducers';

/* create middleware out of your root epic and inject dependencies as needed */
const epicMiddleware = createEpicMiddleware(
  rootEpic,
  {
    /* put epic dependencies here*/
    dependencies: { }
  }
);

/* creates the store out of the root reducer and applies middleware to it*/
export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(epicMiddleware),
  );
}
