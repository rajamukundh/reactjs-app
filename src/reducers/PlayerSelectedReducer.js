import { PLAYER_SELECTED } from '../constants/ActionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case PLAYER_SELECTED:
            return {
                ...state,
                ...action.player
            }
        default:
            return state
    }
}