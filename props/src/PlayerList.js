import React from 'react'
import Player from './Player'
import players from './players'
 const PlayerList=()=> {
  return (
    <div className='d-flex'>
        {
        players.map((play,index)=>  <Player key={index} nomm={play.nom} Taillee={play.Taille} Agee={play.Age} Poidss={play.Poids} srcImages={play.srcImage}
        /> 
        
        )

      }
    </div>
  )
}
export default PlayerList