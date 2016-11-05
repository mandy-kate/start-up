import React from 'react'
import ecosystem from '../components/ecosystem'

function App (props) {
  return (
    <div>
      <h1>Welcome to {props.name}</h1>
      <ecosystem />
    </div>
  )
}

export default App
