import React from 'react'
import {connect} from 'react-redux'
import PlayerDetails from '../components/PlayerDetails'

const PlayerSelectedContainer = ({player}) => {
    console.log("Player's age is::" + player.age)
    if(player === null || player === undefined || player.age === null || player.age === undefined){
        return <div>Select a Player...</div>
    } else {
        return <PlayerDetails player={player}/>
    }
}

const mapPropsToState = (state) => ({
    player : state.selectedPlayer
})

export default connect(mapPropsToState) (PlayerSelectedContainer)