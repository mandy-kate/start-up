import React from 'react'
import { connect } from 'react-redux'
import player from '../components/player'

const mapStateToProps = function (state) {
  return
}

const appConnector = connect(mapStateToProps)(player)
export default appConnector
