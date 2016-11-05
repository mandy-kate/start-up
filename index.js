import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'

const initialState = {
    ground: [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
    player: {
      name: 'player1',
      position: {
        x: 5,
        y: 5
      },
      time: 5 * 60,
      powerups: [],
      health: 4,
      hasWon: false,
    }
}

const reducer = function (state = initialState , action) {
  return state
}

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App name='Start Up' />
  </Provider>,
  document.querySelector('main')
)
