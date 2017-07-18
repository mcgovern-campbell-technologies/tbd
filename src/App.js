import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import logo from './logo.svg'
import './styles/App.css'

import combinedReducers from './reducers/index'

const store = createStore(combinedReducers, window.STATE_FROM_SERVER)

function App(){
  return (
    <Provider store={store}> 
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       </div>
    </Provider>
  )
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App
