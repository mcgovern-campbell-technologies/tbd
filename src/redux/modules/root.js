import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

/* 
  import epics and reducers here,
  they should be kept in the same file 
  i.e. => import blahReducer, { blahEpic } from './blah'
*/
import exampleReducer, { exampleEpic } from './example'

export const rootEpic = combineEpics(
  /* epics */
  exampleEpic,
)

export const rootReducer = combineReducers(
  /* reducers */
  exampleReducer,
)