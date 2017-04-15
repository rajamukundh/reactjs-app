import team from '../api/team'
import * as types from '../constants/ActionTypes'

const receivePlayers = players => ({
    type: types.RECEIVE_PLAYERS,
    players: players
})

export const getAllPlayers = () => dispatch => {
    team.getPlayers(players => {
        dispatch(receivePlayers(players))
    })
}