import * as types from '../constants/ActionTypes'

export const selectPlayer = (player) => {
    console.log("You clicked on player: ", player.firstName);
    return {
        type: types.PLAYER_SELECTED,
        player: player
    }
}