import React from 'react'

function player (props) {
  return (
    <ul>
      {props.player.map(function (player, index) {
         return (
           <li key={index}>
             {player.name}
           </li>
         )
       })}
    </ul>
  )
}

export default player
